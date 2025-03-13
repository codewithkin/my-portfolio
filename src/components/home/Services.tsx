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
            <article className="flex flex-col gap-4">
                <HeadingBadge>Services</HeadingBadge>
                <h2 className="heading">Services to fit all your needs</h2>
                <p className="text-lg text-slate-600 font-regular">Whatever you need, I can build it—fast and flawlessly.</p>
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
