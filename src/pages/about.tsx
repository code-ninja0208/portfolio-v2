import { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import Container from '@/common/components/elements/Container';
import PageHeading from '@/common/components/elements/PageHeading';
import About from '@/modules/about';
const PAGE_TITLE = 'About';
const PAGE_DESCRIPTION =
  'Data Engineering, AI & Data Systems, Full-Stack and Web3 engineering.';
const AboutPage: NextPage = () => (
  <>
    <NextSeo title={`${PAGE_TITLE} - code-ninja0208`} />
    <Container data-aos='fade-up'>
      <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
      <About />
    </Container>
  </>
);
export default AboutPage;
