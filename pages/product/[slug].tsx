import { DeliveryBtn, SpecialpriceBtn } from "@/components/Btns";
import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import { posts } from "@/data/product";
import Image from "next/image";
import { useRouter } from "next/router";

const BUTTON_CLASS = "py-3 tracking-tighter font-bold text-sky-400 border border-sky-400 rounded-md";
export default function ProductDetailPage() {
  const products = [...posts];
  const router = useRouter();
  const product = products.filter((item) => item.id === router.query.slug);
  {
    product.length === 0 && product.push(posts[0]);
  }
  const { brand, deliveryBTN, imgPath, price, review, sale, specialpriceBTN, title } = product[0];
  const onClick = () => {
    alert("😅");
  };
  return (
    <Layout>
      <Seo title={title} />
      <section className="grid grid-cols-1 md:grid-cols-10 w-full gap-8">
        <ul className="hidden col-span-1 md:flex flex-col gap-y-2 ">
          <li className="rounded-md border-2 border-sky-400 ">
            <Image
              src={imgPath}
              alt={title}
              layout="responsive"
              width={70}
              height={70}
              className=" hover:scale-105 transition duration-300"
            />
          </li>
        </ul>
        <div className="col-span-5 md:-ml-6">
          <Image src={imgPath} alt={title} className="w-full rounded-lg" layout="responsive" width={16} height={12} />
        </div>
        <div className="col-span-4 tracking-tighter">
          <h3 className="font-semibold text-zinc-500 text-sm">{brand}</h3>
          <h4 className="text-lg  text-zinc-800 font-semibold">{title}</h4>
          <h5 className="text-sky-400 text-xs font-semibold">{review}개 리뷰</h5>
          <p className="text-zinc-400">{sale} </p>
          <div className="flex items-center">
            <span className="text-2xl font-bold mr-1">{price}</span>
            <span className="text-2xl mr-1">원</span>
            {deliveryBTN && <DeliveryBtn />}
            {specialpriceBTN && <SpecialpriceBtn />}
          </div>
          <div className="grid grid-cols-2 my-4 gap-2">
            <button className={`${BUTTON_CLASS} hover:bg-gray-50`} onClick={onClick}>
              장바구니
            </button>
            <button className={`${BUTTON_CLASS} text-white bg-sky-400 hover:bg-sky-500`} onClick={onClick}>
              바로구매
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
