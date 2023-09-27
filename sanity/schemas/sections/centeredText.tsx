import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'centeredText',
  title: 'Centered Text',
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
