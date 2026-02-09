import { ACCENT_COLORS } from "@/lib/constants"
import Button from "./ui/Button"
import { useState, useCallback, useEffect } from "react"


type accentSwitcherProps = {
    shape?: string;
}
const AccentSwitcher = ({shape}:accentSwitcherProps) => {
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
        <div className="grid w-full grid-rows-1 grid-cols-[repeat(7,1fr)] gap-2 p-2">
            {ACCENT_COLORS.map(color => {
                const isActive = color === localStorage.getItem('accent-color')

                return (
                    <Button
                        key={color}
                        size="auto"
                        className={` ${(shape == 'square') ? 'aspect-square w-full h-full p-0 min-h-0' : ' aspect-square rounded-full w-full h-full p-0 min-h-0' }`}
                        variant='default'
                        style={{
                            aspectRatio: 'square',
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
