const canonicalUrl = 'https://portfolio-v2-3csx.onrender.com/';
const metaImage = 'https://i.ibb.co/DCy5BL0/thumbnail-7ec1e453-66b0-44c2-b188-e91b588ad25f.jpg';
const metaDescription =
  'Senior Full stack web3 Engineer';

const defaultSEOConfig = {
  defaultTitle: 'VOLODYMYR MALIUCHENKO - Personal Website',
  description: metaDescription,
  canonical: canonicalUrl,
  openGraph: {
    canonical: canonicalUrl,
    title: 'VOLODYMYR MALIUCHENKO - Personal Website',
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
