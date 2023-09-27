import clsx from 'clsx'
import { PortableTextBlock } from 'sanity'

import { LinkType, StyleType } from '@/lib/types'

import CtaLink from './CtaLink'
import { CustomPortableText } from './custom-portable-text'
import { SectionHeading, SectionTitle } from './Typography'

interface SectionHeaderProps {
  title: string
  heading?: string
  text?: PortableTextBlock[]
  style: StyleType
  cta?: LinkType
  center?: boolean
}

function SectionHeader(props: SectionHeaderProps) {
  const { title, heading, text, cta, style, center } = props
  // console.log('SectionHeaderProps: ', props)
  return (
    <div className="flex flex-col space-y-6">
      <div>
        <div
          className={clsx('mb-4', {
            'text-axolotl-700': style.selectedStyle === 'normal',
            'items-center text-center': center,
            'satin-linen text-axolotl': style.backgroundColour === '#ECE5D5',
            'indian-khaki text-axolotl-800':
              style.backgroundColour === '#C4B08F',
            'tautara text-indian-khaki': style.backgroundColour === '#383637',
            'ronchi text-tuatara-800': style.backgroundColour === '#F7C548',
            'rope text-indian-khaki-50': style.backgroundColour === '#9B5A30',
            'axolotl text-indian-khaki-50':
              style?.backgroundColour === '#48623E',
          })}
        >
          {heading && <SectionTitle title={title} />}
        </div>
        <div
          className={clsx({
            'text-tuatara-800': style.selectedStyle === 'normal',
            'items-center text-center': center,
            'satin-linen text-rope-700': style.backgroundColour === '#ECE5D5',
            'indian-khaki text-axolotl-800':
              style.backgroundColour === '#C4B08F',
            'tautara text-indian-khaki': style.backgroundColour === '#383637',
            'ronchi text-tuatara-800': style.backgroundColour === '#F7C548',
            'rope text-indian-khaki-50': style.backgroundColour === '#9B5A30',
            'axolotl text-indian-khaki-600':
              style?.backgroundColour === '#48623E',
          })}
        >
          <SectionHeading heading={heading ?? title} />
        </div>
      </div>
      <div
        className={clsx({
          'items-center text-center': center,
          'satin-linen text-tuatara-800': style.backgroundColour === '#ECE5D5',
          'indian-khaki text-axolotl-800': style.backgroundColour === '#C4B08F',
          'tautara text-indian-khaki': style.backgroundColour === '#383637',
          'ronchi text-tuatara-800': style.backgroundColour === '#F7C548',
          'rope text-indian-khaki-50': style.backgroundColour === '#9B5A30',
          'axolotl text-indian-khaki-50': style?.backgroundColour === '#48623E',
        })}
      >
        <CustomPortableText value={text ?? []} />
      </div>
      {cta && (cta.reference || cta.url) && (
        <div className="block py-6">
          <CtaLink {...cta} />
        </div>
      )}
    </div>
  )
}

export default SectionHeader
