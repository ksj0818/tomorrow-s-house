import Head from "next/head";

type Props = {
  title: string;
  content?: string;
};
export default function Seo({ title, content = "감도높은 유저들의 일상 구경부터 제품 구매까지 한번에" }: Props) {
  return (
    <>
      <Head>
        <title>{`내일의집 | ${title} `}</title>
        <meta name="description" content={content}></meta>
      </Head>
    </>
  );
}
