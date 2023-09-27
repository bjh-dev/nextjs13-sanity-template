import { SchemaTypeDefinition } from 'sanity'

import home from '@/sanity/schemas/documents/home'
import page from '@/sanity/schemas/documents/page'
import post from '@/sanity/schemas/documents/post'
import settings from '@/sanity/schemas/documents/settings'
import seo from '@/sanity/schemas/objects/seo'

import form from './documents/form'
import address from './objects/address'
import link from './objects/link'
import pageHeader from './objects/pageHeader'
import pageHeaderStyle from './objects/pageHeaderStyle'
import portableTextSimple from './objects/portableTextSimple'
import sectionStyle from './objects/sectionStyle'
import simpleImage from './objects/simpleImage'
import socialLink from './objects/socialLink'
import video from './objects/video'
import boxedTextWithImages from './sections/boxedTextWithImages'
import centeredText from './sections/centeredText'
import formSection from './sections/formSection'
import steps from './sections/steps'
import textWithVideo from './sections/textWithVideo'

export const PREVIEWABLE_DOCUMENT_TYPES: string[] = [
  home.name,
  page.name,
  post.name,
]

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // documents
    form,
    home,
    page,
    post,
    settings,
    // objects
    address,
    link,
    pageHeader,
    pageHeaderStyle,
    portableTextSimple,
    sectionStyle,
    seo,
    simpleImage,
    socialLink,
    video,
    // sections
    boxedTextWithImages,
    centeredText,
    formSection,
    steps,
    textWithVideo,
  ],
}
