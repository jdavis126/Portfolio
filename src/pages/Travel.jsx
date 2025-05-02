import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

// Travel image cards
const travelSpots = [
  {
    location: "Tokyo, Japan",
    image: "/images/japan.jpg",
    description: "Cherry blossoms in Shinjuku Gyoen National Garden 🌸",
    position: [35.682839, 139.759455],
  },
  {
    location: "Zion National Park, USA",
    image: "/images/zion.jpg",
    description: "Stunning canyon hikes and sunrise views ⛰️",
    position: [37.2982, -113.0263],
  },
  {
    location: "Paris, France",
    image: "/images/paris.jpg",
    description: "Caught the Eiffel Tower at golden hour ✨",
    position: [48.8566, 2.3522],
  },
];

export default function Travel() {
  return (
    <div className="min-h-screen px-4 py-8 bg-white dark:bg-gray-950 text-gray-900 dark:text-white">
      <h1 className="text-4xl font-bold text-center mb-2">🌍 Places I’ve Traveled</h1>
      <p className="text-center text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto">
        Traveling is one of my favorite ways to learn, explore, and find inspiration.
        Here's a look at some memorable spots I've been to.
      </p>

      {/* Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {travelSpots.map((spot, index) => (
          <Card key={index} className="overflow-hidden shadow-lg rounded-xl">
            <img src={spot.image} alt={spot.location} className="h-60 w-full object-cover" />
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold mb-1">{spot.location}</h2>
              <p className="text-sm text-gray-600 dark:text-gray-300">{spot.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Separator className="my-12" />

      {/* Map */}
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">🗺️ Travel Map</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Click on a marker to learn more about each destination.
        </p>

        <div className="h-[500px] w-full rounded-lg overflow-hidden shadow-md">
          <MapContainer center={[20, 0]} zoom={2} scrollWheelZoom={true} className="h-full w-full z-0">
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
