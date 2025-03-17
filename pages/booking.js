import Booking from '../components/booking'

import Head from 'next/head'
import { SEO } from '../styles/SEO'

export default function about({ language }) {
  const seoData = SEO.booking

  return (
    <>
      <Head>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords} />
        <link rel="canonical" href={seoData.structuredData.url} />

        {/* Open Graph */}
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:image" content={seoData.structuredData.image} />
        <meta property="og:url" content={seoData.structuredData.url} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content={language ? 'en_US' : 'nb'} />

        {/* Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(seoData.structuredData),
          }}
        />
      </Head>

      <Booking language={language} />
    </>
  )
}
