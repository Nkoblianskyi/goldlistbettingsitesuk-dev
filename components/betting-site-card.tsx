"use client"

import { Star } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import type { BettingSite } from "@/lib/mock-data"

interface BettingSiteCardProps {
  site: BettingSite
  rank: number
}

export function BettingSiteCard({ site, rank }: BettingSiteCardProps) {
  const getPrimaryBadge = () => {
    if (site.isTopRating) return { text: "TOP PICK", color: "bg-primary text-primary-foreground" }
    if (site.isTopLine) return { text: "BEST CHOICE", color: "bg-secondary text-secondary-foreground" }
    if (site.isPopular) return { text: "POPULAR", color: "bg-secondary text-secondary-foreground" }
    if (site.isTrending) return { text: "TRENDING", color: "bg-secondary text-secondary-foreground" }
    return null
  }

  const renderStars = () => {
    const fullStars = Math.floor(site.stars)
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-3 h-3 ${i < fullStars ? "fill-primary text-primary" : "text-muted-foreground"}`}
      />
    ))
  }

  const primaryBadge = getPrimaryBadge()
  const isFirst = rank === 1

  return (
    <a
      href={site.url}
      target="_blank"
      rel="noopener noreferrer nofollow sponsored"
      className={`block relative border transition-all hover:border-primary/60 hover:shadow-sm ${isFirst
        ? "border-primary bg-card border-l-4"
        : "border-border bg-card"
        }`}
    >
      {primaryBadge && (
        <div className="absolute -top-px left-4">
          <span className={`${primaryBadge.color} px-2 py-0.5 text-[10px] font-heading font-700 uppercase tracking-widest`}>
            {primaryBadge.text}
          </span>
        </div>
      )}

      {/* Desktop */}
      <div className="hidden md:flex md:items-center md:gap-4 px-4 py-4 pt-5">
        {/* Rank */}
        <div className={`w-9 h-9 flex items-center justify-center font-heading font-700 text-lg flex-shrink-0 ${isFirst ? "bg-black text-primary-foreground" : "bg-muted text-muted-foreground"
          }`}>
          {rank}
        </div>

        {/* Logo */}
        <div className="flex-shrink-0 w-48 h-28 flex items-center justify-center px-3 overflow-hidden">
          <img
            src={site.logo || "/placeholder.svg"}
            alt={`Operator ${rank}`}
            className="max-h-32 w-full object-contain"
          />
        </div>

        {/* Offer */}
        <div className="flex-1 min-w-0 text-center">
          <div className="text-[12px] uppercase tracking-widest text-muted-foreground mb-0.5">Welcome Offer</div>
          <p className="text-foreground font-semibold text-lg leading-snug">{site.bonus}</p>
        </div>

        {/* Rating */}
        <div className="text-center flex-shrink-0 w-20">
          <div className="font-heading font-700 text-2xl text-primary leading-none">
            {site.rating.toFixed(1)}
          </div>
          <div className="text-[10px] text-muted-foreground">/10</div>
          <div className="flex items-center justify-center gap-0.5 mt-1">{renderStars()}</div>
        </div>

        {/* CTA */}
        <div className="flex-shrink-0">
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-heading font-700 uppercase tracking-wide text-xs px-5 py-2 h-auto">
            Visit Site
          </Button>
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden px-3 py-3 pt-5">
        <div className="flex items-center gap-3 mb-3">
          <div className={`w-7 h-7 flex items-center justify-center font-heading font-700 text-sm flex-shrink-0 ${isFirst ? "bg-black text-primary-foreground" : "bg-muted text-muted-foreground"
            }`}>
            {rank}
          </div>
          <div className="flex-shrink-0 w-36 h-24 flex items-center justify-center px-2">
            <Image
              src={site.logo || "/placeholder.svg"}
              alt={`Operator ${rank}`}
              width={124}
              height={90}
              className="object-contain"
            />
          </div>
          <div className="flex-1 text-right">
            <div className="font-heading font-700 text-xl text-primary leading-none">{site.rating.toFixed(1)}</div>
            <div className="flex justify-end gap-0.5 mt-0.5">{renderStars()}</div>
          </div>
        </div>

        <div className="bg-muted px-3 py-2 mb-3 border-l-2 border-primary">
          <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-0.5">Welcome Offer</div>
          <div className="text-foreground font-semibold text-sm">{site.bonus}</div>
        </div>

        <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-heading font-700 uppercase tracking-wide text-xs h-9">
          Visit Site
        </Button>
      </div>

      {/* Disclaimer */}
      <div className="px-3 md:px-4 pb-2 border-t border-border mt-1">
        <p className="text-muted-foreground text-[10px] pt-1.5">
          <span className="text-destructive font-semibold">18+</span> | Responsible Gambling | UKGC Licensed | T&Cs Apply
        </p>
      </div>
    </a>
  )
}
