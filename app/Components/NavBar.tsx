"use client";

import { useState } from "react";
import Link from "next/link";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 left-0 z-50 bg-white shadow-md">
      <div className="flex justify-between items-center p-4 md:p-6">
        <h1 className="text-2xl font-bold text-primary">ServiceHub</h1>

        {/* Hamburger */}
        <button
          type="button"
          className="md:hidden focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          <span className="block w-6 h-0.5 bg-primary mb-1"></span>
          <span className="block w-6 h-0.5 bg-primary mb-1"></span>
          <span className="block w-6 h-0.5 bg-primary"></span>
        </button>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 items-center">
          <Link href="/">Home</Link>
          <Link href="/Services">Services</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/Services">
            <button className="bg-primary text-white px-4 py-2 rounded hover:bg-blue-600">
              Get Started
            </button>
          </Link>
        </nav>
      </div>

      {/* Mobile Fullscreen Menu */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-full bg-white flex flex-col items-center justify-center transition-transform duration-300 transform ${
          open ? "translate-x-0" : "-translate-x-full"
        } z-50`}
      >
        <button
          className="absolute top-6 right-6 text-textPrimary text-3xl font-bold"
          onClick={() => setOpen(false)}
        >
          &times;
        </button>
        <nav className="flex flex-col space-y-8 text-xl text-center">
          <Link href="/" onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link href="/Services" onClick={() => setOpen(false)}>
            Services
          </Link>
          <Link href="/contact" onClick={() => setOpen(false)}>
            Contact
          </Link>
          <Link href="/Services">
            <button
              className="bg-primary text-white px-6 py-3 rounded hover:bg-blue-600"
              onClick={() => setOpen(false)}
            >
              Get Started
            </button>
          </Link>
        </nav>
      </div>
    </header>
  );
}
