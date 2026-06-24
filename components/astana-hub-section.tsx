import { ArrowUpRight, Landmark } from "lucide-react"
import { astanaHub } from "@/content/site"

export function AstanaHubSection() {
  return (
    <section id="astana-hub" className="border-b border-border/40 bg-card/30 py-24 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="lg:order-2">
            <div className="flex items-center gap-2">
              <Landmark className="h-4 w-4 text-accent" />
              <p className="font-mono text-sm font-medium uppercase tracking-wider text-accent">
                {astanaHub.eyebrow}
              </p>
            </div>
            <h2 className="mt-2 font-mono text-3xl font-bold tracking-tight sm:text-4xl text-balance">
              {astanaHub.title}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">{astanaHub.lead}</p>
            <a
              href={astanaHub.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm text-accent transition-colors hover:underline"
            >
              {astanaHub.linkLabel}
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <a
            href={astanaHub.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative lg:order-1"
            aria-label={astanaHub.label}
          >
            <div className="overflow-hidden rounded-2xl border border-border/60 bg-[#141414] transition-all duration-300 group-hover:border-accent/40">
              <div className="flex h-8 items-center gap-2 border-b border-border/60 px-4 bg-[#1a1a1a]">
                <div className="h-3 w-3 rounded-full bg-red-500/80" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                <div className="h-3 w-3 rounded-full bg-green-500/80" />
                <span className="ml-2 text-xs text-muted-foreground font-mono">{astanaHub.label}</span>
              </div>
              <div className="flex items-center justify-center px-8 py-14 sm:py-16">
                <img
                  src={astanaHub.logo}
                  alt="Astana Hub"
                  className="h-16 w-auto max-w-full object-contain transition-transform duration-300 group-hover:scale-[1.02] sm:h-20 md:h-24"
                />
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
