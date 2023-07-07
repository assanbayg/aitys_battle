import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/authOptions";
import Landing from "@/components/home/landing";
import Link from "next/link";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return session !== null ? (
    <Link
      className="rounded-full bg-yellow-800 p-5 px-16 text-5xl text-amber-50 transition-all hover:bg-white hover:text-black"
      href="/aitys"
    >
      Start
    </Link>
  ) : (
    <Landing />
  );
}
