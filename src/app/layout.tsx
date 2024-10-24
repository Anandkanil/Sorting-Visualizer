import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SortingAlgorithmProvider } from "@/context/Visualizer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Sorting Visualizer",
  description: "A next app created by Anand K Anil",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <link rel="icon" href="https://img.icons8.com/?size=100&id=53879&format=png&color=000000" />
        <SortingAlgorithmProvider>{children}</SortingAlgorithmProvider>
      </body>
    </html>
  );
}
