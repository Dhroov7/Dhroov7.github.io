import { useEffect, useState } from "react";
import { about, projects } from "./data";
import { AnimatePresence, motion } from "framer-motion";

export default function Terminal() {
  const [selected, setSelected] = useState(0);
  const [expanded, setExpanded] = useState<number | null>(null);

  // Mimic Justin Chi style for About section
  const aboutLines = [
    `> Dhroov.summary\n"${about.summary}"`,
    `> Dhroov.location\n${JSON.stringify(about.location)}`,
    `> Dhroov.skills\n${JSON.stringify(about.skills)}`,
    `> Dhroov.interests\n${JSON.stringify(about.interests)}`,
  ];

  // Keyboard navigation for projects
  useEffect(() => {
    const total = projects.length || 1;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        setSelected((s) => (s + 1) % total);
      } else if (e.key === "ArrowUp") {
        setSelected((s) => (s - 1 + total) % total);
      } else if (e.key === "Enter") {
        setExpanded((prev) => (prev === selected ? null : selected));
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selected, projects.length]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4 font-mono">
      {/* Name Heading */}
      <h1
        className="text-4xl font-bold mb-8 text-gray-900 text-center"
        style={{ color: "#a6a8c4" }}
      >
        &gt; Dhroov Gupta
        <span className="ml-1 cursor-blink">█</span>
      </h1>

      {/* Terminal */}
      <div
        className="max-w-3xl w-full rounded-lg border shadow-2xl overflow-hidden"
        style={{ backgroundColor: "#5a5d7a", borderColor: "#4e516d" }}
      >
        {/* Terminal Header */}
        <div
          className="flex items-center gap-2 px-4 py-2 border-b"
          style={{ backgroundColor: "#4e516d", borderColor: "#4e516d" }}
        >
          <span className="w-3 h-3 bg-red-500 rounded-full" />
          <span className="w-3 h-3 bg-yellow-500 rounded-full" />
          <span className="w-3 h-3 bg-green-500 rounded-full" />
        </div>

        {/* Terminal Body */}
        <div
          className="terminal-body p-4 text-sm md:text-base lg:text-lg space-y-2 leading-relaxed"
          style={{ fontWeight: 400 }}
        >
          {/* About Lines */}
          {aboutLines.map((line, idx) => {
            const [key, value] = line.split("\n");
            return (
              <div key={idx} className="whitespace-pre-wrap break-words">
                <span style={{ color: "#ffffff" }}>{key}</span>
                <br />
                <span style={{ color: "#fff7b3" }}>{value}</span>
                <span
                  className="ml-1 cursor-blink"
                  style={{ color: "#ffffff" }}
                >
                  {" "}
                  █
                </span>
              </div>
            );
          })}

          {/* Projects */}
          <div className="mt-4" style={{ color: "#ffffff" }}>
            &gt; Dhroov.projects
          </div>
          {projects.map((p, idx) => (
            <div key={p.name}>
              <div
                className="cursor-pointer transition-colors px-1"
                style={{
                  backgroundColor: selected === idx ? "#4e516d" : "transparent",
                  color: "#ffffff",
                  fontFamily: "inherit",
                  fontWeight: 400,
                }}
                onClick={() => setSelected(idx)}
                onDoubleClick={() => setExpanded(expanded === idx ? null : idx)}
                onMouseEnter={(e) => {
                  if (selected !== idx)
                    e.currentTarget.style.backgroundColor = "#555872";
                }}
                onMouseLeave={(e) => {
                  if (selected !== idx)
                    e.currentTarget.style.backgroundColor = "transparent";
                }}
              >
                {selected === idx ? "→" : " "} {p.name}
              </div>

              <AnimatePresence>
                {expanded === idx && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }} // 🔹 Animate close
                    transition={{ duration: 0.2 }}
                    className="ml-6 mt-1"
                    style={{ color: "#d1d1e0", fontFamily: "inherit" }}
                  >
                    {p.description.map((d, i) => (
                      <div key={i} style={{ color: "#fff7b3", fontFamily: "inherit" }}>- {d}</div>
                    ))}
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#7dcfff" }}
                      className="underline block mt-1"
                    >
                      {p.link}
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}

          {/* Contact / Social */}
          <div className="mt-4" style={{ color: "#ffffff" }}>
            &gt; Dhroov.contact
          </div>
          <div>
            <span style={{ color: "#c3b7f6" }}>[</span>
            <a
              href="https://github.com/Dhroov7"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#7dcfff", textDecoration: "none" }}
            >
              "GitHub"
            </a>
            <span style={{ color: "#c3b7f6" }}>,</span>
            <a
              href="https://www.linkedin.com/in/dhroov-gupta"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#7dcfff", textDecoration: "none" }}
            >
              "LinkedIn"
            </a>
            <span style={{ color: "#c3b7f6" }}>,</span>
            <a
              href="https://medium.com/@dhroovgupta"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#7dcfff", textDecoration: "none" }}
            >
              "Medium"
            </a>
            <span style={{ color: "#c3b7f6" }}>,</span>
            <a
              href="mailto:dhroovgupta7@gmail.com"
              style={{ color: "#7dcfff", textDecoration: "none" }}
            >
              "Email"
            </a>
            <span style={{ color: "#c3b7f6" }}>]</span>
          </div>

          {/* Resume */}
          <div className="mt-4" style={{ color: "#ffffff" }}>
            &gt; Dhroov.resume
          </div>
          <div>
            <a
              href="/dhroov-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#7dcfff", textDecoration: "none" }}
            >
              "View Resume"
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
