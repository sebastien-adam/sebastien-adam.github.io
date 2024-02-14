// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
// Define a `type` and `schema` for each collection
const projectsCollection = defineCollection({
    type: 'content',
    schema: ({image}) => z.object({
      title: z.string(),
      subtitle: z.string(),
      pubDate: z.date(),
      description: z.string(),
      author: z.string(),
      images: z.array(image()),
      alts: z.array(z.string()),
      link: z.string(),
      tags: z.array(z.string()),
      featured: z.boolean()
    })
});
// Export a single `collections` object to register your collection(s)
export const collections = {
  'projects': projectsCollection,
};