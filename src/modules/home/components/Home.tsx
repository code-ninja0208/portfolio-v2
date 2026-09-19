import Breakline from '@/common/components/elements/Breakline';
import GithubProjects from './GithubProjects';
import Introduction from './Introduction';
import Services from './Services';
import SkillsSection from './SkillsSection';

const Home = () => (
  <>
    <Introduction />
    <Breakline className='my-8' />
    <SkillsSection />
    <Breakline className='my-8' />
    <GithubProjects />
    <Breakline className='my-8' />
    <Services />
  </>
);
export default Home;
