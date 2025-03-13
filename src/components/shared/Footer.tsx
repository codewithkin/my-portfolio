import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { socialLinks } from "@/data/socialLinks";
import Image from "next/image";

function Footer() {
  return (
    <footer className="grid bg-secondary text-white">
      <section className="flex flex-col justify-center text-center p-4 md:px-8 items-center gap-4 py-16">
        <article className="flex flex-col gap-2 items-center justify-center">
          <h3 className="text-4xl font-semibold">Kin Leon Zinzombe</h3>
          <p className="text-2xl font-regular">
            Throughout software and development, I alone can bring your project
            to life
          </p>
        </article>

        {/* CTA */}
        <Button variant="default" className="hover:bg-slate-900" asChild>
          <Link target="_blank" href="https://calendly.com/codewithkin/15-minute-call">
            Book a call
            <ArrowRight strokeWidth={1.5} size={20} />
          </Link>
        </Button>
      </section>

      <section className="border-t border-slate-300 p-4 md:px-8 flex justify-between items-center">
        <h3 className="text-xl font-semibold">&copy; 2025 Kin Leon Zinzombe</h3>

        {/* Links */}
        <article className="flex gap-4 items-center">
          {socialLinks.map((socialLink, index: number) => (
            <Link key={socialLink.id} target="_blank" href={socialLink.url}>
              <Image
                key={socialLink.id}
                width={32}
                height={32}
                alt={socialLink.name}
                src={`/images/icons/${socialLink.name}.png`}
              />
            </Link>
          ))}
        </article>
      </section>
    </footer>
  );
}

export default Footer;
