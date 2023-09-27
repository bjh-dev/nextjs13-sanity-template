/* eslint-disable no-shadow */
/* eslint-disable react/no-unstable-nested-components */
import { PortableText, PortableTextComponents } from '@portabletext/react'
import { Image, PortableTextBlock } from 'sanity'

import { cn } from '@/lib/utils'

import ImageBox from './image-box'

export function CustomPortableText({
  value,
  paragraphClasses,
}: {
  paragraphClasses?: string
  value: PortableTextBlock[]
}) {
  const components: PortableTextComponents = {
    block: {
      normal: ({ children }) => {
        return (
          <p className={cn(paragraphClasses, 'mt-4 first-of-type:mt-0')}>
            {children}
          </p>
        )
      },
    },
    list: {
      bullet: ({ children }) => {
        return <ul className="list-outside list-disc mt-4">{children}</ul>
      },
    },
    listItem: {
      bullet: ({ children }) => {
        return <li className="mb-2 ml-4">{children}</li>
      },
    },
    marks: {
      strong: ({ children }) => {
        return <strong className="font-bold">{children}</strong>
      },
      link: ({ children, value }) => {
        return (
          <a
            className="underline transition-all duration-300 ease-in-out"
            href={value?.href}
            rel="noreferrer noopener"
          >
            {children}
          </a>
        )
      },
    },
    types: {
      image: ({
        value,
      }: {
        value: Image & { alt?: string; caption?: string }
      }) => {
        return (
          <div className="my-6 space-y-2">
            <ImageBox
              image={value}
              alt={value.alt}
              classesWrapper="relative aspect-[16/9]"
            />
            {value?.caption && (
              <div className="text-gray-600 font-sans text-sm">
                {value.caption}
              </div>
            )}
          </div>
        )
      },
    },
  }

  return <PortableText components={components} value={value} />
}
