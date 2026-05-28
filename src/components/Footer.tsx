import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[url('/assets/images/footer-bg.png')] bg-center bg-no-repeat bg-contain md:bg-cover w-full h-[248px] md:h-[412px] py-10">
      <div className="w-full max-w-7xl mx-auto px-5 h-full">
        <div className="flex flex-col justify-around items-center h-full">
          <div className="w-[219px] md:w-full md:flex md:justify-center md:items-center md:mt-20">
            <Image src="/assets/images/TechWave.png" alt="logo" width={410} height={75} className="w-full md:w-[410px] h-auto" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 w-full justify-center mt-5 md:gap-[60px] md:cursor-pointer gap-x-8">
            <div className="flex justify-center items-center gap-1.5 md:gap-2.5 mt-5">
              <Image src="/assets/images/spotify.png" alt="spotify" width={20} height={20} className="w-[20px]" />
              <span className="text-white/50 text-base font-medium leading-[19px] text-center">Spotify</span>
            </div>
            <div className="flex justify-center items-center gap-1.5 md:gap-2.5 mt-5">
              <Image src="/assets/images/apple-podcast.png" alt="apple-podcast" width={20} height={20} className="w-[20px]" />
              <span className="text-white/50 text-base font-medium leading-[19px] text-center">Apple Podcasts</span>
            </div>
            <div className="flex justify-center items-center gap-1.5 md:gap-2.5 mt-5">
              <Image src="/assets/images/youtube-podcast.png" alt="youtube-podcast" width={20} height={20} className="w-[20px]" />
              <span className="text-white/50 text-base font-medium leading-[19px] text-center">YouTube</span>
            </div>
            <div className="flex justify-center items-center gap-1.5 md:gap-2.5 mt-5">
              <Image src="/assets/images/twitter.png" alt="twitter" width={20} height={20} className="w-[20px]" />
              <span className="text-white/50 text-base font-medium leading-[19px] text-center">Twitter</span>
            </div>
          </div>
          <span className="mt-5 md:mt-[50px] text-white/50 text-[14px] md:text-base font-normal leading-6 text-center">
            © 2026 TechWave Podcast. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
