import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'formSection',
  title: 'Form Section',
  type: 'object',
  fields: [
    defineField({
      name: 'formReference',
      title: 'Select a form',
      type: 'reference',
      to: [{ type: 'form' }],
    }),
    defineField({
      name: 'sectionStyle',
      title: 'Section Styles',
      type: 'sectionStyle',
    }),
  ],
})
