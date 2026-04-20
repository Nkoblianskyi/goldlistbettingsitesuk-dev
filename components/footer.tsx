import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground border-t border-border py-8 w-full">
      <div className="container mx-auto max-w-5xl px-4">

        {/* Logo and nav */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 mb-6 pb-6 border-b border-white/10">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 bg-primary flex items-center justify-center flex-shrink-0">
                <span className="text-primary-foreground font-heading text-xs font-700">GL</span>
              </div>
              <span className="font-heading font-700 text-base uppercase tracking-wider text-secondary-foreground">
                GoldList<span className="text-primary">UK</span>
              </span>
            </Link>
            <p className="text-secondary-foreground/50 text-xs max-w-xs leading-relaxed">
              Independent comparison of UKGC-licensed betting sites. We do not operate a bookmaker.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-secondary-foreground/60 uppercase tracking-wide">
            <Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/cookie-policy" className="hover:text-primary transition-colors">Cookie Policy</Link>
            <Link href="/about" className="hover:text-primary transition-colors">About</Link>
            <Link href="/responsible-gambling" className="hover:text-primary transition-colors">Responsible Gambling</Link>
          </nav>
        </div>

        {/* Organisations */}
        <div className="mb-6 pb-6 border-b border-white/10">
          <p className="text-secondary-foreground/40 text-[10px] uppercase tracking-widest mb-3">Regulatory Bodies</p>
          <div className="flex flex-wrap items-center gap-3">
            <a href="https://www.gamblingcommission.gov.uk" target="_blank" rel="noopener noreferrer"
              className="bg-white px-3 py-1.5 hover:opacity-90 transition-opacity">
              <img src="/gamble.webp" alt="GambleAware" className="h-6 w-auto object-contain" />
            </a>
            <a href="https://www.gamcare.org.uk" target="_blank" rel="noopener noreferrer"
              className="bg-white px-3 py-1.5 hover:opacity-90 transition-opacity">
              <img src="/gamecare.svg" alt="GamCare" className="h-6 w-auto object-contain" />
            </a>
            <div className="text-secondary-foreground/60 text-xs border border-white/20 px-3 py-1.5 font-heading font-700 uppercase tracking-wide">
              UKGC Licensed
            </div>
            <div className="text-destructive text-xs border border-destructive/60 px-3 py-1.5 font-heading font-700 uppercase tracking-wide">
              18+
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mb-5">
          <p className="text-secondary-foreground/40 text-xs leading-relaxed">
            goldlistbettingsitesuk.com is an independent comparison website. We receive commission when users visit operators through our links. This does not influence our editorial ratings. All operators listed hold a valid UKGC licence. Gambling involves risk. Please gamble responsibly.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-[10px] text-secondary-foreground/30 uppercase tracking-widest">
          <span>&copy; 2025 goldlistbettingsitesuk.com</span>
          <span>Independent Betting Sites Comparison</span>
        </div>
      </div>
    </footer>
  )
}
