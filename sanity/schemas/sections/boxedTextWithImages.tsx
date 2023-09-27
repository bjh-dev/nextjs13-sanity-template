import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'boxedTextWithImages',
  title: 'Boxed Text with Images',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
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
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{ type: 'simpleImage' }],
    }),
  ],
})
