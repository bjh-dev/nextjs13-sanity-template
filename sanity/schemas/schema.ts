import { SchemaTypeDefinition } from 'sanity'

import home from '@/sanity/schemas/documents/home'
import page from '@/sanity/schemas/documents/page'
import post from '@/sanity/schemas/documents/post'
import settings from '@/sanity/schemas/documents/settings'
import seo from '@/sanity/schemas/objects/seo'

export const PREVIEWABLE_DOCUMENT_TYPES: string[] = [
  home.name,
  page.name,
  post.name,
]

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // documents
    home,
    page,
    post,
    settings,
    // objects
    seo,
  ],
}
