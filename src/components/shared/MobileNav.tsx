"use client";
import { useState } from "react";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

function MobileNav() {
  const [open, setOpen] = useState<boolean>(false);

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
        y: -100,
      }}
      animate={{
        opacity: 1,
        y: 1,
      }}
      transition={{
        bounce: 0,
      }}
      className={` ${open && "min-h-screen"} flex md:hidden flex-col gap-2 justify-between py-4 px-8 shadow-sm`}
    >
      <article className="flex flex-col gap-8">
        <article className="flex justify-between items-center w-full">
          <article className="flex gap-2 items-center">
            <h1 className="text-2xl font-bold">Kin Leon</h1>
          </article>

          {/* Navbar open btn */}
          {open ? (
            <Button
              onClick={() => setOpen((prev: boolean) => !prev)}
              variant="outline"
            >
              <X size={30} strokeWidth={2} />
            </Button>
          ) : (
            <Button
              onClick={() => setOpen((prev: boolean) => !prev)}
              variant="default"
            >
              <Menu size={30} strokeWidth={2} />
            </Button>
          )}
        </article>

        {/* Links */}
        {open && (
          <AnimatePresence>
            <ul className="flex flex-col gap-2 font-medium text-lg">
              {links.map((link, index) => (
                <li className="text-slate-600 text-lg" key={link.id}>
                  <Link
                    className={`hover:text-slate-900 ${url == link.url && "underline text-secondary"}`}
                    href={link.url}
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </AnimatePresence>
        )}
      </article>

      {/* CTA */}
      <Link
        className="rounded-full transition-all duration-300 bg-primary hover:bg-slate-900 text-white py-4 px-6 flex flex-col justify-center items-center"
        href="https://calendly.com/codewithkin/15-minute-call"
        target="_blank"
      >
        Book a call
      </Link>
    </motion.nav>
  );
}

export default MobileNav;
