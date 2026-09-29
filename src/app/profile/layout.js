import { buildPageMetadata } from '@/lib/siteMetadata';

export const metadata = buildPageMetadata({
  title: 'Profile | BOAN GAME',
  description:
    'Your BOAN GAME player dashboard — house balance, game stats, deposits, withdrawals, and APTC rewards.',
  path: '/profile',
});

export default function ProfileLayout({ children }) {
  return children;
}
