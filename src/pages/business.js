import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import Button from 'components/button';
import heroPic from '@/public/images/hero_business.jpg';
import {
  ArrowDownIcon,
  ExternalLinkIcon,
  LightBulbIcon,
  LocationMarkerIcon,
} from '@heroicons/react/outline';
import {
  InformationCircleIcon,
  QuestionMarkCircleIcon,
} from '@heroicons/react/solid';
import Modal from 'components/modal';
import GetInTouch from 'components/get-in-touch';
import Header from 'components/header';
import Main from 'components/main';
import Footer from 'components/footer';

const values = [
  {
    title: 'LAVLI Purpose',
    text: ` <p>
              Wir glauben, dass jeder einzelne dazu beitragen kann, den Reichtum
              unserer Landschaft und Natur für uns und die nächsten Generationen
              zu erhalten.
            </p>
            <p style="margin-top: 16px">
              Wir existieren, um unser Ernährungssystem zum Wohle von Mensch,
              Tier und Natur zu verbessern.
            </p>`,
  },
  {
    title: 'LAVLI Mission',
    text: `<p>
            Ein fairer, gemeinschaftsgetragener und innovativer
            Lebensmittelhandel für eine nachhaltige Lebensmittelversorgung
            innerhalb planetarer Grenzen.
          </p>`,
  },
  {
    title: 'LAVLI Vision',
    text: `<p>
            Eine Gesellschaft, die nachhaltig und respektvoll mit den Ressourcen
            unseres Planeten umgeht. Eine Gesellschaft, die Landwirtschaft und
            Lebensmittel wertschätzt.
          </p>`,
  },
];

const details = [
  {
    name: 'Was ist LAVLI, was LAVLI Business?',
    description: `
      <p>
        LAVLI ist ein fairer, gemeinschaftsgetragener und
        innovativer Lebensmittelhandel, der auf Solidarität zwischen Erzeugern
        und Verbrauchern basiert. Deshalb dürfen bei LAVLI nur Mitglieder
        einkaufen. Erzeuger sollen für gesunde Lebensmittel sorgen, die
        Verbraucher sichern im Gegenzug deren Existenz.
      </p>
      <p style="margin-top: 16px">
        LAVLI Business ist unser Angebot, mit dem Gewerbetreibende, Unternehmen
        oder Institutionen auch Teil der LAVLI Family werden können. So
        unterstützen Sie uns dabei, eine regionale, nachhaltige und resiliente
        Lebensmittelversorgung aufzubauen.
      </p>`,
    icon: InformationCircleIcon,
  },
  {
    name: 'Wie funktioniert LAVLI Business?',
    description: `
      <p>
        Sie können zum Beispiel im Rahmen eines Mitarbeiterprogramms die
        LAVLI Mitgliedschaften Ihrer Mitarbeiter subventioneren.
        Oder vielleicht möchten Sie sich regelmäßig LAVLI Food für die
        Büroverpflegung bringen lassen. Das Gemeinwohl-Forum Fischbachau
        beliefern wir zum Beispiel bei Veranstaltungen.
      </p>
      <p style="margin-top: 16px">
        Die Möglichkeiten
        sind vielfältig. Sprechen Sie uns daher einfach an, wenn Sie
        Interesse an einer Kooperation haben. Wir würden uns freuen, von
        Ihnen zu hören.
      </p>`,
    icon: QuestionMarkCircleIcon,
  },
  {
    name: 'Warum gibt es LAVLI Business?',
    description: `
      <p style="font-style: italic; font-weight: 800">
        „Food is the single strongest lever to optimize human health and
        environmental sustainability on Earth.“
        — EAT-Lancet Commission —
      </p>
      <p style="margin-top: 16px">
        Die Art und Weise wie wir Nahrungsmittel produzieren und
        welche Lebensmittel wir konsumieren hat entscheidenden Einfluss auf
        unsere Umwelt, unser Klima und unsere Gesundheit. Die Art und Weise wie
        wir das heute in der Regel tun, wird jedoch nicht in der Lage sein,
        die Menschheit in Zukunft zu ernähren ohne gleichzeitig unsere Umwelt
        und unsere Lebensgrundlagen zu zerstören.
      </p>
      <p style="margin-top: 16px">
        Wir alle tragen eine Verantwortung für unseren Planeten und die nächsten
        Generationen.
      </p>`,
    icon: LightBulbIcon,
  },
  {
    name: 'Wo gibt es LAVLI Business?',
    description: `
      <p>
        LAVLI Business bieten wir aktuell für Gewerbetreibende,
        Unternehmen und Institutionen im 25 km Radius um unseren LAVLI
        Standort Weyarn an.
      </p>`,
    icon: LocationMarkerIcon,
  },
];

