/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...index]]/page.tsx` route
 */
import { googleMapsInput } from '@sanity/google-maps-input'
import { visionTool } from '@sanity/vision'
import { defineConfig, isDev } from 'sanity'
import { deskTool } from 'sanity/desk'
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash'
import { noteField } from 'sanity-plugin-note-field'

import { apiVersion, dataset, projectId, studioName } from '@/sanity/env'
import { previewSecretId } from '@/sanity/lib/api'
import { previewDocumentNode } from '@/sanity/plugins/PreviewPane'
import { productionUrl } from '@/sanity/plugins/ProductionUrl'
import { pageStructure, singletonPlugin } from '@/sanity/plugins/settings'
import home from '@/sanity/schemas/documents/home'
import settings from '@/sanity/schemas/documents/settings'
import { PREVIEWABLE_DOCUMENT_TYPES, schema } from '@/sanity/schemas/schema'

const devOnlyPlugins = [visionTool()]

export default defineConfig({
  basePath: '/studio',
  name: studioName,
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schema' folder
  schema,
  plugins: [
    deskTool({
      structure: pageStructure([home, settings]),
      // `defaultDocumentNode` is responsible for adding a “Preview” tab to the document pane
      defaultDocumentNode: previewDocumentNode({
        apiVersion,
        previewSecretId,
      }),
    }),
    // Configures the global "new document" button, and document actions, to suit the Settings document singleton
    singletonPlugin([home.name, settings.name]),
    // Display inline notes within your schemas
    noteField(),
    // Add the "Open preview" action
    productionUrl({
      apiVersion,
      previewSecretId,
      types: PREVIEWABLE_DOCUMENT_TYPES,
    }),
    googleMapsInput({
      // TODO: Add when google overuse issue is fixed
      // apiKey: process.env.NEXT_PUBLIC_GOOGLE_API as string,
      apiKey: '',
      defaultZoom: 11,
      defaultLocale: 'en',
      defaultLocation: { lat: -37.8136, lng: 144.9631 },
    }),
    // Add an image asset source for Unsplash
    unsplashImageAsset(),
    ...(isDev ? devOnlyPlugins : []),
  ],
})
