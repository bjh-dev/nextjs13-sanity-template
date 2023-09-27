import clsx from 'clsx'
import Image from 'next/image'
import { ReactNode } from 'react'

import { slugify } from '@/lib/helpers'
import { StyleType } from '@/lib/types'
import { urlForImage } from '@/sanity/lib/image'

function Wrapper({
  children,
  style,
  pageHeader,
  title,
  center,
}: {
  children: ReactNode
  style: StyleType
  pageHeader?: boolean
  title?: string
  center?: boolean
}) {
  const bgImage = !!(style?.selectedStyle === 'image' && style.backgroundImage)
  if (pageHeader) {
    return (
      <header
        id={title ?? ''}
        style={{
          backgroundImage: bgImage
            ? `url(${urlForImage(style.backgroundImage).url()})`
            : '',
        }}
        className={clsx('relative z-0', {
          'bg-[#000000] bg-opacity-50 bg-cover bg-center bg-no-repeat py-12 bg-blend-multiply':
            bgImage,
          'py-24': style.selectedStyle === 'normal',
          'py-28': style.selectedStyle === 'colour',
          'bg-satin-linen': style.backgroundColour === '#ECE5D5',
          'bg-indian-khaki': style.backgroundColour === '#C4B08F',
          'bg-tuatara': style.backgroundColour === '#383637',
          'bg-ronchi': style.backgroundColour === '#F7C548',
          'bg-rope text-satin-linen': style.backgroundColour === '#9B5A30',
          'bg-axolotl text-satin-linen': style?.backgroundColour === '#48623E',
        })}
      >
        {children}
      </header>
    )
  }
  return (
    <section
      id={title ? slugify(title) : ''}
      style={{
        backgroundImage: bgImage
          ? `url(${urlForImage(style?.backgroundImage ?? '').url()})`
          : 'none',
      }}
      className={clsx('relative z-0', {
        'text-center': center,
        'pb-40 md:pb-56': title === 'Church Planting',
        'bg-[#000000] bg-opacity-50 bg-cover bg-center bg-no-repeat py-36 bg-blend-multiply':
          bgImage,
        'py-24': style.selectedStyle === 'normal',
        'py-28': style.selectedStyle === 'colour',
        'bg-satin-linen': style.backgroundColour === '#ECE5D5',
        'bg-indian-khaki': style.backgroundColour === '#C4B08F',
        'bg-tuatara': style.backgroundColour === '#383637',
        'bg-ronchi': style.backgroundColour === '#F7C548',
        'bg-rope text-satin-linen': style.backgroundColour === '#9B5A30',
        'bg-axolotl text-indian-khaki': style?.backgroundColour === '#48623E',
      })}
    >
      {children}
      {title === 'Church Planting' && (
        <>
          <Image
            className="absolute bottom-0 w-full"
            src="/images/soil.png"
            alt="Soil"
            width={2500}
            height={177}
          />
          <Image
            className="absolute bottom-0 left-[10%] -z-20 h-auto w-[15%]"
            src="/images/plant-1.png"
            alt="Plant"
            width={300}
            height={300}
          />
          <Image
            className="absolute bottom-0 right-[10%] -z-20 h-auto w-[22%]"
            src="/images/plant-2.png"
            alt="Plant"
            width={300}
            height={300}
          />
        </>
      )}
    </section>
  )
}

export default Wrapper
