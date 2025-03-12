import React from "react";
import { Badge } from "../ui/badge";

function Header() {
  return (
    <header className="min-h-screen flex flex-col md:flex-row md:justify-between gap-16 py-20 px-4 md:px-40">
      {/* Text */}
      <article className="flex flex-col gap-8">
        {/* Available for work badge */}
        <Badge className="bg-green-100 rounded-full px-4 py-2 text-green-400 font-medium text-md gap-4">
          {/* Green dot */}
          <article className="w-4 h-4 rounded-full bg-green-400"></article>
          Available for work
        </Badge>
      </article>

      {/* Images */}
      <article className="flex flex-col gap-8">
      
      </article>
    </header>
  )
}

export default Header;
