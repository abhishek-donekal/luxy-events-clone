"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Events", href: "/events" },
  {
    label: "Catering",
    href: "/catering-1",
    children: [
      { label: "Catering", href: "/catering-1" },
      { label: "Diamond Line", href: "/diamond-line" },
    ],
  },
  { label: "Event Rentals Catalog", href: "/event-rentals-catalog" },
  { label: "Contact", href: "/contact" },
  { label: "About Us", href: "/about-us" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Disclosure", href: "/disclosure" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [cateringOpen, setCateringOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-[#2a2a2a]">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="https://img1.wsimg.com/isteam/ip/7b1c7b35-a337-47dd-a52f-a1d6f6762414/LEPC%20JPG.png/:/rs=h:200,cg:true,m/qt=q:95"
            alt="Luxury Event Planning & Catering"
            width={120}
            height={80}
            className="h-14 w-auto object-contain"
            unoptimized
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((item) =>
            item.children ? (
              <div key={item.label} className="relative group">
                <button
                  className="text-white text-xs tracking-widest uppercase hover:text-[#c9a96e] transition-colors flex items-center gap-1"
                  onClick={() => setCateringOpen(!cateringOpen)}
                >
                  {item.label}
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute top-full left-0 mt-2 w-44 bg-[#1a1a1a] border border-[#2a2a2a] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block px-4 py-3 text-xs tracking-widest uppercase text-white hover:text-[#c9a96e] hover:bg-[#2a2a2a] transition-colors"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="text-white text-xs tracking-widest uppercase hover:text-[#c9a96e] transition-colors"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#0d0d0d] border-t border-[#2a2a2a]">
          {navItems.map((item) => (
            <div key={item.label}>
              {item.children ? (
                <>
                  <button
                    className="w-full text-left px-6 py-4 text-xs tracking-widest uppercase text-white border-b border-[#1a1a1a] flex justify-between items-center"
                    onClick={() => setCateringOpen(!cateringOpen)}
                  >
                    {item.label}
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={cateringOpen ? "M19 15l-7-7-7 7" : "M19 9l-7 7-7-7"} />
                    </svg>
                  </button>
                  {cateringOpen && item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={() => setMobileOpen(false)}
                      className="block pl-10 pr-6 py-3 text-xs tracking-widest uppercase text-[#c9a96e] border-b border-[#1a1a1a]"
                    >
                      {child.label}
                    </Link>
                  ))}
                </>
              ) : (
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-6 py-4 text-xs tracking-widest uppercase text-white border-b border-[#1a1a1a] hover:text-[#c9a96e]"
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </div>
      )}
    </header>
  );
}
