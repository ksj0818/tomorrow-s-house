import Layout from "@/components/Layout";
import Slide from "@/components/Slide";
import Image from "next/image";
import Link from "next/link";
import { SwiperSlide } from "swiper/react";

const IMAGE_CLASS = "hover:scale-105 transition-all ";
const IMAGE_URL = [
  {
    url: "https://image.ohou.se/i/bucketplace-v2-development/uploads/banners/home_banner/169113008883949231.png?w=540",
  },
  {
    url: "https://image.ohou.se/i/bucketplace-v2-development/uploads/banners/home_banner/169112841029945459.png?w=540",
  },
  {
    url: "https://image.ohou.se/i/bucketplace-v2-development/uploads/banners/home_banner/169112830058345494.png?w=540",
  },
  {
    url: "https://image.ohou.se/i/bucketplace-v2-development/uploads/banners/home_banner/169112832159134418.png?w=540",
  },
];

export default function Home() {
  return (
    <Layout>
      <section className="flex justify-between gap-4">
        <div className="hidden md:flex relative">
          <Link href="/">
            <a>
              <Image
                src={`https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/advices/168973466253907525.jpg?w=1275&h=764.6989374262101&c=c`}
                alt="img1"
                width={1100}
                height={550}
                priority
                className={IMAGE_CLASS}
              />
              <h2 className="absolute left-10 bottom-16 text-white font-bold md:text-2xl lg:text-3xl">
                집중호우 침수 위험 ⛔ 절대 하지 말아야 할 것
              </h2>
            </a>
          </Link>
          <div className="absolute left-10 bottom-8 flex items-center gap-2">
            <Image
              src="https://image.ohou.se/i/bucketplace-v2-development/uploads/users/profile_images/1530271073759_97xu7t.jpg?w=36&amp;h=36&amp;c=c"
              alt="img1"
              width="24"
              height="24"
              className="rounded-full "
            />
            <span className="text-white tracking-tighter align-middle font-semibold">오늘의집 에디터</span>
          </div>
        </div>
        <div className="rounded-xl">
          <Slide>
            {IMAGE_URL.map((item, index) => (
              <SwiperSlide key={index}>
                <Image src={item.url} alt="img2" width={270} height={550} priority className={IMAGE_CLASS} />
              </SwiperSlide>
            ))}
          </Slide>
        </div>
      </section>
    </Layout>
  );
}
