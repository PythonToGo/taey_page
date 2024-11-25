import Link from "next/link";
import Image from "next/image";
import DarkModeToggleButton from "./dark-mode-toggle-button";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();

  return (
    <header className="text-gray-600 body-font bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        {/* Logo */}
        <Link href="/" className="flex title-font font-medium items-center text-gray-900 dark:text-blue-300 mb-4 md:mb-0">
          <Image src="/hedgehedge.png" alt="hedgehog logo" width={50} height={50} />
          <span className="ml-3 text-xl">Taey&apos;s World</span>
        </Link>

        {/* Navigation */}
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link href="/" className={`mr-5 hover:text-gray-500 ${router.pathname === "/" ? "text-blue-500 font-bold" : ""}`}>
            Home
          </Link>
          <Link href="/about-me" className={`mr-5 hover:text-gray-500 ${router.pathname === "/about-me" ? "text-blue-500 font-bold" : ""}`}>
            About Me
          </Link>
          <Link href="/projects" className={`mr-5 hover:text-gray-500 ${router.pathname === "/projects" ? "text-blue-500 font-bold" : ""}`}>
            Projects
          </Link>
          <Link href="/contacts" className={`mr-5 hover:text-gray-500 ${router.pathname === "/contacts" ? "text-blue-500 font-bold" : ""}`}>
            Contact
          </Link>
        </nav>

        {/* Dark Mode Toggle */}
        <DarkModeToggleButton />
      </div>
    </header>
  );
}
