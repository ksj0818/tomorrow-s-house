import Header from "./Header";
import Navbar from "./Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-screen-xl mx-auto px-8">
      <Header />
      <Navbar />
      {children}
    </div>
  );
}
