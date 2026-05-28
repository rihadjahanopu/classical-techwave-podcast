export default function About() {
  return (
    <section className="bg-[#1a0b2e] text-center">
      <div className="w-full max-w-7xl mx-auto px-5">
        <div className="flex flex-col sm:pt-[50px]">
          <div className="flex flex-col border-b border-white/35 py-10 gap-4">
            <h2 className="text-white text-[32px] sm:text-[48px] font-bold leading-[39px] capitalize text-center">
              About the Podcast
            </h2>
            <p className="text-white text-base font-light leading-[25px] text-center opacity-80">
              TechWave is your go-to podcast for staying ahead in the fast-paced world of technology. <br className="hidden sm:block" />
              We break down complex topics into digestible insights, explore productivity strategies that actually work, <br className="hidden sm:block" />
              and share stories of personal growth from industry leaders.
            </p>
            <span className="text-white text-base font-light leading-[25px] text-center opacity-80">
              Join thousands of young professionals and tech enthusiasts who start their day with TechWave.
            </span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 w-full py-10 gap-10">
            <div className="flex flex-col gap-5">
              <span className="text-[#00ff88] text-[40px] font-black leading-[48px] capitalize text-center">150K+</span>
              <p className="text-white/80 text-base font-normal leading-5 text-center uppercase">Monthly Listeners</p>
            </div>
            <div className="flex flex-col gap-5">
              <span className="text-[#00ff88] text-[40px] font-black leading-[48px] capitalize text-center">200+</span>
              <p className="text-white/80 text-base font-normal leading-5 text-center uppercase">Episodes Published</p>
            </div>
            <div className="flex flex-col gap-5">
              <span className="text-[#00ff88] text-[40px] font-black leading-[48px] capitalize text-center">4.9★</span>
              <p className="text-white/80 text-base font-normal leading-5 text-center uppercase">Average Rating</p>
            </div>
            <div className="flex flex-col gap-5">
              <span className="text-[#00ff88] text-[40px] font-black leading-[48px] capitalize text-center">50+</span>
              <p className="text-white/80 text-base font-normal leading-5 text-center uppercase">Industry Experts</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
