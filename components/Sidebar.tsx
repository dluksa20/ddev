'use client'

import { useEffect, useState, useCallback } from 'react'
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

import { ACCENT_COLORS, links, THEMES } from '@/lib/constants'
import ThemeSwitcher from './ThemeSwitcher'
import AccentSwitcher from './AccentSwitcher'

type SidebarProps = {
    onClose: () => void
}

const Sidebar = ({ onClose }: SidebarProps) => {

    return (
        <div className="site-sidebar">
            <div className="site-sidebar__inner">

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
                        {/* Theme Switcher */}
                        <ThemeSwitcher />

                        {/* Accent colors */}
                        <AccentSwitcher />
                    </div>
                </section>

                {/* Links */}
                <section className="site-sidebar__section">
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


                {/* Footer */}
                <section className="site-sidebar__section">
                    <div className="flex justify-around gap-4">
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
