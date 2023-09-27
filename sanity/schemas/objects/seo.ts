import { getExtension, getImageDimensions } from '@sanity/asset-utils'
import { defineField, defineType } from 'sanity'

import { CharacterCounterField } from '@/sanity/components/CustomFields'

export default defineType({
  name: 'seo',
  title: 'SEO',
  type: 'object',
  options: {
    collapsible: true,
    collapsed: false,
  },
  fields: [
    defineField({
      name: 'noIndex',
      description: 'Hide this page from search engines and the sitemap',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'title',
      type: 'string',
      description:
        'This is the title that will appear in search results and the first line on social media preview cards.',
      validation: (Rule) => Rule.min(20).max(60),
      components: { input: CharacterCounterField },
    }),
    defineField({
      name: 'description',
      description:
        'This is the description that will appear in search results and the second line on social media preview cards.',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.max(180).min(60),
      components: { input: CharacterCounterField },
    }),
    defineField({
      name: 'image',
      type: 'image',
      description:
        'The image that appears on the search results and social media preview cards. Facebook recommends a minimum size of 1200x630 pixels.',
      options: { hotspot: true },
      validation: (rule) =>
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        rule.custom((value: any) => {
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
  ],
})
