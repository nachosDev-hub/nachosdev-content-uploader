import { mockMatch } from '@/lib/matchData'
import MatchHeader from './components/MatchHeader'
import MatchHeroCard from './components/MatchHeroCard'
import OutcomeInclination from './components/OutcomeInclination'
import VenueWeatherContext from './components/VenueWeatherContext'
import QuickRead from './components/QuickRead'
import RecentForm from './components/RecentForm'
import StartingXI from './components/StartingXI'
import TacticalView from './components/TacticalView'
import InjuryAndNews from './components/InjuryAndNews'
import WhatToWatch from './components/WhatToWatch'
import BottomCTA from './components/BottomCTA'
import BottomNav from '@/components/BottomNav'

export default function MatchDetailPage() {
  const match = mockMatch
  return (
    <div className="min-h-screen bg-white max-w-md mx-auto relative pb-20">
      <MatchHeader />
      <main className="px-4 py-3 space-y-4">
        <MatchHeroCard match={match} />
        <OutcomeInclination homeWin={match.homeWinPct} draw={match.drawPct} awayWin={match.awayWinPct} />
        <VenueWeatherContext match={match} />
        <QuickRead points={match.quickReadPoints} />
        <RecentForm
          homeTeam={match.homeTeam}
          awayTeam={match.awayTeam}
          homeForm={match.homeRecentForm}
          awayForm={match.awayRecentForm}
        />
        <StartingXI
          teamName={match.homeTeam.name}
          flag={match.homeTeam.flag}
          left={match.homeStartingXI.left}
          right={match.homeStartingXI.right}
        />
        <StartingXI
          teamName={match.awayTeam.name}
          flag={match.awayTeam.flag}
          left={match.awayStartingXI.left}
          right={match.awayStartingXI.right}
        />
        <TacticalView match={match} />
        <InjuryAndNews match={match} />
        <WhatToWatch items={match.whatToWatch} />
        <BottomCTA />
      </main>
      <BottomNav active="matches" />
    </div>
  )
}
