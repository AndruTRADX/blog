"use client";

import Button from "@/components/buttons/Button";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import { signIn } from "next-auth/react";
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

      await signIn("credentials", {
        email: user.email,
        password: user.password,
        redirect: false,
      }).then(async (res) => {
        if (res?.error) {
          setError("User or password are incorrect");
        }

        setError("");
        router.push("/");
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
      <div className="bg-light flex flex-col gap-y-4 items-center border border-light-3 py-14 px-10 rounded-xl mb-8 w-full min-w-[300px] max-w-[400px] shadow shadow-gray-1/30">
        <UserCircleIcon className="w-10 h-10 text-primary" />
        <h2 className="text-xl text-gray-1 font-medium">Sign In</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
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
        </form>
        <div className="flex gap-2 items-center w-full">
          <hr className="border-light-3 w-full" />
          <p className="text-sm text-gray-3">Or</p>
          <hr className="border-light-3 w-full" />
        </div>
        <Button
          text={
            <div className="flex items-center justify-center gap-2">
              <Image
                src="/logos/google.png"
                alt="Google"
                width={20}
                height={20}
              />
              Sing In with google
            </div>
          }
          className="w-full"
          onClick={() => signIn("google")}
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
      </div>
    </main>
  );
};

export default SignIn;
