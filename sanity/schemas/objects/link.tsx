import { defineType } from 'sanity'

export default defineType({
  name: 'link',
  title: 'Link',
  type: 'object',
  options: {
    collapsible: true,
    collapsed: true,
  },
  fields: [
    {
      name: `reference`,
      type: `reference`,
      description: `If this link has a reference and a URL, the reference will be used`,
      to: [{ type: 'home' }, { type: 'page' }, { type: 'post' }],
      // Read-only if a URL is used
      readOnly: ({ value, parent }) => !value && Boolean(parent?.url),
    },
    {
      name: `title`,
      description: `Can be used the button text and to overwrite the title of a referenced page`,
      type: `string`,
      // Text is required if a Reference was not used
      validation: (Rule) =>
        Rule.custom((value, context) => {
          const parent = context.parent as { url?: string }
          return parent?.url && !value
            ? `Link text is required if a URL is provided`
            : true
        }),
    },
    {
      name: `url`,
      title: 'URL',
      type: `string`,
      description: `If this link references a resource not availabel in the reference field above or if you want to link to an external resource`,
      // Read-only if a reference is used
      readOnly: ({ value, parent }) => !value && Boolean(parent?.reference),
    },
  ],
  preview: {
    select: {
      refSlug: 'reference.slug.current',
      refTitle: 'reference.title',
      title: 'title',
      url: 'url',
    },
    prepare(selection) {
      const { refSlug, refTitle, title, url } = selection
      const subtitle = url || `/${refSlug}`
      const titleText = title || refTitle

      return {
        title: titleText,
        subtitle,
      }
    },
  },
})
