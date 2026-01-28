'use client'

import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { useEffect, useState, type ReactNode } from 'react'

type ThemeProviderProps = {
    children: ReactNode
}

const DEFAULT_ACCENT = 'sage-green'
const DEFAULT_THEME = 'void'

const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)

        const savedAccent = localStorage.getItem('accent-color') || DEFAULT_ACCENT
        document.documentElement.style.setProperty('--color-accent', `var(--color-${savedAccent})`)

        if (!localStorage.getItem('accent-color')) {
            localStorage.setItem('accent-color', DEFAULT_ACCENT)
        }
        if (!localStorage.getItem('theme')) {
            localStorage.setItem('theme', DEFAULT_THEME)
        }
    }, [])

    if (!mounted) return null

    return (
        <NextThemesProvider
            attribute="class"
            themes={['palenight', 'void', 'ashlight']}
            storageKey="theme" 
        >
            {children}
        </NextThemesProvider>
    )
}

export default ThemeProvider
