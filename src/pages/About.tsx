import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiVite,
  SiTypescript,
  SiTailwindcss,
  SiPhp,
  SiPython,
  SiFlutter,
  SiDart,
  SiCplusplus,
  SiSharp,
  SiGithub,
  SiAndroidstudio,
  SiArduino,
  SiUnity,
  SiGit,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { DiVisualstudio } from "react-icons/di";
import RevealOnScroll from "../components/RevealOnScroll";

const personalInfo = [
  { label: "Name", value: "Jarren Red P. Sanchez" },
  { label: "Location", value: "Biñan City, Laguna" },
  { label: "Email", value: "jarrenredsanchez@gmail.com" },
  { label: "Education", value: "Bachelor of Science in Computer Science" },
];

const languages = [
  { name: "HTML", icon: SiHtml5 },
  { name: "CSS", icon: SiCss3 },
  { name: "JavaScript", icon: SiJavascript },
  { name: "ReactJS", icon: SiReact },
  { name: "Vite", icon: SiVite },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "PHP", icon: SiPhp },
  { name: "Python", icon: SiPython },
  { name: "Java", icon: FaJava },
  { name: "Flutter", icon: SiFlutter },
  { name: "Dart", icon: SiDart },
  { name: "C++", icon: SiCplusplus },
  { name: "C#", icon: SiSharp },
];

const tools = [
  { name: "Visual Studio Code", icon: DiVisualstudio },
  { name: "Android Studio", icon: SiAndroidstudio },
  { name: "Arduino IDE", icon: SiArduino },
  { name: "Unity Game Engine", icon: SiUnity },
  { name: "Git CMD  ", icon: SiGit },
  { name: "GitHub", icon: SiGithub },
];

export default function About() {
  return (
    <div className="relative bg-dark-jade py-16 px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Radial Gradient Background */}
      <svg
        className="absolute top-0 left-1/2 -translate-x-1/2 opacity-10 pointer-events-none"
        width="800"
        height="800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="400" cy="400" r="400" fill="url(#paint0_radial)" />
        <defs>
          <radialGradient
            id="paint0_radial"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(400 400) rotate(90) scale(400)"
          >
            <stop stopColor="#0F5132" />
            <stop offset="1" stopColor="#134E37" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>

      <RevealOnScroll>
        <h2 className="text-4xl font-semibold mb-6 text-white text-center">
          About Me
        </h2>
      </RevealOnScroll>

      {/* About Me paragraph */}
      <RevealOnScroll>
        <p className="max-w-5xl mx-auto text-lg text-white mb-16 leading-relaxed text-justify">
          I am passionate about using technology to solve problems through
          critical thinking and innovation. I am tech savvy and continuously
          learning new skills to make better use of technology. With 4 years of
          experience pursuing a Bachelor of Science in Computer Science, I have
          developed strong skills in web and mobile app development, networking
          (from Cisco Networking Academy), and knowledge about hardware. I am a
          fast learner, quick to adapt, and open to opportunities as a developer
          in various domains.
        </p>
      </RevealOnScroll>

      {/* Personal Info Grid */}
      <RevealOnScroll>
        <div className="mb-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {personalInfo.map(({ label, value }) => (
            <div
              key={label}
              className="bg-white bg-opacity-10 rounded-lg p-6 break-words"
            >
              <p className="text-sm uppercase tracking-widest text-gray-300 mb-1">
                {label}
              </p>
              <p className="text-white font-semibold break-words">{value}</p>
            </div>
          ))}
        </div>
      </RevealOnScroll>

      {/* Languages & Frameworks */}
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-white text-center">
              Languages & Frameworks
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-6">
              {languages.map(({ name, icon: Icon }) => (
                <div
                  key={name}
                  className="flex flex-col items-center space-y-1 text-center text-white cursor-pointer transition-transform duration-300 hover:scale-110 hover:drop-shadow-lg"
                  title={name}
                >
                  <Icon size={36} className="text-teal-400" />
                  <span className="text-sm">{name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Editors */}
          <div className="mt-16">
            <h3 className="text-2xl font-semibold mb-6 text-white text-center">
              Tools & Editors
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-6">
              {tools.map(({ name, icon: Icon }) => (
                <div
                  key={name}
                  className="flex flex-col items-center space-y-1 text-center text-white cursor-pointer transition-transform duration-300 hover:scale-110 hover:drop-shadow-lg"
                  title={name}
                >
                  <Icon size={36} className="text-green-400" />
                  <span className="text-sm">{name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </div>
  );
}