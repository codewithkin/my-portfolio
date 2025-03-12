import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-16 py-8 font-medium">
        <Link href="/">
            <h1 className='text-2xl font-semibold transition-all duration-300 hover:underline'>Kin Leon</h1>
        </Link>

        {/* Links */}
        <ul className='flex text-lg gap-8 justify-center items-center text-slate-600'>
            <li>
                <Link className='hover:text-slate-900' href="/">Home</Link>
            </li>
            <li>
                <Link className='hover:text-slate-900' href="/about">About</Link>
            </li>
            <li>
                <Link className='hover:text-slate-900' href="/projects">Projects</Link>
            </li>
            <li>
                <Link className='hover:text-slate-900' href="/blog">Blog</Link>
            </li>
        </ul>

        {/* CTA */}
        <Link className="rounded-full transition-all duration-300 bg-primary hover:bg-slate-900 text-white py-4 px-6" href="https://calendly.com/codewithkin/15-minute-call" target="_blank">
            Book a meeting
        </Link>
    </nav>
  )
}

export default Navbar
