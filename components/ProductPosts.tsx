import Image from "next/image";
import Link from "next/link";
import { DeliveryBtn, SpecialpriceBtn } from "./Btns";
import { GridSlide } from "./Slide";
import { SwiperSlide } from "swiper/react";
const posts = [
  {
    brand: "맥심",
    title: "[중복쿠폰] 모카/화이트골드 커피믹스 340티(170T*2)",
    sale: "20%",
    price: "45,500",
    review: "203",
    imgPath:
      "https://image.ohou.se/i/bucketplace-v2-development/uploads/deals/169171606835618888.jpg?gif=1&w=720&h=720&c=c&webp=1",
    specialpriceBTN: true,
    deliveryBTN: true,
  },
  {
    brand: "헬로우슬립",
    title: "[단하루!추가인하+쿠폰] 부드러운 카스테라 항균 옥수수솜 간절기/사계절 차렵이불세트",
    sale: "56%",
    price: "34,900",
    review: "23,201",
    imgPath:
      "https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/167168822852557476.jpg?gif=1&w=850&h=850&c=c&webp=1",
    specialpriceBTN: true,
    deliveryBTN: false,
  },
  {
    brand: "일리",
    title: "[화이트 재고 입고]국내배송 Y3.3 커피머신 4color(화이트/블랙/레드/블루)",
    sale: "61%",
    price: "77,000",
    review: "68",
    imgPath:
      "https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/168791780292336854.jpg?gif=1&w=850&h=850&c=c&webp=1",
    specialpriceBTN: true,
    deliveryBTN: false,
  },
  {
    brand: "슈퍼대디",
    title: "[8/11일 딱하루! 선착순 21,900원]물티슈 미스터펭 블루 70매X20팩 (77g)",
    sale: "48%",
    price: "25,900",
    review: "10",
    imgPath:
      "https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/169113548786924944.jpg?gif=1&w=850&h=850&c=c&webp=1",
    specialpriceBTN: true,
    deliveryBTN: true,
  },
  {
    brand: "LG생활건강",
    title: "[15%+20%] 초특가! 테크/아우라/홈스타/자연퐁 초고농축 세탁/청소/주방세제 할인모음",
    sale: "19%",
    price: "11,900",
    review: "4151",
    imgPath:
      "https://image.ohou.se/i/bucketplace-v2-development/uploads/deals/167817045428637941.jpg?gif=1&w=850&h=850&c=c&webp=1",
    specialpriceBTN: true,
    deliveryBTN: false,
  },
];
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
              <SwiperSlide key={post.imgPath} className="w-full ob">
                <Link href="/">
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
