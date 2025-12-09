import { NextResponse } from "next/server";

const GITHUB_USERNAME = process.env.GITHUB_USERNAME || "rajsh7";
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

export async function GET() {
  try {
    const headers: HeadersInit = {
      "User-Agent": "portfolio-stats",
      Accept: "application/vnd.github+json",
    };
    if (GITHUB_TOKEN) {
      headers.Authorization = `Bearer ${GITHUB_TOKEN}`;
    }

    // basic user info
    const userRes = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}`,
      { headers, cache: "no-store" }
    );
    const user = await userRes.json();

    // repos info
    const reposRes = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`,
      { headers, cache: "no-store" }
    );
    const repos = await reposRes.json();

    let totalStars = 0;
    const languageBytes: Record<string, number> = {};

    for (const repo of repos) {
      totalStars += repo.stargazers_count || 0;

      if (repo.language) {
        languageBytes[repo.language] =
          (languageBytes[repo.language] || 0) + 1; // simple per-repo count
      }
    }

    const topLanguages = Object.entries(languageBytes)
      .map(([name, value]) => ({ name, value }))
      .sort((a, b) => b.value - a.value)
      .slice(0, 5);

    return NextResponse.json({
      username: user.login,
      profileUrl: user.html_url,
      avatarUrl: user.avatar_url,
      publicRepos: user.public_repos,
      followers: user.followers,
      totalStars,
      topLanguages,
      // Note: accurate commit counts & contribution charts need GraphQL + token
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Failed to fetch GitHub stats" },
      { status: 500 }
    );
  }
}
