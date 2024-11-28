import type { Metadata } from "next";
import "./globals.css";

import { DM_Sans } from 'next/font/google';

const inter = DM_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Reality3DHub",
  description: "3D print manufacturing service provider",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
