import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'lead-gen-automation',
  description: 'B2B lead generation and outreach',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
