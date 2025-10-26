"use client";

import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-zinc-200 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-12 py-3">
        <img src="/images/main_logo.png" className="w-[110px]" alt="Logo" />

        {/* Desktop Nav */}
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

        <div className="hidden md:block">
          <Button className="bg-yellow-500 hover:bg-slate-800 text-slate-900 hover:text-white cursor-pointer rounded-full px-6">
            Contact
          </Button>
        </div>

        {/* Mobile menu */}
        <button
          className="md:hidden text-zinc-700"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
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
      )}
    </header>
  );
}
// commit
{
  /* Navigation */
}
{
  /* <nav className="relative z-20 flex items-center justify-between px-6 md:px-12 py-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent"
        >
          Zamin Academy
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hidden md:flex gap-8 items-center"
        >
          <a href="#" className="text-slate-600 hover:text-slate-900 transition-colors text-sm font-medium">
            Courses
          </a>
          <a href="#" className="text-slate-600 hover:text-slate-900 transition-colors text-sm font-medium">
            About
          </a>
          <a href="#" className="text-slate-600 hover:text-slate-900 transition-colors text-sm font-medium">
            Contact
          </a>
          <Button className="bg-slate-900 hover:bg-slate-800 text-white rounded-full px-6">Sign In</Button>
        </motion.div>
      </nav> */
}
