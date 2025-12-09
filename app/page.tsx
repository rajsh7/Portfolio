"use client";

import { motion } from "framer-motion";
import TechRadar from "@/components/TechRadar";
import GitHubStats from "@/components/GitHubStats";
import ResumeDownloadButton from "@/components/ResumePDF";
import ContactForm from "@/components/ContactForm";

const sectionClass =
  "min-h-screen flex items-center justify-center px-6 md:px-16";

export default function Home() {
  return (
    <main className="bg-black text-white">
      {/* HOME / HERO */}
      <section
  id="home"
  className="relative h-screen w-full overflow-hidden flex items-center justify-center px-6 md:px-16 reveal-up"
>
  {/* BACKGROUND IMAGE */}
  <div
    className="absolute inset-0 w-full h-full bg-cover bg-center scale-105 blur-sm"
    style={{
      backgroundImage: "url('/raj-text.jpg')",
    }}
  />

  {/* DARK + BLUR OVERLAY */}
  <div className="absolute inset-0 bg-black/10 backdrop-blur-md" />

  {/* CONTENT */}
  <div className="relative z-10 max-w-4xl text-center space-y-5">

    {/* Subtext */}
    <motion.h1
            initial={{ backgroundPositionX: "50%" }}
            animate={{ backgroundPositionX: ["35%", "65%", "35%"] }}
            transition={{
              duration: 10,
              ease: "easeInOut",
              repeat: Infinity,
            }}
            className="
              text-4xl md:text-8xl font-extrabold 
              leading-tight 
              text-transparent 
              bg-clip-text 
            "
            style={{
              backgroundImage: "url('/hero-bg.jpg')",   // your photo
              backgroundSize: "140%",                   // bigger so it can move
              backgroundRepeat: "no-repeat",
              backgroundPositionY: "50%",
            }}
          >
            Let's Build Something Great !
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-base md:text-lg text-gray-300"
          >
          • | Code That Connects | •
          </motion.p>
      </div>
</section>

{/* ABOUT SECTION */}
<section
  id="about"
  className="relative w-full bg-black py-24 md:py-32 px-6 md:px-16 reveal-up"
>
  <div className="max-w-6xl mx-auto grid gap-12 md:grid-cols-[1.1fr_1.2fr] items-start">

    {/* LEFT: TITLE + MAIN COPY */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="space-y-6"
    >
      <p className="text-xs md:text-sm uppercase tracking-[0.35em] text-gray-500">
        About
      </p>

      <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
        I craft animated, experience-driven web interfaces.
      </h2>

      <p className="text-gray-300 text-sm md:text-base leading-relaxed">
        I&apos;m Raj Sharma, a frontend-leaning full-stack developer who loves
        building interfaces that feel as good as they look. My work revolves
        around React, Next.js, and the MERN stack — combining clean UI, motion,
        and performance to turn static designs into alive, scroll-driven
        experiences.
      </p>

      <p className="text-gray-300 text-sm md:text-base leading-relaxed">
        I&apos;ve worked across frontend, backend, AI evaluation, and
        problem-solving roles — from building MERN applications at{" "}
        <span className="text-gray-100 font-medium">
          Purple Merit Technologies
        </span>{" "}
        to designing scalable backend services at{" "}
        <span className="text-gray-100 font-medium">
          Shunya Ekai Technologies
        </span>, and even training AI models to write better code as a{" "}
        Freelance AI Trainer at Outlier. Earlier, I helped thousands of
        students as a Computer Science Subject Matter Expert at Chegg.
      </p>

      <div className="mt-4 flex flex-wrap gap-3">
        {[
          "Frontend Focused",
          "MERN Stack",
          "Next.js & React",
          "UI Animations",
          "Problem Solving",
        ].map((pill) => (
          <span
            key={pill}
            className="text-xs md:text-[13px] uppercase tracking-[0.22em] border border-white/10 rounded-full px-4 py-2 text-gray-300/90 bg-white/5 backdrop-blur-sm"
          >
            {pill}
          </span>
        ))}
      </div>
    </motion.div>

    {/* RIGHT: CARD + STATS + STACK */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
      className="space-y-6"
    >
      {/* MAIN CARD */}
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-6 md:p-8">
        <div className="pointer-events-none absolute inset-0 opacity-25 mix-blend-screen bg-[radial-gradient(circle_at_top,_#ffffff33,_transparent_60%)]" />

        <div className="relative space-y-4">
          <h3 className="text-lg md:text-xl font-semibold">
            A bit about how I work
          </h3>
          <p className="text-gray-300 text-sm md:text-[15px] leading-relaxed">
            At Purple Merit, I build and maintain dynamic web apps using the
            MERN stack — from frontend views in React to backend APIs in Node
            and Express, with secure JWT-based authentication and smooth data
            flow between client and server.
          </p>
          <p className="text-gray-300 text-sm md:text-[15px] leading-relaxed">
            Previously at Shunya Ekai, I focused on backend engineering:
            designing RESTful APIs, optimizing MongoDB queries, and ensuring
            secure, scalable services. As a Freelance AI Trainer at Outlier and
            SME at Chegg, I refined my ability to reason about complex problems,
            debug efficiently, and explain solutions clearly.
          </p>

          <div className="grid gap-4 md:grid-cols-3 pt-4 border-t border-white/10 mt-4">
            <div className="space-y-1">
              <p className="text-[11px] uppercase tracking-[0.22em] text-gray-500">
                Location
              </p>
              <p className="text-sm text-gray-200">India • IST</p>
            </div>
            <div className="space-y-1">
              <p className="text-[11px] uppercase tracking-[0.22em] text-gray-500">
                Current Role
              </p>
              <p className="text-sm text-gray-200">
                Full Stack Dev Intern · MERN
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-[11px] uppercase tracking-[0.22em] text-gray-500">
                Mindset
              </p>
              <p className="text-sm text-gray-200">
                Detail-oriented, learning-driven
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* STACK CARDS */}
      <div className="grid gap-4 md:grid-cols-3">
        <motion.div
          whileHover={{ y: -4 }}
          className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm"
        >
          <p className="text-[11px] uppercase tracking-[0.22em] text-gray-500 mb-2">
            Core Stack
          </p>
          <p className="text-gray-200 text-sm">
            React, Next.js, Node.js, Express, MongoDB, REST APIs
          </p>
        </motion.div>

        <motion.div
          whileHover={{ y: -4 }}
          className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm"
        >
          <p className="text-[11px] uppercase tracking-[0.22em] text-gray-500 mb-2">
            Languages
          </p>
          <p className="text-gray-200 text-sm">
            JavaScript, Java, SQL, C++, Python
          </p>
        </motion.div>

        <motion.div
          whileHover={{ y: -4 }}
          className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm"
        >
          <p className="text-[11px] uppercase tracking-[0.22em] text-gray-500 mb-2">
            I enjoy building
          </p>
          <p className="text-gray-200 text-sm">
            Animated portfolios, dashboards, and product UIs with smooth
            micro-interactions.
          </p>
        </motion.div>
      </div>
    </motion.div>
  </div>
</section>
<TechRadar />

{/* EXPERIENCE SECTION */}
<section
  id="experience"
  className="relative w-full bg-black py-24 md:py-32 px-6 md:px-16 reveal-up"
>
  <div className="max-w-6xl mx-auto">
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
  className="relative w-full bg-black py-24 md:py-32 px-6 md:px-16 reveal-up"
>
  <div className="max-w-6xl mx-auto space-y-12 md:space-y-16">
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
          className="group cursor-pointer relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-5 md:p-6 flex flex-col gap-4"
        >
          <div className="pointer-events-none absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity bg-[radial-gradient(circle_at_top,_#ffffff33,_transparent_55%)]" />
          <div className="relative flex-1 flex flex-col gap-3">
            <div className="flex items-center justify-between gap-2">
              <h3 className="text-lg font-semibold">AI Blog Generator UI</h3>
              <span className="text-[11px] uppercase tracking-[0.2em] text-gray-400">
                Next.js · UI
              </span>
            </div>

            <p className="text-sm md:text-[15px] text-gray-300 leading-relaxed">
              A clean dashboard where users enter a topic and generate long-form
              blogs with a single click. Simulates Gemini-style AI responses via
              a mock API.
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
          className="group cursor-pointer relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-5 md:p-6 flex flex-col gap-4"
        >
          <div className="pointer-events-none absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity bg-[radial-gradient(circle_at_top,_#ffffff33,_transparent_55%)]" />
          <div className="relative flex-1 flex flex-col gap-3">
            <div className="flex items-center justify-between gap-2">
              <h3 className="text-lg font-semibold">GitDiagram</h3>
              <span className="text-[11px] uppercase tracking-[0.2em] text-gray-400">
                Devtool · Visualizer
              </span>
            </div>
            <p className="text-sm md:text-[15px] text-gray-300 leading-relaxed">
              A visual repo-mapping tool that turns a GitHub repository into an
              interactive diagram. It analyses folders and files, then shows how
              modules connect — helping developers quickly understand structure,
              dependencies, and high-level architecture.
            </p>
            <div className="mt-auto flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.18em] text-gray-400">
              <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5">
                React / Next.js
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
          className="group cursor-pointer relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-5 md:p-6 flex flex-col gap-4"
        >
          <div className="pointer-events-none absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity bg-[radial-gradient(circle_at_top,_#ffffff33,_transparent_55%)]" />
          <div className="relative flex-1 flex flex-col gap-3">
            <div className="flex items-center justify-between gap-2">
              <h3 className="text-lg font-semibold">
                Professional Form Builder
              </h3>
              <span className="text-[11px] uppercase tracking-[0.2em] text-gray-400">
                Full Stack
              </span>
            </div>
            <p className="text-sm md:text-[15px] text-gray-300 leading-relaxed">
              A powerful drag-and-drop form builder for creating complex forms
              without touching code. Includes configuration, validation, live
              preview, response collection, and analytics.
            </p>
            <div className="mt-auto flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.18em] text-gray-400">
              <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5">
                React / Next.js
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
        {/* GreenCart Logistics Platform */}
        <motion.a
          href="https://green-cart-mern-uyzg.vercel.app/"
          target="_blank"
          rel="noreferrer"
          whileHover={{ y: -4 }}
          className="cursor-pointer rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-5 flex flex-col gap-3"
        >
          <p className="text-[11px] uppercase tracking-[0.22em] text-gray-400">
            Web App · Logistics
          </p>
          <h4 className="text-base md:text-lg font-semibold">
            GreenCart Logistics Platform
          </h4>
          <p className="text-sm text-gray-300 leading-relaxed">
            A logistics management platform with tracking, shipment flows, and
            operational dashboards tailored for inventory and delivery workflows.
          </p>
          <p className="mt-2 text-[12px] text-gray-400">
            MERN stack · role-based views · dashboards
          </p>
        </motion.a>

        {/* Forever E-Commerce (no link provided, keeping as static card) */}
        <motion.article
          whileHover={{ y: -4 }}
          className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-5 flex flex-col gap-3"
        >
          <p className="text-[11px] uppercase tracking-[0.22em] text-gray-400">
            Web App · E-Commerce
          </p>
          <h4 className="text-base md:text-lg font-semibold">
            Forever E-Commerce
          </h4>
          <p className="text-sm text-gray-300 leading-relaxed">
            An end-to-end e-commerce experience with product listing, cart,
            authentication, and order flows designed with a focus on UX clarity
            and performance.
          </p>
          <p className="mt-2 text-[12px] text-gray-400">
            React · Node.js · MongoDB
          </p>
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
          <h4 className="text-base md:text-lg font-semibold">
            AI Object Detection
          </h4>
          <p className="text-sm text-gray-300 leading-relaxed">
            A project exploring computer vision workflows and object detection
            pipelines, integrating model outputs into a clean, understandable UI
            for experimentation.
          </p>
          <p className="mt-2 text-[12px] text-gray-400">
            Python · CV · Model integration
          </p>
        </motion.a>
      </div>
    </div>
  </div>
</section>
<GitHubStats />


{/* CONTACT SECTION */}
<section
  id="contact"
  className="relative w-full bg-black py-24 md:py-32 px-6 md:px-16"
>
  <div className="max-w-4xl mx-auto text-center space-y-10">
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




      {/* ...keep your ABOUT / EXPERIENCE / PROJECTS / CONTACT sections as they are */}
    </main>
  );
}
