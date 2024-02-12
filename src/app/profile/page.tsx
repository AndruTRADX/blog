"use client";

import Button from "@/components/buttons/Button";
import { signOut } from "next-auth/react";

const page = () => {
  return (
    <main className="main-page-section">
      <div>
        <Button text="Sign Out" onClick={signOut} />
      </div>
    </main>
  );
};

export default page;
