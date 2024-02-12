"use client";

import Button from "@/components/button/Button";
import { signOut } from "next-auth/react";

const page = () => {
  return (
    <main className="main-page-section">
      <div>
        <Button text="Sign out" onClick={signOut} />
      </div>
    </main>
  );
};

export default page;
