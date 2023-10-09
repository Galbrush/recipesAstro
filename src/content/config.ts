// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';

// 2. Define a `type` and `schema` for each collection
const recipeCollection = defineCollection({
  type: 'content', // v2.5.0 and later
  schema: z.object({
    name: z.string(),
    serves: z.number(),
    ingredients: z.array(z.object({
        name: z.string(),
        unit: z.string(),
        amount: z.number(),
    })),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  'recipes': recipeCollection,
};