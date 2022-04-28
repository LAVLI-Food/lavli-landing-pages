import { MailIcon, PhoneIcon } from '@heroicons/react/outline';

export default function GetInTouch() {
  return (
    <section>
      <h3 className="mb-8 text-lg">
        Danke für Ihr Interesse! So erreichen Sie uns:
      </h3>
      <div className="grid grid-cols-1 gap-8">
        <div className="pt-6">
          <div className="flow-root rounded-lg bg-gray-50 px-6 pb-8">
            <div className="-mt-6">
              <div>
                <span className="inline-flex items-center justify-center rounded-md bg-blue-40 p-3 shadow-lg">
                  <PhoneIcon
                    className="h-6 w-6 text-light"
                    aria-hidden="true"
                  />
                </span>
              </div>
              <h3 className="mt-8 text-lg font-extrabold tracking-wide">
                Telefon
              </h3>
              <a className="text-link" href="tel:+49-8022-3399760">
                +49 8022 33997-60
              </a>
            </div>
          </div>
        </div>
        <div className="pt-6">
          <div className="flow-root rounded-lg bg-gray-50 px-6 pb-8">
            <div className="-mt-6">
              <div>
                <span className="inline-flex items-center justify-center rounded-md bg-blue-40 p-3 shadow-lg">
                  <MailIcon className="h-6 w-6 text-light" aria-hidden="true" />
                </span>
              </div>
              <h3 className="mt-8 text-lg font-extrabold tracking-wide">
                E-Mail
              </h3>
              <a
                className="text-link"
                href="mailto:hallo@lavli.org?subject=Anfrage%20LAVLI%20Business">
                hallo@lavli.org
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
