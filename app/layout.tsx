import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";
import "./custom.css";
import NavBar from "./components/NavBar";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: "600",
  style: "italic",
})

const poppins = Poppins({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: "600",
  style: "italic",
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
        className={`${poppins.variable} antialiased`}
      > <NavBar />
        {children}
      </body>
    </html>
  );
}
