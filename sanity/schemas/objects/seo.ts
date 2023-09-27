import { getExtension, getImageDimensions } from '@sanity/asset-utils'
import { defineField, defineType } from 'sanity'

import { CharacterCounterField } from '@/sanity/components/CustomFields'

export default defineType({
  name: 'seo',
  title: 'SEO',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required().min(15).max(60),
      components: { input: CharacterCounterField },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required().min(40).max(220),
      components: { input: CharacterCounterField },
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (rule) =>
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        rule.required().custom((value: any) => {
          if (!value?.image?.asset?._ref) {
            return true
          }

          const filetype = getExtension(value.image.asset._ref)

          if (filetype !== 'jpg' && filetype !== 'png') {
            return 'Image must be a JPG or PNG'
          }

          const { width, height } = getImageDimensions(value.image.asset._ref)

          if (width < 1200 || height < 630) {
            return 'Image must be at least 1200x630 pixels'
          }

          return true
        }),
    }),
    defineField({
      name: 'noIndex',
      description: 'Hide this page from search engines and the sitemap',
      type: 'boolean',
      initialValue: false,
    }),
  ],
})
