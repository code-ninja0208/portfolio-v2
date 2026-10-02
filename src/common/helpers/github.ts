export interface GithubApiRepo {
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  fork: boolean;
}

export interface GithubRepoResponse {
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
}

export const mapGithubRepos = (repos: GithubApiRepo[]): GithubRepoResponse[] =>
  repos
    .filter((repo) => !repo.fork)
    .map(
      ({
        name,
        description,
        html_url,
        homepage,
        language,
        stargazers_count,
        forks_count,
        updated_at,
      }) => ({
        name,
        description,
        html_url,
        homepage,
        language,
        stargazers_count,
        forks_count,
        updated_at,
      }),
    );
