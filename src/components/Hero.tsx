import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-[url('/assets/images/ImagemobileHero.png')] md:bg-[url('/assets/images/hero-bg.png')] bg-auto sm:bg-cover bg-no-repeat bg-center w-full h-auto pb-0">
      <div className="w-full max-w-7xl mx-auto px-5">
        <div className="flex flex-col items-center">
          <div className="flex justify-center items-center w-full">
            <div className="w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[360px] md:h-[360px] rounded-full border-[6px] border-[#2a186c] bg-gradient-to-tr from-[#f7e93f] via-[#fb09b4] to-[#9100f8] z-[1] mt-10 sm:mt-[101px] flex justify-center items-center relative">
              <Image
                src="/assets/images/microphone.png"
                alt="microphone"
                width={50}
                height={50}
                className="w-[50px]"
              />
              <span className="absolute top-0 right-0 sm:top-2.5 sm:right-2.5 md:top-5 md:right-5 w-[70px] h-[35px] flex justify-center items-center gap-2.5 text-black py-2 px-4 rounded-full shadow-[0_3px_27px_0_rgba(0,255,136,0.5)] bg-[#00ff88] font-bold">
                NEW
              </span>
            </div>
          </div>
          <div className="mt-6 flex flex-col items-center pb-[30px]">
            <div className="text-center">
              <h1 className="text-white text-[40px] font-bold leading-[48px] capitalize mt-6">
                TechWave
              </h1>
              <p className="text-white text-base font-normal leading-[19px] text-center opacity-80 mt-2.5 max-w-lg">
                Your daily dose of tech insights, productivity hacks, and personal growth
              </p>
            </div>
            <div className="flex justify-center items-center gap-2 mt-6">
              <div className="btn text-[13px] sm:text-base font-semibold text-white flex gap-1">
                <Image
                  src="/assets/images/spotify.png"
                  alt="spotify"
                  width={20}
                  height={20}
                />
                <span>Listen on Spotify</span>
              </div>
              <div className="flex flex-row justify-center items-center w-max gap-1 py-3 px-4 rounded-full cursor-pointer bg-transparent border border-[#00ff88] text-[#00ff88] hover:border-[#fb09b4] hover:text-[#fb09b4] transition-colors duration-300 text-[13px] sm:text-base font-semibold">
                <Image
                  src="/assets/images/message.png"
                  alt="message"
                  width={20}
                  height={20}
                />
                <span>Subscribe</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
