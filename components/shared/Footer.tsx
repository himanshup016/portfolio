import Link from "next/link";
import { Heart } from "lucide-react";
import { siteConfig } from "@/lib/data";
import { Icons } from "@/components/ui/icons";

const socials = [
  { icon: Icons.github, href: siteConfig.github, label: "GitHub" },
  { icon: Icons.linkedin, href: siteConfig.linkedin, label: "LinkedIn" },
  { icon: Icons.twitter, href: siteConfig.twitter, label: "Twitter / X" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 bg-background">
      <div className="container mx-auto px-4 md:px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground flex items-center gap-1.5">
          Built with <Heart className="size-3.5 text-primary fill-primary" /> by{" "}
          <span className="font-semibold text-foreground">{siteConfig.name}</span> &copy; {year}
        </p>

        <div className="flex items-center gap-3">
          {socials.map(({ icon: Icon, href, label }) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="size-9 rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200"
            >
              <Icon className="size-4" />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
