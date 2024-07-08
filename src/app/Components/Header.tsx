"use client";

/* eslint-disable @next/next/no-img-element */

import React, { useState, useEffect } from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Disclosure
      as="nav"
      className={`${
        isScrolled
          ? `sticky sticky-header top-0 z-50 border-b border-gray-800`
          : "bg-black shadow border-b border-gray-800"
      }`}
    >
      <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
        <div className="flex h-16 justify-between">
          <div className="flex px-2 lg:px-0">
            <div className="flex flex-shrink-0 items-center">
              <Image
                alt="logo"
                src="/intract_text.png"
                height={90}
                width={90}
              />
            </div>
            <div className="hidden lg:ml-6 lg:flex lg:space-x-8">
              {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
              <a
                href="#"
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-400 hover:text-white"
              >
                Compass
              </a>
              <a
                href="#"
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-400 hover:text-white"
              >
                Explore
              </a>
              <a
                href="#"
                className="inline-flex items-center rounded-sm border-b-4 border-white px-1 pt-1 text-sm font-medium text-white"
              >
                Academy
                <span className="rounded-xl px-2 ml-2 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700">
                  New
                </span>
              </a>
              <a
                href="#"
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-400 hover:text-white"
              >
                NFTs
              </a>
              <a
                href="#"
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-400 hover:text-white"
              >
                For Projects
              </a>
            </div>
          </div>
          <div className="flex flex-1 items-center justify-center px-2 lg:ml-6 lg:justify-end">
            <div className="w-full max-w-lg lg:max-w-xs">
              <label htmlFor="search" className="sr-only">
                Search
              </label>
              <div className="relative sm:block hidden">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <MagnifyingGlassIcon
                    aria-hidden="true"
                    className="h-5 w-5 text-[#747474]"
                  />
                </div>
                <input
                  id="search"
                  name="search"
                  type="search"
                  placeholder="Search for ecosystems, trending quests etc,."
                  className="w-full pl-10 pr-3 ring-gray-300 placeholder:text-[#747474] flex rounded-full border border-[rgba(255,255,255,0.05)] bg-[rgba(255,255,255,0.07)] h-[42.5px] px-4 py-2.5 items-center flex-1 gap-2 relative text-sm"
                />
              </div>
            </div>

            <div className="border border-[#FA8922] bg-[#100C20] ml-4 p-3 rounded-full">
              <img
                src="https://www.intract.io/assets/broadcast_or-04af786c.svg"
                alt="logo"
              />
            </div>
          </div>
          <div className="flex items-center">
            <button
              type="button"
              className="text-black bg-white hover:bg-gray-200 font-medium rounded-md text-sm px-6 py-1.5 "
            >
              Sign In
            </button>
          </div>
          <div className="flex items-center lg:hidden">
            {/* Mobile menu button */}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block h-6 w-6 group-data-[open]:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden h-6 w-6 group-data-[open]:block"
              />
            </DisclosureButton>
          </div>
        </div>
      </div>
    </Disclosure>
  );
}
