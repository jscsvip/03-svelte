import { error, json, text } from "@sveltejs/kit";

export async function POST({ request }) {
  const { a, b } = await request.json();
  return json(a + b);
}


export async function fallback({ request }) {
  return text(`I caught your ${request.method} request!`);
}