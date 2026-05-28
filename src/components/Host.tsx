import Image from "next/image";

export default function Host() {
  return (
    <section className="bg-[#1a0b2e]">
      <div className="w-full max-w-7xl mx-auto px-5">
        <div className="text-center pb-10 md:pb-[120px]">
          <h2 className="text-white text-[32px] 2xl:text-[48px] font-bold leading-[39px] text-center capitalize mb-6">
            Meet the Host
          </h2>
          <div className="flex flex-col md:flex-row rounded-[40px] bg-[#35116566] p-5 md:p-10 gap-4">
            <div className="flex justify-center items-center md:w-[40%] shrink-0">
              <Image src="/assets/images/host.png" alt="host" width={200} height={200} className="w-[150px] h-[150px] md:w-[200px] md:h-[200px]" />
            </div>
            <div className="flex flex-col justify-center text-center md:text-left">
              <h2 className="text-white text-[24px] font-bold leading-[29px] capitalize mb-5">Alex Kumar</h2>
              <p className="text-white/55 text-base font-normal leading-6">
                Tech entrepreneur, productivity expert, and lifelong learner. Alex has been in the tech industry for over 10 years, working with startups and Fortune 500 companies. Through TechWave, Alex shares insights from industry leaders and practical advice for anyone looking to grow in tech.
              </p>
              <div className="flex justify-center md:justify-start items-center gap-4 mt-5">
                <a href="#" className="border border-gray-500/65 p-2 rounded-full hover:bg-white/10 transition-colors">
                  <Image src="/assets/images/linkedin.png" alt="linkedin" width={20} height={20} />
                </a>
                <a href="#" className="border border-gray-500/65 p-2 rounded-full hover:bg-white/10 transition-colors">
                  <Image src="/assets/images/x.png" alt="x" width={20} height={20} />
                </a>
                <a href="#" className="border border-gray-500/65 p-2 rounded-full hover:bg-white/10 transition-colors">
                  <Image src="/assets/images/instagram.png" alt="instagram" width={20} height={20} />
                </a>
                <a href="#" className="border border-gray-500/65 p-2 rounded-full hover:bg-white/10 transition-colors">
                  <Image src="/assets/images/youtube.png" alt="youtube" width={20} height={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
