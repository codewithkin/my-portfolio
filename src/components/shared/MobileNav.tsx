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
    { id: 1, text: "Home", url: "/" },
    { id: 2, text: "About", url: "/about" },
    { id: 3, text: "Projects", url: "/projects" },
    { id: 4, text: "Blog", url: "/blog" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ bounce: 0 }}
      className={`${
        open ? "min-h-screen" : ""
      } flex md:hidden flex-col gap-2 justify-between py-4 px-8 shadow-sm`}
    >
      <article className="flex flex-col gap-8">
        {/* Navbar Header */}
        <article className="flex justify-between items-center w-full">
          <h1 className="text-2xl font-bold">Kin Leon</h1>

          {/* Menu Toggle Button */}
          <Button
            onClick={() => setOpen((prev) => !prev)}
            variant={open ? "outline" : "default"}
          >
            {open ? (
              <X size={30} strokeWidth={2} />
            ) : (
              <Menu size={30} strokeWidth={2} />
            )}
          </Button>
        </article>

        {/* Links Section with Animations */}
        <AnimatePresence>
          {open && (
            <motion.ul
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, staggerChildren: 0.1 }}
              className="flex flex-col gap-2 font-medium text-lg"
            >
              {links.map((link) => (
                <motion.li
                  key={link.id}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.3 }}
                  className="text-slate-600 text-lg"
                >
                  <Link
                    className={`hover:text-slate-900 ${
                      url == link.url && "underline text-secondary"
                    }`}
                    href={link.url}
                  >
                    {link.text}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </article>

      {/* CTA Section with Animations */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="cta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              className="rounded-full transition-all duration-300 bg-secondary font-medium hover:bg-slate-900 text-white py-4 px-6 flex flex-col justify-center items-center"
              href="https://calendly.com/codewithkin/client-project-brief"
              target="_blank"
            >
              Book a call
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default MobileNav;
