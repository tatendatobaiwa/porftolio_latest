import type {Metadata} from 'next';
import { Space_Grotesk, VT323, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space' });
const vt323 = VT323({ weight: '400', subsets: ['latin'], variable: '--font-vt' });
const jetbrains = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });

export const metadata: Metadata = {
  title: 'Tatenda A. Tobaiwa | Portfolio',
  description: 'Software Engineer & Computational Geometer',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className={`${spaceGrotesk.variable} ${vt323.variable} ${jetbrains.variable}`}>
        {children}
      </body>
    </html>
  );
}