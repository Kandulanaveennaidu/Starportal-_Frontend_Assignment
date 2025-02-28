/* eslint-disable @next/next/no-img-element */
const navigation = {
  solutions: [
    { name: "Explore Quests", href: "#" },
    { name: "Comunities", href: "#" },
    { name: "Alpha Hub", href: "#" }
  ],
  support: [
    { name: "Refer & Earn", href: "#" },
    { name: "Leaderboard", href: "#" },
    { name: "Achievements", href: "#" },
  ],
  company: [
    { name: "Product Roadmap", href: "#" },
    { name: "Affiliate Program", href: "#" },
    { name: "Sign up Program", href: "#" },
    { name: "Growth Community", href: "#" },
    { name: "Blogs", href: "#" },
  ],
  legal: [
    { name: "Help Center", href: "#" },
    { name: "Create your quest", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Community Guidelines", href: "#" },
  ],
 
};

export default function Footer() {
  return (
    <footer aria-labelledby="footer-heading" className="border-t border-gray-800">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <img
              alt="logo"
              src="/intract_text.png"
              className="h-7"
            />
            <p className="text-sm leading-6 text-gray-300">
            We are your personal guide for exploring web3 projects & earning 100x rewards
            </p>
           
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">
                INTRACT
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.solutions.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">
                  EARN
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.support.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">
                  ABOUT
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">
                  SUPPORT
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-md leading-5 text-white">
          CREATED BY <span className="underline"> INTRACT</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
