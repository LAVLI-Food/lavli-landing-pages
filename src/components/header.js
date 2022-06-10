/* React LAVLI <Header> component */

import Link from 'next/link';
import Image from 'next/image';
import { MenuIcon } from '@heroicons/react/outline';

/* The <Header> component */
export default function Header({
  logoHref,
  slotTitle,
  slotNavSecondary,
  slotNavPrimary,
  slotActions,
  openMobileMenu,
}) {
  /**
   * Returns the <Header> React element.
   */
  return (
    <header className="fixed inset-x-0 top-0 z-10 shadow-lg">
      {/* Top bar (md+) */}
      <section className="hidden bg-brand-orange-light md:block md:h-14 lg:h-16">
        <div className="flex h-full max-w-full items-center justify-between">
          <div className="flex h-full items-center justify-between space-x-4 bg-white px-4 sm:px-6 lg:px-8">
            {/* Logo */}
            <Link href={logoHref}>
              <a className="inline-flex items-center">
                <span className="sr-only">LAVLI</span>
                <Image
                  src="/lavli_fig--coloured--black.svg"
                  alt="LAVLI Logo"
                  width={31}
                  height={40}
                />
              </a>
            </Link>
            <span className="inline-flex h-full items-center leading-none">
              {slotTitle}
            </span>
          </div>

          {/* Links (md+) */}
          <div className="flex shrink-0 items-center space-x-6 px-4 sm:px-6 lg:px-8">
            {slotNavSecondary}
          </div>
        </div>
      </section>

      {/* Navigation and action items*/}
      <section className="h-14 bg-white lg:h-16">
        <div className="flex h-full max-w-full items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Left */}
          <div className="h-full flex-none">
            {/* Logo and mobile menu button (md-) */}
            <div className="flex h-full items-center space-x-4 md:space-x-0 lg:hidden">
              <Link href={logoHref}>
                <a className="inline-flex items-center md:hidden">
                  <span className="sr-only">LAVLI</span>
                  <Image
                    src="/lavli_fig--coloured--black.svg"
                    alt="LAVLI Logo"
                    width={31}
                    height={40}
                  />
                </a>
              </Link>
              <button
                type="button"
                className="rounded-full p-2 text-dark-medium hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-80 md:hidden"
                onClick={openMobileMenu}>
                <span className="sr-only">Menu öffnen</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            {/* Flyout menu (lg+) */}
            <nav
              className="hidden h-full items-center space-x-4 sm:space-x-6 lg:flex lg:space-x-8"
              aria-label="Top">
              {slotNavPrimary}
            </nav>
          </div>

          {/* Right */}
          <div className="h-full flex-none">
            <div className="flex h-full items-center space-x-2">
              {slotActions}
            </div>
          </div>
        </div>
      </section>
    </header>
  );
}
