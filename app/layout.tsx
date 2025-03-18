import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: "400",
})


export const metadata: Metadata = {
  title: "3D-Components",
  description: "Free 3D components for website using three.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
