"use client";
import { useState } from "react";
import useScroll from "@/lib/hooks/use-scroll";
import Image from "next/image";
import Link from "next/link";
import { useSignInModal } from "./sign-in-modal";
import UserDropdown from "./user-dropdown";

import "@fontsource/unica-one";

export default function NavBar({ session }) {
  const { SignInModal, setShowSignInModal } = useSignInModal();
  const scrolled = useScroll(50);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <SignInModal />
      <div
        className={`fixed top-0  w-full ${
          scrolled
            ? "border-b border-gray-200 bg-white/50 backdrop-blur-xl"
            : "bg-[#B47878] text-white"
        } z-30 font-headline transition-all`}
      >
        <div className="mx-5 flex h-16 max-w-screen-xl items-center justify-between xl:mx-auto">
          <Link href="/" className="flex items-center text-2xl">
            <Image
              src="/dombra.png"
              alt="Dombra logo"
              width="35"
              height="35"
              className="mr-2 rounded-sm"
            ></Image>
            <p>Aitys Battle (Demo)</p>
          </Link>
          <nav className="hidden md:block">
            <ul className="flex space-x-4">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <a href="/figures">Historical Figures</a>
              </li>
              <li>
                <a href="/contacts">Contacts</a>
              </li>
            </ul>
          </nav>
          <div className="flex items-center">
            {session ? (
              <UserDropdown session={session} />
            ) : (
              <>
                <button
                  className="rounded-full bg-[#593440] p-1.5 px-4 text-sm text-amber-50 transition-all hover:bg-white hover:text-black md:hidden"
                  onClick={() => setShowSignInModal(true)}
                >
                  Sign In
                </button>
                <button
                  className="hidden rounded-full bg-[#593440] p-1.5 px-4 text-sm text-amber-50 transition-all hover:bg-white hover:text-black md:inline-block"
                  onClick={() => setShowSignInModal(true)}
                >
                  Sign In
                </button>
              </>
            )}
            <button
              className="ml-4 focus:outline-none md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                // Menu icon
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        {isOpen && (
          <>
            <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
            <div className="fixed bottom-0 right-0 top-0 z-50 w-[80%] max-w-xs bg-[#B47878] p-4 shadow-lg">
              {/* Close button */}
              <button
                className="mb-4 ml-auto focus:outline-none"
                onClick={() => setIsOpen(false)}
              >
                {/* Close icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Menu items */}
              <ul className="flex flex-col space-y-4">
                <li>
                  <a href="/" className="block px-4 py-2 hover:bg-gray-100">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    How It Works
                  </a>
                </li>
                <li>
                  <a
                    href="#figures"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Historical Figures
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Contact
                  </a>
                </li>
              </ul>
              {!session && (
                <button
                  className="mt-8 rounded-full bg-[#593440] p-1.5 px-4 text-sm text-amber-50 transition-all hover:bg-white hover:text-black"
                  onClick={() => {
                    setShowSignInModal(true);
                    setIsOpen(false);
                  }}
                >
                  Sign In
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
}
