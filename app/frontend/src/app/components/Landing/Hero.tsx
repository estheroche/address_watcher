import Image from 'next/image';
import Link from 'next/link';
import push from 'src/assets/push-rem.png';

const Hero = () => {
  return (
    <div className="justify-center items-center bg-gray-950 self-stretch flex w-full flex-col px-20 mt-10 max-md:max-w-full max-md:px-8">
      <div className="items-start self-center flex w-full flex-col max-md:max-w-full">
        <div className="justify-between self-stretch max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch max-md:w-full max-md:ml-0">
              <div className="items-start flex mr-0 flex-col my-auto max-md:max-w-full max-md:mt-10">
                <div className="justify-center items-center flex max-w-full flex-col self-start">
                  <div className="text-orange-400 text-7xl font-bold leading-tight self-stretch max-md:max-w-full max-md:text-4xl max-md:leading-[52px]">
                    <span className="text-white">Welcome to the </span>
                    <span className="text-violet-700">address</span>
                    <span className="text-white"> </span>
                    <span className="text-orange-400">watcher</span>
                  </div>
                  <div className="text-white text-xl leading-relaxed self-stretch mt-6 max-md:max-w-full max-md:mt-10">
                    Stay Ahead of the Game with Real-Time Alerts and Comprehensive Address Tracking
                  </div>
                </div>
                <div className="items-start flex max-w-full justify-between gap-5 mt-14 self-start max-md:flex-wrap max-md:mt-10">
                  <Link
                    href="/register"
                    className="text-white text-xl font-bold self-center whitespace-nowrap justify-center items-center bg-violet-800 flex-1 px-7 py-3 rounded-2xl max-md:px-5"
                  >
                    Register
                  </Link>
                  <Link
                    href="/about"
                    className="text-orange-400 text-xl font-bold self-stretch whitespace-nowrap justify-center items-center bg-orange-400 bg-opacity-20 flex-1 px-7 py-3 rounded-2xl max-md:px-5"
                  >
                    Learn more
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[51%] ml-5 max-md:w-full max-md:ml-0">
              <Image
                loading="lazy"
                src={push}
                alt=""
                className="aspect-[1.23] translate-x-[-15%] object-contain object-center w-full overflow-hidden grow max-md:max-w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
