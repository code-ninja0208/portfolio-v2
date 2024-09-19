import { BsFillBootstrapFill, BsRobot } from 'react-icons/bs';
import {
  SiAngular,
  SiPython, 
  SiCplusplus,
  SiApollographql,
  SiCss3,
  SiExpress,
  SiFirebase,
  SiGatsby,
  SiGraphql,
  SiJavascript,
  SiJest,
  SiJquery,
  SiLaravel,
  SiMui,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiPrisma,
  SiPwa,
  SiReact,
  SiRedux,
  SiSocketdotio,
  SiDjango,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiVuedotjs,
  SiWebpack,
  SiWordpress,
  SiGit,
  SiGithub,
  SiDotnet
} from 'react-icons/si';

export type stacksProps = {
  [key: string]: JSX.Element;
};

const iconSize = 20;

export const STACKS: stacksProps = {
  // Languages
  JavaScript: <SiJavascript size={iconSize} className='text-yellow-400' />,
  TypeScript: <SiTypescript size={iconSize} className='text-blue-400' />,
  PHP: <SiPhp size={iconSize} className='text-blue-500' />,
  Python: <SiPython size={iconSize} className='text-blue-300' />,
  CPlusPlus: <SiCplusplus size={iconSize} className='text-blue-600' />,

  // Frontend
  'React.js': <SiReact size={iconSize} className='text-sky-500' />,
  'Next.js': <SiNextdotjs size={iconSize} />,
  'Vue.js': <SiVuedotjs size={iconSize} className='text-green-500' />,
  Angular: <SiAngular size={iconSize} className='text-red-500' />,
  'Material UI': <SiMui size={iconSize} className='text-sky-400' />,
  CSS: <SiCss3 size={iconSize} className='text-blue-300' />,
  Bootstrap: (
    <BsFillBootstrapFill size={iconSize} className='text-purple-500' />
  ),
  TailwindCSS: <SiTailwindcss size={iconSize} className='text-cyan-300' />,
  'Styled Components': (
    <SiStyledcomponents size={iconSize} className='text-pink-500' />
  ),

  // Backend
  Jquery: <SiJquery size={iconSize} />,
  'Node.js': <SiNodedotjs size={iconSize} className='text-green-600' />,
  Express: <SiExpress size={iconSize} />,
  Django: <SiDjango size={iconSize} className='text-green-600' />,
  WordPress: <SiWordpress size={iconSize} />,
  Laravel: <SiLaravel size={iconSize} className='text-red-500' />,
  DotNet: <SiDotnet size={iconSize} className='text-blue-600' />,

  // Accessary
  Git: <SiGit size={iconSize} className='text-orange-500' />,
  GitHub: <SiGithub size={iconSize} className='text-black' />,
  Webpack: <SiWebpack size={iconSize} className='text-blue-500' />,
  Vite: <SiVite size={iconSize} className='text-purple-500' />,
  Gatsby: <SiGatsby size={iconSize} className='text-purple-600' />,
  GraphQL: <SiGraphql size={iconSize} className='text-pink-600' />,
  Socket: <SiSocketdotio size={iconSize} />,
  PWA: <SiPwa size={iconSize} className='text-amber-600' />,
  Redux: <SiRedux size={iconSize} className='text-purple-500' />,
  Firebase: <SiFirebase size={iconSize} className='text-yellow-500' />,
  Apollo: <SiApollographql size={iconSize} />,
  Prisma: <SiPrisma size={iconSize} className='text-emerald-500' />,
  Jest: <SiJest size={iconSize} className='text-red-600' />,
};
