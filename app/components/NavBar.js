"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "@/app/components/NavBar.module.css";

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav className={styles.nav}>
      <Link
        href={"/"}
        className={[styles.link, pathname === "/" && styles.active].join(" ")}
      >
        Home
      </Link>

      <Link
        href={"/about"}
        className={[styles.link, pathname === "/about" && styles.active].join(
          " "
        )}
      >
        About
      </Link>
    </nav>
  );
}
