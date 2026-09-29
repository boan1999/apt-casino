import { buildPageMetadata, LITEPAPER_PATH } from '@/lib/siteMetadata';

export const metadata = buildPageMetadata({
  title: 'Litepaper | BOAN GAME',
  description:
    'Official APT-Casino litepaper — multichain GambleFi, provably fair games, and APTC tokenomics.',
  path: LITEPAPER_PATH,
});

export default function LitepaperLayout({ children }) {
  return children;
}
