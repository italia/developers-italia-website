import { Client } from "@datocms/cli/lib/cma-client-node";

export default async function (client: Client) {
  console.log("Finalize models/block models");

  console.log('Update model "Link e risorse" (`resource`)');
  await client.itemTypes.update("E-Cl2G6PSV-MbIo1Lw5buA", {
    name: "Link e risorse",
  });

  console.log(
    'Update model "Classificazione articoli interni senza sidebar" (`story_class`)',
  );
  await client.itemTypes.update("F2lwKxl6RCCakDi2gECGKA", {
    name: "Classificazione articoli interni senza sidebar",
  });

  console.log('Update model "Categoria webinar ed eventi" (`webinar_topic`)');
  await client.itemTypes.update("H5OqR2-dT3aORAfk3pLUaQ", {
    name: "Categoria webinar ed eventi",
  });

  console.log('Update model "Contenuto esterno" (`news_item`)');
  await client.itemTypes.update("I7swbqFhSdekgCtytCwk9w", {
    name: "Contenuto esterno",
  });

  console.log(
    'Update model "Categoria articoli e sottopagine" (`insight_topic`)',
  );
  await client.itemTypes.update("JHxhOzSVRN67lEkTKwRQiA", {
    name: "Categoria articoli e sottopagine",
  });

  console.log('Update block model "Tab contenuto esterno" (`news_tab`)');
  await client.itemTypes.update("JH6wRgjAT22fgpfAkqJK-Q", {
    name: "Tab contenuto esterno",
  });

  console.log('Update model "Relatori" (`webinar_author`)');
  await client.itemTypes.update("LyToFeTMQTWJu8q3j7_E0Q", { name: "Relatori" });

  console.log('Update model "Tipologia di risorsa" (`resource_topic`)');
  await client.itemTypes.update("MIkfamqyTpKIwUWnNh8Cdw", {
    name: "Tipologia di risorsa",
  });

  console.log('Update model "Categoria link e risorse" (`macro_topic`)');
  await client.itemTypes.update("PNzBtRKsSnKc90MAvnbrrA", {
    name: "Categoria link e risorse",
  });

  console.log('Update model "Articoli interni con sidebar" (`article`)');
  await client.itemTypes.update("PeXbTb7tRvCzyyICsUoedw", {
    name: "Articoli interni con sidebar",
  });

  console.log('Update model "Articoli e sottopagine" (`insight`)');
  await client.itemTypes.update("T-HlXkO8SEWb8JYh5FuYCQ", {
    name: "Articoli e sottopagine",
  });

  console.log('Update block model "Tab contenuto interno" (`story_tab`)');
  await client.itemTypes.update("UOKjGL2DSZ6Z8Uwcz1NENg", {
    name: "Tab contenuto interno",
  });

  console.log('Update model "Webinar ed eventi" (`webinar_item`)');
  await client.itemTypes.update("X7ndzI_yTeeyKZWJ8KtKGQ", {
    name: "Webinar ed eventi",
  });

  console.log('Update model "Articoli interni senza sidebar" (`story_item`)');
  await client.itemTypes.update("ZO62cMfeSpmP2tBt7g_u6g", {
    name: "Articoli interni senza sidebar",
  });

  console.log('Update model "Categoria contenuto esterno" (`news_topic`)');
  await client.itemTypes.update("ZmTkDRybSzmAn5nLCkSZHg", {
    name: "Categoria contenuto esterno",
  });

  console.log(
    'Update model "Categoria articoli interni senza sidebar" (`story_topic`)',
  );
  await client.itemTypes.update("akwrV12FQhOO_nxjblKsuw", {
    name: "Categoria articoli interni senza sidebar",
  });

  console.log("Manage menu items");

  console.log('Update menu item "Articoli e sottopagine"');
  await client.menuItems.update("L_1jgsjHQnekRcgDmxQRlw", {
    label: "Articoli e sottopagine",
  });

  console.log('Update menu item "Sottopagine"');
  await client.menuItems.update("NWO1ME1MQAWflfwOnGcCkQ", {
    label: "Sottopagine",
  });

  console.log('Update menu item "Contenuti esterni"');
  await client.menuItems.update("O75KPv-JQsahJ9TbZ_hd_Q", {
    label: "Contenuti esterni",
  });
}
