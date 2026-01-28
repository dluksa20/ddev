import { ACCENT_COLORS } from "@/lib/constants"
import Button from "./ui/Button"
import { useState, useCallback, useEffect } from "react"

const AccentSwitcher = () => {
    const [activeColor, setActiveColor] = useState<string>('')

    const applyAccentColor = useCallback((color: string) => {
        document.documentElement.style.setProperty(
            '--color-accent',
            `var(--color-${color})`
        )
        setActiveColor(color)
        localStorage.setItem('accent-color', color)
    }, [])


    return (
        <div className="grid w-full grid-cols-[repeat(auto-fill,minmax(26px,1fr))] gap-2 p-2">
            {ACCENT_COLORS.map(color => {
                const isActive = color === localStorage.getItem('accent-color')

                return (
                    <Button
                        key={color}
                        size="xs"
                        className="site-sidebar__accent-button rounded-full transition-all duration-150"
                        variant='default'
                        style={{
                            backgroundColor: `var(--color-${color})`,
                            boxShadow: isActive
                                ? `0 0 0 2px var(--color-background-elevated),
                             0 0 0 4px var(--color-${color})`
                                : 'none'
                        }}
                        onClick={() => applyAccentColor(color)}
                    />
                )
            })}
        </div>
    )
}

export default AccentSwitcher
