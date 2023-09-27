import { HiHomeModern } from 'react-icons/hi2'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'home',
  title: 'Home',
  type: 'document',
  icon: HiHomeModern,
  // Uncomment below to have edits publish automatically as you type
  // liveEdit: true,
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
      name: 'title',
      description: 'This field is the title of your personal website.',
      title: 'Title',
      type: 'string',
      group: 'content',
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
      of: [
        { type: 'centeredText' },
        { type: 'boxedTextWithImages' },
        { type: 'textWithVideo' },
        { type: 'steps' },
        { type: 'formSection' },
      ],
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
        subtitle: 'Home',
        title,
      }
    },
  },
})
