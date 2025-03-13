import React, { ReactNode } from "react";

function HeadingBadge({ children }: { children: ReactNode }) {
  return (
    <article className="bg-sky-100 border border-sky-500 text-sky-500 text-sm font-medium rounded-full w-fit px-4 py-2">
      {children}
    </article>
  );
}

export default HeadingBadge;
