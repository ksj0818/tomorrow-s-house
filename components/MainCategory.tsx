import Image from "next/image";
import Link from "next/link";
import { CATEGORIES } from "@/data/categories";

export default function MainCategory() {
  return (
    <>
      <ul className="w-full grid grid-cols-5 md:grid-cols-10 my-6">
        {CATEGORIES.map((item) => (
          <li key={item.imgPath} className="text-center">
            <Link href={item.url}>
              <a>
                <Image src={item.imgPath} alt={item.name} width={88} height={76} />
                <p className="text-xs text-zinc-700 tracking-tighter">{item.name}</p>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
