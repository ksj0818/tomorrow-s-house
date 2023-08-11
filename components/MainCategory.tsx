import Image from "next/image";
import Link from "next/link";

const CATEGORIES = [
  {
    name: "쇼핑하기",
    url: "https://image.ohou.se/i/bucketplace-v2-development/uploads/shortcut/home_feed_shortcut_sets/167262690767101882.png?w=256",
  },
  {
    name: "100%당첨",
    url: "https://image.ohou.se/i/bucketplace-v2-development/uploads/shortcut/home_feed_shortcut_sets/169111435186783648.png?w=256",
  },
  {
    name: "내일의딜",
    url: "https://image.ohou.se/i/bucketplace-v2-development/uploads/shortcut/home_feed_shortcut_sets/167198007152582471.png?w=256",
  },
  {
    name: "내일의발견",
    url: "https://image.ohou.se/i/bucketplace-v2-development/uploads/shortcut/home_feed_shortcut_sets/168661846720664430.png?w=256",
  },
  {
    name: "장보기",
    url: "https://image.ohou.se/i/bucketplace-v2-development/uploads/shortcut/home_feed_shortcut_sets/167198009533480922.png?w=256",
  },
  {
    name: "집들이",
    url: "https://image.ohou.se/i/bucketplace-v2-development/uploads/shortcut/home_feed_shortcut_sets/167198010271968429.png?w=256",
  },
  {
    name: "취향의발견",
    url: "https://image.ohou.se/i/bucketplace-v2-development/uploads/shortcut/home_feed_shortcut_sets/167505411234148010.png?w=256",
  },
  {
    name: "빠른배송",
    url: "https://image.ohou.se/i/bucketplace-v2-development/uploads/shortcut/home_feed_shortcut_sets/167198012024333402.png?w=256",
  },
  {
    name: "쉬운이사",
    url: "https://image.ohou.se/i/bucketplace-v2-development/uploads/shortcut/home_feed_shortcut_sets/167198021046015480.png?w=256",
  },
  {
    name: "리모델링",
    url: "https://image.ohou.se/i/bucketplace-v2-development/uploads/shortcut/home_feed_shortcut_sets/167198022841390557.png?w=256",
  },
];

export default function MainCategory() {
  return (
    <>
      <ul className="w-full grid grid-cols-5 md:grid-cols-10 my-6">
        {CATEGORIES.map((item) => (
          <li key={item.url} className="text-center">
            <Link href="/">
              <a>
                <Image src={item.url} alt={item.name} width={88} height={76} />
                <p className="text-xs text-zinc-700 tracking-tighter">{item.name}</p>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
