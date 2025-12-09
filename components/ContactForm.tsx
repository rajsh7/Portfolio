"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    setLoading(false);

    if (res.ok) {
      setStatus("success");
      e.target.reset();
    } else {
      setStatus("error");
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-6 w-full max-w-2xl mx-auto reveal-up"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <input
        type="text"
        name="name"
        required
        placeholder="Your Name"
        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 focus:outline-none"
      />

      <input
        type="email"
        name="email"
        required
        placeholder="Your Email"
        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 focus:outline-none"
      />

      <textarea
        name="message"
        required
        rows={5}
        placeholder="Your Message"
        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 focus:outline-none"
      ></textarea>

      <button
        type="submit"
        disabled={loading}
        className="px-8 py-3 rounded-full border border-white/20 bg-white/10 hover:bg-white/20 uppercase tracking-[0.25em]"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>

      {status === "success" && (
        <p className="text-green-400">Message sent successfully!</p>
      )}

    </motion.form>
  );
}
