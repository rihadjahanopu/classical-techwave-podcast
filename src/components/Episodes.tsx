import Image from "next/image";

export default function Episodes() {
  return (
    <section className="bg-[#1a0b2e]">
      <div className="w-full max-w-7xl mx-auto px-5">
        <div className="py-10 md:py-20">
          <h3 className="text-white text-[32px] md:text-[48px] font-bold leading-[39px] md:leading-[58px] text-center capitalize mb-6">
            Featured Episodes
          </h3>
          <div className="flex flex-col md:flex-row gap-4 pb-5 w-full">
            <div className="flex flex-col bg-[#250d44] overflow-hidden rounded-[24px] md:w-1/3">
              <div className="w-full aspect-video">
                <iframe className="w-full h-full" src="https://www.youtube.com/embed/Gj2wLCpDvzk?si=-ToGjFNpccq0T_MN" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
              </div>
              <div className="flex flex-col justify-start items-start gap-2 p-4">
                <h4 className="text-white text-[20px] font-bold leading-6">The Future of AI in Everyday Life</h4>
                <p className="text-white/45 text-base font-normal leading-6">Exploring how artificial intelligence is transforming our daily routines and what to expect in the next...</p>
                <span className="flex items-center gap-2 text-[#00ff88] text-base font-semibold leading-6">
                  <Image src="/assets/images/clock.png" alt="clock" width={20} height={20} />
                  42 min
                </span>
              </div>
            </div>
            <div className="flex flex-col bg-[#250d44] overflow-hidden rounded-[24px] md:w-1/3">
              <div className="w-full aspect-video">
                <iframe className="w-full h-full" src="https://www.youtube.com/embed/7Im-i3GQvVc?si=nDjbtWhsJvKDHD9n" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
              </div>
              <div className="flex flex-col justify-start items-start gap-2 p-4">
                <h4 className="text-white text-[20px] font-bold leading-6">Building Better Habits for Remote Work</h4>
                <p className="text-white/45 text-base font-normal leading-6">Practical strategies for staying productive and maintaining work-life balance in a...</p>
                <span className="flex items-center gap-2 text-[#00ff88] text-base font-semibold leading-6">
                  <Image src="/assets/images/clock.png" alt="clock" width={20} height={20} />
                  35 min
                </span>
              </div>
            </div>
            <div className="flex flex-col bg-[#250d44] overflow-hidden rounded-[24px] md:w-1/3">
              <div className="w-full aspect-video">
                <iframe className="w-full h-full" src="https://www.youtube.com/embed/ufPLBvAtlsg?si=D1Pi-dUqSbFN7KuU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
              </div>
              <div className="flex flex-col justify-start items-start gap-2 p-4">
                <h4 className="text-white text-[20px] font-bold leading-6">Career Growth in Tech: A Roadmap</h4>
                <p className="text-white/45 text-base font-normal leading-6">Expert advice on navigating your tech career from junior developer to senior leadership...</p>
                <span className="flex items-center gap-2 text-[#00ff88] text-base font-semibold leading-6">
                  <Image src="/assets/images/clock.png" alt="clock" width={20} height={20} />
                  51 min
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
