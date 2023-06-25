import Script from "next/script";
import NavBar from "./NavBar";

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <div className="layout">{children}</div>
      <Script
        src="https://kit.fontawesome.com/a4852596ef.js"
        crossorigin="anonymous"
      ></Script>
      <style jsx>{`
        .layout {
          width: 100%;
          display: flex;
          justify-content: center;
        }
      `}</style>
    </>
  );
}
