import { defineContentConfig, defineCollection, z } from '@nuxt/content'

const blogSchema = z.object({
  author: z.string().nonempty(),
  parentId: z.string().nonempty(),
  updatedAt: z.string().nonempty(),
  createdAt: z.string().nonempty(),
})

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: '**',
    }),

    charibra: defineCollection({
      type: 'page',
      source: 'charibra/*.md',
      schema: blogSchema
    }),
  },
})
