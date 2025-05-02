import { Mail, Github, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen px-4 py-16 bg-white dark:bg-gray-950 text-gray-900 dark:text-white flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-4">📬 Contact Me</h1>
      <p className="text-gray-600 dark:text-gray-400 text-center max-w-lg mb-8">
        Whether you want to collaborate, ask questions, or just say hi — feel free to reach out!
      </p>

      <div className="flex space-x-8 mt-4 text-gray-700 dark:text-gray-300">
        <a
          href="mailto:jdavis126@unl.edu"
          className="flex items-center space-x-2 hover:text-blue-600 transition-colors"
        >
          <Mail className="w-6 h-6" />
          <span>Email</span>
        </a>

        <a
          href="https://github.com/jdavis126"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 hover:text-blue-600 transition-colors"
        >
          <Github className="w-6 h-6" />
          <span>GitHub</span>
        </a>

        <a
          href="https://linkedin.com/in/jaden-davis-364a7b358/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 hover:text-blue-700 transition-colors"
        >
          <Linkedin className="w-6 h-6" />
          <span>LinkedIn</span>
        </a>
      </div>
    </div>
  );
}
