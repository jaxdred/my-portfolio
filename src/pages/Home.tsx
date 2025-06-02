import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const words = [
  "Web Developer",
  "Software Developer",
  "Mobile App Developer",
  "Game Developer",
  "IT Support",
];

function ManualTypewriter() {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [pause, setPause] = useState(false);

  useEffect(() => {
    if (pause) return;

    const currentWord = words[wordIndex];
    const typingSpeed = deleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(currentWord.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
        if (charIndex + 1 === currentWord.length) {
          setPause(true);
          setTimeout(() => {
            setPause(false);
            setDeleting(true);
          }, 1500); // <- Delay after typing a full word
        }
      } else {
        setText(currentWord.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
        if (charIndex - 1 === 0) {
          setDeleting(false);
          setWordIndex((wordIndex + 1) % words.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, wordIndex, pause]);

  return (
    <h2 className="text-2xl md:text-3xl font-semibold text-white/90 mb-6">
      I'm a <span className="text-emerald-400">{text}|</span>
    </h2>
  );
}

export default function Home() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <>
      <motion.section
        id="home"
        className="min-h-screen flex flex-col justify-center items-center text-center px-4 relative z-10 -mt-12"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <img
          src={`${import.meta.env.BASE_URL}profile.jpg`}
          alt="My Picture"
          className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover mb-6 shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-emerald-400/40"
        />
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-teal-300">
          Hi, I'm Jarren Red P. Sanchez
        </h1>

        <ManualTypewriter />

        <p className="text-lg md:text-xl max-w-2xl text-white/90 leading-relaxed mb-6">
          A passionate Computer Science graduate with a love for crafting elegant websites
          and mobile apps, and a proven ability to learn and adapt rapidly.
        </p>

        {/* See My Resume Button */}
        <button
          onClick={() => setIsResumeOpen(true)}
          className="px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white rounded-md transition"
        >
          See My Resume
        </button>
      </motion.section>

      {/* Resume Modal */}
      {isResumeOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setIsResumeOpen(false)} // close modal on outside click
        >
          <div
            className="bg-white rounded-lg max-w-3xl w-full max-h-[80vh] p-4 relative flex justify-center items-center"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside modal
          >
            <button
              onClick={() => setIsResumeOpen(false)}
              className="absolute top-2 right-2 text-gray-700 hover:text-gray-900 font-bold text-2xl"
              aria-label="Close resume modal"
            >
              &times;
            </button>
            <img
              src={`${import.meta.env.BASE_URL}resume.png`}
              alt="Resume"
              className="max-h-[75vh] object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}