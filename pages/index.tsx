import Layout from "@/components/Layout";
import MainCategory from "@/components/MainCategory";
import MainPosts from "@/components/MainPosts";
import ProductPosts from "@/components/ProductPosts";

export default function Home() {
  return (
    <Layout>
      <MainPosts />
      <MainCategory />
      <ProductPosts />
    </Layout>
  );
}
