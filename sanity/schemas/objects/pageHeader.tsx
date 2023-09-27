import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'pageHeader',
  title: 'Page Hero',
  type: 'object',
  description:
    'The hero section of the page is the first thing a user sees when they visit the page. It should be used to introduce the page and provide a call to action.',
  fields: [
    defineField({
      name: 'title',
      title: 'Hero Title',
      description: 'The short title for the page hero section',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heading',
      title: 'Heading',
      description: 'The larger, descriptive text for the page hero section',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Hero Text',
      description: 'The description for the page hero section',
      type: 'portableTextSimple',
    }),
    defineField({
      name: 'image',
      title: 'Hero Image',
      type: 'simpleImage',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'cta',
      title: 'Call to Action Button',
      type: 'link',
    }),
    defineField({
      name: 'pageHeaderStyle',
      title: 'Style, Colour and Background Images',
      type: 'pageHeaderStyle',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
      media: 'image',
    },
  },
})
