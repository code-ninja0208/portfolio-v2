import { mapGithubRepos, GithubApiRepo } from '@/common/helpers/github';

describe('mapGithubRepos', () => {
  test('filters forks and maps the public repository shape', () => {
    const repos: GithubApiRepo[] = [
      {
        name: 'portfolio-v2',
        description: 'Portfolio',
        html_url: 'https://github.com/code-ninja0208/portfolio-v2',
        homepage: 'https://code-ninja0208-portfolio.onrender.com',
        language: 'TypeScript',
        stargazers_count: 2,
        forks_count: 1,
        updated_at: '2026-10-02T00:00:00Z',
        fork: false,
      },
      {
        name: 'upstream-template',
        description: null,
        html_url: 'https://github.com/example/upstream-template',
        homepage: null,
        language: 'TypeScript',
        stargazers_count: 0,
        forks_count: 0,
        updated_at: '2026-10-01T00:00:00Z',
        fork: true,
      },
    ];

    expect(mapGithubRepos(repos)).toEqual([
      {
        name: 'portfolio-v2',
        description: 'Portfolio',
        html_url: 'https://github.com/code-ninja0208/portfolio-v2',
        homepage: 'https://code-ninja0208-portfolio.onrender.com',
        language: 'TypeScript',
        stargazers_count: 2,
        forks_count: 1,
        updated_at: '2026-10-02T00:00:00Z',
      },
    ]);
  });
});
