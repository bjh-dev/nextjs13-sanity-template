import type { Image } from 'sanity'
// Rename image type so it doesn;t confolict with next/image
export type SanityImageType = Image

type SEO = {
  title: string
  description: string
  image: Image
  noIndex: boolean
}
export interface HomePagePayload {
  title: string
  seo: SEO
}

export interface SettingsPayload {
  siteTitle: string
  siteDescription: string
  siteUrl: string
}

export interface PagePayload {
  title: string
  slug: string
  seo: SEO
}

export interface PostPayload {
  title: string
  slug: string
  seo: SEO
}
