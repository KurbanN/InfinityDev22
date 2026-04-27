import Link from "next/link"
import { brand, contacts, footer } from "@/content/site"

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block">
              <span className="text-lg font-semibold tracking-tight font-mono">
                {brand.nameHtml.main}
                <span className="text-accent">{brand.nameHtml.accent}</span>
              </span>
            </Link>
            <p className="mt-4 max-w-md text-sm text-muted-foreground">{footer.description}</p>
            <div className="mt-4 space-y-1 text-sm text-muted-foreground">
              <p>
                <a href={`mailto:${contacts.email}`} className="hover:text-foreground">
                  {contacts.email}
                </a>
              </p>
              {contacts.phones.map((p) => (
                <p key={p}>
                  <a href={`tel:${p.replace(/\D/g, "")}`} className="hover:text-foreground">
                    {p}
                  </a>
                </p>
              ))}
              <p>{contacts.address}</p>
            </div>
            <div className="mt-4 flex gap-4">
              <a
                href={contacts.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                LinkedIn
              </a>
              <a
                href={contacts.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Instagram
              </a>
            </div>
          </div>

          {footer.columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold">{col.title}</h3>
              <ul className="mt-4 space-y-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-border/40 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-center text-sm text-muted-foreground sm:text-left">
            © {new Date().getFullYear()} {brand.name}. Все права защищены.
          </p>
          <p className="text-xs text-muted-foreground/80">{footer.legal.join(" · ")}</p>
        </div>
      </div>
    </footer>
  )
}
