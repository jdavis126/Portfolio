import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useRef, useEffect } from "react";

import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// Configure Leaflet marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

// Travel data
const travelSpots = [
  {
    location: "Glacier National Park, Montana",
    images: ["/images/glacier4.jpg", "/images/glacier2.jpg", "/images/glacier3.jpg"],
    description: "A showcase of melting glaciers, alpine meadows, carved valleys, and spectacular lakes.",
    position: [48.6968, -113.7183],
  },
  {
    location: "Zion National Park, Utah",
    images: ["/images/zion1.jpg", "/images/zion2.jpg"],
    description: "Gaze up at massive sandstone cliffs of cream, pink, and red that soar into a brilliant blue sky.",
    position: [37.2982, -113.0263],
  },
  {
    location: "Big Bend National Park, Texas",
    images: ["/images/bigbend1.jpg", "/images/bigbend2.jpg", "/images/bigbend3.jpg"],
    description: "A place in Far West Texas where night skies are dark as coal and rivers carve temple-like canyons in ancient limestone.",
    position: [29.2656, -103.2500],
  },
];

function SpotCard({ spot }) {
  const sliderRef = useRef(null);
  const [sliderInstanceRef, slider] = useKeenSlider({
    loop: true,
    slides: {
      perView: 1,
    },
  });

  useEffect(() => {
    if (sliderRef.current && !sliderInstanceRef.current) {
      sliderInstanceRef(sliderRef.current);
    }
  }, [sliderRef]);

  return (
    <Card className="overflow-hidden shadow-lg rounded-xl">
      <div ref={sliderRef} className="keen-slider h-60">
        {spot.images.map((src, i) => (
          <div key={i} className="keen-slider__slide">
            <img src={src} alt={`${spot.location} ${i + 1}`} className="h-60 w-full object-cover" />
          </div>
        ))}
      </div>
      <CardContent className="p-4">
        <h2 className="text-xl font-semibold mb-1">{spot.location}</h2>
        <p className="text-sm text-gray-600 dark:text-gray-300">{spot.description}</p>
      </CardContent>
    </Card>
  );
}

export default function Travel() {
  return (    
    <div className="min-h-screen px-4 py-8 bg-white dark:bg-gray-950 text-gray-900 dark:text-white">
      <h1 className="text-4xl font-bold text-center mb-2">🌍 Places I Have Traveled</h1>
      <p className="text-center text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto">
        Traveling is one of my favorite ways to learn, explore, and find inspiration.
        Here's a look at some memorable spots I've been to.
      </p>

      {/* Travel Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {travelSpots.map((spot, index) => (
          <SpotCard key={index} spot={spot} />
        ))}
      </div>

      <Separator className="my-12" />

      {/* Leaflet Map */}
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">🗺️ Travel Map</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Click on a marker to learn more about each destination.
        </p>

        <div className="h-[500px] w-full rounded-lg overflow-hidden shadow-md">
          <MapContainer center={[39.5, -98.35]} zoom={3} scrollWheelZoom={true} className="h-full w-full z-0">
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {travelSpots.map((spot, index) => (
              <Marker key={index} position={spot.position}>
                <Popup>
                  <strong>{spot.location}</strong>
                  <br />
                  {spot.description}
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </div>
  );
}
