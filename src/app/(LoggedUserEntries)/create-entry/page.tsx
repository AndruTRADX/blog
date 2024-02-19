"use client";

import React, { useState } from "react";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import MyButton from "@/components/buttons/Button";
import SelectTopic from "@/components/buttons/SelectTopic";

const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
];

const Page = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  return (
    <main className="main-page-section flex flex-col gap-6 justify-center">
      <div className="flex justify-between items-center gap-x-2 mt-6">
        <div className="flex items-center gap-4">
          <h2 className="header-xl">Write your entry</h2>
          <PencilSquareIcon className="icon-def" />
        </div>
        <MyButton text="Publish" />
      </div>

      <div className="flex flex-col gap-y-2">
        <label id="title" className="text-lg font-medium text-gray-1 mt-4">
          Title
        </label>
        <input
          id="title"
          className="input-register-form"
          placeholder="Write your title no longer than 50 characters"
          maxLength={50}
        />

        <label
          id="description"
          className="text-lg font-medium text-gray-1 mt-4"
        >
          Description
        </label>
        <textarea
          id="description"
          placeholder="Short introduction or summary to your entry no longer than 250 characters"
          className="input-register-form min-h-20 max-h-28"
          maxLength={250}
        />

        <div className="flex justify-between items-center gap-x-2 mt-4">
          <div className="flex flex-col gap-y-2">
            <label id="sort" className="text-lg font-medium text-gray-1 mt-4">
              Sort of entry
            </label>
            <RadioGroup defaultValue="blog">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="blog" id="blog" />
                <Label htmlFor="blog">Blog</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="course" id="course" />
                <Label htmlFor="course">Course</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="flex flex-col gap-y-2">
            <label className="text-lg font-medium text-gray-1 mt-4">
              Topics threaten
            </label>
            <SelectTopic
              open={open}
              setOpen={setOpen}
              value={value}
              setValue={setValue}
              topics={frameworks}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
