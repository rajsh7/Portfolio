"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type GitHubStatsData = {
  username: string;
  profileUrl: string;
  avatarUrl: string;
  publicRepos: number;
  followers: number;
  totalStars: number;
  topLanguages: { name: string; value: number }[];
};

export default function GitHubStats() {
  const [data, setData] = useState<GitHubStatsData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch("/api/github-stats");
        const json = await res.json();
        setData(json);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  if (loading) {
    return (
      <div className="mt-12 text-sm text-gray-400">
        Fetching GitHub stats...
      </div>
    );
  }

  if (!data) return null;

  return (
    <section className="mt-16">
      <div className="max-w-6xl mx-auto border border-white/10 rounded-3xl bg-white/5 backdrop-blur-md p-6 md:p-8">
        <div className="flex flex-wrap items-center gap-4 mb-6">
          <img
            src={data.avatarUrl}
            alt={data.username}
            className="h-12 w-12 rounded-full border border-white/20"
          />
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gray-500">
              GitHub Overview
            </p>
            <a
              href={data.profileUrl}
              target="_blank"
              className="text-sm md:text-base text-gray-100 hover:underline"
            >
              @{data.username}
            </a>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <motion.div
            whileHover={{ y: -3 }}
            className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
          >
            <p className="text-[11px] uppercase tracking-[0.22em] text-gray-400">
              Public Repos
            </p>
            <p className="text-2xl font-semibold mt-1">{data.publicRepos}</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -3 }}
            className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
          >
            <p className="text-[11px] uppercase tracking-[0.22em] text-gray-400">
              Total Stars (approx)
            </p>
            <p className="text-2xl font-semibold mt-1">{data.totalStars}</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -3 }}
            className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
          >
            <p className="text-[11px] uppercase tracking-[0.22em] text-gray-400">
              Followers
            </p>
            <p className="text-2xl font-semibold mt-1">{data.followers}</p>
          </motion.div>
        </div>

        {data.topLanguages?.length > 0 && (
          <div className="mt-6">
            <p className="text-[11px] uppercase tracking-[0.22em] text-gray-400 mb-2">
              Languages used (by repo count)
            </p>
            <div className="flex flex-wrap gap-3 text-xs text-gray-200">
              {data.topLanguages.map((lang) => (
                <span
                  key={lang.name}
                  className="px-3 py-1 rounded-full border border-white/10 bg-white/5"
                >
                  {lang.name} · {lang.value}
                </span>
              ))}
            </div>
          </div>
        )}

        <p className="mt-4 text-[11px] text-gray-500">
          Note: For exact commit counts and contribution charts, a GitHub GraphQL
          integration with a personal access token is required.
        </p>
      </div>
    </section>
  );
}
