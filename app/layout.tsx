import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Vanshika Pandey | Frontend Developer',
  description: 'Frontend developer portfolio for Vanshika Pandey, focused on React.js, Redux Toolkit, TypeScript, Tailwind CSS, API integration, and accessible responsive UI.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
