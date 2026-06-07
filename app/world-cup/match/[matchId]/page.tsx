import { redirect } from 'next/navigation'

export default function WorldCupMatchPage({ params }: { params: { matchId: string } }) {
  redirect(`/matches/${params.matchId}`)
}
