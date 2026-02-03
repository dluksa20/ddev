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
            <div className="flex items-center justify-between px-5 py-3 bg-background-elevated border-b border-accent/10 z-10 shrink-0">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56] shadow-inner" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e] shadow-inner" />
                <div className="w-3 h-3 rounded-full bg-[#27c93f] shadow-inner" />
              </div>
              <div className="hidden md:block text-[11px] uppercase tracking-[0.2em] text-accent/40 font-bold">
                dovydas — zsh — 144x60
              </div>
              <div className="text-[10px] text-accent/60 md:w-12 text-right">
                {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </div>
            </div>
            <Header />

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
