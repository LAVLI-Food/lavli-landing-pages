/* React LAVLI <Header> component */

import Link from 'next/link';
import Image from 'next/image';
// import { MenuIcon } from '@heroicons/react/outline';
import { Popover } from '@headlessui/react';

/* The <Header> component */
export default function Header({
  logoHref,
  slotTitle,
  slotNavSecondary,
  slotNavPrimary,
  slotActions,
  // openMobileMenu,
}) {
  /**
   * Returns the <Header> React element.
   */
  return (
    <header className="fixed inset-x-0 top-0 z-10 shadow-lg">
      {/* Top bar (md+) */}
      <section className="hidden bg-brand-orange-light md:block md:h-14 lg:h-16">
        <div className="flex h-full max-w-full items-center justify-between">
          <div className="flex h-full items-center justify-between space-x-4 px-4 sm:px-6 lg:px-8">
            {/* Logo */}
            <Link href={logoHref}>
              <a className="inline-flex items-center">
                <span className="sr-only">LAVLI</span>
                <Image
                  src="/lavli_logo--wide--coloured--black.svg"
                  alt="LAVLI Logo"
                  width={89}
                  height={40}
                />
              </a>
            </Link>
            <div className="inline-flex h-full items-center">{slotTitle}</div>
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
            {/* Logo (md-) and mobile menu button (lg-) */}
            <div className="flex h-full items-center space-x-4 md:space-x-0 lg:hidden">
              <Link href={logoHref}>
                <a className="inline-flex items-center md:hidden">
                  <span className="sr-only">LAVLI</span>
                  <Image
                    src="/lavli_logo--wide--coloured--black.svg"
                    alt="LAVLI Logo"
                    width={89}
                    height={40}
                  />
                </a>
              </Link>
            </div>

            {/* Flyout menu (lg+) */}
            <nav
              className="hidden h-full items-center space-x-4 sm:space-x-6 lg:flex lg:space-x-8"
              aria-label="Top">
              <Popover.Group className="inset-x-0 bottom-0 flex h-full items-center space-x-1">
                {slotNavPrimary}
              </Popover.Group>
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
