import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'socialLinks',
  title: 'Social Links',
  type: 'object',
  options: {
    columns: 2,
  },
  fields: [
    defineField({
      name: 'network',
      title: 'Network',
      type: 'string',
      options: {
        layout: 'dropdown',
        list: [
          { title: 'Facebook', value: 'facebook' },
          { title: 'Instagram', value: 'instagram' },
          { title: 'Twitter', value: 'twitter' },
          { title: 'YouTube', value: 'youtube' },
          { title: 'TikTok', value: 'tiktok' },
          { title: 'Vimeo', value: 'vimeo' },
          { title: 'Spotify', value: 'spotify' },
          { title: 'WhatsApp', value: 'whatsapp' },
        ],
      },
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'url',
    }),
  ],
})
