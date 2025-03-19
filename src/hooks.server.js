export async function handle({ event, resolve }) {
  if (event.url.pathname.startsWith("/custom")) {
    console.log(`Handling custom request for ${event.url.pathname}`);
    return new Response("custom response");
  }

  try {
    const response = await resolve(event);
    return response;
  } catch (error) {
    console.error(`Error processing request for ${event.url.pathname}:`, error);
    return new Response("An error occurred", { status: 500 });
  }
}