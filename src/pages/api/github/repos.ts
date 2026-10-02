import type { NextApiRequest, NextApiResponse } from 'next';

import { GITHUB_PROFILE_URL } from '@/common/constant/site';
import {
  GithubApiRepo,
  GithubRepoResponse,
  mapGithubRepos,
} from '@/common/helpers/github';

interface GithubReposResponse {
  repos: GithubRepoResponse[];
}

const GITHUB_REPOS_ENDPOINT = `${GITHUB_PROFILE_URL}/repos`;

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse<GithubReposResponse>,
) {
  try {
    const response = await fetch(
      `${GITHUB_REPOS_ENDPOINT}?sort=updated&direction=desc&per_page=12&type=owner`,
      { headers: { Accept: 'application/vnd.github+json' } },
    );
    if (!response.ok) return res.status(response.status).json({ repos: [] });
    const repos = (await response.json()) as GithubApiRepo[];
    const data = mapGithubRepos(repos);
    res.setHeader(
      'Cache-Control',
      'public, s-maxage=900, stale-while-revalidate=3600',
    );
    return res.status(200).json({ repos: data });
  } catch {
    return res.status(500).json({ repos: [] });
  }
}
