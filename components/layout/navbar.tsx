"use client";

import { memo, useState, useCallback } from "react";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const NavLinks = memo(() => (
  <nav className="hidden md:flex gap-10 text-zinc-700 font-medium">
    <a href="#" className="hover:text-blue-600 transition-colors">
      Home
    </a>
    <a href="#" className="hover:text-blue-600 transition-colors">
      Video Lessons
    </a>
    <a href="#" className="hover:text-blue-600 transition-colors">
      Feedbacks
    </a>
  </nav>
));

NavLinks.displayName = "NavLinks";

const MobileNavLinks = memo(() => (
  <div className="flex flex-col items-center gap-4 py-4 bg-white border-t border-zinc-200 md:hidden">
    <a href="#" className="hover:text-blue-600 transition-colors">
      Home
    </a>
    <a href="#" className="hover:text-blue-600 transition-colors">
      Video Lessons
    </a>
    <a href="#" className="hover:text-blue-600 transition-colors">
      Feedbacks
    </a>
    <Button className="bg-yellow-500 hover:bg-slate-800 text-slate-900 hover:text-white cursor-pointer rounded-full px-6">
      Contact
    </Button>
  </div>
));

MobileNavLinks.displayName = "MobileNavLinks";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-zinc-200 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-12 py-3">
        <Image
          src="/images/main_logo.png"
          alt="Logo"
          width={110}
          height={40}
          priority
          className="w-[110px] h-auto"
        />

        {/* Desktop Nav */}
        <NavLinks />

        <div className="hidden md:block">
          <Button className="bg-yellow-500 hover:bg-slate-800 text-slate-900 hover:text-white cursor-pointer rounded-full px-6">
            Contact
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-zinc-700"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && <MobileNavLinks />}
    </header>
  );
}