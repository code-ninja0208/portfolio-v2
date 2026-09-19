import type { NextApiRequest, NextApiResponse } from 'next';

const USERNAME = 'code-ninja0208';

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const response = await fetch(
      `https://api.github.com/users/${USERNAME}/repos?sort=updated&direction=desc&per_page=12&type=owner`,
      { headers: { Accept: 'application/vnd.github+json' } },
    );

    if (!response.ok) return res.status(response.status).json({ repos: [] });

    const repos = await response.json();
    const data = repos
      .filter((repo: any) => !repo.fork)
      .map((repo: any) => ({
        name: repo.name,
        description: repo.description,
        html_url: repo.html_url,
        homepage: repo.homepage,
        language: repo.language,
        stargazers_count: repo.stargazers_count,
        forks_count: repo.forks_count,
        updated_at: repo.updated_at,
      }));

    res.setHeader(
      'Cache-Control',
      'public, s-maxage=900, stale-while-revalidate=3600',
    );
    return res.status(200).json({ repos: data });
  } catch {
    return res.status(500).json({ repos: [] });
  }
}
