/* eslint-disable @next/next/no-img-element */
const HeroSection = () => {
  return (
    <section className="relative bg-hero-pattern bg-cover bg-center h-screen flex flex-col items-center justify-center text-center">
      <div className="z-[1] mix-blend-screen w-[235px] transition-all ease duration-500 block align-middle max-w-full border-0">
        <img
          className="[overflow-clip-margin:content-box] overflow-clip mb-6"
          src="/intract_animated.gif"
          alt="intract-academy-logo"
        />
      </div>

      <p className="max-w-2xl text-xl mb-8 text-[#6B6A6A]">
        <span className="text-white">Intract users</span> have together made
        more than <span className="text-white"> $100 million</span> in web3.
        <br />
        Join them and{" "}
        <span className="text-white">learn how to earn crypto!</span>
      </p>

      <button
        type="button"
        className="text-white flex justify-center  bg-[#7346ec] w-56 bg-opacity-50 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center"
      >
        <p className="hover:ml-2 transition-all duration-300 ease-in-out">Get Started </p>

        <img
          className="ml-2"
          src="https://www.intract.io/assets/arrow-right-1c96f4ae.svg"
          alt="arrow_icon"
        />
      </button>
    </section>
  );
};

export default HeroSection;
