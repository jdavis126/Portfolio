import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center bg-white dark:bg-gray-950">
      {/* Profile or Banner Image */}
      <img
        src="/images/Jaden.jpg" // make sure this file exists in your public/images folder
        alt="Jaden Davis"
        className="w-40 h-40 rounded-full mb-6 object-cover border-4 border-gray-300 dark:border-gray-700 shadow-md"
      />

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
