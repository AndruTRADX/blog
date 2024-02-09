import Button from "@/components/button/Button";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <main className="main-page-section flex justify-center items-center min-h-screen">
      <form className="bg-light flex flex-col gap-y-4 items-center border border-light-3 py-14 px-10 rounded-xl mb-8 max-w-[400px] shadow shadow-gray-1/30">
        <UserCircleIcon className="w-10 h-10 text-primary" />
        <h2 className="text-xl font-gray-1 font-medium">Sign Up</h2>
        <input
          type="text"
          placeholder="Name"
          className="input-register-form mt-4"
        />
        <input
          type="text"
          placeholder="Username"
          className="input-register-form"
        />
        <input
          type="email"
          placeholder="Email"
          className="input-register-form"
        />
        <div className="flex gap-2">
          <input
            type="password"
            placeholder="Password"
            className="input-register-form"
          />
          <input
            type="password"
            placeholder="Confirm password"
            className="input-register-form"
          />
        </div>
        <Button text="Sign Up" className="w-full mt-4" />
        <div className="flex gap-2 items-center w-full">
          <hr className="border-light-3 w-full" />
          <p className="text-sm text-gray-3">Or</p>
          <hr className="border-light-3 w-full" />
        </div>
        <Button
          text={
            <div className="flex items-center justify-center gap-2">
              Sing Up with google
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
          Already have an account?{" "}
          <Link href="/signin" className="text-primary font-medium">
            Sign in
          </Link>
          .
        </p>
      </form>
    </main>
  );
};

export default page;
