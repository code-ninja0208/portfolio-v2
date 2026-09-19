import useSWR from 'swr';
import SectionHeading from '@/common/components/elements/SectionHeading';

interface GithubRepo {
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const GithubProjects = () => {
  const { data } = useSWR<{ repos: GithubRepo[] }>(
    '/api/github/repos',
    fetcher,
    { revalidateOnFocus: false },
  );
  const repos = data?.repos?.slice(0, 6) ?? [];

  return (
    <section className='space-y-5'>
      <div className='space-y-3'>
        <SectionHeading title='Latest GitHub Projects' />
        <p className='leading-[1.8] text-neutral-800 dark:text-neutral-300 md:leading-loose'>
          Automatically synced from my GitHub profile. New public repositories
          appear here without manual portfolio edits.
        </p>
      </div>
      <div className='grid gap-4 md:grid-cols-2'>
        {repos.map((repo) => (
          <a
            key={repo.name}
            href={repo.html_url}
            target='_blank'
            rel='noreferrer'
            className='rounded-xl border bg-neutral-100 p-5 transition hover:-translate-y-1 hover:shadow-md dark:border-neutral-800 dark:bg-[#1e1e1e]'
          >
            <div className='flex items-start justify-between gap-3'>
              <h3 className='font-medium'>{repo.name}</h3>
              <span className='text-xs text-neutral-500'>
                {repo.language || 'Code'}
              </span>
            </div>
            <p className='mt-2 line-clamp-2 text-sm leading-6 text-neutral-600 dark:text-neutral-400'>
              {repo.description || 'GitHub repository'}
            </p>
            <div className='mt-4 flex gap-4 text-xs text-neutral-500'>
              <span>★ {repo.stargazers_count}</span>
              <span>⑂ {repo.forks_count}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default GithubProjects;