const PageHeader = ({ ctaClicked }) => {
  const navSecondary = (
    <>
      <a
        href="https://www.lavli.org"
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center space-x-1 text-sm text-dark-medium hover:text-dark">
        <span>LAVLI Website</span>
        <ExternalLinkIcon className="h-4 w-4" />
      </a>
    </>
  );

  const actions = <Button onClick={ctaClicked}>Jetzt anfragen</Button>;

  return (
    <Header
      logoHref="/"
      slotNavSecondary={navSecondary}
      slotActions={actions}
      //openMobileMenu={() => setMobileMenuOpen(true)}
    />
  );
};

/* The LP <Hero> component */
const Hero = () => (
  <section>
    <div className="lg:relative">
      <div className="relative h-64 w-full sm:block sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2">
        <div className="absolute inset-0 h-full w-full">
          <Image
            className="object-cover"
            src={heroPic}
            layout="fill"
            alt="Junger Mann trägt Gemüsekiste"
          />
        </div>
      </div>

      <div className="mx-auto w-full max-w-7xl pt-16 pb-20 lg:py-48 lg:text-left">
        <div className="px-4 sm:px-6 lg:w-1/2 lg:px-8 lg:pr-16 2xl:pl-0">
          <h1 className="mt-3 text-4xl font-extrabold tracking-wide sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
            LAVLI Business
          </h1>
          <p className="mt-3 max-w-md text-lg sm:text-xl md:mt-5 md:max-w-3xl">
            Maßgeschneiderte Versorgungs- und Kooperationslösungen für
            Gewerbetreibende, Unternehmen und Institutionen.
          </p>

          <div className="mt-6">
            <Link href="#details">
              <a className="text-link flex items-center space-x-1 text-lg sm:text-xl">
                <span>Mehr erfahren</span>
                <ArrowDownIcon className="h-5 w-5" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* The LP <Details> component */
const Details = () => (
  <section
    id="details"
    className="main-section snap-start scroll-mt-10 md:scroll-mt-20"
    aria-labelledby="details-heading">
    <div className="main-section-inner">
      <div className="lg:text-center">
        <h2 className="text-base font-extrabold uppercase tracking-wide text-dark-medium">
          LAVLI Business
        </h2>
        <h1
          id="details-heading"
          className="mt-2 text-3xl font-extrabold leading-8 tracking-wide sm:text-4xl">
          Werden Sie Teil der LAVLI Family
        </h1>
      </div>

      <div className="mt-10">
        <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-14 md:space-y-0">
          {details.map((detail) => (
            <div key={detail.name} className="relative">
              <dt>
                <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-brand-orange-light text-dark-medium">
                  <detail.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-xl font-extrabold leading-6 tracking-wide">
                  {detail.name}
                </p>
              </dt>
              <dd
                className="mt-2 ml-16 text-lg text-dark-medium"
                dangerouslySetInnerHTML={{ __html: detail.description }}
              />
            </div>
          ))}
        </dl>
      </div>
    </div>
  </section>
);

/* The LP <Testimonial /> component */
const Testimonial = () => (
  <section className="main-section">
    <div className="bg-blue-40 pb-16 lg:relative lg:pb-0">
      <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-8 lg:px-8 2xl:px-0">
        <div className="relative lg:-my-8">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-1/2 bg-white lg:hidden"
          />
          <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:h-full lg:p-0">
            <div className="aspect-w-10 aspect-h-6 overflow-hidden rounded-xl shadow-xl sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full">
              <Image
                className="rounded-xl object-cover lg:h-full lg:w-full"
                src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
                alt=""
                layout="fill"
              />
            </div>
          </div>
        </div>
        <div className="mt-12 lg:col-span-2 lg:m-0 lg:pl-8">
          <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0 lg:py-20">
            <blockquote>
              <div>
                <svg
                  className="h-12 w-12 text-white opacity-25"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  aria-hidden="true">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="mt-6 text-2xl text-light">
                  Wir sind Teil der LAVLI Family, ...
                </p>
              </div>
              <footer className="mt-6">
                <p className="text-base font-extrabold tracking-wide text-light">
                  Thomas Schiffelmann
                </p>
                <p className="text-base font-extrabold tracking-wide text-light-medium">
                  1. Vorsitzender Freunde des Münchner Kindl-Heims e.V.
                </p>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* The LP <OurValues> component */
const OurValues = () => (
  <section className="main-section" aria-labelledby="our-values-heading">
    <div className="main-section-inner">
      <h1 id="our-values-heading" className="h1">
        Passen wir zusammen?
      </h1>
      <ul
        role="list"
        className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {values.map((value) => (
          <li
            key={value.title}
            className="col-span-1 flex flex-col divide-y divide-gray-100 rounded-lg bg-blue-40 text-light drop-shadow-lg">
            <h2 className="h2 p-6 pb-1 text-center">{value.title}</h2>
            <div
              className="p-6 text-lg"
              dangerouslySetInnerHTML={{ __html: value.text }}
            />
          </li>
        ))}
      </ul>
    </div>
  </section>
);

/* The LP <CTA> component */
const CTA = ({ onClick }) => (
  <section className="main-section bg-brand-orange-light">
    <div className="main-section-inner lg:flex lg:items-center lg:justify-between">
      <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
        <span className="block">Interesse?</span>
        <span className="block">Wir freuen uns auf Ihre Anfrage.</span>
      </h1>
      <div className="mt-6 flex lg:mt-0 lg:flex-shrink-0">
        <Button xl onClick={onClick}>
          Jetzt anfragen
        </Button>
      </div>
    </div>
  </section>
);

export default function LpLAVLIBusiness() {
  const [showModal, setShowModal] = useState(false);

  const ctaClicked = () => {
    setShowModal(true);
  };

  return (
    <>
      <Head>
        <title>LAVLI Business</title>
        <meta
          name="description"
          content="Maßgeschneiderte Versorgungs- und Kooperationslösungen für Gewerbetreibende, Unternehmen und Institutionen."
          key="description"
        />
        <meta property="og:title" content="LAVLI Business" key="og-title" />
        <meta
          property="og:description"
          content="Maßgeschneiderte Versorgungs- und Kooperationslösungen für Gewerbetreibende, Unternehmen und Institutionen."
          key="og-description"
        />
        <meta
          property="og:image"
          content="images/og_business.jpg"
          key="og-image"
        />
        <link
          rel="canonical"
          href="https://lp.lavli.org/business"
          key="canonical"
        />
      </Head>
      <PageHeader ctaClicked={() => ctaClicked()} />
      <Main className="bg-gray-50">
        <div className="snap-y">
          <Hero />
          <CTA onClick={() => ctaClicked()} />
          <Details />
          <Testimonial />
          <OurValues />
          <CTA onClick={() => ctaClicked()} />
        </div>
        <Modal open={showModal} setOpen={setShowModal}>
          <GetInTouch />
        </Modal>
      </Main>
      <Footer />
    </>
  );
}
