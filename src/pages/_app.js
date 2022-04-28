import { Transition } from '@headlessui/react';
import '@/styles/globals.css';

export default function LavliLanding({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout =
    Component.getLayout ||
    ((page) => (
      <Transition
        appear={true}
        show={true}
        enter="transition-opacity ease-linear duration-200"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity ease-linear duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0">
        {page}
      </Transition>
    ));

  return (
    <Transition
      appear={true}
      show={true}
      enter="transition-opacity ease-linear duration-200"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity ease-linear duration-200"
      leaveFrom="opacity-100"
      leaveTo="opacity-0">
      {getLayout(<Component {...pageProps} />)}
    </Transition>
  );
}
