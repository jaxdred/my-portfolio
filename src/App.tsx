import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, Element } from "react-scroll";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { SiIndeed } from "react-icons/si";
import ScrollProgress from "./components/ScrollProgress"; // 🟢 Import here

function App() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setShowNavbar(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const updateClock = () => {
      const now = new Date().toLocaleString("en-US", {
        timeZone: "Asia/Manila",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });
      const today = new Date().toLocaleDateString("en-US", {
        timeZone: "Asia/Manila",
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      });
      setTime(now);
      setDate(today);
    };
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#0f2f28] text-white font-sora scroll-smooth relative overflow-x-hidden">
      {/* 🔵 Scroll Progress Bar */}
      <ScrollProgress />

      {/* Background Design */}
      <div className="absolute top-0 left-0 w-full h-full z-0 opacity-20 pointer-events-none">
        <svg
          className="w-full h-full"
          viewBox="0 0 800 600"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <radialGradient id="bgGradient" cx="50%" cy="50%" r="80%">
              <stop offset="0%" stopColor="#1abc9c" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
          </defs>
          <rect width="800" height="600" fill="url(#bgGradient)" />
        </svg>
      </div>

      {/* Sticky Navbar */}
      {showNavbar && (
        <motion.header
          className="fixed top-0 left-0 w-full bg-[#0f2f28]/90 backdrop-blur z-50 px-6 py-4 shadow-md"
          initial={{ y: -60 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <nav className="flex gap-6 text-lg font-semibold justify-center text-teal-300">
            {["home", "about", "projects"].map((section) => (
              <Link
                key={section}
                to={section}
                spy={true}
                smooth={true}
                duration={500}
                offset={-80}
                activeClass="!text-emerald-500 font-bold"
                className="cursor-pointer text-white/80 hover:text-teal-400 transition-colors duration-200 capitalize"
              >
                {section}
              </Link>
            ))}
          </nav>
        </motion.header>
      )}

      {/* Hero Section */}
      <Element name="home">
        <Home />
      </Element>

      {/* About Section */}
      <Element name="about">
        <section id="about" className="min-h-screen px-6 py-24 relative z-10">
          <About />
        </section>
      </Element>

      {/* Projects Section */}
      <Element name="projects">
        <section id="projects" className="min-h-screen px-6 py-24 relative z-10">
          <Projects />
        </section>
      </Element>

      {/* Footer Section */}
      <Element name="footer">
        <footer className="px-6 py-10 bg-[#0d251f] text-white/80 relative z-10">
          <div className="flex justify-between items-center flex-col md:flex-row gap-6">
            <div className="flex gap-4 text-2xl">
              <a
                href="https://www.facebook.com/Reddddddd3/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-emerald-400 transition-colors duration-200 transform hover:scale-110"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.linkedin.com/in/jarren-red-sanchez-092835311/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-emerald-400 transition-colors duration-200 transform hover:scale-110"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://profile.indeed.com/p/jarrenreds-8xq380m"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-emerald-400 transition-colors duration-200 transform hover:scale-110"
              >
                <SiIndeed />
              </a>
            </div>

            <Link
              to="home"
              smooth={true}
              duration={500}
              offset={-80}
              className="text-sm text-white/80 hover:text-emerald-400 cursor-pointer hover:underline transition-colors duration-200"
            >
              Back to top ↑
            </Link>

            <div className="text-right animate-fade-in-up">
              <div className="text-sm text-emerald-400 font-mono tracking-wide">
                {time}
              </div>
              <div className="text-xs text-white/70 font-light">{date}</div>
            </div>
          </div>
        </footer>
      </Element>
    </div>
  );
}

export default App;