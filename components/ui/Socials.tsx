import { SOCIALS } from "@/lib/constants"
import Link from "next/link"

const Socials = () => {
    return (
        <div className='flex flex-wrap mt-10 gap-4 items-center '>
            {
                SOCIALS.map(({ title, icon: Icon }) => (
                    <Link key={title} href='/' className='flex items-center gap-2 '>
                        <Icon size={20} style={{ fill: 'none', color: 'var(--color-accent)' }} />
                        <p className='text-ui'>{title}</p>
                        <p className='text-accent/30 text-ui mx-1'>|</p>
                    </Link>

                ))
            }
            <Link className='font-display text-ui' key={'r'} href={'/'}>Get Resume -&gt;</Link>
        </div>
    )
}

export default Socials
