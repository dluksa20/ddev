import { THEMES } from "@/lib/constants"
import Button from "./ui/Button"
import { useTheme } from "next-themes"


const ThemeSwitcher = () => {
    const { theme, setTheme } = useTheme()
    return (
        <div className="flex flex-col justify-center gap-4">
            <div className="grid grid-cols-2 gap-2 *:last:col-span-2">
                {THEMES.map(({ id, label }) => (
                    <Button
                        key={id}
                        buttonText={label}
                        isActive={theme === id}
                        variant="borderless"
                        size="xs"
                        onClick={() => setTheme(id)}
                    />
                ))}
            </div>
        </div>
    )
}

export default ThemeSwitcher

