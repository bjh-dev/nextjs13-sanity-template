import { PortableTextBlock } from 'sanity'

import { StyleType } from '@/lib/types'

import { CustomPortableText } from '../ui/custom-portable-text'
import SectionHeader from '../ui/SectionHeader'
import Wrapper from '../ui/Wrapper'

type StepsProps = {
  title: string
  text: PortableTextBlock[]
  sectionStyle: StyleType
  steps: {
    _key: string
    stepTitle: string
    stepDescription: PortableTextBlock[]
  }[]
}

function Steps(props: StepsProps) {
  const { title, text, sectionStyle, steps } = props
  return (
    <Wrapper
      style={{ selectedStyle: 'normal', _type: 'sectionStyle' }}
      title="numbered items"
    >
      <div className="container">
        <div className="mb-12">
          <SectionHeader title={title} text={text} style={sectionStyle} />
        </div>
        <div className="mx-auto flex max-w-xl flex-col space-y-12 lg:grid lg:max-w-none lg:grid-cols-3 lg:gap-x-6 lg:space-y-0 xl:gap-x-24">
          {steps.map((step, i) => {
            return (
              <div key={step._key} className="item">
                <div className="flex flex-row content-start space-x-12 lg:space-x-6 xl:space-x-8">
                  <div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-rope font-sans text-xl font-bold leading-none text-rope">
                      {i + 1}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-sans text-lg font-bold">
                      {step.stepTitle}
                    </h3>
                    <CustomPortableText value={step.stepDescription} />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </Wrapper>
  )
}

export default Steps
