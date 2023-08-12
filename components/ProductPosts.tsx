import Image from "next/image";
import Link from "next/link";
import { DeliveryBtn, SpecialpriceBtn } from "./Btns";
import { GridSlide } from "./Slide";
import { SwiperSlide } from "swiper/react";
import { posts } from "@/data/product";

const IMAGE_CLASS = "hover:scale-110 transition-all z-0 rounded-lg w-full";
export default function ProductPosts() {
  return (
    <>
      <div className="flex justify-between items-center my-2">
        <h2 className="text-lg font-semibold tracking-tighter">내일의딜</h2>
        <Link href="/">
          <a>
            <span className="text-sky-400 font-semibold">더보기</span>
          </a>
        </Link>
      </div>
      <div className="w-full my-4">
        <GridSlide>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-4 w-full">
            {posts.map((post) => (
              <SwiperSlide key={post.id} className="w-full">
                <Link href={`/product/${post.id}`}>
                  <a>
                    <div>
                      <Image
                        src={post.imgPath}
                        alt={post.imgPath}
                        className={IMAGE_CLASS}
                        width={200}
                        height={200}
                        priority
                      />
                    </div>
                    <div>
                      <p className="text-xs text-zinc-400">{post.brand}</p>
                      <p className="text-sm text-zinc-700 tracking-tighter truncate">{post.title}</p>
                      <span className="text-sky-400 font-bold">{post.sale}</span>
                      <span className="ml-2 font-bold">{post.price}</span>
                      <p className="text-xs text-zinc-500">리뷰 {post.review}</p>
                      {post.deliveryBTN && <DeliveryBtn />}
                      {post.specialpriceBTN && <SpecialpriceBtn />}
                    </div>
                  </a>
                </Link>
              </SwiperSlide>
            ))}
          </div>
        </GridSlide>
      </div>
    </>
  );
}
