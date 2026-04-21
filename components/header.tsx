import Link from "next/link"

export function Header() {
  return (
    <header className="bg-card border-b border-border sticky top-0 z-50 w-full">
      <div className="container mx-auto max-w-5xl px-4 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-7 h-7 bg-primary flex items-center justify-center flex-shrink-0">
              <span className="text-primary-foreground font-heading font-700 text-xs leading-none">GL</span>
            </div>
            <div>
              <span className="font-heading font-700 text-base md:text-lg tracking-wider uppercase text-foreground">
                Gold List Best Betting Sites <span className="text-primary">UK</span>
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-2 md:gap-3">
            <span className="hidden sm:block text-xs text-muted-foreground border border-border px-2 py-1 uppercase tracking-wide">
              UKGC Licensed
            </span>
            <span className="text-xs font-heading font-700 text-destructive border border-destructive px-2 py-1 uppercase tracking-wide">
              18+
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}
