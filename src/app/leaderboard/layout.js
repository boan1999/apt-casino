import { buildPageMetadata } from '@/lib/siteMetadata';

export const metadata = buildPageMetadata({
  title: 'Leaderboard | BOAN GAME',
  description:
    'On-chain player leaderboard for BOAN GAME — net P&L, wagered volume, win rate, and biggest wins on Solana and Aptos.',
  path: '/leaderboard',
});

export default function LeaderboardLayout({ children }) {
  return children;
}
