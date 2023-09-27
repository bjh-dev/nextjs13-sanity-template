// import mailchimp from '@mailchimp/mailchimp_marketing'
import { HiShieldCheck } from 'react-icons/hi2'
import { defineField, defineType } from 'sanity'

// TODO: pull fields from mailchimp API
// mailchimp.setConfig({
// 	apiKey: process.env.MAILCHIMP_API_KEY,
// 	server: process.env.MAILCHIMP_API_SERVER,
// })
// const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID

// async function getListFields() {
// 	const response = await mailchimp.lists.getListMergeFields(AUDIENCE_ID)
// 	return response
// }

// const fields = await getListFields().then((data) =>
// 	data.merge_fields.map((field) => {
// 		return {
// 			title: field.name,
// 			value: field.tag,
// 		}
// 	})
// )
// console.log(fields)

export default defineType({
  name: 'form',
  title: 'Forms',
  type: 'document',
  icon: HiShieldCheck,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
    }),
    defineField({
      name: 'text',
      title: 'Text',
      type: 'portableTextSimple',
    }),
    defineField({
      name: 'mailchimpTag',
      title: 'Mailchimp Tag',
      type: 'string',
      initialValue: 'website-',
      validation: (Rule) => Rule.required(),
      description:
        'This is the tag that will be added to the user in Mailchimp. We use this to define segments and send related emails. Use the format website-[mytag] (e.g. website-landing-page).',
    }),
    defineField({
      name: 'formFields',
      title: 'Form Fields',
      type: 'array',
      // Fields used here must already be defined in MailChimp to use in a form
      description: 'These are the fields that will appear in the form.',
      of: [{ type: 'string' }],
      options: {
        list: [
          // TODO: pull fields from mailchimp API
          { title: 'Address', value: 'ADDRESS' },
          { title: 'Birthday', value: 'BDAY' },
          { title: 'How did you hear about us?', value: 'HOWHEARD' },
          { title: 'Message', value: 'MESSAGE' },
          { title: 'Phone', value: 'PHONE' },
        ],
      },
    }),
    defineField({
      name: 'buttonLabel',
      title: 'Button Label',
      type: 'string',
      // validation: (Rule) => Rule.required(),"
      description:
        'Text that will appear on the submit button. If blank we use "Submit".',
    }),
    defineField({
      name: 'errorMessage',
      title: 'Error Message',
      type: 'portableTextSimple',
      description:
        'This is the message that will appear if there is an error submitting the form.',
    }),
    defineField({
      name: 'successMessage',
      title: 'Success Message',
      type: 'portableTextSimple',
      description:
        'This is the message that will appear if the form is submitted successfully.',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      heading: 'heading',
      tag: 'mailchimpTag',
    },
    prepare({ title, heading, tag }) {
      return {
        title: `${title}: ${heading}`,
        subtitle: `MailChimp Tag: ${tag}`,
      }
    },
  },
})
