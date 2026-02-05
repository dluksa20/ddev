'use client'
import { links } from "@/lib/constants"
import Link from "next/link"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
import Sidebar from "./Sidebar"
import { useState } from "react"
import Button from "./ui/Button"
import { usePathname } from "next/navigation"
import TerminalHeader from "./TerminalHeader"

const Header = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const pathname = usePathname()

    const openSidebar = () => {
        setIsSidebarOpen(true)
    }
    const closeSidebar = () => {
        setIsSidebarOpen(false)
    }


    return (
        <header className="site-header">
            <div className="flex-1">

                <TerminalHeader />
                <div className="site-header__inner">
                    <div className="site-header__title">
                        <h2 className="text-accent font-bold">
                            ddev@dluksa.dev
                            <span className="text-fg-base font-light">:</span>
                            <span className="text-primary font-light">~</span>
                            {
                                pathname === '/' ? <span className="text-fg-base font-light">$ </span> : (
                                    < span className="font-light text-fg-base">{pathname}<span className="text-accent font-medium">$</span></span>)

                            }

                        </h2>
                        <div className="site-header__cursor">
                        </div>
                    </div>
                    <div className="site-header__nav">
                        {
                            links.map((link) => (
                                <Link className="site-header__link" href={link.url} key={link.title}>
                                    {link.title}
                                </Link>
                            ))
                        }
                        <div>
                            <Button onClick={openSidebar} size='sm'>
                                {isSidebarOpen ?
                                    <FaChevronRight /> :
                                    <FaChevronLeft />}
                            </Button>
                            {isSidebarOpen &&
                                <Sidebar onClose={closeSidebar} />
                            }
                        </div>
                    </div>
                </div>
            </div>

        </header >
    )
}

export default Header

