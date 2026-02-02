import { buildClient, type Client } from "@datocms/cma-client";
import * as dotenv from "dotenv";
import { spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

dotenv.config({ path: ".env.staging" });

const MIGRATION_FOLDER = "./migrations";
const MIGRATION_MODEL_API_KEY = "schema_migration";

type SchemaMigration = {
  id: string;
  name?: string;
};

const getAllSchemaMigrations = async (
  client: Client,
): Promise<SchemaMigration[]> => {
  const itemTypes = await client.itemTypes.list();
  const migrationModel = itemTypes.find(
    (itemType) => itemType.api_key === MIGRATION_MODEL_API_KEY,
  );
  if (!migrationModel) {
    return [];
  }
  const items = await client.items.list({
    filter: { type: migrationModel.id },
    page: { limit: 500 },
  });
  return items.map((item) => {
    const name =
      typeof (item as { name?: unknown }).name === "string"
        ? (item as { name?: string }).name
        : undefined;
    return { id: item.id, name };
  });
};

const runCommand = (command: string, returnOutput = false): string => {
  console.log("executing:", command);
  const result = spawnSync(command, {
    shell: true,
    stdio: returnOutput ? "pipe" : "inherit",
    encoding: "utf8",
  });
  if (result.error) {
    throw result.error;
  }
  if (result.status !== 0) {
    throw new Error(`Command failed: ${command}`);
  }
  return returnOutput ? (result.stdout ?? "") : "";
};

const localeSchemaMigrationsFiles = (): string[] =>
  fs
    .readdirSync(MIGRATION_FOLDER)
    .filter((file) => path.extname(file).toLowerCase() === ".ts");

(async () => {
  const token = process.env.DATOCMS_MANAGEMENT_API_TOKEN;
  if (!token) {
    throw new Error(
      "DATOCMS_MANAGEMENT_API_TOKEN is required to run migrations.",
    );
  }
  const cmaClient = buildClient({ apiToken: token });
  let datoCmsSchemaMigrationsCount = 0;
  let datoCmsSchemaMigrations: SchemaMigration[] = [];
  try {
    datoCmsSchemaMigrations = await getAllSchemaMigrations(cmaClient);
    datoCmsSchemaMigrationsCount = datoCmsSchemaMigrations.length;
    try {
      if (
        datoCmsSchemaMigrationsCount !== localeSchemaMigrationsFiles().length
      ) {
        console.log(`DATOCMS NEEDS MIGRATIONS`);
        if (!process.env.DATOCMS_ENVIRONMENT) {
          console.log(`MIGRATION - MANUAL MIGRATION NEEDED`);
          throw new Error();
        }

        //GET Primary Environment
        const env = (await cmaClient.environments.list()).find(
          (env) => env.meta.primary,
        )?.id;
        if (!env) {
          throw new Error("DATOCMS PRIMARY ENVIRONMENT NOT FOUND");
        }
        const backupEnv = `${env}-bkp-${Date.now()}`;

        await cmaClient.maintenanceMode.activate();
        // backup
        await cmaClient.environments.fork(env, { id: backupEnv });
        await cmaClient.environments.promote(backupEnv);

        console.log(`DATOCMS BACKUP DONE`);

        // Migration: Here use datocms CLI because cmaClient doesn't support migrations
        runCommand(
          `bunx datocms migrations:run --source=${env} --in-place --api-token=${token}`,
        );

        await cmaClient.environments.promote(env);
        await cmaClient.maintenanceMode.deactivate();
        console.log(`DATOCMS MIGRATION DONE`);

        // purge
        console.log(`DATOCMS PURGE BACKUP ENVIRONMENTS`);
        const BKP_ENV_TO_MAINTAIN = 2;
        const environments = await cmaClient.environments.list();
        const bkpEvnvironments = environments
          .map((env) => env.id)
          .filter((envId) => envId.indexOf(`${env}-bkp-`) === 0)
          .sort()
          .reverse();
        bkpEvnvironments.splice(0, BKP_ENV_TO_MAINTAIN);
        await Promise.all(
          bkpEvnvironments.map(async (envId) => {
            return await cmaClient.environments.destroy(envId);
          }),
        );
        console.log(`DATOCMS PURGE BACKUP ENVIRONMENTS DONE`);
        process.exit(0);
      } else {
        console.log(`DATOCMS NO MIGRATION NEEDED`);
        process.exit(0);
      }
    } catch (error) {
      throw new Error(`MIGRATION - ERROR DURING MIGRATION STEPS`, {
        cause: error,
      });
    }
  } catch (error) {
    console.error(`DATOCMS WARNING READING AllSchemaMigrations`, error);
  }
})();
