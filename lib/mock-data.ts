export interface BettingSite {
  id: number
  name: string
  logo: string
  bonus: string
  url: string
  rating: number
  stars: number
  reviews: number
  badges: string[]
  description: string
  features: string[]
  welcomeOffer: string
  terms: string
  isTopRating?: boolean
  isTopLine?: boolean
  isPopular?: boolean
  isTrending?: boolean
}

export const bettingSites: BettingSite[] = [
  {
    id: 1,
    name: "Operator A",
    logo: "/betano.svg",
    bonus: "Bet £10 Get £30 in Free Bets",
    url: "#",
    rating: 9.8,
    stars: 5,
    reviews: 8412,
    badges: ["EDITORS PICK"],
    description: "Top-rated licensed UK operator",
    features: ["UKGC Licensed", "Bet Builder", "Cash Out"],
    welcomeOffer: "Welcome Offer",
    terms: "18+ | New customers only | Free bets valid 7 days | T&Cs apply | BeGambleAware.org",
    isTopRating: true,
  },
  {
    id: 2,
    name: "Operator B",
    logo: "/solverde.svg",
    bonus: "£20 Free Bet on First Deposit",
    url: "#",
    rating: 9.6,
    stars: 5,
    reviews: 7230,
    badges: ["POPULAR"],
    description: "Well-established UK bookmaker",
    features: ["UKGC Licensed", "Live Streaming", "Mobile App"],
    welcomeOffer: "First Deposit Offer",
    terms: "18+ | New customers only | Min deposit £10 | T&Cs apply | BeGambleAware.org",
    isPopular: true,
  },
  {
    id: 3,
    name: "Operator C",
    logo: "/bwin.png",
    bonus: "Up to £50 in Free Bets",
    url: "#",
    rating: 9.4,
    stars: 5,
    reviews: 6108,
    badges: ["GREAT ODDS"],
    description: "Competitive odds across all markets",
    features: ["UKGC Licensed", "Wide Markets", "In-Play Betting"],
    welcomeOffer: "Sign-Up Offer",
    terms: "18+ | New customers only | Free bets expire in 7 days | T&Cs apply | BeGambleAware.org",
    isTrending: true,
  },
  {
    id: 4,
    name: "Operator D",
    logo: "/luckia.svg",
    bonus: "Bet £5 Get £20 Free Bet",
    url: "#",
    rating: 9.2,
    stars: 5,
    reviews: 9041,
    badges: ["LOW DEPOSIT"],
    description: "Low minimum deposit requirements",
    features: ["UKGC Licensed", "Best Odds Guaranteed", "Acca Insurance"],
    welcomeOffer: "Welcome Free Bet",
    terms: "18+ | New customers only | Min deposit £5 | T&Cs apply | BeGambleAware.org",
    isTopLine: true,
  },
  {
    id: 5,
    name: "Operator E",
    logo: "/esc.svg",
    bonus: "£30 in Free Bets + £10 Casino",
    url: "#",
    rating: 9.0,
    stars: 5,
    reviews: 8763,
    badges: ["SPORTS & CASINO"],
    description: "Combined sportsbook and casino",
    features: ["UKGC Licensed", "Live Streaming", "Acca Boosts"],
    welcomeOffer: "Combined Welcome Offer",
    terms: "18+ | New customers only | T&Cs apply | BeGambleAware.org",
  },
  {
    id: 6,
    name: "Operator F",
    logo: "/betclic.svg",
    bonus: "100% Match up to £25",
    url: "#",
    rating: 8.8,
    stars: 4,
    reviews: 5914,
    badges: ["MATCHED BONUS"],
    description: "Reliable and straightforward offers",
    features: ["UKGC Licensed", "Live Betting", "Easy Withdrawals"],
    welcomeOffer: "Deposit Match",
    terms: "18+ | New customers only | Wagering requirements apply | T&Cs apply | BeGambleAware.org",
    isPopular: true,
  },
  {
    id: 7,
    name: "Operator G",
    logo: "/lebull.svg",
    bonus: "Free Bet up to £40",
    url: "#",
    rating: 8.6,
    stars: 4,
    reviews: 6870,
    badges: ["HIGH VALUE"],
    description: "High-value welcome package",
    features: ["UKGC Licensed", "Competitive Odds", "Fast Payouts"],
    welcomeOffer: "Free Bet Offer",
    terms: "18+ | New customers only | Min odds 1/2 | T&Cs apply | BeGambleAware.org",
  },
  {
    id: 8,
    name: "Operator H",
    logo: "/brand-ccasino.svg",
    bonus: "£10 Free Bet No Deposit",
    url: "#",
    rating: 8.4,
    stars: 4,
    reviews: 7289,
    badges: ["NO DEPOSIT"],
    description: "No deposit free bet for new players",
    features: ["UKGC Licensed", "Quick Registration", "Mobile Optimised"],
    welcomeOffer: "No Deposit Offer",
    terms: "18+ | New customers only | No deposit required | T&Cs apply | BeGambleAware.org",
    isTrending: true,
  },
]
