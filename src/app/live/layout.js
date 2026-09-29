import { buildPageMetadata } from '@/lib/siteMetadata';

export const metadata = buildPageMetadata({
  title: 'Live Streams | BOAN GAME',
  description:
    'Watch and stream BOAN GAME gameplay. Go live, earn a share of platform revenue, and grow your audience on Solana.',
  path: '/live',
});

export default function LiveLayout({ children }) {
  return children;
}
