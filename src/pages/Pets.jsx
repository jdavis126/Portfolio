import { useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const lizzyImages = [
  { src: "./images/lizzy1.jpg"},
  { src: "./images/lizzy2.jpg"},
  { src: "./images/lizzy4.jpeg"},
];

const maggieImages = [
  { src: "./images/maggie1.jpg"},
  { src: "./images/maggie2.jpg"},
];

export default function Pets() {
  const [lizzySliderRef, lizzySlider] = useKeenSlider({
    loop: true,
    slides: { perView: 1 },
  });

  const [maggieSliderRef, maggieSlider] = useKeenSlider({
    loop: true,
    slides: { perView: 1 },
  });

  useEffect(() => {
    const lizzyInterval = setInterval(() => {
      if (lizzySlider.current) {
        lizzySlider.current.next();
      }
    }, 10000);

    const maggieInterval = setInterval(() => {
      if (maggieSlider.current) {
        maggieSlider.current.next();
      }
    }, 10000);

    return () => {
      clearInterval(lizzyInterval);
      clearInterval(maggieInterval);
    };
  }, [lizzySlider, maggieSlider]);

  return (
    <div className="min-h-screen px-4 py-8 bg-white dark:bg-gray-950 text-gray-900 dark:text-white">
      <h1 className="text-4xl font-bold text-center mb-10">Meet My Pets</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Lizzy */}
        <div>
          <h2 className="text-2xl font-semibold text-center mb-4">Lizzy</h2>
          <div ref={lizzySliderRef} className="keen-slider">
            {lizzyImages.map((img, i) => (
              <div key={i} className="keen-slider__slide">
                <Card className="overflow-hidden shadow-lg rounded-xl">
                  <img src={img.src} alt={img.alt} className="h-80 w-full object-cover" />
                  <CardContent className="p-4 text-center">
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{img.alt}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Maggie */}
        <div>
          <h2 className="text-2xl font-semibold text-center mb-4">Maggie</h2>
          <div ref={maggieSliderRef} className="keen-slider">
            {maggieImages.map((img, i) => (
              <div key={i} className="keen-slider__slide">
                <Card className="overflow-hidden shadow-lg rounded-xl">
                  <img src={img.src} alt={img.alt} className="h-80 w-full object-cover" />
                  <CardContent className="p-4 text-center">
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{img.alt}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}
