import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
  try {
    const rawBody = await request.text();

    return new Response(JSON.stringify({ message: "OK", received: rawBody }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: "Errore interno" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }
};
