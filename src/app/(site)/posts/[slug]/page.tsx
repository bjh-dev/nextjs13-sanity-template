import { Metadata } from 'next'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'

import { PostPage } from '@/components/pages/post/Post'
import { PostPreview } from '@/components/pages/post/PostPreview'
import { postBySlugQuery, settingsQuery } from '@/lib/queries'
import { PostPayload, SettingsPayload } from '@/lib/types'
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
  const [settings, post] = await Promise.all([
    client.fetch<SettingsPayload>(settingsQuery),
    client.fetch<PostPayload>(postBySlugQuery, { slug }),
  ])

  const openGraphImages = post?.seo.image
    ? [
        {
          url: urlForImage(post?.seo.image)
            .width(800)
            .height(600)
            .url(),
          width: 800,
          height: 600,
        },
        {
          // Facebook recommended size
          url: urlForImage(post?.seo.image)
            .width(1200)
            .height(630)
            .url(),
          width: 1200,
          height: 630,
        },
        {
          // Square 1:1
          url: urlForImage(post?.seo.image)
            .width(600)
            .height(600)
            .url(),
          width: 600,
          height: 600,
        },
      ]
    : []

  return {
    title: post?.seo.title || post?.title || '',
    description: post?.seo.description || '',
    openGraph: {
      title: post?.seo.title || post?.title || '',
      description: post?.seo.description || '',
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

export default async function PostsSlugRoute({
  params,
}: {
  params: { slug: string }
}) {
  const { slug } = params
  const preview = draftMode().isEnabled
    ? { token: readToken as string }
    : undefined
  const client = getClient(preview)
  const [post] = await Promise.all([
    client.fetch<PostPayload>(postBySlugQuery, { slug }),
  ])

  if (!post && !preview) {
    notFound()
  }

  return preview ? <PostPreview post={post} /> : <PostPage post={post} />
}
