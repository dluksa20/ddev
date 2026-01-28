import { THEMES } from "@/lib/constants"
import Button from "./ui/Button"
import { useTheme } from "next-themes"


const ThemeSwitcher = () => {
    const { theme, setTheme } = useTheme()
    return (
        <div className="site-sidebar__themes">
            <div className="site-sidebar__buttons">
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
