import Header from "@/components/Header"
import "./globals.css"
import { Providers } from "./providers"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-background text-foreground">
        <Header />
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
