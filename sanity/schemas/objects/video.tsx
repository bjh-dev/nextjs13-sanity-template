import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'video',
  title: 'Video',
  type: 'object',
  fields: [
    defineField({
      name: 'videoTitle',
      title: 'Video Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'videoUrl',
      title: 'Video URL',
      type: 'url',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'videoThumbnail',
      title: 'Video Thumbnail',
      type: 'simpleImage',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'videoDescription',
      title: 'Video Description',
      type: 'text',
      validation: (Rule) => Rule.max(255),
    }),
  ],
})
