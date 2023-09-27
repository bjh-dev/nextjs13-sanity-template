import clsx from 'clsx'
import Image from 'next/image'

import { PageHeaderType } from '@/lib/types'
import { urlForImage } from '@/sanity/lib/image'

import CtaLink from './CtaLink'
import { CustomPortableText } from './custom-portable-text'
import Divider from './Divider'
import { PageHeading, PageTitle } from './Typography'
import Wrapper from './Wrapper'

function PageHeader(props: PageHeaderType) {
  // console.log('pageHeaderProps: ', props)
  return (
    <Wrapper style={props.pageHeaderStyle} pageHeader>
      {!props.image && (
        <div className="container">
          <div className="mx-auto flex max-w-3xl flex-col text-center">
            <PageTitle title={props.title ?? ''} />
            {props.heading && <PageHeading heading={props.heading} />}
            {props.pageHeaderStyle && <Divider style={props.pageHeaderStyle} />}
            {props.description && (
              <CustomPortableText value={props.description ?? []} />
            )}
            {props.cta && <CtaLink {...props.cta} />}
          </div>
        </div>
      )}

      <div className="container">
        <div
          className={clsx(
            'flex flex-col-reverse lg:grid lg:grid-cols-2 lg:gap-12',
            {
              'items-center rounded-md bg-satin-linen px-6 py-12 md:px-12 md:py-20':
                props.image,
            }
          )}
        >
          <div>
            {props.image && (
              <>
                <Image
                  src={urlForImage(props.image.image)
                    .width(450)
                    .height(550)
                    .fit('fill')
                    .url()}
                  alt={props.image.alt ?? 'page header image'}
                  width={450}
                  height={550}
                  className="mx-auto translate-y-0 object-fill object-center"
                  priority
                />
                {/* <div className='hidden h-96 w-64 -translate-y-[20rem] translate-x-[15rem] border-4 border-axolotl md:block md:translate-x-[5rem] xl:-translate-y-[22rem] xl:translate-x-[10rem] 2xl:translate-x-[15rem]' /> */}
              </>
            )}
          </div>
          <div className="mx-auto flex max-w-3xl flex-col space-y-6 pb-12 sm:space-y-12">
            <div>
              <div
                className={clsx('mb-4', {
                  'text-rope': props.pageHeaderStyle.selectedStyle === 'image',
                  'text-axolotl-700':
                    props.pageHeaderStyle.selectedStyle === 'normal',
                  'satin-linen text-axolotl':
                    props.pageHeaderStyle.backgroundColour === '#ECE5D5',
                  'indian-khaki text-axolotl-800':
                    props.pageHeaderStyle.backgroundColour === '#C4B08F',
                  'tautara text-indian-khaki':
                    props.pageHeaderStyle.backgroundColour === '#383637',
                  'ronchi text-tuatara-800':
                    props.pageHeaderStyle.backgroundColour === '#F7C548',
                  'rope text-indian-khaki-50':
                    props.pageHeaderStyle.backgroundColour === '#9B5A30',
                  'axolotl text-indian-khaki-50':
                    props.pageHeaderStyle.backgroundColour === '#48623E',
                })}
              >
                <PageTitle title={props.title} />
              </div>
              <div
                className={clsx({
                  'text-tuatara-700':
                    props.pageHeaderStyle.selectedStyle === 'image',
                  'text-tuatara-800':
                    props.pageHeaderStyle.selectedStyle === 'normal',
                  'satin-linen text-rope-700':
                    props.pageHeaderStyle.backgroundColour === '#ECE5D5',
                  'indian-khaki text-axolotl-800':
                    props.pageHeaderStyle.backgroundColour === '#C4B08F',
                  'tautara text-indian-khaki':
                    props.pageHeaderStyle.backgroundColour === '#383637',
                  'ronchi text-tuatara-800':
                    props.pageHeaderStyle.backgroundColour === '#F7C548',
                  'rope text-indian-khaki-50':
                    props.pageHeaderStyle.backgroundColour === '#9B5A30',
                  'axolotl text-indian-khaki':
                    props.pageHeaderStyle.backgroundColour === '#48623E',
                })}
              >
                {props.heading && <PageHeading heading={props.heading} />}
              </div>
            </div>
            <Divider style={props.pageHeaderStyle} />
            {props.description && (
              <CustomPortableText value={props.description} />
            )}
            {props.cta && (
              <div>
                <CtaLink {...props.cta} />
              </div>
            )}
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default PageHeader
