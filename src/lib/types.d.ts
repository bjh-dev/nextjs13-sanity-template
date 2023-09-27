import type { Image, PortableTextBlock } from 'sanity'

type Base = {
  _type: string
  _createdAt: string
  _updatedAt: string
  _rev: string
  _id: string
}

type Reference = {
  _type: 'reference'
  _ref: string
  title?: string
  slug?: string
}
export type Geolocation = {
  _type: 'geoLocation'
  lat: number
  lng: number
}
export type SimpleImageType = {
  _type: 'simpleImage'
  _key: string
  image: Image
  alt?: string
}
export type LinkType = {
  _type: 'link'
  _key: string
  reference?: Reference
  title?: string
  url: string
}

export type StyleType = {
  _type: 'pageHeaderStyle' | 'sectionStyle'
  selectedStyle: 'normal' | 'colour' | 'image'
  backgroundColour?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  backgroundImage?: any
}

type SectionType = {
  _type: 'section'
}

export type Address = {
  _type: 'Address'
  address: string
  postcode: string
  suburb: string
  state: 'VIC' | 'NSW' | 'QLD' | 'SA' | 'WA' | 'TAS' | 'ACT' | 'NT'
}

export type PageHeaderType = {
  title: string
  heading?: string
  description?: PortableTextBlock[]
  image?: SimpleImageType
  cta?: LinkType
  pageHeaderStyle: StyleType
}

export type SeoType = {
  _type: 'seo'
  title: string
  description: string
  image: Image
}

export interface IForm extends Base {
  _type: 'form'
  title: string
  heading: string
  mailchimpTag: string
  text: PortableTextBlock[]
  errorMessage: PortableTextBlock[]
  successMessage: PortableTextBlock[]
  buttonLabel: string
  formFields: 'ADDRESS' | 'BDAY' | 'HOWHEARD' | 'MESSAGE' | 'PHONE'
}

export type SocialLink = {
  _type: 'socialLinks'
  _key: string
  network:
    | 'facebook'
    | 'instagram'
    | 'twitter'
    | 'youtube'
    | 'tiktok'
    | 'vimeo'
    | 'spotify'
    | 'whatsapp'
  url: string
}

// Page payloads

export interface HomePagePayload {
  overview?: PortableTextBlock[]
  title?: string
  pageHeader: PageHeaderType
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  pageContent?: any[]
  seo: SeoType
}

export interface PagePayload {
  overview?: PortableTextBlock[]
  title?: string
  pageHeader?: PageHeaderType
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  pageContent?: any[]
  seo: SeoType
}

export interface PostPayload {
  overview?: PortableTextBlock[]
  title?: string
  seo: SeoType
}

export interface SettingsPayload extends Base {
  _type: 'settings'
  socialLinks: SocialLink[]
  email: string
  phone?: string
  postalAddress?: Address
  footerMenuItems: LinkType[]
  footerText: PortableTextBlock[]
  geolocation?: Geolocation
  siteLogo: SimpleImageType
  menuItems: LinkType[]
  siteTitle: string
  siteDescription?: string
  siteUrl?: string
}
