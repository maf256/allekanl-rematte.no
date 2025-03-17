import Home from '../components/home/Home'
import Head from 'next/head'
import { SEO } from '../styles/SEO'

export default function Homepage({ language }) {
  const seoData = SEO.homepage

  const websiteStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    url: 'https://sitedesign.no',
    name: 'Sitedesign',
    description: seoData.description,
    author: {
      '@type': 'Person',
      name: 'Majid Askarifarsangi',
      jobTitle: 'Webutvikler',
      image: seoData.structuredData.image,
      url: 'https://sitedesign.no',
      sameAs: seoData.structuredData.sameAs,
    },
  }

  const personStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Majid Askarifarsangi',
    url: 'https://sitedesign.no',
    image: seoData.structuredData.image,
    jobTitle: 'Webutvikler',
    address: seoData.structuredData.address,
    sameAs: seoData.structuredData.sameAs,
  }

  return (
    <>
      <Head>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords} />
        <meta name="author" content="Majid Askarifarsangi" />
        <meta name="robots" content="index, follow" />
        {/* Open Graph SEO tags */}
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:image" content={seoData.structuredData.image} />
        <meta property="og:image:alt" content={seoData.imageAlt} />
        <meta property="og:image:width" content="452" />
        <meta property="og:image:height" content="452" />{' '}
        <meta property="og:url" content="https://sitedesign.no" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content={language ? 'en_US' : 'nb'} />
        <meta property="og:site_name" content="Sitedesign" />
        {/* Canonical URL */}
        <link rel="canonical" href="https://sitedesign.no" />
        {/* Structured Data (LocalBusiness) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(seoData.structuredData),
          }}
        />
        {/* Structured Data (WebSite) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteStructuredData),
          }}
        />
        {/* Structured Data (Person) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personStructuredData),
          }}
        />
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        {/* Twitter-specific tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />
        <meta
          name="twitter:image"
          content="https://sitedesign.no/majid-askarifarsangi-webutvikler-oslo.webp"
        />
      </Head>

      <Home language={language} />
    </>
  )
}
