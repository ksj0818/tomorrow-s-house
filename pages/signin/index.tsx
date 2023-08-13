import type { GetServerSidePropsContext } from "next";
import { ClientSafeProvider, getProviders, signIn } from "next-auth/react";
import { unstable_getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]";
import Seo from "@/components/Seo";
import Link from "next/link";
import Image from "next/image";

const BUTTON_CLASS =
  "min-w-[260px] border border-zinc-100 rounded-md flex items-center text-sm font-bold w-2/5 px-4 hover:brightness-95";
const BUTTON_LIST = [
  {
    name: "Google",
    logoPath: "/images/GoogleAuthLogo.jpg",
    bgColor: "bg-white",
    textColor: "text-black",
  },
  {
    name: "Kakao",
    logoPath: "/images/KakaoAuthLogo.jpg",
    bgColor: "bg-kakao-color",
    textColor: "text-black",
  },
  {
    name: "Naver",
    logoPath: "/images/NaverAuthLogo.jpg",
    bgColor: "bg-naver-color",
    textColor: "text-white",
  },
  {
    name: "Apple",
    logoPath: "/images/AppleAuthLogo.jpg",
    bgColor: "bg-apple-color",
    textColor: "text-white",
  },
];
export default function SignIn({ providers }: Record<string, ClientSafeProvider>) {
  return (
    <section>
      <Seo />
      <article className="py-16 mx-auto flex flex-col items-center max-w-screen-sm h-screen ">
        <Link href="/">
          <a>
            <div className="flex items-center">
              <Image src="/images/logo.png" alt="logo" width={43} height={43} />
              <h1 className="text-3xl ml-2">내일의집</h1>
            </div>
          </a>
        </Link>
        <div className="mt-36 text-center tracking-tighter">
          <h6 className="text-xs text-gray-500 py-2">SNS계정으로 간편 로그인</h6>
          <div className="grid gap-1 z-10">
            {Object.values(providers).map((provider, idx) => (
              <div key={provider.name}>
                <button className={`${BUTTON_CLASS} ${BUTTON_LIST[idx].bgColor}`} onClick={() => signIn(provider.id)}>
                  <Image src={BUTTON_LIST[idx].logoPath} alt={BUTTON_LIST[idx].name} width={40} height={40} />
                  <span className={`${BUTTON_LIST[idx].textColor} mx-auto`}>{provider.name}(으)로 시작하기</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </article>
    </section>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await unstable_getServerSession(context.req, context.res, authOptions);

  if (session) {
    return { redirect: { destination: "/" } };
  }

  const providers = await getProviders();

  return {
    props: { providers: providers ?? [] },
  };
}
