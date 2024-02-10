"use client";

import Button from "@/components/button/Button";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SignIn = () => {
  const router = useRouter();

  const [error, setError] = useState<string>("");
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    return setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      if (!user.email || !user.password) {
        setError("Please fill all the fields");
        return;
      }

      await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      }).then(async (res) => {
        if (res.status === 200 || res.status === 201) {
          router.push("/");
          setError("");
        }
      });
    } catch {
      setError("Something went wrong");
    } finally {
      setUser({
        email: "",
        password: "",
      });
    }
  };

  return (
    <main className="main-page-section flex justify-center items-center min-h-screen">
      <form
        className="bg-light flex flex-col gap-y-4 items-center border border-light-3 py-14 px-10 rounded-xl mb-8 w-full min-w-[300px] max-w-[400px] shadow shadow-gray-1/30"
        onSubmit={handleSubmit}
      >
        <UserCircleIcon className="w-10 h-10 text-primary" />
        <h2 className="text-xl font-gray-1 font-medium">Sign In</h2>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={user.email}
          onChange={handleInputChange}
          className="input-register-form mt-4"
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={user.password}
          onChange={handleInputChange}
          className="input-register-form"
        />
        <Button text="Sign In" className="w-full mt-4" />
        <div className="flex gap-2 items-center w-full">
          <hr className="border-light-3 w-full" />
          <p className="text-sm text-gray-3">Or</p>
          <hr className="border-light-3 w-full" />
        </div>
        <Button
          text={
            <div className="flex items-center justify-center gap-2">
              Sing In with google
              <Image
                src="/logos/google.png"
                alt="Google"
                width={20}
                height={20}
              />
            </div>
          }
          className="w-full"
          outline
        />
        <p className="text-sm text-gray-2">
          Don&lsquo;t have an account?{" "}
          <Link href="/signup" className="text-primary font-medium">
            Sign Up
          </Link>
          .
        </p>
        {error !== "" && <p className="error-span">{error}</p>}
      </form>
    </main>
  );
};

export default SignIn;
