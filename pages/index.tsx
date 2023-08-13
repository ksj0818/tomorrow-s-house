import Layout from "@/components/Layout";
import MainCategory from "@/components/MainCategory";
import MainPosts from "@/components/MainPosts";
import ProductPosts from "@/components/ProductPosts";
import Seo from "@/components/Seo";

export default function Home() {
  return (
    <Layout>
      <Seo title="라이프스타일 슈퍼앱" />
      <MainPosts />
      <MainCategory />
      <ProductPosts />
    </Layout>
  );
}
