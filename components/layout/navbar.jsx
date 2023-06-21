"use client";

import useScroll from "@/lib/hooks/use-scroll";
import Image from "next/image";
import Link from "next/link";
import { useSignInModal } from "./sign-in-modal";
import UserDropdown from "./user-dropdown";

export default function NavBar({ session }) {
  const { SignInModal, setShowSignInModal } = useSignInModal();
  const scrolled = useScroll(50);

  return (
    <>
      <SignInModal />
      <div
        className={`fixed top-0 w-full ${scrolled
          ? "border-b border-gray-200 bg-white/50 backdrop-blur-xl"
          : "bg-yellow-700 text-amber-50"
          } z-30 transition-all`}
      >
        <div className="mx-5 flex h-16 max-w-screen-xl items-center justify-between xl:mx-auto">
          <Link href="/" className="flex items-center font-display text-2xl">
            <Image
              src="/dombra.png"
              alt="Dombra logo"
              width="35"
              height="35"
              className="mr-2 rounded-sm"
            ></Image>
            <p>Aitys Battle</p>
          </Link>
          <nav>
          <ul className="flex space-x-4">
            <li><a href="#" >Home</a></li>
            <li><a href="#" >About</a></li>
            <li><a href="#" >How It Works</a></li>
            <li><a href="#figures" >Historical Figures</a></li>
            <li><a href="#" >Contact</a></li>
          </ul>
        </nav>
          <div>
            {session ? (
              <UserDropdown session={session} />
            ) : (
              <button
                className="rounded-full bg-yellow-800 p-1.5 px-4 text-sm text-amber-50 transition-all hover:bg-white hover:text-black"
                onClick={() => setShowSignInModal(true)}
              >
                Sign In
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
