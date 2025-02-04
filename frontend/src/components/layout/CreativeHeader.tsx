'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function CreativeHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full py-7">
      <nav className="relative max-w-7xl w-full flex flex-wrap md:grid md:grid-cols-12 basis-full items-center px-4 md:px-6 md:px-8 mx-auto" aria-label="Global">
        <div className="md:col-span-3 -ml-8">
          <Link className="flex-none rounded-xl text-xl inline-block font-semibold focus:outline-none focus:opacity-80" href="/">
            <Image 
              src="/images/Logos/RinverseLogoNoir.png" 
              alt="Rinverse Logo" 
              width={400} 
              height={150} 
              priority 
              className="w-72 h-auto"
            />
          </Link>
        </div>

        <div className="flex items-center gap-x-2 ms-auto py-1 md:ps-6 md:order-3 md:col-span-3">
          <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl border border-gray-200 text-black hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:hover:bg-white/10 dark:text-white dark:hover:text-white">
            Contact
          </button>
          <div className="md:hidden">
            <button type="button" 
                    className="size-8 flex justify-center items-center text-sm font-semibold rounded-full border border-gray-200 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:text-white dark:hover:bg-white/10 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle navigation">
              <Image 
                src="/images/Logos/RinverseLogoNoir.png" 
                alt="Rinverse Logo" 
                width={24} 
                height={24} 
                priority 
                className="w-6 h-6"
              />
            </button>
          </div>
        </div>

        <div className={`basis-full md:basis-auto md:order-2 md:col-span-6 ${isMobileMenuOpen ? '' : 'hidden md:block'}`}>
          <div className="flex flex-col gap-5 mt-5 md:flex-row md:items-center md:justify-center md:mt-0 md:ps-5">
            <Link className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500" href="/">
              Accueil
            </Link>
            <Link className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500" href="/projects">
              Projets
            </Link>
            <Link className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500" href="/about">
              À propos
            </Link>
            <Link className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500" href="/contact">
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}
