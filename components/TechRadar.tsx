"use client";

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

const data = [
  { skill: "React / Next.js", value: 90 },
  { skill: "MERN Backend", value: 80 },
  { skill: "UI / Animations", value: 88 },
  { skill: "Problem Solving", value: 85 },
  { skill: "AI / LLMs", value: 75 },
  { skill: "Dev Tools & Git", value: 82 },
];

export default function TechRadar() {
  return (
    <section className="mt-16">
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-[1.1fr_1.1fr] items-center">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.3em] text-gray-500">
            Skill Overview
          </p>
          <h3 className="text-2xl md:text-3xl font-semibold">
            A quick snapshot of how I work across the stack.
          </h3>
          <p className="text-sm md:text-base text-gray-300">
            This radar chart represents my relative strength across the areas I
            use most: frontend, backend, motion, AI, and tooling. I&apos;m
            frontend-first, but comfortable owning end-to-end experiences.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-4 h-72 md:h-80">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
              <PolarGrid stroke="rgba(255,255,255,0.2)" />
              <PolarAngleAxis
                dataKey="skill"
                tick={{ fill: "rgba(255,255,255,0.85)", fontSize: 11 }}
              />
              <PolarRadiusAxis
                tick={false}
                axisLine={false}
                angle={90}
                domain={[0, 100]}
              />
              <Radar
                name="Raj"
                dataKey="value"
                stroke="rgba(255,255,255,0.9)"
                fill="rgba(255,255,255,0.3)"
                fillOpacity={0.5}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
}
