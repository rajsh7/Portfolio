"use client";

import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  pdf,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 11,
    fontFamily: "Helvetica",
    backgroundColor: "#ffffff",
  },
  header: {
    marginBottom: 12,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  title: {
    fontSize: 11,
    marginTop: 2,
  },
  sectionTitle: {
    fontSize: 12,
    marginTop: 16,
    marginBottom: 6,
    fontWeight: "bold",
  },
  text: {
    marginBottom: 2,
  },
});

function ResumeDocument() {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.name}>Raj Sharma</Text>
          <Text style={styles.title}>
            Frontend-Focused Full Stack Developer (MERN · Next.js · Animations)
          </Text>
          <Text style={styles.text}>Email: rajsharma74411@gmail.com</Text>
          <Text style={styles.text}>Location: India · IST</Text>
        </View>

        <Text style={styles.sectionTitle}>Summary</Text>
        <Text style={styles.text}>
          Frontend-leaning full stack developer with experience across MERN,
          backend services, and AI-assisted workflows. I build animated,
          experience-driven interfaces with React, Next.js, and modern web
          tooling.
        </Text>

        <Text style={styles.sectionTitle}>Experience</Text>
        <Text style={styles.text}>
          • Full Stack Developer Intern – Purple Merit Technologies (MERN stack,
          JWT auth, REST APIs)
        </Text>
        <Text style={styles.text}>
          • Backend Developer Intern – Shunya Ekai Technologies (Node.js,
          Express, MongoDB)
        </Text>
        <Text style={styles.text}>
          • Freelance AI Trainer – Outlier (C++, Python, Go, LLM evaluation)
        </Text>
        <Text style={styles.text}>
          • Subject Matter Expert (CS) – Chegg (DSA, DBMS, OS, SE)
        </Text>

        <Text style={styles.sectionTitle}>Skills</Text>
        <Text style={styles.text}>
          Frontend: React, Next.js, Tailwind, animations (Framer Motion, GSAP)
        </Text>
        <Text style={styles.text}>
          Backend: Node.js, Express, MongoDB, REST APIs
        </Text>
        <Text style={styles.text}>
          Languages: JavaScript, Java, SQL, C++, Python
        </Text>

        <Text style={styles.sectionTitle}>Education</Text>
        <Text style={styles.text}>
          B.Tech in Computer Science – Amity University, Gwalior
        </Text>
      </Page>
    </Document>
  );
}

export default function ResumeDownloadButton() {
  const handleDownload = async () => {
    const blob = await pdf(<ResumeDocument />).toBlob();
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Raj-Sharma-Resume.pdf";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <button
      onClick={handleDownload}
      className="
        inline-flex items-center gap-2
        px-6 py-3 rounded-full
        border border-white/20
        bg-white/10
        text-xs md:text-sm uppercase tracking-[0.25em]
        hover:bg-white/20
      "
    >
      Download Resume (PDF)
    </button>
  );
}
