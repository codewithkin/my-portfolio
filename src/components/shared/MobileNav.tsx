"use client";
import { useState } from "react";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";

function MobileNav() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <nav className="flex md:hidden flex-col gap-2 items-center py-4 px-8">
      <article className="flex justify-between items-center w-full">
        <article className="flex gap-2 items-center">
          <h1 className="text-2xl font-bold">Kin Leon</h1>
        </article>

        {/* Navbar open btn */}
        {
            open ?
            <Button onClick={() => setOpen((prev: boolean) => !prev)} variant="outline">
                <X size={30} strokeWidth={2} />
            </Button> :
            <Button onClick={() => setOpen((prev: boolean) => !prev)} variant="default">
                <Menu size={30} strokeWidth={2} />
            </Button> 
        }
      </article>
    </nav>
  );
}

export default MobileNav;