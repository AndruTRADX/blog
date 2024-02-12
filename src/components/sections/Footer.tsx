import { ArrowUpRightIcon, BookOpenIcon } from "@heroicons/react/24/outline";
import React from "react";

const Footer = () => {
  return (
    <footer className="main-page-section !py-0">
      <div className="flex flex-col gap-y-4 rounded-t-2xl bg-light-1 border border-light-3 px-6 py-8">
        <div className="flex justify-between">
          <div className="flex text-primary items-center font-semibold gap-x-1">
            <BookOpenIcon className="icon-def" />
            My blog
          </div>
        </div>
        <div>
          <hr className="border-light-3" />
          <div className="text-gray-1 mt-3 font-medium">
            <p className="flex gap-x-1">
              My blog<span className="text-primary">/</span>Made with love by
              <a
                href="https://github.com/AndruTRADX/"
                target="blank"
                className="text-primary hover:text-primary-hover flex gap-1 items-center justify-center"
              >
                AndruTRADX
                <ArrowUpRightIcon className="w-3 h-3 text-primary" />
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
