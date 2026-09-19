const canonicalUrl =
  process.env.SITE_URL || 'https://portfolio-v2-3csx.onrender.com/';
const metaImage = 'https://avatars.githubusercontent.com/u/181129825?v=4';
const metaDescription =
  'Data Engineer, AI & Data Systems, Full-Stack Engineer and Web3 Developer.';

const defaultSEOConfig = {
  defaultTitle: 'code-ninja0208 - Data Engineer | AI | Full-Stack | Web3',
  description: metaDescription,
  canonical: canonicalUrl,
  openGraph: {
    canonical: canonicalUrl,
    title: 'code-ninja0208 - Data Engineer | AI | Full-Stack | Web3',
    description: metaDescription,
    type: 'website',
    images: [
      {
        url: metaImage,
        alt: 'code-ninja0208 GitHub avatar',
        width: 800,
        height: 800,
      },
    ],
    site_name: 'code-ninja0208 Portfolio',
  },
  twitter: {
    cardType: 'summary_large_image',
  },
};

export default defaultSEOConfig;
