import type { Metadata } from 'next';
import { Fraunces, IBM_Plex_Sans, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import PageTransition from '@/components/PageTransition';
import SkipLink from '@/components/SkipLink';

const fraunces = Fraunces({
  variable: '--neo-font-display',
  subsets: ['latin'],
  display: 'swap',
  axes: ['opsz'],
});

const plexSans = IBM_Plex_Sans({
  variable: '--neo-font-sans',
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600'],
});

const plexMono = IBM_Plex_Mono({
  variable: '--neo-font-mono',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500'],
});

export const metadata: Metadata = {
  title: 'Neo Skin Clinic | Advanced Skin & Hair Care in Hyderabad',
  description: 'Hyderabad\'s trusted skin and hair clinic. Expert dermatologists, HydraFacial, Laser Hair Removal, Anti-Aging, Acne Treatment, Hair Transplant.',
  keywords: 'skin clinic hyderabad, vanasthalipuram, hydrafacial, laser hair removal, acne treatment, dermatologist hyderabad, neo skin clinic',
  openGraph: {
    title: 'Neo Skin Clinic | Advanced Skin & Hair Care',
    description: 'Expert dermatologists in Vanasthalipuram, Hyderabad. Book your free skin analysis today.',
    type: 'website',
    locale: 'en_IN',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${plexSans.variable} ${plexMono.variable}`} suppressHydrationWarning>
      <body>
        <SkipLink />
        <Navbar />
        <main id="main-content" className="min-h-[100dvh]">
          <PageTransition>
            {children}
          </PageTransition>
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
