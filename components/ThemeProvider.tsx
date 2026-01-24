'use client'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { useEffect, useState, type ReactNode } from 'react'

type ThemeProviderProps = {
    children: ReactNode
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <NextThemesProvider attribute="class" themes={[
            'midnight-eclipse',
            'sunset-horizon',
            'forest-breeze',
        ]}
            defaultTheme="midnight-eclipse">
            {children}
        </NextThemesProvider>
    )
}
export default ThemeProvider


