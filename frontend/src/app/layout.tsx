import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rinverse - Agence Créative Digitale',
  description: 'Créons ensemble des expériences digitales uniques et innovantes',
  openGraph: {
    title: 'Rinverse - Agence Créative Digitale',
    description: 'Créons ensemble des expériences digitales uniques et innovantes',
    url: 'https://rinverse.com/',
    siteName: 'Rinverse',
    images: [
      {
        url: 'https://rinverse.com/assets/img/og-image.png',
      }
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rinverse - Agence Créative Digitale',
    description: 'Créons ensemble des expériences digitales uniques et innovantes',
    site: '@rinverse',
    creator: '@rinverse',
    images: ['https://rinverse.com/assets/img/og-image.png']
  },
  icons: {
    icon: '/favicon.ico',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="dark bg-neutral-900">
      <head>
        <meta charSet="utf-8" />
        <meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <link rel="canonical" href="https://rinverse.com/" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        
        {/* Favicon */}
        <link rel="shortcut icon" href="/favicon.ico" />

        {/* Font */}
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />

        {/* CSS Preline */}
        <link rel="stylesheet" href="https://preline.co/assets/css/main.min.css" />

        {/* Theme Check Script */}
        <script dangerouslySetInnerHTML={{
          __html: `
            const html = document.querySelector('html');
            const isLightOrAuto = localStorage.getItem('hs_theme') === 'light' || (localStorage.getItem('hs_theme') === 'auto' && !window.matchMedia('(prefers-color-scheme: dark)').matches);
            const isDarkOrAuto = localStorage.getItem('hs_theme') === 'dark' || (localStorage.getItem('hs_theme') === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches);

            if (isLightOrAuto && html.classList.contains('dark')) html.classList.remove('dark');
            else if (isDarkOrAuto && html.classList.contains('light')) html.classList.remove('light');
            else if (isDarkOrAuto && !html.classList.contains('dark')) html.classList.add('dark');
            else if (isLightOrAuto && !html.classList.contains('light')) html.classList.add('light');
          `
        }} />
      </head>
      <body className={`${inter.className} bg-neutral-900 text-neutral-50`}>
        {/* ========== HEADER ========== */}
        <header className="sticky top-4 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full">
          <nav className="relative max-w-[66rem] w-full bg-neutral-800 rounded-[28px] py-3 ps-5 pe-2 md:flex md:items-center md:justify-between md:py-0 mx-2 lg:mx-auto" aria-label="Global">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <a 
                href="/" 
                className="flex-none rounded-md text-xl inline-block font-semibold focus:outline-none focus:opacity-80 text-white"
              >
                Rinverse
              </a>

              {/* Theme Toggle */}
              <button 
                id="theme-toggle" 
                type="button" 
                className="text-neutral-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-neutral-700 rounded-lg text-sm p-2.5"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fillRule="evenodd" clipRule="evenodd" />
                </svg>
              </button>

              {/* Mobile Menu Toggle */}
              <div className="md:hidden">
                <button 
                  type="button" 
                  className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-x-2 rounded-lg border border-neutral-700 bg-neutral-900 text-neutral-400 hover:text-white disabled:opacity-50 disabled:pointer-events-none"
                  data-hs-collapse="#navbar-collapse-with-animation"
                  aria-controls="navbar-collapse-with-animation"
                  aria-label="Toggle navigation"
                >
                  <svg className="hs-collapse-open:hidden flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="3" x2="21" y1="6" y2="6"/>
                    <line x1="3" x2="21" y1="12" y2="12"/>
                    <line x1="3" x2="21" y1="18" y2="18"/>
                  </svg>
                  <svg className="hs-collapse-open:block hidden flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 6 6 18"/>
                    <path d="m6 6 12 12"/>
                  </svg>
                </button>
              </div>
            </div>

            {/* Navigation Menu */}
            <div 
              id="navbar-collapse-with-animation" 
              className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block"
            >
              <div className="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:items-center md:justify-end md:gap-y-0 md:gap-x-7 md:mt-0 md:ps-7">
                <a 
                  href="/" 
                  className="font-medium text-neutral-200 hover:text-neutral-400 md:py-6"
                >
                  Accueil
                </a>
                <a 
                  href="/services" 
                  className="font-medium text-neutral-200 hover:text-neutral-400 md:py-6"
                >
                  Services
                </a>
                <a 
                  href="/projets" 
                  className="font-medium text-neutral-200 hover:text-neutral-400 md:py-6"
                >
                  Projets
                </a>
                <a 
                  href="/contact" 
                  className="font-medium text-neutral-200 hover:text-neutral-400 md:py-6"
                >
                  Contact
                </a>
              </div>
            </div>
          </nav>
        </header>

        {/* Main Content */}
        {children}

        {/* ========== FOOTER ========== */}
        <footer className="bg-neutral-900 w-full">
          <div className="w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto">
            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div>
                <h3 className="text-xl font-bold text-white mb-3">Rinverse</h3>
                <p className="text-neutral-400">
                  Créons ensemble des expériences digitales uniques et innovantes.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-white mb-3">Services</h4>
                <div className="space-y-2">
                  <a href="/services/jeux-2d" className="text-neutral-400 hover:text-neutral-200">
                    Jeux 2D et Concours
                  </a>
                  <a href="/services/web-3d" className="text-neutral-400 hover:text-neutral-200 block">
                    Expériences Web 3D et Métavers
                  </a>
                  <a href="/services/campagnes" className="text-neutral-400 hover:text-neutral-200 block">
                    Campagnes Thématiques
                  </a>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-white mb-3">Contact</h4>
                <div className="space-y-2">
                  <p className="text-neutral-400">Boîte Postale 123</p>
                  <p className="text-neutral-400">Paris, France</p>
                  <p className="text-neutral-400">contact@rinverse.com</p>
                </div>
              </div>
            </div>

            {/* Separator */}
            <div className="pt-5 mt-5 border-t border-neutral-700">
              <div className="sm:flex sm:justify-between sm:items-center">
                <div className="flex items-center justify-center sm:justify-start">
                  <p className="text-sm text-neutral-400">
                    2024 Rinverse. Tous droits réservés.
                  </p>
                </div>

                <div className="flex justify-center items-center space-x-4 mt-3 sm:mt-0">
                  <a href="#" className="text-neutral-400 hover:text-neutral-200">
                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.297-.048c.852-.04 1.433-.174 1.942-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.198-.509.333-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.297c-.04-.852-.174-1.433-.372-1.942a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.09-.333-1.942-.372C10.445.01 10.173 0 8 0zm0 1.44c2.136 0 2.39.01 3.233.048.78.036 1.203.166 1.485.276.374.145.64.319.92.599.28.28.453.546.598.92.11.282.24.705.276 1.485.038.844.047 1.097.047 3.233s-.01 2.39-.048 3.233c-.036.78-.166 1.203-.276 1.485-.145.374-.319.64-.599.92-.28.28-.546.453-.92.598-.282.11-.705.24-1.485.276-.844.038-1.097.047-3.233.047s-2.39-.01-3.233-.048c-.78-.036-1.203-.166-1.485-.276a2.479 2.479 0 0 1-.92-.599 2.48 2.48 0 0 1-.598-.92c-.11-.282-.24-.705-.276-1.485C1.45 10.39 1.44 10.136 1.44 8s.01-2.39.048-3.233c.036-.78.166-1.203.276-1.485.145-.374.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276C5.61 1.45 5.864 1.44 8 1.44zm0 2.452a4.108 4.108 0 1 0 0 8.215 4.108 4.108 0 0 0 0-8.215zm0 6.775a2.667 2.667 0 1 1 0-5.334 2.667 2.667 0 0 1 0 5.334zm5.338-9.807a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-neutral-400 hover:text-neutral-200">
                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-neutral-400 hover:text-neutral-200">
                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>

        {/* Preline Interaction Script */}
        <Script 
          src="https://cdn.jsdelivr.net/npm/preline@1.9.0/dist/preline.min.js" 
          strategy="afterInteractive" 
        />
      </body>
    </html>
  )
}
