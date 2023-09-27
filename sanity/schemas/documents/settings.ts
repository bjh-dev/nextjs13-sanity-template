import { HiAdjustmentsHorizontal } from 'react-icons/hi2'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'settings',
  title: 'Settings',
  type: 'document',
  icon: HiAdjustmentsHorizontal,
  groups: [
    {
      title: 'Site',
      name: 'site',
      default: true,
    },
    {
      title: 'Navigation',
      name: 'navigation',
    },
    {
      title: 'Footer',
      name: 'footer',
    },
    {
      name: 'social',
      title: 'Social',
    },
  ],
  // Uncomment below to have edits publish automatically as you type
  // liveEdit: true,
  fields: [
    defineField({
      name: 'siteTitle',
      title: 'Site Title',
      type: 'string',
      description: 'The title of your site.',
      group: 'site',
    }),
    defineField({
      name: 'siteDescription',
      title: 'Site Description',
      type: 'string',
      description: 'The description of your site.',
      group: 'site',
    }),
    defineField({
      name: 'siteUrl',
      title: 'Site URL',
      type: 'string',
      description: 'The URL of your site.',
      group: 'site',
    }),
    defineField({
      name: 'siteLogo',
      title: 'Site Logo',
      description: 'The primary logo used throughout the site.',
      type: 'simpleImage',
      group: 'site',
    }),
    defineField({
      name: 'siteIcon',
      title: 'Site Icon',
      description: 'The icon used throughout the site.',
      type: 'simpleImage',
      group: 'site',
    }),
    defineField({
      name: 'menuItems',
      title: 'Menu Item list',
      description: 'Links displayed on the header of your site.',
      type: 'array',
      of: [{ type: 'link' }],
      group: 'navigation',
    }),
    defineField({
      name: 'menuCta',
      title: 'Menu Call To Action',
      description: 'The call to action displayed on the header of your site.',
      type: 'link',
      group: 'navigation',
    }),
    defineField({
      name: 'footerMenuItems',
      title: 'Footer Menu Item list',
      description: 'Links displayed on the footer of your site.',
      type: 'array',
      of: [{ type: 'link' }],
      group: 'footer',
    }),
    defineField({
      name: 'footerText',
      title: 'Footer Text',
      description: 'The text displayed on the footer of your site.',
      type: 'portableTextSimple',
      group: 'footer',
    }),
    defineField({
      name: 'footerLegal',
      title: 'Footer Legal',
      description: 'Copywrite and other legal info.',
      type: 'portableTextSimple',
      group: 'footer',
    }),
    defineField({
      name: 'postalAddress',
      title: 'Postal Address',
      group: 'site',
      type: 'address',
    }),
    defineField({
      name: 'physicalAddress',
      title: 'Physical Address',
      group: 'site',
      type: 'address',
    }),
    defineField({
      name: 'geolocation',
      title: 'Geolocation',
      description: 'Used for Google Maps',
      type: 'geopoint',
      group: 'site',
      options: {
        geocoding: true,
      },
    }),
    defineField({
      name: 'phone',
      title: 'Phone',
      description: 'Your primary phone number',
      type: 'string',
      group: 'site',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      description: 'Your primary email address',
      type: 'string',
      group: 'site',
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Links',
      description: 'Links to your social media profiles',
      type: 'array',
      group: 'social',
      of: [{ type: 'socialLinks' }],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Menu Items',
      }
    },
  },
})
