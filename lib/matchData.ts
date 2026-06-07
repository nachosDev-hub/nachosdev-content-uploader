export type Player = {
  number: number
  name: string
  pos: string
  fit: number
}

export type RecentMatch = {
  result: 'W' | 'D' | 'L'
  score: string
  opponent: string
  competition: string
}

export type InjuryStatus = {
  unavailable: number
  doubtful: number
  monitored: number
}

export type NewsItem = {
  headline: string
  timeAgo: string
}

export type MatchData = {
  id: string
  matchType: string
  homeTeam: { name: string; flag: string; shortCode: string }
  awayTeam: { name: string; flag: string; shortCode: string }
  date: string
  localTime: string
  gmtOffset: string
  venue: string
  city: string
  country: string
  updatedAt: string
  homeWinPct: number
  drawPct: number
  awayWinPct: number
  venueCapacity: string
  venueSurface: string
  pitchCondition: string
  weatherTemp: number
  weatherCondition: string
  weatherWind: string
  weatherHumidity: string
  weatherPrecip: string
  quickReadPoints: Array<{ icon: string; text: string }>
  homeRecentForm: RecentMatch[]
  awayRecentForm: RecentMatch[]
  homeStartingXI: { left: Player[]; right: Player[] }
  awayStartingXI: { left: Player[]; right: Player[] }
  homeFormation: string
  awayFormation: string
  homeTacticalPositions: Array<{ name: string; x: number; y: number }>
  awayTacticalPositions: Array<{ name: string; x: number; y: number }>
  homeInjury: InjuryStatus
  awayInjury: InjuryStatus
  relatedNews: NewsItem[]
  whatToWatch: string[]
}

