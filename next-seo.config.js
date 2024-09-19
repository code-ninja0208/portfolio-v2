const canonicalUrl = 'https://aulianza.id';
const metaImage = 'https://cloud.aulianza.com/public/images/aulianza-id.png';
const metaDescription =
  'Seasoned Software Engineer especially in Frontend side, with a passion for creating pixel-perfect web experiences';

const defaultSEOConfig = {
  defaultTitle: 'Shaiming Pai - Personal Website',
  description: metaDescription,
  canonical: canonicalUrl,
  openGraph: {
    canonical: canonicalUrl,
    title: 'Shaiming Pai - Personal Website',
    description: metaDescription,
    type: 'website',
    images: [
      {
        url: metaImage,
        alt: 'avatar og-image',
        width: 800,
        height: 600,
      },
      {
        url: metaImage,
        alt: 'avatar og-image',
        width: 1200,
        height: 630,
      },
      {
        url: metaImage,
        alt: 'avatar og-image',
        width: 1600,
        height: 900,
      },
    ],
    site_name: 'Personal Portfolio',
  },
  twitter: {
    handle: '@handle',
    site: '@site',
    cardType: 'summary_large_image',
  },
};

export default defaultSEOConfig;
