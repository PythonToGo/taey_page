import Link from 'next/link';
import DarkModeToggleButton from './dark-mode-toggle-button';
// import HedgehedgeSvg from '../../../public/hedgehedge.svg';
import Image from 'next/image';

export default function Header() {
  return (
      <div>
          
          <header className="text-gray-600 body-font">
          <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            
          <Link href="/" legacyBehavior>
            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25" />
            </svg>

              <span className="ml-3 text-xl dark:text-blue-300">Taey&apos;s World</span>
            </a>
          </Link>

            <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link href="/" legacyBehavior>
              <a className="mr-5 hover:text-gray-500">Home</a>
            </Link>

            <Link href="/projects" legacyBehavior>
              <a className="mr-5 hover:text-gray-500" id="/projects">Projects</a>
            </Link>

            <Link href="/contacts" legacyBehavior>
              <a className="mr-5 hover:text-gray-500" id="/contacts">Contact</a>
              {/* <a id="/about-me">Contact</a> */}
            </Link>
              {/* <a className="mr-5 hover:text-gray-900">Fourth Link</a> */}
            </nav>
            <DarkModeToggleButton/>

          </div>
        </header>
      </div>
  );
}

