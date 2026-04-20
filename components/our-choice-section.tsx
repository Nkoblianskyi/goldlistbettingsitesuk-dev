import { BettingSiteCard } from "./betting-site-card"
import { bettingSites } from "@/lib/mock-data"

export function OurChoiceSection() {
  const topSite = bettingSites[0]

  return (
    <section className="py-5 md:py-8 px-4 w-full bg-muted">
      <div className="container mx-auto max-w-5xl">
        <div className="mb-4 border-b border-border pb-3">
          <h2 className="font-heading font-700 text-xl md:text-2xl uppercase tracking-wide text-foreground">
            Our Top Pick
          </h2>
          <p className="text-muted-foreground text-xs mt-0.5">Highest rated operator this month</p>
        </div>
        <BettingSiteCard site={topSite} rank={1} />
      </div>
    </section>
  )
}
