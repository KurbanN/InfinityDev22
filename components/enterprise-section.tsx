import { Building2, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { contacts, enterpriseSection, team, values } from "@/content/site"

export function EnterpriseSection() {
  return (
    <section id="enterprise" className="border-t border-border/40 py-24 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex items-center justify-center gap-2 text-sm text-accent">
            <Building2 className="h-4 w-4" />
            <span className="font-mono uppercase tracking-wider">{enterpriseSection.eyebrow}</span>
          </div>
          <h2 className="mt-4 font-mono text-3xl font-bold tracking-tight sm:text-4xl text-balance">
            {enterpriseSection.title}
          </h2>
          <p className="mt-4 text-muted-foreground">{enterpriseSection.lead}</p>
        </div>

        <h3 className="mt-16 text-center font-mono text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Команда
        </h3>
        <div className="mx-auto mt-8 grid max-w-5xl gap-6 sm:grid-cols-3">
          {team.map((member) => (
            <div
              key={member.email}
              className="rounded-xl border border-border/60 bg-[#141414] p-6 transition-all duration-300 hover:border-accent/40"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 font-mono text-sm font-bold text-accent">
                {member.name
                  .split(" ")
                  .map((p) => p[0])
                  .join("")}
              </div>
              <h3 className="mt-4 font-mono text-sm font-semibold">{member.name}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{member.role}</p>
              <a
                href={`mailto:${member.email}`}
                className="mt-3 inline-flex items-center gap-2 text-xs text-accent hover:underline"
              >
                <Mail className="h-3 w-3" />
                {member.email}
              </a>
            </div>
          ))}
        </div>

        <h3 className="mt-16 text-center font-mono text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Ценности
        </h3>
        <div className="mx-auto mt-8 grid max-w-5xl gap-6 sm:grid-cols-3">
          {values.map((v) => (
            <div
              key={v.title}
              className="rounded-xl border border-border/60 bg-[#0f0f0f] p-6 transition-all duration-300 hover:border-border"
            >
              <h3 className="font-mono text-sm font-semibold">{v.title}</h3>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{v.description}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-2xl rounded-2xl border border-accent/40 bg-gradient-to-b from-accent/10 to-transparent p-8 text-center sm:p-12">
          <h3 className="font-mono text-xl font-bold">{enterpriseSection.ctaTitle}</h3>
          <p className="mt-4 text-muted-foreground">{enterpriseSection.ctaLead}</p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" asChild>
              <a href="#contact">{enterpriseSection.ctaPrimary}</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href={`mailto:${contacts.email}`}>{enterpriseSection.ctaSecondary}</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
