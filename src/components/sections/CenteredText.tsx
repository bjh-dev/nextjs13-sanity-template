import { PortableTextBlock } from 'sanity'

import { LinkType, StyleType } from '@/lib/types'

import SectionHeader from '../ui/SectionHeader'
import Wrapper from '../ui/Wrapper'

type CenteredTextProps = {
  title: string
  heading?: string
  text: PortableTextBlock[]
  sectionStyle: StyleType
  cta?: LinkType
}

function CenteredText(props: CenteredTextProps) {
  // console.log('CenteredText: ', props)
  return (
    <Wrapper style={props.sectionStyle} title={props.title ?? ''} center>
      <div className="container relative max-w-3xl">
        <SectionHeader
          title={props.title}
          heading={props.heading}
          text={props.text}
          cta={props.cta}
          style={props.sectionStyle}
        />
      </div>
    </Wrapper>
  )
}

export default CenteredText
