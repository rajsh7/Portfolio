"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TechRadar from "@/components/TechRadar";
import GitHubStats from "@/components/GitHubStats";
import ResumeDownloadButton from "@/components/ResumePDF";
import ContactForm from "@/components/ContactForm";

const sectionClass =
  "min-h-screen flex items-center justify-center px-6 md:px-16";

export default function Home() {
  const year = new Date().getFullYear();
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShowIntro(false), 2000); // 2s intro
    return () => clearTimeout(t);
  }, []);

  return (
    <main className="bg-black text-white">
      {/* HOME / HERO */}
<section
  id="home"
  className="relative h-screen w-full overflow-hidden flex items-center justify-center px-6 md:px-16"
>
  {/* SOLID DARK BACKGROUND */}
  <div className="absolute inset-0 bg-[#05060b]" />

  {/* GLOWING GRADIENT BLOB BEHIND TEXT */}
  <div
    className="
      pointer-events-none
      absolute
      inset-x-1/2
      -translate-x-1/2
      h-64 md:h-80
      w-[110%] md:w-[90%]
      rounded-[999px]
      bg-gradient-to-r from-[#2563eb] via-[#4f46e5] to-[#ec4899]
      opacity-60
      blur-3xl
      blob
    "
  />

  {/* OPTIONAL EXTRA GLOW ON THE SIDE */}
  <div
    className="
      pointer-events-none
      absolute
      right-[-10%]
      bottom-[-10%]
      h-72 w-72
      rounded-[999px]
      bg-gradient-to-tr from-[#22d3ee] via-[#6366f1] to-[#a855f7]
      opacity-30
      blur-3xl
      blob
    "
  />

  {/* CONTENT */}
  <div className="relative z-10 flex flex-col items-center gap-6 text-center">
    {/* MAIN WORD */}
    <div className="relative inline-flex items-center justify-center px-8">
      {/* subtle glow directly behind the word */}
      <div className="absolute inset-x-[-80px] h-28 md:h-36 rounded-full bg-gradient-to-r from-[#2563eb] via-[#4f46e5] to-[#ec4899] opacity-55 blur-3xl" />

      <h1 className="relative text-4xl md:text-7xl lg:text-8xl font-extrabold tracking-[0.35em] uppercase">
        <span>PORTFOLIO</span>
        <span className="inline-block ml-2 align-top text-[0.45em]">•</span>
      </h1>
    </div>

    {/* SMALL SUBTEXT */}
    {/* <p className="text-[10px] md:text-xs uppercase tracking-[0.35em] text-gray-400">
      Raj Sharma · Frontend &amp; Full Stack Developer
    </p> */}

    {/* <p className="text-xs md:text-sm text-gray-500">
      Scroll to explore the work happening behind the screen.
    </p> */}
  </div>
</section>


{/* ABOUT SECTION */}
<section
  id="about"
  className="relative w-full bg-black py-28 md:py-36 px-6 md:px-16 overflow-hidden reveal-up"
>
  {/* GRADIENT BLOBS */}
  <div className="gradient-blob blob-blue w-[380px] h-[380px] top-20 left-0" />
  <div className="gradient-blob blob-purple w-[300px] h-[300px] bottom-10 right-10 opacity-30" />

  <div className="max-w-4xl mx-auto text-left space-y-5 relative z-10">
    
    {/* Section Label */}
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-xs md:text-sm uppercase tracking-[0.35em] text-gray-500"
    >
      About
    </motion.p>

    {/* Main Title */}
    <motion.h2
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight"
    >
      I craft animated, experience-driven web interfaces.
    </motion.h2>

    {/* Description */}
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.1 }}
      className="space-y-5 text-gray-300 text-sm md:text-base leading-relaxed"
    >
      <p>
        I'm Raj Sharma, a frontend-leaning full-stack developer who loves building 
        interfaces that feel as good as they look. My work revolves around React, 
        Next.js, and the MERN stack — combining clean UI, motion, and performance to 
        turn static designs into alive, scroll-driven experiences.
      </p>

      <p>
        I've worked across frontend, backend, AI evaluation, and problem-solving roles — 
        from building MERN applications at Purple Merit Technologies to designing 
        scalable backend services at Shunya Ekai Technologies, and even training AI 
        models to write better code as a Freelance AI Trainer at Outlier. Earlier, I 
        helped thousands of students as a Computer Science Subject Matter Expert at Chegg.
      </p>
    </motion.div>

    {/* Skill Pills */}
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.15 }}
      className="flex flex-wrap gap-3 pt-4"
    >
      {[
        "Frontend Focused",
        "MERN Stack",
        "Next.js & React",
        "UI Animations",
        "Problem Solving",
      ].map((pill) => (
        <span
          key={pill}
          className="text-xs md:text-[13px] uppercase tracking-[0.22em] border border-white/10 
                     rounded-full px-4 py-2 text-gray-300/90 bg-white/5 backdrop-blur-sm"
        >
          {pill}
        </span>
      ))}
    </motion.div>
