import type React from "react"
import "./globals.css"
import { Lato } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lato",
})

export const metadata = {
  title: "Luxury Interior Design | Dubai's Premier Design Studio",
  description:
    "Dubai's premier luxury interior design, fit out, and architecture studio specializing in high-end residential and commercial projects.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <head>
      <link rel="icon" href="/logo.png?<generated>" type="image/png" sizes="32x32"/>
    </head>
      <body className={`${lato.variable} font-lato`}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
