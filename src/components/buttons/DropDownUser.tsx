"use client";

import Button from "@/components/buttons/Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { signOut } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export function DropdownUserSettings({
  userImage,
}: {
  userImage?: string | null | undefined;
}) {
  const router = useRouter();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        {userImage ? (
          <Image
            src={userImage}
            width={32}
            height={32}
            alt="User"
            className="rounded-full select-none cursor-pointer"
          />
        ) : (
          <Button text="Account" />
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>

        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem onClick={() => router.push("/profile")}>
            Profile
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => router.push("/settings")}>
            Settings
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator className="block sm:hidden" />
        <DropdownMenuGroup className="block sm:hidden">
          <DropdownMenuItem onClick={() => router.push("/blogs")}>
            Blogs
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => router.push("/courses")}>
            Courses
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem onClick={() => router.push("/create-entry")}>
            Create Entry
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => router.push("/my-entries")}>
            Admin Entries
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() =>
            window.open("https://github.com/AndruTRADX/blog", "_blank")
          }
        >
          GitHub
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => window.open("https://andrutradx.vercel.app", "_blank")}
        >
          Portfolio
        </DropdownMenuItem>

        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => signOut()}>Sign out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
