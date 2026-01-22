import Button from './Button'
import { FaGithub, FaLinkedin, FaChevronRight } from "react-icons/fa"
import { MdOutlinePalette } from "react-icons/md";
import { PiLinkSimpleLight } from "react-icons/pi";
import { IoMail } from "react-icons/io5";
import { ACCENT_COLORS, links } from '@/lib/constants'
import Link from 'next/link'
import { useState } from 'react';
import { THEMES } from '@/lib/constants';

type CloseProps = {
    onClose: () => void;
}

const Sidebar = ({ onClose }: CloseProps) => {

    // track the currently active accent button
    const [activeColor, setActiveColor] = useState<string | null>(null);
    const [activeTheme, setActiveTheme] = useState<string>("Midnight Eclipse");
    const [active, setActive] = useState(true);

    return (
        <div className='site-sidebar'>
            <div className='site-sidebar__inner'>
                {/* Header */}
                <section className='site-sidebar__header'>
                    <div className='flex justify-between items-center'>
                        <h1>Navigation</h1>
                        <Button size='sm' className='w-fit' onClick={onClose}>
                            <FaChevronRight />
                        </Button>
                    </div>
                </section>

                {/* Main content */}
                <div className='flex flex-col flex-1 justify-start gap-20'>

                    {/* Themes Section */}
                    <section className='site-sidebar__section'>
                        <div className='site-sidebar__themes'>
                            <div className='flex items-center gap-2'>
                                <MdOutlinePalette size={20} className='fill-accent' />
                                <h2>Themes</h2>
                            </div>

                            <div className='site-sidebar__buttons'>
                                {THEMES.map((theme) => (
                                    <Button
                                        key={theme}
                                        buttonText={theme}
                                        size='xs'
                                        isActive={activeTheme === theme}     // controlled
                                        onClick={() => setActiveTheme(theme)} // update state
                                    />
                                ))}
                            </div>

                            {/* Accent Colors Grid */}
                            <div className="grid w-full grid-cols-[repeat(auto-fill,minmax(24px,1fr))] gap-2 p-1">
                                {ACCENT_COLORS.map((accentColor) => {
                                    const isActive = accentColor === activeColor;

                                    return (
                                        <Button
                                            key={accentColor}
                                            variant="default"
                                            size="xs"
                                            className="site-sidebar__accent-button rounded-md transition-all duration-150"
                                            style={{
                                                backgroundColor: `var(--color-${accentColor})`,
                                                boxShadow: isActive
                                                    ? `0 0 0 2px var(--color-background-elevated), 0 0 0 4px var(--color-${accentColor})`
                                                    : "none",
                                            }}
                                            onClick={() => setActiveColor(accentColor)}
                                        />
                                    );
                                })}
                            </div>
                        </div>
                    </section>

                    {/* Links Section */}
                    <section className='site-sidebar__section'>
                        <div className='flex items-center gap-2'>
                            <PiLinkSimpleLight size={20} className='fill-accent' />
                            <h2>Links</h2>
                        </div>
                        {links.map((link) => (
                            <Link key={link.url} className='px-7' href={link.url}>
                                {link.title}
                            </Link>
                        ))}
                    </section>
                </div>

                {/* Footer Section */}
                <section className='site-sidebar__section justify-items-end'>
                    <div className='flex justify-around gap-4'>
                        <FaGithub size={30} className='fill-accent' />
                        <FaLinkedin size={30} className='fill-accent' />
                        <IoMail size={30} className='fill-accent' />
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Sidebar;
