"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  signIn,
  signOut,
  useSession,
  getProviders,
  LiteralUnion,
  ClientSafeProvider,
} from "next-auth/react";

import { BookOpenIcon } from "@heroicons/react/24/outline";
import { BuiltInProviderType } from "next-auth/providers/index";

const Navbar = () => {
  const { data: session } = useSession();

  const [providers, setProviders] = useState<Record<
    LiteralUnion<BuiltInProviderType, string>,
    ClientSafeProvider
  > | null>(null);

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);

  return (
    <nav
      className="flex justify-center bg-light-2/80 backdrop-blur-md sticky border-b border-light-3
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

        {session?.user ? (
          <div className="flex items-center gap-x-2">
            <Image
              src={session?.user?.image as string}
              alt="user"
              width={36}
              height={36}
              className="rounded-full"
            />

            <button
              onClick={() => {
                signOut();
              }}
              className="bg-primary hover:bg-primary-hover px-5 py-2 rounded-2xl text-light text-sm font-semibold transition-colors"
            >
              Sign Out
            </button>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <>
                  <button
                    onClick={() => {
                      signIn(provider.id);
                    }}
                    className="bg-primary hover:bg-primary-hover px-5 py-2 rounded-2xl text-light text-sm font-semibold transition-colors"
                  >
                    Log In
                  </button>
                </>
              ))}
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
