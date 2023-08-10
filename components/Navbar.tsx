import Link from "next/link";

const NAV_TOPICS = [
  { name: "홈", url: "/" },
  { name: "추천", url: "/" },
  { name: "집들이", url: "/" },
  { name: "집사진", url: "/" },
  { name: "살림수납", url: "/" },
  { name: "콜렉터블", url: "/" },
  { name: "홈스토랑", url: "/" },
  { name: "핫플레이스", url: "/" },
  { name: "육아", url: "/" },
  { name: "플랜테리어", url: "/" },
  { name: "반려동물", url: "/" },
  { name: "캠핑", url: "/" },
  { name: "취미", url: "/" },
  { name: "3D인테리어", url: "/" },
  { name: "이벤트", url: "/" },
];
export default function Navbar() {
  return (
    <div className="mb-8">
      <nav className="py-3 text-zinc-800 text-sm font-semibold tracking-tighter overflow-auto">
        <div className="flex items-center justify-between min-w-[1100px] ">
          {NAV_TOPICS.map((item, index) => (
            <span key={index}>
              <Link href={item.url}>
                <a>{item.name}</a>
              </Link>
            </span>
          ))}
          <div className="min-w-[200px]"></div>
        </div>
      </nav>
      <div className="absolute left-0 right-0 border-b border-zinc-100 bg-slate-200" />
    </div>
  );
}