export const mockMatch: MatchData = {
  id: 'mex-vs-rsa-2026-06-11',
  matchType: 'Opening Match · World Cup 2026',
  homeTeam: { name: 'Mexico', flag: '🇲🇽', shortCode: 'MEX' },
  awayTeam: { name: 'South Africa', flag: '🇿🇦', shortCode: 'RSA' },
  date: '11 Jun 2026',
  localTime: '17:00 LOCAL',
  gmtOffset: 'GMT−6',
  venue: 'Estadio Azteca',
  city: 'Mexico City',
  country: 'Mexico',
  updatedAt: '10:42 WIB',
  homeWinPct: 52,
  drawPct: 26,
  awayWinPct: 22,
  venueCapacity: '87,523',
  venueSurface: 'Natural Grass',
  pitchCondition: 'Very Good',
  weatherTemp: 23,
  weatherCondition: 'Partly Cloudy',
  weatherWind: '8 km/h',
  weatherHumidity: '62%',
  weatherPrecip: '10%',
  quickReadPoints: [
    { icon: '🇲🇽', text: 'Mexico are unbeaten in their last 8 opening matches in major tournaments.' },
    { icon: '🏟️', text: 'Estadio Azteca has seen over 65% of matches with 2+ total goals.' },
    { icon: '🇿🇦', text: 'South Africa have scored in 9 of their last 10 international matches.' },
    { icon: '🌤️', text: 'Weather looks ideal with low chance of rain and mild conditions.' },
  ],
  homeRecentForm: [
    { result: 'W', score: '2–0', opponent: 'Jamaica', competition: 'CONCACAF' },
    { result: 'W', score: '3–1', opponent: 'Honduras', competition: 'CONCACAF' },
    { result: 'D', score: '1–1', opponent: 'USA', competition: 'Friendly' },
    { result: 'W', score: '2–1', opponent: 'Costa Rica', competition: 'CONCACAF' },
    { result: 'W', score: '4–0', opponent: 'El Salvador', competition: 'CONCACAF' },
  ],
  awayRecentForm: [
    { result: 'W', score: '1–0', opponent: 'Zimbabwe', competition: 'AFCON Q' },
    { result: 'D', score: '0–0', opponent: 'Morocco', competition: 'Friendly' },
    { result: 'W', score: '2–1', opponent: 'Ethiopia', competition: 'AFCON Q' },
    { result: 'L', score: '0–2', opponent: 'Senegal', competition: 'Friendly' },
    { result: 'W', score: '3–0', opponent: 'Angola', competition: 'AFCON Q' },
  ],
  homeStartingXI: {
    left: [
      { number: 13, name: 'G. Ochoa (C)', pos: 'GK', fit: 82 },
      { number: 2, name: 'J. Sánchez', pos: 'RB', fit: 76 },
      { number: 3, name: 'C. Montes', pos: 'CB', fit: 81 },
      { number: 15, name: 'I. Moreno', pos: 'CB', fit: 76 },
      { number: 5, name: 'J. Gallardo', pos: 'LB', fit: 74 },
    ],
    right: [
      { number: 16, name: 'H. Herrera', pos: 'CDM', fit: 89 },
      { number: 24, name: 'L. Chávez', pos: 'CM', fit: 84 },
      { number: 11, name: 'H. Lozano', pos: 'RW', fit: 83 },
      { number: 9, name: 'R. Jiménez', pos: 'ST', fit: 80 },
      { number: 10, name: 'A. Vega', pos: 'LW', fit: 77 },
    ],
  },
  awayStartingXI: {
    left: [
      { number: 1, name: 'R. Williams (C)', pos: 'GK', fit: 81 },
      { number: 2, name: 'K. Langerman', pos: 'RB', fit: 78 },
      { number: 5, name: 'T. Kekana', pos: 'CB', fit: 78 },
      { number: 6, name: 'G. Mkhwanazi', pos: 'CB', fit: 79 },
      { number: 3, name: 'A. Maema', pos: 'LB', fit: 74 },
    ],
    right: [
      { number: 10, name: 'P. Tau', pos: 'CAM', fit: 83 },
      { number: 8, name: 'T. Morena', pos: 'CM', fit: 77 },
      { number: 7, name: 'T. Mokoena', pos: 'RW', fit: 81 },
      { number: 9, name: 'L. Foster', pos: 'ST', fit: 80 },
      { number: 11, name: 'S. Zwane', pos: 'LW', fit: 75 },
    ],
  },
  homeFormation: '4-3-3',
  awayFormation: '4-2-3-1',
  homeTacticalPositions: [
    { name: 'Ochoa', x: 50, y: 88 },
    { name: 'Sánchez', x: 82, y: 72 },
    { name: 'Montes', x: 65, y: 72 },
    { name: 'I. Moreno', x: 35, y: 72 },
    { name: 'Gallardo', x: 18, y: 72 },
    { name: 'Herrera', x: 65, y: 55 },
    { name: 'Álvarez', x: 50, y: 48 },
    { name: 'Jiménez', x: 35, y: 55 },
    { name: 'Lozano', x: 82, y: 35 },
    { name: 'R. Jiménez', x: 50, y: 28 },
    { name: 'Vega', x: 18, y: 35 },
  ],
  awayTacticalPositions: [
    { name: 'Williams', x: 50, y: 88 },
    { name: 'Langerman', x: 82, y: 72 },
    { name: 'Kekana', x: 65, y: 72 },
    { name: 'Mkhwanazi', x: 35, y: 72 },
    { name: 'Maema', x: 18, y: 72 },
    { name: 'Morena', x: 65, y: 55 },
    { name: 'Modiba', x: 35, y: 55 },
    { name: 'Foster', x: 50, y: 38 },
    { name: 'Mokoena', x: 75, y: 30 },
    { name: 'Tau', x: 50, y: 25 },
    { name: 'Zwane', x: 25, y: 30 },
  ],
  homeInjury: { unavailable: 1, doubtful: 1, monitored: 2 },
  awayInjury: { unavailable: 1, doubtful: 2, monitored: 2 },
  relatedNews: [
    { headline: 'Mexico ready to light up the opening match at Estadio Azteca', timeAgo: '2h ago' },
    { headline: 'South Africa eye strong start against World Cup hosts', timeAgo: '4h ago' },
    { headline: 'Key battles to watch in Mexico vs South Africa', timeAgo: '6h ago' },
  ],
  whatToWatch: [
    'Set pieces could be decisive for both sides',
    "Mexico's wide play vs South Africa's fullbacks",
    'Midfield battle: Herrera & Chávez vs Tau & Morena',
    'Watch early intensity in the first 15 minutes',
  ],
}
