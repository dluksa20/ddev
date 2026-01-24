import Header from "@/components/Header"
import "./globals.css"
import { ThemeProvider } from "next-themes"


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-background text-foreground">
        <ThemeProvider attribute="class" themes={[
            'midnight-eclipse',
            'sunset-horizon',
            'forest-breeze',
        ]}
            defaultTheme="midnight-eclipse">
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

