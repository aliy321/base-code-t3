import { type inferRouterInputs, type inferRouterOutputs } from "@trpc/server";
import superjson from "superjson";

import { type AppRouter } from "~/server/api/root";

export const transformer = superjson;

function getBaseUrl() {
  let baseUrl;

  if (typeof window !== "undefined") {
    baseUrl = "";
  } else if (process.env.NEXT_PUBLIC_APP_URL) {
    baseUrl = `https://${process.env.NEXT_PUBLIC_APP_URL}`;
  } else {
    baseUrl = `http://localhost:${process.env.PORT ?? 3000}`;
  }

  console.log('Base URL:', baseUrl);
  return baseUrl;
}

export function getUrl() {
  return getBaseUrl() + "/api/trpc";
}

/**
 * Inference helper for inputs.
 *
 * @example type HelloInput = RouterInputs['example']['hello']
 */
export type RouterInputs = inferRouterInputs<AppRouter>;

/**
 * Inference helper for outputs.
 *
 * @example type HelloOutput = RouterOutputs['example']['hello']
 */
export type RouterOutputs = inferRouterOutputs<AppRouter>;
