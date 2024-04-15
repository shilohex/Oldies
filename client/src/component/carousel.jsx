import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Carousel({
  children: slides,
  autoslide = false,
  autoslideinterval = 3000,
}) {
  const [curr, setCurr] = useState(0);
  document.title = curr;

  const prev = () =>
    setCurr((curr) => (curr == 0 ? slides.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr == slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoslide) return;
    const slideInterval = setInterval(next, autoslideinterval);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="overflow-hidden realtive">
      <div
        className="flex transition-transform ease-in duration-700 "
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides}
      </div>
      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2 w-full  m-0 p-0 ">
          {slides.map((_, i) => (
            <div
              className={`transition-all w-3 h-3 bg-white rounded-full ${
                curr == i ? "p-2" : "bg-opacity-50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
