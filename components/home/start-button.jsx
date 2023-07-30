"use client";
import Link from "next/link";
import { useState } from "react";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/authOptions";
import UserDropdown from "../layout/user-dropdown";
import { useSignInModal } from "../layout/sign-in-modal";

export default async function Start() {
  const session = await getServerSession(authOptions);
  return <StartButton session={session} />;
}

function StartButton({ session }) {
  const { SignInModal, setShowSignInModal } = useSignInModal();

  return (
    <>
      <SignInModal />
      {session ? (
        <UserDropdown session={session} />
      ) : (
        <button
          className="mt-8 rounded-2xl bg-[#F08A8A] px-12 py-3 text-3xl text-white"
          onClick={() => setShowSignInModal(true)}
        >
          Start Aitys
        </button>
      )}
    </>
  );
}
