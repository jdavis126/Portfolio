"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  BookOpen, Music, Plane, Code, PawPrint, Gamepad2, Popcorn, Dumbbell,
} from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"

const interests = [
  {
    title: "Weights",
    icon: <Dumbbell className="h-6 w-6 text-blue-500" />,
    description: "I enjoy staying active and doing a few workouts throughout the week.",
    extra: "I usually follow a push/pull/legs split and enjoy both strength training and conditioning.",
  },
  {
    title: "Travel",
    icon: <Plane className="h-6 w-6 text-orange-500" />,
    description: "Exploring new cultures and capturing moments around the world.",
    extra: "My favorite destinations so far have been Japan and the Pacific Northwest. I always travel with a camera!",
  },
  {
    title: "Gaming",
    icon: <Gamepad2 className="h-6 w-6 text-green-500" />,
    description: "Relaxing with story games, indie titles, and the occasional co-op session.",
    extra: "Some of my favorites include Celeste, Hollow Knight, and cooperative games like It Takes Two.",
  },
  {
    title: "Reading",
    icon: <BookOpen className="h-6 w-6 text-purple-500" />,
    description: "Enjoying sci-fi, personal development books, and tech blogs.",
    extra: "I love anything by Brandon Sanderson and also enjoy books on productivity, tech, and habit-building.",
  },
  {
    title: "Movies/TV",
    icon: <Popcorn className="h-6 w-6 text-pink-500" />,
    description: "Always love putting on a classic movie or watching that new episode of a show.",
    extra: "I enjoy thought-provoking shows, thrillers, and the occasional nostalgic rewatch (like LOTR or Avatar: TLA).",
  },
  {
    title: "Animals",
    icon: <PawPrint className="h-6 w-6 text-yellow-600" />,
    description: "I love spending time with my pets.",
    extra: "I have a goofy lab and two cats. I love visiting animal shelters and nature parks when I travel too.",
  },
]

export default function Interests() {
  const [selected, setSelected] = useState(null)

  return (
    <div className="min-h-screen px-4 py-8 bg-white dark:bg-gray-950 text-gray-900 dark:text-white">
      <h1 className="text-4xl font-bold text-center mb-2">My Interests</h1>
      <p className="text-center text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto">
        Here's a glimpse into what I enjoy when I'm not coding.
      </p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {interests.map((interest, index) => (
          <Card
            key={index}
            className="p-4 flex items-start space-x-4 shadow-md transition-transform duration-200 ease-in-out transform hover:scale-[1.03] hover:shadow-xl cursor-pointer"
            onClick={() => setSelected(interest)}
          >
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

      {selected && (
        <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                {selected.icon}
                {selected.title}
              </DialogTitle>
              <DialogDescription>{selected.extra}</DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      )}
    </div>
  )
}
