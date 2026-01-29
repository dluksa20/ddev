import Link from 'next/link'
import Button from './ui/Button'
import {
    FaGithub,
    FaLinkedin,
    FaChevronRight
} from 'react-icons/fa'
import { MdOutlinePalette } from 'react-icons/md'
import { PiLinkSimpleLight } from 'react-icons/pi'
import { IoMail } from 'react-icons/io5'

import { links } from '@/lib/constants'
import ThemeSwitcher from './ThemeSwitcher'
import AccentSwitcher from './AccentSwitcher'

type SidebarProps = {
    onClose: () => void
}

const Sidebar = ({ onClose }: SidebarProps) => {

    return (
        <div className="site-sidebar">
            <div className="site-sidebar__inner flex flex-col h-full justify-between">
                <div>
                    {/* Sidebar Header */}
                    <section className="site-sidebar__header">
                        <div className="flex justify-between items-center">
                            <h1>Navigation</h1>
                            <Button size="sm" className="w-fit" onClick={onClose}>
                                <FaChevronRight />
                            </Button>
                        </div>
                    </section>

                    {/* Themes */}
                    <section className="site-sidebar__section">
                        <div className="site-sidebar__themes">

                            <div className="flex items-center gap-2">
                                <MdOutlinePalette size={20} className="fill-accent" />
                                <h2>Themes</h2>
                            </div>
                            <ThemeSwitcher />
                            <AccentSwitcher />
                        </div>
                    </section>
                </div>

                {/* Links */}
                <section className="site-sidebar__section mt-auto mb-auto">
                    <div className="flex items-center gap-2">
                        <PiLinkSimpleLight size={20} className="fill-accent" />
                        <h2>Links</h2>
                    </div>
                    {links.map(({ url, title }) => (
                        <Link key={url} href={url} className="px-7">
                            {title}
                        </Link>
                    ))}
                </section>

                {/* Sidebar Footer */}
                <section className="site-sidebar__section mt-auto">
                    <div className="flex justify-between px-4">
                        <FaGithub size={30} className="fill-accent" />
                        <FaLinkedin size={30} className="fill-accent" />
                        <IoMail size={30} className="fill-accent" />
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Sidebar
