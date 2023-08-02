export function resolveHref(
  documentType?: string,
  slug?: string
): string | undefined {
  switch (documentType) {
    case 'home':
      return '/'
    case 'page':
      return slug ? `/${slug}` : undefined
    case 'post':
      return slug ? `/posts/${slug}` : undefined
    default:
      // eslint-disable-next-line no-console
      console.warn('Invalid document type:', documentType)
      return undefined
  }
}
