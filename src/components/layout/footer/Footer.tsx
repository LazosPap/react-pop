import { Link } from "@tanstack/react-router";

import { Logo } from "@/assets/svg";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { FOOTER_LINKS, SOCIAL_LINKS } from "@/constants";

export function Footer() {
  return (
    <footer>
      <Separator className="relative h-px bg-transparent">
        <div className="via-border absolute inset-0 bg-linear-to-r from-transparent to-transparent" />
      </Separator>
      <div className="mx-auto max-w-5xl *:px-4 *:md:px-6">
        <div className="flex flex-col gap-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img src={Logo} className="h-20" />
            </div>
            <div className="flex items-center">
              {SOCIAL_LINKS.map((social, index) => {
                const Icon = social.icon;

                return (
                  <Button asChild key={index} size="icon-sm" variant="ghost">
                    <a aria-label={social.label} href={social.href}>
                      <Icon style={{ width: 20, height: 20 }} />
                    </a>
                  </Button>
                );
              })}
            </div>
          </div>

          <nav>
            <ul className="text-muted-foreground flex flex-wrap gap-4 text-sm font-medium md:gap-6">
              {FOOTER_LINKS.map((link) => (
                <li key={link.label}>
                  <Link className="hover:text-foreground" to={link.to}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div
          className="text-muted-foreground flex items-center justify-between gap-4 border-t py-4
            text-sm"
        >
          <p>&copy; {new Date().getFullYear()} ReactPop</p>

          <p className="inline-flex items-center gap-1">
            <span>Built by</span>
            <span
              aria-label="x/twitter"
              className="text-foreground/80 hover:text-foreground inline-flex items-center gap-1
                hover:underline"
              rel="noreferrer"
            >
              Lazaros
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
