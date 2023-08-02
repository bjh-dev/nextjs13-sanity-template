import { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { postsQuery, settingsQuery } from '@/lib/queries'
import { PostPayload, SettingsPayload } from '@/lib/types'
import { getClient } from '@/sanity/lib/client'

type PostsProps = {
  posts: PostPayload[]
}

export async function generateMetadata(): Promise<Metadata> {
  const client = getClient()

  const [settings] = await Promise.all([
    client.fetch<SettingsPayload>(settingsQuery),
  ])

  return {
    title: 'Our Posts',
    description: 'A collection of our posts',
    openGraph: {
      title: 'Our Posts',
      description: 'A collection of posts',
      url:
        process.env.NODE_ENV === 'production'
          ? `${settings?.siteUrl}`
          : `http://localhost:3000/`,
      siteName: settings.siteTitle || '',
      images: [],
      locale: 'en-AU',
      type: 'website',
    },
  }
}

const PostIndexRoute = async () => {
  const client = getClient()
  const [posts] = await Promise.all([client.fetch<PostsProps>(postsQuery)])

  if (!posts) {
    notFound()
  }

  return (
    <div>
      <h1>Posts Page</h1>
    </div>
  )
}

export default PostIndexRoute
