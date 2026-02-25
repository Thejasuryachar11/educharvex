import type React from "react"
import type { Metadata } from "next"
import { Geist, Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Banashree Tutorials - Empowering Young Minds | Classes 6-10 & PUC",
  description:
    "Premier coaching center in Bangalore offering CBSE, ICSE & State Board tuition for Classes 6-10 and PUC (PCMB). Expert faculty with 5+ years experience. Students scoring 98%+. Online & Offline classes available.",
  keywords:
    "tuition center, coaching classes, CBSE tuition, ICSE tuition, State Board, Class 6-10, PUC coaching, PCMB, Bangalore tutorials",
  generator: "Surya",

  icons: {
    icon: "/logo.png",   // Browser tab icon
    apple: "/logo.png",  // Apple devices
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${_poppins.className} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
