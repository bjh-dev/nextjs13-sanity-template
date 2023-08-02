import { Metadata } from 'next'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'

import Page from '@/components/pages/page/Page'
import PagePreview from '@/components/pages/page/PagePreview'
import { pageBySlugQuery, settingsQuery } from '@/lib/queries'
import { PagePayload, SettingsPayload } from '@/lib/types'
import { readToken } from '@/sanity/lib/api'
import { getClient } from '@/sanity/lib/client'
import { urlForImage } from '@/sanity/lib/image'

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const preview = draftMode().isEnabled
    ? { token: readToken as string }
    : undefined
  const client = getClient(preview)
  const { slug } = params
  const [settings, page] = await Promise.all([
    client.fetch<SettingsPayload>(settingsQuery),
    client.fetch<PagePayload>(pageBySlugQuery, { slug }),
  ])

  const openGraphImages = page?.seo.image
    ? [
        {
          url: urlForImage(page?.seo.image)
            .width(800)
            .height(600)
            .url(),
          width: 800,
          height: 600,
        },
        {
          // Facebook recommended size
          url: urlForImage(page?.seo.image)
            .width(1200)
            .height(630)
            .url(),
          width: 1200,
          height: 630,
        },
        {
          // Square 1:1
          url: urlForImage(page?.seo.image)
            .width(600)
            .height(600)
            .url(),
          width: 600,
          height: 600,
        },
      ]
    : []

  return {
    title: page?.seo.title || page?.title || '',
    description: page?.seo.description || '',
    openGraph: {
      title: page?.seo.title || page?.title || '',
      description: page?.seo.description || '',
      url:
        process.env.NODE_ENV === 'production'
          ? `${settings?.siteUrl}`
          : `http://localhost:3000/`,
      siteName: settings?.siteTitle || '',
      images: openGraphImages || [],
      locale: 'en-AU',
      type: 'website',
    },
  }
}

const PagesSlugRoute = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params
  const preview = draftMode().isEnabled
    ? { token: readToken as string }
    : undefined
  const client = getClient(preview)
  const [page] = await Promise.all([
    client.fetch<PagePayload>(pageBySlugQuery, { slug }),
  ])

  if (!page && !preview) {
    notFound()
  }

  return preview ? <PagePreview data={page} /> : <Page data={page} />
}

export default PagesSlugRoute
