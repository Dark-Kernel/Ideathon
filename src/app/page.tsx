import IdeathonLanding from './IdeathonLanding';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'IDEATHON: Spark Before the Code ',
  description: 'Unleash your entrepreneurial vision. Solve real-world problems. Build the future.',
  icons: {
    icon: '/favicon.svg',
  },
};

export default function Page() {
  return <IdeathonLanding />;
}
