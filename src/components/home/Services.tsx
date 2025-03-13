import React from 'react'
import ScrollInView from '../reusable/ScrollInView'
import HeadingBadge from '../reusable/HeadingBadge'
import { Button } from '../ui/button'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

function Services() {
  return (
    <ScrollInView>
        <article className="w-full flex items-end justify-between">
            <article className="flex flex-col gap-4 text-start items-start justify-start">
                <HeadingBadge>Services</HeadingBadge>
                <h2 className="heading">Software So Good, It Speaks for Itself</h2>
                <p className="text-xl text-slate-600 font-regular">Need a website? An app? Something totally unique? I turn ideas into smooth, fast, and user-friendly software—no hassle</p>
            </article>

            {/* CTA */}
            <Button asChild>
              <Link className='flex gap-2 items-center transition-all duration-300 hover:gap-4' href="https://calendly.com/codewithkin/15-minute-call" target="_blank">
                Book a call
                 <ArrowRight strokeWidth={1.5} size={20} />
              </Link>
            </Button>
        </article>

        {/* Services bento cards */}

    </ScrollInView>
  )
}

export default Services
