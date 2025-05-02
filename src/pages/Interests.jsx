import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { BookOpen, Music, Plane, Code, PawPrint, Gamepad2, MoveIcon, Move3dIcon, Video, Popcorn, Dumbbell } from "lucide-react";

const interests = [
  {
    title: "Weights",
    icon: <Dumbbell className="h-6 w-6 text-blue-500" />,
    description: "I enjoy staying active and doing a few workouts throughout the week.",
  },
  {
    title: "Travel",
    icon: <Plane className="h-6 w-6 text-orange-500" />,
    description: "Exploring new cultures and capturing moments around the world.",
  },
  {
    title: "Gaming",
    icon: <Gamepad2 className="h-6 w-6 text-green-500" />,
    description: "Relaxing with story games, indie titles, and the occasional co-op session.",
  },
  {
    title: "Reading",
    icon: <BookOpen className="h-6 w-6 text-purple-500" />,
    description: "Enjoying sci-fi, personal development books, and tech blogs.",
  },
  {
    title: "Movies/TV",
    icon: <Popcorn className="h-6 w-6 text-pink-500" />,
    description: "Always love putting on a classic movie or watching that new episode of a show.",
  },
  {
    title: "Animals",
    icon: <PawPrint className="h-6 w-6 text-yellow-600" />,
    description: "I love spending time with my pets.",
  },
];

export default function Interests() {
  return (
    <div className="min-h-screen px-4 py-8 bg-white dark:bg-gray-950 text-gray-900 dark:text-white">
      <h1 className="text-4xl font-bold text-center mb-2">My Interests</h1>
      <p className="text-center text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto">
        Here's a glimpse into what I enjoy when I'm not coding.
      </p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {interests.map((interest, index) => (
          <Card key={index} className="p-4 flex items-start space-x-4 shadow-md">
            <div>{interest.icon}</div>
            <CardContent className="p-0">
              <h2 className="text-xl font-semibold">{interest.title}</h2>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{interest.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Separator className="my-12" />

      <p className="text-center text-gray-500 text-sm">
        Want to know more? We should connect!
      </p>
    </div>
  );
}
