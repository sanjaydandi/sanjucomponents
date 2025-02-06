"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo & Brand Name */}
        <div className="flex items-center">
        <Image
  src="/images/logo.png"
  alt="EasyLifeServices"
  width={60}
  height={60}
  className="transition duration-300 ease-in-out rounded-full border-2 border-transparent border-blue-500 shadow-blue-500 shadow-md animate-pulse"
/>
          <h1 className="text-2xl font-bold ml-2">Easy Life Services</h1>
        </div>

        {/* Desktop Navbar */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-gray-300">Home</Link>
          <Link href="/services" className="hover:text-gray-300">Services</Link>
          <Link href="/contact" className="hover:text-gray-300">Contact</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <nav className="md:hidden mt-2 flex justify-between rounded-md bg-gray-800 bg-opacity-20 shadow-lg p-2">
          <Link href="/" className="block  py-2 px-4 hover:transition duration-300 ease-in-out rounded-full border-2 border-transparent hover:border-blue-500 hover:shadow-blue-500 hover:shadow-md hover:animate-pulse">Home</Link>
          <Link href="/services" className="block py-2 px-4 hover:transition duration-300 ease-in-out rounded-full border-2 border-transparent hover:border-blue-500 hover:shadow-blue-500 hover:shadow-md hover:animate-pulse">Services</Link>
          <Link href="/contact" className="block py-2 px-4 hover:transition duration-300 ease-in-out rounded-full border-2 border-transparent hover:border-blue-500 hover:shadow-blue-500 hover:shadow-md hover:animate-pulse">Contact</Link>
        </nav>
      )}
    </header>
  );
}
