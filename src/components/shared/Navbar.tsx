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
    <motion.nav
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 2,
      }}
      className="md:flex justify-between items-center px-16 py-8 font-medium hidden"
    >
      <Link href="/">
        <h1 className="text-2xl font-bold transition-all duration-300 hover:underline">
          Kin Leon
        </h1>
      </Link>

      {/* Links */}
      <ul className="flex text-lg gap-8 justify-center items-center">
        {links.map((link, index: number) => {
          return (
            <motion.li
              initial={{
                opacity: 0,
                y: 200,
              }}
              animate={{
                opacity: 1,
                y: 1,
              }}
              transition={{
                delay: index * 0.5,
                duration: 0.5,
              }}
              className="text-slate-600"
              key={link.id}
            >
              <Link
                className={`hover:text-slate-900 ${url == link.url && "underline text-secondary"}`}
                href={link.url}
              >
                {link.text}
              </Link>
            </motion.li>
          );
        })}
      </ul>

      {/* CTA */}
      <Link
        className="rounded-full transition-all duration-300 bg-secondary hover:bg-slate-900 text-white py-4 px-6 font-medium"
        href="https://calendly.com/codewithkin/15-minute-call"
        target="_blank"
      >
        Book a call
      </Link>
    </motion.nav>
  );
}

export default Navbar;
