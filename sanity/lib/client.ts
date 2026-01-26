import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId, token } from "../env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
});

export const serverClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Important: use false for mutations to ensure you hit the API and not a potentially stale CDN cache
  token,
});
