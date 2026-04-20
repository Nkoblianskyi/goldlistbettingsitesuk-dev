import { BettingSiteCard } from "./betting-site-card"
import { bettingSites } from "@/lib/mock-data"

export function RatingSection() {
  return (
    <section className="py-5 md:py-8 px-4 w-full bg-background">
      <div className="container mx-auto max-w-5xl">
        <div className="flex items-baseline justify-between mb-4 border-b border-border pb-3">
          <div>
            <h2 className="font-heading font-700 text-xl md:text-2xl uppercase tracking-wide text-foreground">
              Top Betting Sites
            </h2>
            <p className="text-muted-foreground text-xs mt-0.5">Ranked by our independent editorial team</p>
          </div>
          <span className="text-xs text-muted-foreground uppercase tracking-widest hidden sm:block">
            {bettingSites.length} operators reviewed
          </span>
        </div>

        <div className="space-y-2 md:space-y-3">
          {bettingSites.map((site, index) => (
            <BettingSiteCard key={site.id} site={site} rank={index + 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
