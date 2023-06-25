import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <style jsx global>{`
        nav {
          height: 50px;
          background-color: white;
          border-bottom: 2px solid black;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0px 20px;
        }
        a {
          color: black;
          font-size: 20px;
        }
        nav > div {
          display: flex;
          justify-content: space-between;
        }
      `}</style>
    </nav>
  );
}
