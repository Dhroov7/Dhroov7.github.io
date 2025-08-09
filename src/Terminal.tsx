import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { about, projects } from "./data";

export default function Terminal() {
  const [selected, setSelected] = useState(0);
  const [expanded, setExpanded] = useState<number | null>(null);
  const [typedText, setTypedText] = useState<string[]>([]);
  const aboutLines = [
    `Role: ${about.role}`,
    `Location: ${about.location}`,
    `Skills: ${about.skills}`,
    `Interests: ${about.interests}`,
    `Summary: ${about.summary}`
  ];

  // Typing animation
  useEffect(() => {
    let line = 0;
    let char = 0;
    const interval = setInterval(() => {
      if (line < aboutLines.length) {
        const current = aboutLines[line];
        if (char < current.length) {
          setTypedText(prev => {
            const copy = [...prev];
            copy[line] = (copy[line] || "") + current[char];
            return copy;
          });
          char++;
        } else {
          line++;
          char = 0;
        }
      } else {
        clearInterval(interval);
      }
    }, 15);
    return () => clearInterval(interval);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        setSelected(s => (s + 1) % projects.length);
      } else if (e.key === "ArrowUp") {
        setSelected(s => (s - 1 + projects.length) % projects.length);
      } else if (e.key === "Enter") {
        setExpanded(prev => (prev === selected ? null : selected));
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <div className="max-w-3xl mx-auto mt-10 rounded-lg border border-gray-300 bg-gray-50 shadow-lg">
      {/* Terminal Header */}
      <div className="flex items-center gap-2 px-4 py-2 bg-gray-200 rounded-t-lg">
        <span className="w-3 h-3 bg-red-500 rounded-full"></span>
        <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
        <span className="w-3 h-3 bg-green-500 rounded-full"></span>
      </div>

      {/* Terminal Body */}
      <div className="p-4 text-sm space-y-2">
        {typedText.map((line, idx) => (
          <div key={idx}>&gt; {line}</div>
        ))}

        <div className="mt-4 font-bold">&gt; Projects:</div>
        {projects.map((p, idx) => (
          <div key={p.name}>
            <div
              className={`cursor-pointer ${
                selected === idx ? "bg-gray-200" : ""
              }`}
              onClick={() => setSelected(idx)}
              onDoubleClick={() => setExpanded(expanded === idx ? null : idx)}
            >
              {selected === idx ? "→" : " "} {p.name}
            </div>
            {expanded === idx && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="ml-6 mt-1 text-gray-700"
              >
                {p.description.map((d, i) => (
                  <div key={i}>- {d}</div>
                ))}
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline block mt-1"
                >
                  {p.link}
                </a>
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
