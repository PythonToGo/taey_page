import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaKaggle, FaInstagram, FaEnvelope } from "react-icons/fa";
import { SiGitlab, SiKakao } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap md:text-left text-center order-first">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4"></div>
        </div>
      </div>

      <div className="bg-gray-100">
        <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
          <Link href="/" legacyBehavior>
            <a
              className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
              aria-label="Homepage"
            >
              <Image src="/hedgehedge.png" alt="Hedgehog logo" width={50} height={50} />
              <span className="ml-3 text-xl">Taey&apos;s World</span>
            </a>
          </Link>

          <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
            © 2024 Taey —{" "}
            <a
              href="mailto:pythontogoplease@gmail.com"
              className="text-gray-600 ml-1"
              aria-label="Email Taey"
            >
              @PythonToGo
            </a>
          </p>

          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            {/* Email */}
            <Link href="mailto:pythontogoplease@gmail.com" legacyBehavior>
              <a className="ml-3 text-gray-500" aria-label="Send Email">
                <FaEnvelope className="w-6 h-6" />
              </a>
            </Link>

            {/* LinkedIn */}
            <Link href="https://www.linkedin.com/in/taeyoungkimtaey/" legacyBehavior>
              <a className="ml-3 text-gray-500" aria-label="LinkedIn Profile">
                <FaLinkedin className="w-6 h-6" />
              </a>
            </Link>

            {/* GitHub */}
            <Link href="https://github.com/PythonToGo" legacyBehavior>
              <a className="ml-3 text-gray-500" aria-label="GitHub Profile">
                <FaGithub className="w-6 h-6" />
              </a>
            </Link>

            {/* GitLab */}
            <Link href="https://gitlab.com/PythonToGo" legacyBehavior>
              <a className="ml-3 text-gray-500" aria-label="GitLab Profile">
                <SiGitlab className="w-6 h-6" />
              </a>
            </Link>

            {/* Kakao */}
            <Link href="https://open.kakao.com/o/so2ZKE5f" legacyBehavior>
              <a className="ml-3 text-gray-500" aria-label="Open Kakao Chat">
                <SiKakao className="w-6 h-6" />
              </a>
            </Link>

            {/* Instagram */}
            <Link href="https://www.instagram.com/buch.bleibt.immer.mit.mir/" legacyBehavior>
              <a className="ml-3 text-gray-500" aria-label="Instagram Profile">
                <FaInstagram className="w-6 h-6" />
              </a>
            </Link>

            {/* Kaggle */}
            <Link href="https://www.kaggle.com/pythontogoplease" legacyBehavior>
              <a
                className="ml-3 text-gray-500"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Kaggle Profile"
              >
                <FaKaggle className="w-6 h-6" />
              </a>
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}

