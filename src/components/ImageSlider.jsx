import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
//import { Button } from "@/components/ui/button";

const sliderData = [
  {
    img: "./public/p1.jpg",
    text: "Slide 1 Description Here",
  },
  {
    img: "./public/p2.jpg",
    text: "Slide 2 Description Here",
  },
  {
    img: "./public/p3.jpg",
    text: "Slide 3 Description Here",
  },
  {
    img: "./public/p4.jpg",
    text: "Slide 4 Description Here",
  },
  {
    img: "./public/p5.jpg",
    text: "Slide 5 Description Here",
  },
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderData.length);
    }, 2000);

    return () => clearInterval(slideInterval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? sliderData.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-auto flex h-[800px]  items-center justify-center overflow-hidden rounded-xl">
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={currentIndex}
          className="w-full flex transition-all duration-100 ease-in-out  rounded-xl "
          initial={{ opacity: -10, x: -100 }}
          animate={{ opacity: 1, x: 1 }}
          exit={{ opacity: 0, x: -1 }}
        >
          {/* Image Section with Hover Effect */}
          <div className="relative w-4/4">
            <img
              src={sliderData[currentIndex].img}
              alt={sliderData[currentIndex].text}
              className="w-full object-cover rounded-xl shadow-lg"
            />
            <div className="absolute inset-0  bg-opacity-10 text-white p-4 
            rounded-xl flex flex-col justify-center opacity-0 hover:opacity-100 transition-opacity">
              <h2 className="text-xl font-bold mb-2">{sliderData[currentIndex].text}</h2>
              <p className="text-sm">Explore the beautiful and informative slides!</p>
              <button className="mt-4">Learn More</button>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-2 bg-gray-300 text-white p-2 rounded-full  "
      >
        &#8249;
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 bg-gray-300 text-white p-2 rounded-full"
      >
        &#8250;
      </button>
    </div>
  );
};

export default ImageSlider;
