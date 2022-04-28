/* React LAVLI <MobileMenu> component */

import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';

export default function MobileMenu({
  slotNavPrimary,
  slotNavSecondary,
  mobileMenuOpen,
  setMobileMenuOpen,
}) {
  /**
   * Returns the <MobileMenu> React element.
   */
  return (
    <Transition.Root show={mobileMenuOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-40 flex lg:hidden"
        onClose={setMobileMenuOpen}>
        <Transition.Child
          as={Fragment}
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0">
          <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <Transition.Child
          as={Fragment}
          enter="transition ease-in-out duration-300 transform"
          enterFrom="-translate-x-full"
          enterTo="translate-x-0"
          leave="transition ease-in-out duration-300 transform"
          leaveFrom="translate-x-0"
          leaveTo="-translate-x-full">
          <div className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
            <div className="flex p-4 pb-3.5">
              <button
                type="button"
                className="-m-2 inline-flex items-center justify-center rounded-full p-2 text-dark-medium hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-80"
                onClick={() => setMobileMenuOpen(false)}>
                <span className="sr-only">Menu schließen</span>
                <XIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            <div className="space-y-6 border-t border-gray-200 py-6 px-4">
              {slotNavPrimary}
            </div>

            <div className="space-y-6 border-t border-gray-200 py-6 px-4 md:hidden">
              {slotNavSecondary}
            </div>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition.Root>
  );
}
