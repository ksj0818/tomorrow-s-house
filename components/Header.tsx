import Link from "next/link";
import { ChangeEvent, useState } from "react";
import { BsSearch, BsChevronDown } from "react-icons/bs";
import { LiaShoppingCartSolid } from "react-icons/lia";

const LEFT_LINK = [
  {
    name: "커뮤니티",
    url: "/",
  },
  {
    name: "쇼핑",
    url: "/shopping",
  },
  {
    name: "이사/시공/생활",
    url: "/experts",
  },
];
const RIGHT_LINK = [
  {
    name: "로그인",
    url: "/signin",
  },
  {
    name: "회원가입",
    url: "/signup",
  },
  {
    name: "고객센터",
    url: "/customercenter",
  },
];
export default function Header() {
  const [search, setSearch] = useState("");
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearch(value);
  };
  return (
    <>
      <header className="py-4 tracking-tighter">
        <div className="flex items-center justify-around md:justify-between">
          <div className="font-bold flex items-center">
            <h1 className="font-bold text-2xl min-w-[100px]">
              <Link href="/">
                <a>내일의집</a>
              </Link>
            </h1>
            <div className="flex justify-around min-w-[300px]">
              {LEFT_LINK.map((link) => (
                <Link href={link.url} key={link.url}>
                  <a>{link.name}</a>
                </Link>
              ))}
            </div>
          </div>
          <div className="border hidden lg:flex border-slate-200 rounded-md py-1 px-3  items-center gap-x-1 w-1/4 ">
            <BsSearch className="text-slate-500" />
            <input
              type="text"
              name="search"
              value={search}
              placeholder="통합검색"
              className="outline-none tracking-tight"
              onChange={onChange}
            />
          </div>
          <div className="hidden md:flex items-center gap-x-2 min-w-[302px] text-slate-600">
            <LiaShoppingCartSolid className="text-2xl" />
            <div className="flex items-center gap-3 text-sm">
              {RIGHT_LINK.map((link) => (
                <p key={link.url}>
                  <Link href={link.url} key={link.url}>
                    <a>{link.name}</a>
                  </Link>
                </p>
              ))}
              <button className="flex items-center bg-sky-400 p-2 gap-4 rounded-md text-white">
                <span>글쓰기</span>
                <BsChevronDown className="font-bold" />
              </button>
            </div>
          </div>
        </div>
      </header>
      <div className="absolute left-0 right-0 border-b border-zinc-100 bg-slate-200" />
    </>
  );
}
