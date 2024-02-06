import Link from "next/link";
import React, { useState } from "react";

export default function Navbar() {
  const [nav, setNav] = useState(false);

  return (
    <>
      <nav className="nav">
        <Link href="/spotlight">Spotlight</Link>
        <Link href="/">Art Pieces</Link>
        <Link href="/favourites">Favourites</Link>
      </nav>
    </>
  );
}
