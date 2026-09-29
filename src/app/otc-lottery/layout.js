import { buildPageMetadata } from '@/lib/siteMetadata';

export const metadata = buildPageMetadata({
  title: 'OTC Lottery | BOAN GAME',
  description:
    'Send SOL, receive APTC from the BOAN GAME team — skip bonding-curve slippage and DEX fees on larger allocations.',
  path: '/otc-lottery',
});

export default function OtcLotteryLayout({ children }) {
  return children;
}
