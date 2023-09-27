'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FaExternalLinkAlt } from 'react-icons/fa'

import { LinkType } from '@/lib/types'

function CtaLink(props: LinkType) {
  const router = useRouter()
  const { reference, title, url } = props
  // console.log('ctaLinkProps: ', props)
  if (reference !== null) {
    return (
      <Link
        className="inline-block rounded-md bg-axolotl px-6 py-3 font-sans text-sm tracking-wide text-satin-linen-200 hover:bg-axolotl-600"
        href={reference?.slug ?? ''}
        onClick={() => router.push(`/${reference?.slug}`)}
      >
        {title ?? reference?.title}
      </Link>
    )
  }
  return (
    <a
      href={url}
      rel="noopener noreferrer"
      target="_blank"
      className="inline-block"
    >
      <div className="flex items-center space-x-4 rounded-md bg-axolotl px-6 py-3 font-sans text-sm tracking-wide text-satin-linen-200 hover:bg-axolotl-600">
        <div>{title}</div>
        <FaExternalLinkAlt />
      </div>
    </a>
  )
}

export default CtaLink
