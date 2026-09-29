import { buildPageMetadata } from '@/lib/siteMetadata';

export const metadata = buildPageMetadata({
  title: 'Play Games | BOAN GAME',
  description:
    'Provably fair roulette, mines, plinko, wheel and more — play with SOL or APT on BOAN GAME.',
  path: '/game',
});

export default function GameLayout({ children }) {
  return <>{children}</>;
}
