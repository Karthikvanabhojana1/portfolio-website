import "./globals.css"
import { Inter } from "next/font/google"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Karthik Vanabhojana - Software Developer Portfolio",
  description:
    "Portfolio website of Karthik Vanabhojana, a skilled software developer with expertise in Java, Spring Boot, and cloud technologies.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} dark:bg-gray-900 dark:text-gray-100`}>{children}</body>
    </html>
  )
}

