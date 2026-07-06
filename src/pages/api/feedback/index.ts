import { buildClient } from "@datocms/cma-client";
import type { APIRoute } from "astro";

export const prerender = false;

const FEEDBACK_API_TOKEN = import.meta.env.FEEDBACK_API_TOKEN || "";
const FEEDBACK_SCHEMA_ID = import.meta.env.FEEDBACK_SCHEMA_ID || "";

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    console.log("Feedback received:", data);
    if (!data.feedback || !data.url) {
      return new Response(
        JSON.stringify({ error: "Missing required fields." }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        },
      );
    }

    const config = {
      apiToken: FEEDBACK_API_TOKEN,
      environment: "developers-italia",
    };
    const client = buildClient(config);

    const result = await client.items.create({
      item_type: {
        type: "item_type",
        id: FEEDBACK_SCHEMA_ID,
      },
      feedback: data.feedback || "negativo",
      url: data.url,
      message: data.details || "",
      expertise: data.who || "",
      reached_from: data.from || "",
    });
    console.log("Feedback saved:", result);

    return new Response(JSON.stringify({ message: "OK", id: result.id }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: "Error saving feedback." }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
