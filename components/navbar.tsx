import Link from "next/link";
import { navLinks, siteName } from "./site-data";

export function Navbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-sky-100/80 bg-white/95 backdrop-blur">
      <div className="section-shell py-4">
        <nav className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <Link href="/" className="text-lg font-semibold text-sky-900">
            {siteName}
          </Link>
          <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm font-medium text-slate-700">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition hover:text-sky-700">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
