import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "../env";

export const staticSanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  perspective: "published",
});

export async function staticFetch<T>({
  query,
  params,
}: {
  query: string;
  params?: Record<string, any>;
}) {
  if (params === undefined) {
    return staticSanityClient.fetch<T>(query);
  }
  return staticSanityClient.fetch<T>(query, params as any);
}
