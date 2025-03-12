"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

function Navbar() {
  // Get the current url
  const url = usePathname();

  const links: { id: number; text: string; url: string }[] = [
    {
      id: 1,
      text: "Home",
      url: "/",
    },
    {
      id: 2,
      text: "About",
      url: "/about",
    },
    {
      id: 3,
      text: "Projects",
      url: "/projects",
    },
    {
      id: 4,
      text: "Blog",
      url: "/blog",
    },
  ];

  return (
    <nav className="flex justify-between items-center px-16 py-8 font-medium">
      <Link href="/">
        <h1 className="text-2xl font-semibold transition-all duration-300 hover:underline">
          Kin Leon
        </h1>
      </Link>

      {/* Links */}
      <ul className="flex text-lg gap-8 justify-center items-center">
        {links.map((link, index: number) => {
          return (
            <li className="text-slate-600" key={link.id}>
              <Link
                className={`hover:text-slate-900 ${url == link.url && "underline text-secondary"}`}
                href={link.url}
              >
                {link.text}
              </Link>
            </li>
          );
        })}
      </ul>

      {/* CTA */}
      <Link
        className="rounded-full transition-all duration-300 bg-primary hover:bg-slate-900 text-white py-4 px-6"
        href="https://calendly.com/codewithkin/15-minute-call"
        target="_blank"
      >
        Book a meeting
      </Link>
    </nav>
  );
}

export default Navbar;
