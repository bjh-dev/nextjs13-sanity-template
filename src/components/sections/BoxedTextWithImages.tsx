import Image from 'next/image'
import { PortableTextBlock } from 'sanity'

import { LinkType, SimpleImageType } from '@/lib/types'
import { urlForImage } from '@/sanity/lib/image'

import SectionHeader from '../ui/SectionHeader'
import Wrapper from '../ui/Wrapper'

type BoxWithImagesProps = {
  title: string
  heading: string
  text: PortableTextBlock[]
  cta: LinkType
  images: SimpleImageType[]
  // sectionStyle?: StyleType
}

function BoxedTextWithImages(props: BoxWithImagesProps) {
  // console.log('BoxedTextWithImages: ', props)

  return (
    <Wrapper
      style={{ _type: 'sectionStyle', selectedStyle: 'normal' }}
      title={props.title ? props.title : ''}
    >
      <div className="container mt-12">
        <div className="flex flex-col space-y-6 lg:grid lg:grid-cols-2 lg:gap-x-12 2xl:gap-x-24">
          <div className="col-span-1">
            <div className="image-array">
              {props.images.map((image) => {
                return (
                  <div
                    key={image._key}
                    className="mb-12 h-2/3 w-2/3 border-4 border-indian-khaki shadow-lg odd:-z-40 odd:border-axolotl even:-z-10 even:-translate-y-[20%] even:translate-x-[35%]"
                  >
                    <div className="translate-x-6 translate-y-6">
                      <Image
                        className="shadow-lg odd:-z-30 even:-z-30"
                        src={urlForImage(image.image).url()}
                        alt={image.alt ?? ''}
                        width={1200}
                        height={1200}
                      />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="col-span-1 bg-indian-khaki-600 shadow-lg">
            <div className="m-6 -mb-4 -ml-2 flex items-center bg-axolotl px-12 py-6 shadow-lg sm:-ml-4 sm:p-16 xl:h-full">
              <SectionHeader
                title={props.title}
                heading={props.heading}
                text={props.text}
                cta={props.cta}
                // As thee background is normal for this section we need to pass the style object
                style={{
                  _type: 'sectionStyle',
                  backgroundColour: '#48623E',
                  selectedStyle: 'colour',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default BoxedTextWithImages
