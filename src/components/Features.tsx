import Image from "next/image";

export default function Features() {
  return (
    <section className="w-full max-w-7xl mx-auto px-5 py-10 lg:py-[120px]">
      <div className="w-full">
        <h2 className="text-white text-[32px] lg:text-[48px] font-bold leading-[39px] lg:leading-[58px] text-center capitalize mb-6 lg:mb-10">
          Why Choose TechWave
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-3 gap-6">
          <div className="flex flex-col justify-center items-start gap-4 p-6 rounded-[24px] bg-[#35116566] lg:col-span-1 lg:row-span-2">
            <Image src="/assets/images/headphone.png" alt="headphone" width={50} height={50} className="w-[50px] object-contain" />
            <h3 className="text-white text-[22px] font-bold leading-[27px] text-left capitalize">Premium Audio Quality</h3>
            <p className="text-white/60 text-base font-normal leading-6 text-left">
              Experience crystal-clear sound with professional-grade recording equipment and expert audio engineering. Every episode is mastered for optimal listening across all devices and platforms.
            </p>
          </div>
          <div className="flex flex-col justify-center items-start gap-4 p-6 rounded-[24px] bg-[#35116566] lg:col-span-2 lg:row-span-1">
            <Image src="/assets/images/device.png" alt="device" width={50} height={50} className="w-[50px] object-contain" />
            <h3 className="text-white text-[22px] font-bold leading-[27px] text-left capitalize">Mobile Friendly</h3>
            <p className="text-white/60 text-base font-normal leading-6 text-left">
              Listen on the go with seamless mobile experience and offline downloads.
            </p>
          </div>
          <div className="flex flex-col justify-center items-start gap-4 p-6 rounded-[24px] bg-[#35116566] lg:col-span-2 lg:row-span-1">
            <Image src="/assets/images/location.png" alt="location" width={50} height={50} className="w-[50px] object-contain" />
            <h3 className="text-white text-[22px] font-bold leading-[27px] text-left capitalize">Global Community</h3>
            <p className="text-white/60 text-base font-normal leading-6 text-left">
              Connect with tech enthusiasts from over 120 countries worldwide.
            </p>
          </div>
          <div className="flex flex-col justify-center items-start gap-4 p-6 rounded-[24px] bg-[#35116566] lg:col-span-2 lg:row-span-1">
            <Image src="/assets/images/zap-fast.png" alt="zap-fast" width={50} height={50} className="w-[50px] object-contain" />
            <h3 className="text-white text-[22px] font-bold leading-[27px] text-left capitalize">Exclusive Interviews</h3>
            <p className="text-white/60 text-base font-normal leading-6 text-left">
              Get unprecedented access to industry titans, startup founders, and tech visionaries. Our host secures exclusive conversations you won't find anywhere else, diving deep into their journeys, failures, and success strategies.
            </p>
          </div>
          <div className="flex flex-col justify-center items-start gap-4 p-6 rounded-[24px] bg-[#35116566] lg:col-span-1 lg:row-span-1">
            <Image src="/assets/images/resource.png" alt="resource" width={50} height={50} className="w-[50px] object-contain" />
            <h3 className="text-white text-[22px] font-bold leading-[27px] text-left capitalize">Rich Resources</h3>
            <p className="text-white/60 text-base font-normal leading-6 text-left">
              Access show notes, transcripts, and additional learning materials for every episode.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
