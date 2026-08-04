import { Helmet } from 'react-helmet-async'
import { siteConfig } from '../../data/siteConfig'

export default function SEOHead({
  title,
  description,
  image,
  noindex = false,
  pathname = '',
}) {
  const fullTitle = title
    ? siteConfig.seo.titleTemplate.replace('%s', title)
    : siteConfig.seo.defaultTitle

  const fullDescription = description || siteConfig.seo.defaultDescription
  const url = `${siteConfig.url}${pathname}`

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* OG */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      {image && <meta property="og:image" content={image} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      {image && <meta name="twitter:image" content={image} />}

      <link rel="canonical" href={url} />
    </Helmet>
  )
}