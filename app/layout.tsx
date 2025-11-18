import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"
import StructuredData from "@/components/StructuredData"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "EchoWorks AI - Transform Your Business with AI Solutions",
  description: "Leading AI agency specializing in automation, voice agents, chatbots, and end-to-end AI solutions. Partner with us to revolutionize your business operations.",
  keywords: ["AI agency", "AI automation", "voice agents", "chatbots", "AI solutions", "business automation"],
  authors: [{ name: "EchoWorks AI" }],
  openGraph: {
    title: "EchoWorks AI - Transform Your Business with AI Solutions",
    description: "Leading AI agency specializing in automation, voice agents, chatbots, and end-to-end AI solutions.",
    url: "https://echoworks.ai",
    siteName: "EchoWorks AI",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "EchoWorks AI - AI Solutions Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EchoWorks AI - Transform Your Business with AI Solutions",
    description: "Leading AI agency specializing in automation, voice agents, chatbots, and end-to-end AI solutions.",
    images: ["/images/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://echoworks.ai",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StructuredData />
        {children}
        <Toaster />
      </body>
    </html>
  )
}

