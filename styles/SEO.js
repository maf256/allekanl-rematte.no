// common/SEO.js

export const SEO = {
  homepage: {
    title: 'Webdesign og Webutvikling i Oslo - Majid Askarifarsangi',
    description:
      'Majid Askarifarsangi tilbyr profesjonelle webdesign, erfarne webutvikler-tjenester (frontend- og backend-utvikling), samt SEO-tjenester i Oslo. Moderne, responsive nettsider.',
    keywords:
      'webutvikler, webdesign, SEO, Oslo, frontend utvikler, Norway, webdesigner, webutvikling, fullstack utvikler',
    imgAlt: 'Majid Askarifarsangi - Webdesigner og utvikler i Oslo',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'Sitedesign',
      url: 'https://sitedesign.no',
      logo: 'https://sitedesign.no/logo.png',
      image: 'https://sitedesign.no/webutvikler.webp',
      description:
        'Profesjonell webdesign og utviklingstjenester i Oslo, Norge.',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Hamangskogen 71',
        addressLocality: 'Sandvika',
        postalCode: '1338',
        addressCountry: 'NO',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+47-401-89-111',
        contactType: 'Customer Service',
        areaServed: 'NO',
        availableLanguage: ['Norwegian', 'English'],
      },
      sameAs: [
        'https://www.linkedin.com/in/farsangi',
        'https://x.com/askarifarsangi',
        'https://www.facebook.com/majid.farsangi',
      ],
      priceRange: '$$',
    },
  },

  about: {
    title: 'Om Majid Askarifarsangi | Webutvikler og Webdesigner i Oslo',
    description:
      'Les mer om Majid Askarifarsangi, en erfaren webutvikler og webdesigner basert i Oslo med spisskompetanse på responsive nettsider og moderne teknologier.',
    keywords:
      'Majid Askarifarsangi, webutvikler Oslo, om webdesigner, frontend utvikler, webdesign, erfaring',
    imgAlt: 'Majid Askarifarsangi - Webdesigner og utvikler fra Oslo',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Majid Askarifarsangi',
      url: 'https://sitedesign.no/about',
      image: 'https://sitedesign.no/webutvikler.jpg',
      jobTitle: 'Webutvikler og Webdesigner',
      worksFor: {
        '@type': 'Organization',
        name: 'Sitedesign',
      },
      sameAs: [
        'https://www.linkedin.com/in/farsangi',
        'https://x.com/askarifarsangi',
        'https://github.com/maf256',
      ],
    },
  },

  contact: {
    title: 'Kontakt Majid Askarifarsangi | Webutvikling og Webdesign i Oslo',
    description:
      'Ta kontakt med Majid Askarifarsangi for profesjonelle webutvikling og webdesign-tjenester i Oslo. Rask respons, skreddersydde løsninger.',
    keywords:
      'kontakt webutvikler, webdesign Oslo, kontakt Majid Askarifarsangi, webutvikling kontakt, Sandvika, Norway',
    imgAlt: 'Kontakt Majid Askarifarsangi - Webdesigner i Oslo',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      url: 'https://sitedesign.no/contact',
      name: 'Kontakt Majid Askarifarsangi',
      description:
        'Ta kontakt for webutvikling, webdesign og digitale løsninger levert av Majid Askarifarsangi i Oslo.',
    },
  },

  booking: {
    title: 'Bestill konsultasjon med Majid Askarifarsangi | Webdesign Oslo',
    description:
      'Bestill en gratis konsultasjonstime med Majid Askarifarsangi for å diskutere dine behov innen webdesign, webutvikling og digitale løsninger.',
    keywords:
      'booking webutvikler, konsultasjon webdesign, bestill time, møte webdesign, Majid Askarifarsangi booking, webutvikling konsultasjon',
    imgAlt: 'Booking - Bestill møte med webdesigner Majid Askarifarsangi',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Reservation',
      reservationFor: {
        '@type': 'Service',
        name: 'Konsultasjon med Majid Askarifarsangi',
        provider: {
          '@type': 'Person',
          name: 'Majid Askarifarsangi',
        },
      },
      provider: {
        '@type': 'Organization',
        name: 'Sitedesign',
        url: 'https://sitedesign.no',
      },
      url: 'https://sitedesign.no/booking',
    },
  },
}
