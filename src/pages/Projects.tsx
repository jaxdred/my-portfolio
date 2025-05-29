import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const projects = [
  {
    title: "LIGAW Horror Game",
    description:
      "A mobile horror/puzzle game for android. Mainly developed through Unity Game Engine using C#.",
    thumbnail: import.meta.env.BASE_URL + "projects/ligaw/SC8.png",
    images: [
      import.meta.env.BASE_URL + "projects/ligaw/SC1.png",
      import.meta.env.BASE_URL + "projects/ligaw/SC2.png",
      import.meta.env.BASE_URL + "projects/ligaw/SC3.png",
      import.meta.env.BASE_URL + "projects/ligaw/SC4.png",
      import.meta.env.BASE_URL + "projects/ligaw/SC5.png",
      import.meta.env.BASE_URL + "projects/ligaw/SC6.png",
      import.meta.env.BASE_URL + "projects/ligaw/SC7.png",
      import.meta.env.BASE_URL + "projects/ligaw/SC8.png",
    ],
  },
  {
    title: "Smart Glove + Speakify Mobile App",
    description:
      "A smart glove that can translate hand gestures into text and audio into the partner mobile app. Made using mostly flutter dart and C++ with CNN Algorithm. Innovations include emotional expression and custom gestures.",
    thumbnail: import.meta.env.BASE_URL + "projects/smartglove/SC1.jpg",
    images: [
      import.meta.env.BASE_URL + "projects/smartglove/SC1.jpg",
      import.meta.env.BASE_URL + "projects/smartglove/SC2.jpg",
      import.meta.env.BASE_URL + "projects/smartglove/SC3.jpg",
      import.meta.env.BASE_URL + "projects/smartglove/SC4.jpg",
      import.meta.env.BASE_URL + "projects/smartglove/SC5.jpg",
      import.meta.env.BASE_URL + "projects/smartglove/SC6.jpg",
      import.meta.env.BASE_URL + "projects/smartglove/SC7.jpg",
      import.meta.env.BASE_URL + "projects/smartglove/SC8.jpg",
    ],
  },
];

export default function Projects() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [slideIndex, setSlideIndex] = useState(0);
  const timeoutRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const selectedProject = projects[selectedIndex];

  const resetAutoSlide = useCallback(() => {
    if (timeoutRef.current) clearInterval(timeoutRef.current);
    timeoutRef.current = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % selectedProject.images.length);
    }, 5000);
  }, [selectedProject.images.length]);

  useEffect(() => {
    resetAutoSlide();
    return () => {
      if (timeoutRef.current) clearInterval(timeoutRef.current);
    };
  }, [resetAutoSlide]);

  const nextSlide = () => {
    setSlideIndex((prev) => (prev + 1) % selectedProject.images.length);
    resetAutoSlide();
  };

  const prevSlide = () => {
    setSlideIndex((prev) =>
      prev === 0 ? selectedProject.images.length - 1 : prev - 1
    );
    resetAutoSlide();
  };

  return (
    <section className="w-full text-white py-16 px-6 md:px-12 relative z-10">
      <h2 className="text-4xl font-semibold mb-10 text-center text-teal-300">
        Projects
      </h2>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Spotlight Section */}
        <div className="w-full lg:w-2/3 relative overflow-hidden rounded-2xl shadow-xl bg-black bg-opacity-20">
          <div className="relative h-[300px] sm:h-[400px] md:h-[500px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.img
                key={selectedProject.images[slideIndex]}
                src={selectedProject.images[slideIndex]}
                alt="Project Screenshot"
                className="absolute inset-0 w-full h-full object-contain rounded-2xl p-4"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.6 }}
              />
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-70 transition z-10"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-70 transition z-10"
            >
              <FaArrowRight />
            </button>
          </div>

          {/* Description */}
          <div className="p-4 bg-black bg-opacity-40 rounded-b-2xl">
            <h3 className="text-xl font-semibold">{selectedProject.title}</h3>
            <p className="text-sm text-gray-300 mt-1">
              {selectedProject.description}
            </p>
          </div>
        </div>

        {/* Project Tiles */}
        <div className="w-full lg:w-1/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              onClick={() => {
                setSelectedIndex(index);
                setSlideIndex(0);
              }}
              className={`cursor-pointer bg-white bg-opacity-10 p-4 rounded-xl transition hover:shadow-xl ${
                index === selectedIndex ? "ring-2 ring-teal-400" : ""
              }`}
              whileHover={{ scale: 1.03 }}
            >
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-40 object-contain bg-black rounded-md mb-3"
              />
              <h4 className="text-base font-medium text-teal-200">
                {project.title}
              </h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}