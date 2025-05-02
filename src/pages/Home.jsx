import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center bg-white dark:bg-gray-950">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
        Hi, I'm Jaden Davis 👋
      </h1>
      <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-xl mb-6">
        I'm a Computer Science student passionate about building clean, user-focused websites and applications. Welcome to my portfolio!
      </p>
      <Button asChild>
        <a href="#/contact">Get in Touch</a>
      </Button>
    </div>
  );
}
