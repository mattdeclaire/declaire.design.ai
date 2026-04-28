import Link from "next/link";

const links = [
  { href: "/work", label: "Work" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-border mt-section">
      <div className="container-content py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        {/* Left: brand */}
        <div>
          <p className="font-serif italic text-lg text-heading">DeClaire Design</p>
          <p className="text-sm text-muted mt-1">
            <a href="mailto:katie@declaire.design">katie@declaire.design</a>
          </p>
        </div>

        {/* Right: nav + copyright */}
        <div className="flex flex-col items-start md:items-end gap-4">
          <div className="flex gap-6">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-xs tracking-[0.15em] uppercase text-muted hover:text-heading font-sans transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} DeClaire Design. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
