export function InfoSections() {
  return (
    <section className="py-8 md:py-12 px-4 w-full bg-background">
      <div className="container mx-auto max-w-5xl space-y-8">

        {/* How We Rate */}
        <div className="border border-border bg-card">
          <div className="border-b border-border px-4 md:px-6 py-3">
            <h2 className="font-heading font-700 text-xl uppercase tracking-wide text-foreground">
              How We Rate Betting Sites
            </h2>
          </div>
          <div className="px-4 md:px-6 py-5">
            <p className="text-muted-foreground text-sm leading-relaxed mb-5">
              goldlistbettingsitesuk.com applies a structured, independent methodology to assess every UKGC-licensed bookmaker featured in our rankings. Our editorial team conducts hands-on testing over several weeks before any review is published.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0 border border-border">
              {[
                {
                  title: "Licensing & Safety",
                  items: [
                    "Verification of active UKGC licence",
                    "SSL encryption and data protection",
                    "Player fund protection status",
                    "Anti-fraud systems assessment",
                  ],
                },
                {
                  title: "Promotions",
                  items: [
                    "Welcome offer value analysis",
                    "Wagering requirement review",
                    "Ongoing promotions quality",
                    "Terms transparency check",
                  ],
                },
                {
                  title: "Odds Quality",
                  items: [
                    "Premier League odds comparison",
                    "Operator margin analysis",
                    "Market breadth assessment",
                    "In-play betting coverage",
                  ],
                },
                {
                  title: "Usability",
                  items: [
                    "Mobile and desktop testing",
                    "Registration process review",
                    "Navigation and design audit",
                    "Cash out functionality",
                  ],
                },
                {
                  title: "Payments",
                  items: [
                    "Deposit and withdrawal options",
                    "Withdrawal speed testing",
                    "Fee transparency check",
                    "Minimum and maximum limits",
                  ],
                },
                {
                  title: "Customer Support",
                  items: [
                    "Live chat response time",
                    "Email support quality",
                    "Help centre depth",
                    "Problem resolution ability",
                  ],
                },
              ].map((cat, i) => (
                <div key={i} className="border-border border-r border-b last:border-r-0 [&:nth-child(3)]:border-r-0 md:[&:nth-child(3)]:border-r lg:[&:nth-child(3)]:border-r-0 [&:nth-last-child(-n+3)]:border-b-0 md:[&:nth-last-child(-n+2)]:border-b-0 lg:[&:nth-last-child(-n+3)]:border-b-0 p-4">
                  <h3 className="font-heading font-700 text-sm uppercase tracking-wide text-foreground mb-2 border-b border-border pb-2">{cat.title}</h3>
                  <ul className="space-y-1.5">
                    {cat.items.map((item, j) => (
                      <li key={j} className="text-xs text-muted-foreground flex items-start gap-2">
                        <span className="w-1 h-1 bg-primary flex-shrink-0 mt-1.5" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Scoring breakdown */}
            <div className="mt-5 border border-border">
              <div className="border-b border-border px-4 py-2">
                <span className="font-heading font-700 text-sm uppercase tracking-wide text-foreground">Scoring Breakdown</span>
              </div>
              <div className="flex flex-wrap">
                {[
                  { label: "Licensing", pct: "30%" },
                  { label: "Promotions", pct: "25%" },
                  { label: "Odds", pct: "20%" },
                  { label: "Usability", pct: "15%" },
                  { label: "Support", pct: "10%" },
                ].map((item, i) => (
                  <div key={i} className="flex-1 min-w-[80px] border-r border-border last:border-r-0 text-center px-3 py-3">
                    <div className="font-heading font-700 text-xl text-primary">{item.pct}</div>
                    <div className="text-[10px] uppercase tracking-widest text-muted-foreground mt-0.5">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Responsible Gambling */}
        <div className="border border-border bg-card">
          <div className="border-b border-border px-4 md:px-6 py-3 flex items-center justify-between">
            <h2 className="font-heading font-700 text-xl uppercase tracking-wide text-foreground">
              Responsible Gambling
            </h2>
            <span className="text-destructive font-heading font-700 text-sm border border-destructive px-2 py-0.5 uppercase tracking-wide">
              18+
            </span>
          </div>
          <div className="px-4 md:px-6 py-5 space-y-4">
            <div className="bg-destructive/5 border border-destructive/30 px-4 py-3">
              <p className="text-sm text-foreground leading-relaxed">
                <span className="font-semibold text-destructive">Important:</span> Gambling can be addictive. Only bet with money you can afford to lose. If gambling is affecting your life, seek help immediately.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="border border-border p-4">
                <h3 className="font-heading font-700 text-sm uppercase tracking-wide text-foreground mb-3 border-b border-border pb-2">Safe Gambling Practices</h3>
                <ul className="space-y-2">
                  {[
                    "Set a monthly budget and stick to it",
                    "Set time limits for each session",
                    "Never chase losses with bigger bets",
                    "Treat betting as entertainment only",
                    "Use deposit limits and self-exclusion tools",
                  ].map((item, i) => (
                    <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                      <span className="text-foreground font-semibold mt-0.5">+</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border border-border p-4">
                <h3 className="font-heading font-700 text-sm uppercase tracking-wide text-destructive mb-3 border-b border-border pb-2">Warning Signs</h3>
                <ul className="space-y-2">
                  {[
                    "Betting more than you can afford to lose",
                    "Hiding gambling activity from others",
                    "Borrowing money to place bets",
                    "Neglecting work or personal responsibilities",
                    "Feeling anxious when unable to bet",
                  ].map((item, i) => (
                    <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                      <span className="text-destructive font-semibold mt-0.5">!</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="border border-border p-4">
              <h3 className="font-heading font-700 text-sm uppercase tracking-wide text-foreground mb-3 border-b border-border pb-2">UK Support Services</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  { name: "GambleAware", url: "www.begambleaware.org", desc: "Free, confidential support" },
                  { name: "GamCare", url: "www.gamcare.org.uk", desc: "National gambling helpline" },
                  { name: "Gambling Therapy", url: "www.gamblingtherapy.org", desc: "International online support" },
                  { name: "GAMSTOP", url: "www.gamstop.co.uk", desc: "UK-wide self-exclusion scheme" },
                ].map((org, i) => (
                  <div key={i} className="bg-muted px-3 py-2">
                    <div className="font-semibold text-foreground text-xs">{org.name}</div>
                    <div className="text-primary text-xs">{org.url}</div>
                    <div className="text-muted-foreground text-[10px] mt-0.5">{org.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center border border-border py-3 bg-secondary text-secondary-foreground">
              <span className="font-heading font-700 text-sm uppercase tracking-widest">Under 18s Must Not Gamble</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
