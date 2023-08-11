import Slide from "@/components/Slide";
import Image from "next/image";
import Link from "next/link";
import { SwiperSlide } from "swiper/react";
import { v4 as uuid } from "uuid";

const IMAGE_CLASS = "hover:scale-105 transition-all z-0 rounded-lg";
const IMAGE_URL = [
  {
    url: "https://image.ohou.se/i/bucketplace-v2-development/uploads/banners/home_banner/169113008883949231.png?w=540",
    small:
      "https://image.ohou.se/i/bucketplace-v2-development/uploads/banners/home_banner/169113008202405947.png?w=768",
  },
  {
    url: "https://image.ohou.se/i/bucketplace-v2-development/uploads/banners/home_banner/169112841029945459.png?w=540",
    small:
      "https://image.ohou.se/i/bucketplace-v2-development/uploads/banners/home_banner/169112840373558386.png?w=720",
  },
  {
    url: "https://image.ohou.se/i/bucketplace-v2-development/uploads/banners/home_banner/169112830058345494.png?w=540",
    small:
      "https://image.ohou.se/i/bucketplace-v2-development/uploads/banners/home_banner/169112828772453948.png?w=720",
  },
  {
    url: "https://image.ohou.se/i/bucketplace-v2-development/uploads/banners/home_banner/169112832159134418.png?w=540",
    small:
      "https://image.ohou.se/i/bucketplace-v2-development/uploads/banners/home_banner/169112831371334681.png?w=720",
  },
];
export default function MainPosts() {
  return (
    <>
      <section className="flex justify-between gap-4">
        <article className="hidden md:grid grid-cols-10 space-x-[1rem] ">
          <div className="flex relative col-span-8">
            <Link href="/">
              <a>
                <Image
                  src={`https://image.ohou.se/i/bucketplace-v2-development/uploads/projects/cover_images/168882157638254533.jpg?w=1275&h=764.6989374262101&c=c`}
                  alt="img1"
                  width={1100}
                  height={550}
                  priority
                  className={`brightness-90 ${IMAGE_CLASS}`}
                />
                <h2 className="absolute left-2 bottom-10 z-50 text-white font-bold md:text-xl lg:text-2xl lg:left-10 lg:bottom-20">
                  해외살이 10년차의 코지한 보금자리
                </h2>
              </a>
            </Link>
            <div className="absolute left-2 bottom-4 text-sm flex items-center gap-2 lg:left-10 lg:bottom-12 lg:text-md">
              <Image
                src="https://image.ohou.se/i/bucketplace-v2-development/uploads/projects/cover_images/168882157638254533.jpg?w=1275&h=764.6989374262101&c=c"
                alt="img1"
                width="24"
                height="24"
                className="rounded-full "
              />
              <span className="text-white tracking-tighter align-middle font-semibold">annie.haus</span>
            </div>
          </div>
          <div className="rounded-xl col-span-2">
            <Slide>
              {IMAGE_URL.map((item) => (
                <Link href="/" key={uuid()}>
                  <a>
                    <SwiperSlide className="w-full" key={uuid()}>
                      <Image src={item.url} alt="img2" width={270} height={550} priority className={IMAGE_CLASS} />
                    </SwiperSlide>
                  </a>
                </Link>
              ))}
            </Slide>
          </div>
        </article>

        <div className="grid grid-cols-2 col-span-10 md:hidden">
          <div className="rounded-xl col-span-2">
            <Slide>
              {IMAGE_URL.map((item) => (
                <Link href="/" key={uuid()}>
                  <a>
                    <SwiperSlide className="w-full" key={uuid()}>
                      <Image src={item.small} alt="img2" width={600} height={150} priority className={IMAGE_CLASS} />
                    </SwiperSlide>
                  </a>
                </Link>
              ))}
            </Slide>
          </div>
        </div>
      </section>
    </>
  );
}
