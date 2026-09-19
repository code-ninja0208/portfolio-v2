import { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import Container from '@/common/components/elements/Container';
import PageHeading from '@/common/components/elements/PageHeading';
import Contact from '@/modules/contact';
const PAGE_TITLE = 'Contact';
const PAGE_DESCRIPTION =
  "Let's connect about data engineering, AI, backend, full-stack or Web3 work.";
const ContactPage: NextPage = () => (
  <>
    <NextSeo title={`${PAGE_TITLE} - code-ninja0208`} />
    <Container data-aos='fade-up'>
      <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
      <Contact />
    </Container>
  </>
);
export default ContactPage;
