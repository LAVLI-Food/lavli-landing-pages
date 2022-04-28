import Image from 'next/image';
import Link from 'next/link';
import lavliLogoWide from '@/public/lavli_logo--wide--white.svg';
import { navigation } from '@/data/footer-navigation';

export default function Footer() {
  return (
    <footer className="bg-black" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8 2xl:px-0">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <Image
              src={lavliLogoWide}
              alt="LAVLI Logo"
              width={107}
              height={48}
            />
            <p className="max-w-prose text-base text-light-medium">
              Ein fairer, gemeinschaftsgetragener und innovativer
              Lebensmittelhandel für eine nachhaltige Lebensmittelversorgung
              innerhalb planetarer Grenzen.
            </p>
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-light-medium hover:text-light">
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0 xl:grid-cols-3">
            <div className="col-span-2 md:col-span-1 xl:col-start-2 xl:col-end-3">
              <h3 className="text-sm font-extrabold uppercase tracking-wider text-light-medium">
                LAVLI
              </h3>
              <ul role="list" className="mt-4 space-y-4">
                {navigation.company.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-base text-light-medium hover:text-light">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="cl:col-start-3 col-span-2 mt-12 md:col-span-1 md:mt-0 xl:col-end-4">
              <h3 className="text-sm font-extrabold uppercase tracking-wider text-light-medium">
                Rechtliches
              </h3>
              <ul role="list" className="mt-4 space-y-4">
                {navigation.legal.map((item) => (
                  <li key={item.name}>
                    {item.target ? (
                      <a
                        className="text-base text-light-medium hover:text-light"
                        href={item.href}
                        target={item.target}
                        rel={item.rel}>
                        {item.name}
                      </a>
                    ) : (
                      <Link href={item.href}>
                        <a className="text-base text-light-medium hover:text-light">
                          {item.name}
                        </a>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-light-disabled pt-8">
          <p className="text-base text-light-disabled xl:text-center">
            &copy;{new Date().getFullYear()} LAVLI. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
}
