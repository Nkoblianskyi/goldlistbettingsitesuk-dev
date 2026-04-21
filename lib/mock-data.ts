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
    name: "BETVICTOR",
    logo: "/betvictor.webp",
    bonus: "Get £30 Free Bets",
    url: "https://www.betvictor.com",
    rating: 9.4,
    stars: 5,
    reviews: 6108,
    badges: ["GREAT ODDS"],
    description: "Trusted UK sportsbook with competitive odds",
    features: ["UKGC Licensed", "Wide Markets", "In-Play Betting"],
    welcomeOffer: "Get £30 Free Bets",
    terms: "18+ | New customers only | Free bets expire in 7 days | T&Cs apply | BeGambleAware.org",
    isTrending: true,
  },
  {
    id: 2,
    name: "BETFRED",
    logo: "/betfred.png",
    bonus: "Get £50 Free Bets",
    url: "https://www.betfred.com",
    rating: 9.8,
    stars: 5,
    reviews: 8412,
    badges: ["EDITORS PICK"],
    description: "Established UK bookmaker with broad sportsbook coverage",
    features: ["UKGC Licensed", "Bet Builder", "Cash Out"],
    welcomeOffer: "Get £50 Free Bets",
    terms: "18+ | New customers only | Free bets valid 7 days | T&Cs apply | BeGambleAware.org",
    isTopRating: true,
  },
  {
    id: 3,
    name: "BOYLESPORTS",
    logo: "/boylesports.webp",
    bonus: "£40 Welcome Offer – New Customers Only",
    url: "https://www.boylesports.com",
    rating: 9.6,
    stars: 5,
    reviews: 7230,
    badges: ["POPULAR"],
    description: "Popular bookmaker for football and horse racing markets",
    features: ["UKGC Licensed", "Live Streaming", "Mobile App"],
    welcomeOffer: "£40 Welcome Offer – New Customers Only",
    terms: "18+ | New customers only | Min deposit £10 | T&Cs apply | BeGambleAware.org",
    isPopular: true,
  },

  {
    id: 4,
    name: "LADBROKES",
    logo: "/ladbrokes.webp",
    bonus: "Only £5 to Claim £30 Welcome Bonus",
    url: "https://www.ladbrokes.com",
    rating: 9.2,
    stars: 5,
    reviews: 9041,
    badges: ["LOW DEPOSIT"],
    description: "Major UK brand with extensive in-play betting options",
    features: ["UKGC Licensed", "Best Odds Guaranteed", "Acca Insurance"],
    welcomeOffer: "Only £5 to Claim £30 Welcome Bonus",
    terms: "18+ | New customers only | Min deposit £5 | T&Cs apply | BeGambleAware.org",
    isTopLine: true,
  },
  {
    id: 5,
    name: "MIDNITE",
    logo: "/midnite.webp",
    bonus: "Get £30 in Free Bets",
    url: "https://www.midnite.com",
    rating: 9.0,
    stars: 5,
    reviews: 8763,
    badges: ["SPORTS & CASINO"],
    description: "Modern sportsbook focused on esports and mainstream markets",
    features: ["UKGC Licensed", "Live Streaming", "Acca Boosts"],
    welcomeOffer: "Get £30 in Free Bets",
    terms: "18+ | New customers only | T&Cs apply | BeGambleAware.org",
  },
  {
    id: 6,
    name: "SPREADEX",
    logo: "/spreadex.webp",
    bonus: "Bet £10, Get £60 in Free Bets at Spreadex",
    url: "https://www.spreadex.com",
    rating: 8.8,
    stars: 4,
    reviews: 5914,
    badges: ["MATCHED BONUS"],
    description: "Recognised UK sportsbook with flexible betting options",
    features: ["UKGC Licensed", "Live Betting", "Easy Withdrawals"],
    welcomeOffer: "Bet £10, Get £60 in Free Bets at Spreadex",
    terms: "18+ | New customers only | Wagering requirements apply | T&Cs apply | BeGambleAware.org",
    isPopular: true,
  },
]
