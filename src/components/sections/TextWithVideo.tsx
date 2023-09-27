import { PortableTextBlock } from 'sanity'

import { LinkType, SimpleImageType, StyleType } from '@/lib/types'
import { urlForImage } from '@/sanity/lib/image'

import SectionHeader from '../ui/SectionHeader'
import Video from '../ui/Video'
import Wrapper from '../ui/Wrapper'

type TextWithVideoProps = {
  title: string
  heading?: string
  text?: PortableTextBlock[]
  sectionStyle: StyleType
  cta?: LinkType
  video: {
    videoUrl: string
    videoThumbnail: SimpleImageType
  }
}

function TextWithVideo(props: TextWithVideoProps) {
  // console.log('TextWithVideo: ', props)
  return (
    <Wrapper style={props.sectionStyle} title={props.title}>
      <div className="container">
        <div className="mx-auto flex flex-col space-y-12 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-6 lg:space-y-0 xl:gap-x-24">
          <div>
            <SectionHeader
              title={props.title}
              heading={props.heading}
              text={props.text}
              cta={props.cta}
              style={props.sectionStyle}
            />
          </div>
          <div>
            <Video
              video={props.video.videoUrl}
              thumbnail={urlForImage(props.video.videoThumbnail.image).url()}
              altText={props.video.videoThumbnail.alt ?? 'video thumbnail'}
            />
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default TextWithVideo
