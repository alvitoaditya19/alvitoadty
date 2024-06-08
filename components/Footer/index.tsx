import Image from "next/image";
import Link from 'next/link';


/* eslint-disable jsx-a11y/anchor-is-valid */
export default function Footer() {
  function submit() { }

  return (
    <section className="footer pt-50 bg-kBackgroundColor2 md:px-14 px-2">
      <footer>
        <div className="container-fluid bg-kBackgroundColor2">
          <div className="flex flex-wrap justify-start">
            <div className="w-6/6 md:w-1/4 px-2 mb-8 md:mb-0">
              <a href="" className="mb-8">
                <div className="flex">
                  <Image src="/images/my-logo.png"
                    width={60}
                    height={60}
                    alt="console"
                    className='rounded-2xl relative mr-1 mb-4' />

                </div>
              </a>
              <p className="mt-7 text-lg text-kGreyColor1 mb-7">
                Allow me to development your platform that
                showcase your brand in the best possible light
                through my fullstack skills
              </p>
              <p className="mt-7 text-lg text-white mb-7">
                Let's connect with me. Alvito Aditya.
              </p>
            </div>
            <div className="w-6/6 md:w-2/4 px-2 mb-8 md:mb-0">
              <div className="flex flex-wrap">
                <div className="w-1/2 lg:w-1/3 px-2 mb-lg-0 mb-6">
                  <p className="text-lg font-semibold text-white mb-3">
                    Company
                  </p>
                  <ul className="list-unstyled">
                    <li className="mb-6">
                      <a
                        href=""
                        className="text-lg text-kGreyColor1 text-decoration-none"
                      >
                        About Us
                      </a>
                    </li>
                    <li className="mb-6">
                      <a
                        href=""
                        className="text-lg text-kGreyColor1 text-decoration-none"
                      >
                        Press Release
                      </a>
                    </li>
                    <li className="mb-6">
                      <a
                        href=""
                        className="text-lg text-kGreyColor1 text-decoration-none"
                      >
                        Terms of Use
                      </a>
                    </li>
                    <li className="mb-6">
                      <a
                        href=""
                        className="text-lg text-kGreyColor1 text-decoration-none"
                      >
                        Privacy & Policy
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-1/2 lg:w-1/3 px-2 mb-lg-0 mb-6">
                  <p className="text-lg font-semibold text-white mb-3">
                    Support
                  </p>
                  <ul className="list-unstyled">
                    <li className="mb-6">
                      <a
                        href=""
                        className="text-lg text-kGreyColor1 text-decoration-none"
                      >
                        Refund Policy
                      </a>
                    </li>
                    <li className="mb-6">
                      <a
                        href=""
                        className="text-lg text-kGreyColor1 text-decoration-none"
                      >
                        Unlock Rewards
                      </a>
                    </li>
                    <li className="mb-6">
                      <a
                        href=""
                        className="text-lg text-kGreyColor1 text-decoration-none"
                      >
                        Live Chatting
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-1/2 lg:w-1/3 px-2 mt-lg-0">
                  <p className="text-lg font-semibold text-white mb-3">
                    Connect
                  </p>
                  <ul className="list-unstyled">
                    <li className="mb-6">
                      <a
                        href="mailto: hi@store.gg"
                        className="text-lg text-kGreyColor1 text-decoration-none"
                      >
                        email
                      </a>
                    </li>
                    <li className="mb-6">
                      <a
                        href="mailto: team@store.gg"
                        className="text-lg text-kGreyColor1 text-decoration-none"
                      >
                        linkedin
                      </a>
                    </li>
                    <li className="mb-6">
                      <a
                        href="http://maps.google.com/?q=Pasific 12,
                                        Jakarta Selatan"
                        className="text-lg text-kGreyColor1 text-decoration-none"
                      >
                        instagram
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="w-6/6 md:w-1/4 px-2 mb-8 md:mb-0">
              <h6 className="text-white">Promotions</h6>
              <p className="mt-4 text-kGreyColor1 mb-4">
                Submit your email for new updates
              </p>
              <div onSubmit={submit} className="flex">
                <input
                  type="text"
                  className="bg-white focus:outline-none border-0 px-4 py-3"
                  placeholder="Your email addres"
                />
                <Link href="/" className=" gradient-color px-4 py-3 h-full">
                  <h1 className="text-white">
                    Enter
                  </h1>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
