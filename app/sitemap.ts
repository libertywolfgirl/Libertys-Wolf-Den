import type { MetadataRoute } from "next";
import { sanityFetch } from "../sanity/lib/live";
import { ALL_ROUTES_QUERY } from "../sanity/lib/queries";
import { ALL_ROUTES_QUERYResult } from "../sanity/types";

export const revalidate = 60;

const BASE_URL = process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:3000";

const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
  const { data: pages } = await sanityFetch({
    query: ALL_ROUTES_QUERY,
  });

  const typedPages = pages as ALL_ROUTES_QUERYResult;
  const { genres, fandoms, stories, chapters } = typedPages;

  const genreEntries: MetadataRoute.Sitemap = genres.map(
    ({ genre, _updatedAt }) => ({
      url: `${BASE_URL}/fanfiction/${genre}`,
      lastModified: new Date(_updatedAt),
    }),
  );

  const fandomEntries: MetadataRoute.Sitemap = fandoms.map(
    ({ genre, fandom, _updatedAt }) => ({
      url: `${BASE_URL}/fanfiction/${genre}/${fandom}`,
      lastModified: new Date(_updatedAt),
    }),
  );

  const storyEntries: MetadataRoute.Sitemap = stories.map(
    ({ genre, fandom, story, _updatedAt }) => ({
      url: `${BASE_URL}/fanfiction/${genre}/${fandom}/${story}`,
      lastModified: new Date(_updatedAt),
    }),
  );

  const chapterEntries: MetadataRoute.Sitemap = chapters.map(
    ({ genre, fandom, story, chapter, _updatedAt }) => ({
      url: `${BASE_URL}/fanfiction/${genre}/${fandom}/${story}/${chapter}`,
      lastModified: new Date(_updatedAt),
    }),
  );

  const staticEntries: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}`,
      lastModified: new Date(),
    },
    {
      url: `${BASE_URL}/fanfiction`,
      lastModified: new Date(),
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
    },
  ];

  return [
    ...staticEntries,
    ...genreEntries,
    ...fandomEntries,
    ...storyEntries,
    ...chapterEntries,
  ];
};

export default sitemap;
