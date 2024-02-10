"use client";

import Link from "next/link";

import { BookOpenIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();

  return (
    <nav
      className="flex justify-center bg-light/75 backdrop-blur-md sticky border-b border-light-3
    top-0 w-full py-5 z-50"
    >
      <div className="flex px-6 max-w-screen-lg justify-between w-full">
        <Link
          href="/"
          className="flex justify-center items-center gap-1 cursor-pointer"
        >
          <BookOpenIcon className="w-7 h-7 text-primary" />
          <p className="text-primary text-sm font-medium hidden sm:block">
            My Blog
          </p>
        </Link>

        <ul className="flex items-center gap-x-8 text-sm font-medium ">
          <Link href="/" className="li-decoration-navbar hidden sm:block">
            Home
          </Link>
          <Link href="/blogs" className="li-decoration-navbar hidden sm:block">
            Blogs
          </Link>
          <Link
            href="/courses"
            className="li-decoration-navbar hidden sm:block"
          >
            Courses
          </Link>
        </ul>

        <UserCircleIcon className="w-7 h-7 text-primary cursor-pointer" onClick={() => router.push("/signup")} />
      </div>
    </nav>
  );
};

export default Navbar;
