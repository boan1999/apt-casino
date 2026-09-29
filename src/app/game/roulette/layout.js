import { buildPageMetadata } from '@/lib/siteMetadata';

export const metadata = buildPageMetadata({
  title: 'Roulette | BOAN GAME',
  description: 'European roulette with provably fair spins — bet on Solana or Aptos at BOAN GAME.',
  path: '/game/roulette',
});

export default function RouletteLayout({ children }) {
  return children;
}
