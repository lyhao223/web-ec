import Link from 'next/link'
import LogoDunker from '../../../../assets/Logo/Dunker-logo-white.png'
export default function Header() {
    return(
        <header className='w-full flex sm:flex-col md:flex-row items-center justify-start bg-black'>
            <img src={LogoDunker.src} className='m-6'/>
           <div className='flex flex-row items-center justify-center md:ml-24'>
                <Link href='/' className='text-white font-bold text-lg m-5'>Home</Link>
                <Link href='/shop' className='text-white font-bold text-lg m-5'>Shop</Link>
                <Link href='/services' className='text-white font-bold text-lg m-5'>Services</Link>
                <Link href='/contact' className='text-white font-bold text-lg m-5'>Contact</Link>
           </div>
        </header>
    )
}