<TechRadar />
  </div>
</section>

{/* EXPERIENCE SECTION */}
<section
  id="experience"
  className="relative w-full bg-black py-28 md:py-36 px-6 md:px-16 overflow-hidden reveal-up"
>
  {/* BACKGROUND GRADIENT LAYERS */}
  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#4B5CF022] to-black" />
  <div className="gradient-blob blob-purple w-[420px] h-[420px] top-32 left-1/2 -translate-x-1/2 opacity-40" />

  <div className="relative z-10 max-w-6xl mx-auto">
    {/* Header */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mb-12 md:mb-16"
    >
      <p className="text-xs md:text-sm uppercase tracking-[0.35em] text-gray-500">
        Experience
      </p>
      <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
        Where I&apos;ve been building & solving.
      </h2>
      <p className="mt-4 text-sm md:text-base text-gray-300 max-w-2xl">
        From full-stack product work to backend services and AI code evaluation,
        I&apos;ve had the chance to work across different layers of the stack —
        always with a focus on clarity, quality, and impact.
      </p>
    </motion.div>

    {/* Timeline */}
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-white/30 via-white/10 to-transparent" />

      <div className="space-y-8 md:space-y-10">
        {/* ITEM 1 – Purple Merit */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative pl-10 md:pl-14"
        >
          {/* Dot */}
          <div className="absolute left-3 md:left-5 top-4 h-3 w-3 rounded-full bg-white shadow-[0_0_0_6px_rgba(255,255,255,0.12)]" />

          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-5 md:p-6">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <h3 className="text-base md:text-lg font-semibold">
                Full Stack Developer Intern · MERN
              </h3>
              <span className="text-xs md:text-[13px] text-gray-400">
                Oct 2025 – Present · Remote
              </span>
            </div>
            <p className="text-sm text-gray-300 mb-3">
              Purple Merit Technologies
            </p>
            <ul className="space-y-1.5 text-sm md:text-[15px] text-gray-300 leading-relaxed">
              <li>
                • Building and maintaining dynamic MERN applications with a focus
                on responsive UI, reusable components, and clean architecture.
              </li>
              <li>
                • Integrating RESTful APIs, handling backend logic, and ensuring
                seamless data flow between client and server.
              </li>
              <li>
                • Implementing secure authentication & authorization using JWT
                and following best practices for production-ready apps.
              </li>
            </ul>
            <div className="mt-3 flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.18em] text-gray-400">
              <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5">
                React · Next.js
              </span>
              <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5">
                Node.js · Express
              </span>
              <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5">
                MongoDB · JWT
              </span>
            </div>
          </div>
        </motion.div>

        {/* ITEM 2 – Shunya Ekai */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
          className="relative pl-10 md:pl-14"
        >
          <div className="absolute left-3 md:left-5 top-4 h-3 w-3 rounded-full bg-white shadow-[0_0_0_6px_rgba(255,255,255,0.12)]" />

          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-5 md:p-6">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <h3 className="text-base md:text-lg font-semibold">
                Backend Developer Intern
              </h3>
              <span className="text-xs md:text-[13px] text-gray-400">
                Apr 2025 – Jul 2025 · Remote
              </span>
            </div>
            <p className="text-sm text-gray-300 mb-3">
              Shunya Ekai Technologies
            </p>
            <ul className="space-y-1.5 text-sm md:text-[15px] text-gray-300 leading-relaxed">
              <li>
                • Designed and implemented RESTful APIs using Node.js and
                Express.js for enterprise applications.
              </li>
              <li>
                • Worked with MongoDB to optimize queries, structure data, and
                ensure reliable and secure data handling.
              </li>
              <li>
                • Collaborated closely with frontend teams in agile sprints to
                align API contracts with UI needs.
              </li>
            </ul>
            <div className="mt-3 flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.18em] text-gray-400">
              <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5">
                Node.js · Express
              </span>
              <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5">
                MongoDB
              </span>
              <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5">
                REST APIs
              </span>
            </div>
          </div>
        </motion.div>

        {/* ITEM 3 – Outlier */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="relative pl-10 md:pl-14"
        >
          <div className="absolute left-3 md:left-5 top-4 h-3 w-3 rounded-full bg-white shadow-[0_0_0_6px_rgba(255,255,255,0.12)]" />

          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-5 md:p-6">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <h3 className="text-base md:text-lg font-semibold">
                Freelance AI Trainer
              </h3>
              <span className="text-xs md:text-[13px] text-gray-400">
                Nov 2024 – Mar 2025 · Remote
              </span>
            </div>
            <p className="text-sm text-gray-300 mb-3">Outlier</p>
            <ul className="space-y-1.5 text-sm md:text-[15px] text-gray-300 leading-relaxed">
              <li>
                • Evaluated and improved AI-generated code in C++, Python, and
                Go for correctness, efficiency, and best practices.
              </li>
              <li>
                • Designed evaluation rubrics to measure model quality and help
                reduce code generation errors.
              </li>
              <li>
                • Worked daily with LLM tooling, Git, and VS Code in a
                fast-feedback environment.
              </li>
            </ul>
            <div className="mt-3 flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.18em] text-gray-400">
              <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5">
                C++ · Python · Go
              </span>
              <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5">
                LLMs · Code Review
              </span>
            </div>
          </div>
        </motion.div>

        {/* ITEM 4 – Chegg */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          className="relative pl-10 md:pl-14"
        >
          <div className="absolute left-3 md:left-5 top-4 h-3 w-3 rounded-full bg-white shadow-[0_0_0_6px_rgba(255,255,255,0.12)]" />

          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-5 md:p-6">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <h3 className="text-base md:text-lg font-semibold">
                Subject Matter Expert · Computer Science
              </h3>
              <span className="text-xs md:text-[13px] text-gray-400">
                Dec 2023 – Nov 2024 · Remote
              </span>
            </div>
            <p className="text-sm text-gray-300 mb-3">Chegg</p>
            <ul className="space-y-1.5 text-sm md:text-[15px] text-gray-300 leading-relaxed">
              <li>
                • Created step-by-step solutions for CS topics including data
                structures, algorithms, OS, DBMS, and software engineering.
              </li>
              <li>
                • Maintained a solution acceptance rate above 95% by focusing on
                clarity, accuracy, and strong explanation.
              </li>
              <li>
                • Strengthened fundamentals through daily problem solving and
                reviewing complex queries from students worldwide.
              </li>
            </ul>
            <div className="mt-3 flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.18em] text-gray-400">
              <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5">
                DSA · DBMS · OS
              </span>
              <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5">
                Problem Solving
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </div>
</section>

{/* PROJECTS SECTION */}
<section
  id="projects"
  className="relative w-full bg-black py-28 md:py-36 px-6 md:px-16 overflow-hidden reveal-up"
>
  {/* BACKGROUND BLOBS */}
  <div className="gradient-blob blob-blue w-[350px] h-[350px] top-10 -left-20" />
  <div className="gradient-blob blob-purple w-[400px] h-[400px] bottom-0 right-0" />

  <div className="relative z-10 max-w-6xl mx-auto space-y-16">
    {/* Header */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="max-w-3xl"
    >
      <p className="text-xs md:text-sm uppercase tracking-[0.35em] text-gray-500">
        Projects
      </p>
      <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
        Things I&apos;ve been building recently.
      </h2>
      <p className="mt-4 text-sm md:text-base text-gray-300">
        A mix of UI-heavy frontends, full-stack products, and experiments with
        AI-powered workflows. I enjoy taking an idea from concept to polished,
        interactive experience.
      </p>
    </motion.div>

    {/* FEATURED PROJECTS */}
    <div className="space-y-6">
      <h3 className="text-sm md:text-base uppercase tracking-[0.28em] text-gray-500">
        Featured builds
      </h3>

      <div className="grid gap-6 md:gap-8 md:grid-cols-3">
        {/* AI Blog Generator UI */}
        <motion.a
          href="https://ai-blog-generator-ui.vercel.app/"
          target="_blank"
          rel="noreferrer"
          whileHover={{ y: -6, scale: 1.01 }}
          transition={{ type: "spring", stiffness: 200, damping: 18 }}
          className="group cursor-pointer relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md flex flex-col"
        >
          <div className="h-40 w-full overflow-hidden">
            <img
              src="/projects/ai-blog.png"
              className="h-full w-full object-cover rounded-t-3xl group-hover:scale-110 transition-all duration-500"
            />
          </div>

          <div className="p-5 md:p-6 flex flex-col gap-3 flex-1">
            <div className="flex items-center justify-between gap-2">
              <h3 className="text-lg font-semibold">AI Blog Generator UI</h3>
              <span className="text-[11px] uppercase tracking-[0.2em] text-gray-400">
                Next.js · UI
              </span>
            </div>

            <p className="text-sm md:text-[15px] text-gray-300 leading-relaxed">
              A clean dashboard where users enter a topic and generate long-form blogs
              with one click.
            </p>

            <div className="mt-auto flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.18em] text-gray-400">
              <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5">
                Next.js
              </span>
              <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5">
                TypeScript
              </span>
              <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5">
                AI UI
              </span>
            </div>
          </div>
        </motion.a>

        {/* GitDiagram */}
        <motion.a
          href="https://git-diagram-frontend.vercel.app/"
          target="_blank"
          rel="noreferrer"
          whileHover={{ y: -6, scale: 1.01 }}
          transition={{ type: "spring", stiffness: 200, damping: 18 }}
          className="group cursor-pointer relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md flex flex-col"
        >
          <div className="h-40 overflow-hidden">
            <img
              src="/projects/gitdiagram.png"
              className="h-full w-full object-cover rounded-t-3xl group-hover:scale-110 transition-all duration-500"
            />
          </div>

          <div className="p-5 md:p-6 flex flex-col gap-3 flex-1">
            <div className="flex items-center justify-between gap-2">
              <h3 className="text-lg font-semibold">GitDiagram</h3>
              <span className="text-[11px] uppercase tracking-[0.2em] text-gray-400">
                Visualizer
              </span>
            </div>

            <p className="text-sm text-gray-300">
              Converts any GitHub repo into a visual, interactive architecture map
              showing file relationships.
            </p>

            <div className="mt-auto flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.18em] text-gray-400">
              <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5">
                Next.js
              </span>
              <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5">
                GitHub API
              </span>
              <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5">
                Data Viz
              </span>
            </div>
          </div>
        </motion.a>

        {/* Form Builder */}
        <motion.a
          href="https://form-builder-professional-form-buil.vercel.app/"
          target="_blank"
          rel="noreferrer"
          whileHover={{ y: -6, scale: 1.01 }}
          transition={{ type: "spring", stiffness: 200, damping: 18 }}
          className="group cursor-pointer relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md flex flex-col"
        >
          <div className="h-40 overflow-hidden">
            <img
              src="/projects/form-builder.png"
              className="h-full w-full object-cover rounded-t-3xl group-hover:scale-110 transition-all duration-500"
            />
          </div>

          <div className="p-5 md:p-6 flex flex-col gap-3 flex-1">
            <div className="flex items-center justify-between gap-2">
              <h3 className="text-lg font-semibold">Professional Form Builder</h3>
              <span className="text-[11px] uppercase text-gray-400">Full Stack</span>
            </div>

            <p className="text-sm text-gray-300">
              Drag-and-drop form builder with validation, analytics, and real-time preview.
            </p>

            <div className="mt-auto flex flex-wrap gap-2 text-[11px] uppercase text-gray-400">
              <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5">
                Next.js
              </span>
              <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5">
                Drag &amp; Drop
              </span>
              <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5">
                Analytics
              </span>
            </div>
          </div>
        </motion.a>
      </div>
    </div>

    {/* OTHER SELECTED WORK */}
    <div className="space-y-6">
      <h3 className="text-sm md:text-base uppercase tracking-[0.28em] text-gray-500">
        Other selected work
      </h3>

      <div className="grid gap-5 md:grid-cols-3">
        {/* GreenCart */}
        <motion.a
          href="https://green-cart-mern-uyzg.vercel.app/"
          target="_blank"
          rel="noreferrer"
          whileHover={{ y: -4 }}
          className="cursor-pointer rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm flex flex-col overflow-hidden group"
        >
          <div className="h-40 overflow-hidden">
            <img
              src="/projects/greencart.png"
              className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
            />
          </div>

          <div className="p-5 flex flex-col gap-3">
            <p className="text-[11px] uppercase text-gray-400">Logistics · MERN</p>
            <h4 className="text-lg font-semibold">GreenCart Logistics Platform</h4>
            <p className="text-sm text-gray-300">
              Inventory + delivery optimization dashboard with real-time visuals.
            </p>
          </div>
        </motion.a>

        {/* Vogue Clothing */}
        <motion.article
          whileHover={{ y: -4 }}
          onClick={() =>
            window.open("https://vogue-clothing.vercel.app/", "_blank")
          }
          className="cursor-pointer rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm flex flex-col overflow-hidden group"
        >
          <div className="h-40 overflow-hidden">
            <img
              src="/projects/vogue.png"
              className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
            />
          </div>

          <div className="p-5 gap-3 flex flex-col">
            <p className="text-[11px] uppercase tracking-[0.22em] text-gray-400">
              E-Commerce
            </p>
            <h4 className="text-lg font-semibold">Vogue Clothing</h4>
            <p className="text-sm text-gray-300">
              Premium fashion e-commerce platform with dynamic product pages and cart flow.
            </p>
            <p className="text-[12px] text-gray-400">React · Node.js · MongoDB</p>
          </div>
        </motion.article>

        {/* AI Object Detection */}
        <motion.a
          href="https://rajsh7.github.io/ai-object-detection/"
          target="_blank"
          rel="noreferrer"
          whileHover={{ y: -4 }}
          className="cursor-pointer rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-5 flex flex-col gap-3"
        >
          <p className="text-[11px] uppercase tracking-[0.22em] text-gray-400">
            ML · Computer Vision
          </p>
          <h4 className="text-base md:text-lg font-semibold">AI Object Detection</h4>
          <p className="text-sm text-gray-300 leading-relaxed">
            A project exploring computer vision workflows and object detection pipelines,
            integrating model outputs into a clean, understandable UI.
          </p>
          <p className="mt-2 text-[12px] text-gray-400">
            Python · CV · Model integration
          </p>
        </motion.a>
      </div>
    </div>
  </div>
</section>

{/* GITHUB STATS SECTION */}
<section
  id="github"
  className="relative w-full bg-black py-28 md:py-8 px-1 md:px-16 overflow-hidden reveal-up"
>
  <div className="gradient-blob blob-purple w-[380px] h-[380px] top-10 left-1/4 opacity-35" />
  <div className="gradient-blob blob-blue w-[420px] h-[420px] bottom-10 right-10 opacity-45" />
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#7B4DF533,_transparent_70%)] opacity-40" />

  <div className="relative z-10 max-w-5xl mx-auto mb-20">
    <GitHubStats />
  </div>
</section>


{/* CONTACT SECTION */}
<section
  id="contact"
  className="relative w-full bg-black py-28 md:py-12 px-6 md:px-16 overflow-hidden reveal-up"
>
  {/* MAIN GLOW */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#7B4DF533,_transparent_70%)] opacity-40" />

  {/* SIDE PURPLE BLOB */}
  <div className="gradient-blob blob-purple w-[280px] h-[280px] bottom-0 left-1/3 opacity-35" />

  <div className="relative z-10 max-w-4xl mx-auto text-center space-y-12">
    {/* Header */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="space-y-4"
    >
      <p className="text-xs md:text-sm uppercase tracking-[0.35em] text-gray-500">
        Contact
      </p>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
        Let&apos;s build something great together.
      </h2>
      <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
        Whether you&apos;re looking for a developer to join your team, build a product,
        or collaborate on something creative — feel free to drop a message.
      </p>
    </motion.div>

    {/* Contact Form */}
    <ContactForm />

    {/* Optional: Resume Download + Footer line */}
    <div className="flex flex-col items-center gap-4">
          <a
          href="/resume.pdf"          // 👈 must match the real filename in /public
          download="Raj-Sharma-Resume.pdf"
          className="px-6 py-3 rounded-full border border-white/20 bg-white/10 hover:bg-white/20 uppercase tracking-[0.25em] text-xs md:text-sm"
        >
          Download Resume
        </a>
      <p className="text-gray-400 text-xs md:text-sm mt-7">
        Based in India · Open to remote & onsite opportunities.
      </p>
    </div>
  </div>
</section>
{/* FOOTER */}
<section className="relative w-full bg-black py-10 px-6 md:px-16 overflow-hidden">

  {/* Background Gradient */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#4B5CF022,_transparent_70%)] opacity-60" />
  <div className="gradient-blob blob-blue w-[260px] h-[260px] -bottom-16 left-10 opacity-40" />
  <div className="gradient-blob blob-purple w-[260px] h-[260px] -top-10 right-10 opacity-35" />

  <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center gap-6">

    {/* Social Links */}
    <div className="flex items-center gap-4 md:gap-6">

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/raj-sharma-1523032ba/"
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm hover:bg-white/10 transition-colors"
      >
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#0A66C2] text-[11px] font-semibold text-white">
          in
        </span>
        <span className="text-gray-200 hidden sm:inline">LinkedIn</span>
      </a>

      {/* Gmail */}
      <a
        href="https://mail.google.com/mail/u/1/#inbox"
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm hover:bg-white/10 transition-colors"
      >
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#EA4335] text-[11px] font-semibold text-white">
          @
        </span>
        <span className="text-gray-200 hidden sm:inline">Gmail</span>
      </a>

      {/* GitHub */}
      <a
        href="https://github.com/rajsh7"
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm hover:bg-white/10 transition-colors"
      >
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-black text-[14px]">
          🐙
        </span>
        <span className="text-gray-200 hidden sm:inline">GitHub</span>
      </a>
    </div>

    {/* Centered Copyright */}
    <p className="text-xs md:text-sm text-gray-400 text-center mt-4">
      © {new Date().getFullYear()} Raj Sharma · Portfolio
    </p>

  </div>
</section>

    </main>
  );
}
