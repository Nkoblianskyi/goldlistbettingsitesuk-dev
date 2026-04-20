import Image from "next/image"

export function Hero() {
  const currentDate = new Date()
  const formattedDate = currentDate.toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <section className="w-full bg-secondary text-secondary-foreground">
      {/* Stadium image strip */}
      <div className="relative w-full h-[180px] md:h-[240px] overflow-hidden">
        <Image
          src="/images/stadium-hero.jpg"
          alt="Football stadium — English top-flight match"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* gradient overlay for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent" />

        {/* Headline sits over the image on larger screens */}
        <div className="absolute inset-0 flex items-center px-4 md:px-0">
          <div className="container mx-auto max-w-5xl">
            <div className="border-l-4 border-primary pl-4 md:pl-6 max-w-xl">
              <h1 className="font-heading font-700 text-2xl md:text-4xl uppercase tracking-wide leading-tight text-balance text-secondary-foreground">
                Best Betting Sites UK
              </h1>
              <p className="text-sm md:text-base text-secondary-foreground/75 mt-1 leading-relaxed">
                Independent rankings of UKGC-licensed bookmakers. Updated monthly by our editorial team.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Meta bar */}
      <div className="border-t border-white/10 px-4 py-3">
        <div className="container mx-auto max-w-5xl flex flex-wrap items-center gap-3 md:gap-6 text-xs text-secondary-foreground/60 uppercase tracking-wide">
          <span>Last updated: <span className="text-secondary-foreground/90">{formattedDate}</span></span>
          <span className="w-px h-3 bg-white/20 hidden sm:block" aria-hidden="true" />
          <span>UKGC Regulated Only</span>
          <span className="w-px h-3 bg-white/20 hidden sm:block" aria-hidden="true" />
          <span>Independent Editorial</span>
          <span className="w-px h-3 bg-white/20 hidden sm:block" aria-hidden="true" />
          <span className="text-destructive font-semibold">18+ BeGambleAware</span>
        </div>
      </div>
    </section>
  )
}
