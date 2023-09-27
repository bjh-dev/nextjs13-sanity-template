import { HiDocumentDuplicate } from 'react-icons/hi2'
import { defineField, defineType } from 'sanity'

export default defineType({
  type: 'document',
  name: 'page',
  title: 'Pages',
  icon: HiDocumentDuplicate,
  groups: [
    {
      name: 'content',
      title: 'Content',
      default: true,
    },
    {
      title: 'SEO',
      name: 'seo',
    },
  ],
  fields: [
    defineField({
      type: 'string',
      name: 'title',
      title: 'Title',
      group: 'content',
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'slug',
      name: 'slug',
      title: 'Slug',
      group: 'content',
      options: {
        source: 'title',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'overview',
      description:
        'Used both for the <meta> description tag for SEO, and the personal website subheader.',
      title: 'Description',
      type: 'portableTextSimple',
      group: 'content',
    }),
    defineField({
      name: 'pageHeader',
      title: 'Page Header',
      type: 'pageHeader',
      group: 'content',
      options: {
        collapsible: true,
      },
    }),
    defineField({
      name: 'pageContent',
      title: 'Page Content',
      type: 'array',
      group: 'content',
      of: [{ type: 'centeredText' }],
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
      group: 'seo',
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        subtitle: 'Page',
        title,
      }
    },
  },
})
