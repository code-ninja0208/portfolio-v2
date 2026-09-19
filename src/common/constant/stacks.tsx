import { SiPython, SiTypescript, SiJavascript, SiReact, SiNextdotjs, SiVuedotjs, SiAngular, SiTailwindcss, SiNodedotjs, SiExpress, SiDjango, SiFastapi, SiGraphql, SiPostgresql, SiMysql, SiMongodb, SiPrisma, SiSolidity, SiRust, SiDocker, SiKubernetes, SiAmazonaws, SiGit, SiGithub } from 'react-icons/si';
export type stacksProps = { [key: string]: JSX.Element };
const iconSize = 20;
export const STACKS: stacksProps = {
  Python: <SiPython size={iconSize} />, SQL: <SiPostgresql size={iconSize} />, PostgreSQL: <SiPostgresql size={iconSize} />, MySQL: <SiMysql size={iconSize} />, MongoDB: <SiMongodb size={iconSize} />,
  JavaScript: <SiJavascript size={iconSize} />, TypeScript: <SiTypescript size={iconSize} />,
  'React.js': <SiReact size={iconSize} />, 'Next.js': <SiNextdotjs size={iconSize} />, 'Vue.js': <SiVuedotjs size={iconSize} />, Angular: <SiAngular size={iconSize} />, TailwindCSS: <SiTailwindcss size={iconSize} />,
  'Node.js': <SiNodedotjs size={iconSize} />, Express: <SiExpress size={iconSize} />, Django: <SiDjango size={iconSize} />, FastAPI: <SiFastapi size={iconSize} />, GraphQL: <SiGraphql size={iconSize} />, Prisma: <SiPrisma size={iconSize} />,
  Solidity: <SiSolidity size={iconSize} />, Rust: <SiRust size={iconSize} />,
  AWS: <SiAmazonaws size={iconSize} />, Docker: <SiDocker size={iconSize} />, Kubernetes: <SiKubernetes size={iconSize} />, Git: <SiGit size={iconSize} />, GitHub: <SiGithub size={iconSize} />,
};
