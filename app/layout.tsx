import Header from "@/components/Header"
import "./globals.css"
import ThemeProvider from "@/components/ThemeProvider"


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-background text-foreground min-h-screen scrollbar">
        <ThemeProvider>
          <div className="flex min-h-screen flex-col">
            <Header/>

            {/* Page content */}
            <main className="flex flex-1 items-center justify-center">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
