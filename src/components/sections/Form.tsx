import { IForm, StyleType } from '@/lib/types'

import FormBuilder from '../ui/FormBuilder'
import SectionHeader from '../ui/SectionHeader'
import Wrapper from '../ui/Wrapper'

type FormProps = {
  formReference: IForm
  sectionStyle: StyleType
}

function Form(props: FormProps) {
  // console.log('formProps :', props)
  return (
    <Wrapper style={props.sectionStyle} title="Form">
      <div className="container">
        <div className="flex flex-col space-y-6 lg:grid lg:grid-cols-2 lg:gap-x-12 lg:space-y-0">
          <div className="col-span-1">
            <SectionHeader
              title={props.formReference.title}
              heading={props.formReference.heading}
              text={props.formReference.text}
              style={props.sectionStyle}
            />
          </div>
          <div className="col-span-1">
            <FormBuilder {...props.formReference} />
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default Form
