'use client'
import { links } from "@/lib/constants"
import Link from "next/link"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
import Sidebar from "./Sidebar"
import { useState } from "react"
import Button from "./Button"

const Header = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const openSidebar = () => {
        setIsSidebarOpen(true)
    }
    const closeSidebar = () => {
        setIsSidebarOpen(false)
    }
    

    return (
        <header className="site-header">
            <div className="site-header__inner">

                <div className="site-header__title">
                    <h1>
                        ddev@dluksa.dev
                        <span className="text-foreground">: </span>
                        <span className="text-primary">~</span>
                        <span className="text-foreground">$</span>
                    </h1>
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
                            <Sidebar onClose={closeSidebar}/>
                        }
                    </div>
                </div>
            </div>

        </header>
    )
}

export default Header

