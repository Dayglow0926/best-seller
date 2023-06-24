import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();
  return (
    <nav>
      <div>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
      </div>
      <style jsx global>{`
        nav {
          height: 100px;
          background-color: white;
        }
        a {
          color: black;
        }
        nav > div {
          display: flex;
          justify-content: space-between;
        }
      `}</style>
    </nav>
  );
}
