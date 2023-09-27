import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'steps',
  title: 'Steps',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
    }),
    defineField({
      name: 'text',
      title: 'Text',
      type: 'portableTextSimple',
    }),
    defineField({
      name: 'steps',
      title: 'Steps',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'stepTitle',
              title: 'Title',
              type: 'string',
            },
            {
              name: 'stepDescription',
              title: 'Description',
              type: 'portableTextSimple',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'cta',
      title: 'Call to Action',
      type: 'link',
    }),
    defineField({
      name: 'sectionStyle',
      title: 'Section Styles',
      type: 'sectionStyle',
    }),
  ],
})
