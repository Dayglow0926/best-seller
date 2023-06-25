import Link from "next/link";
import { useRouter } from "next/router";

export async function getServerSideProps() {
  const { results } = await (
    await fetch(`http://localhost:3000/api/lists`)
  ).json();

  return {
    props: {
      results,
    },
  };
}

export default function Home({ results }) {
  const router = useRouter();
  const onClick = (name) => {
    router.push(`/list/${name}`);
  };

  return (
    <div className="container">
      <h1>THE NEW YORK TIMES BEST SELLER EXPLORER</h1>
      <div className="best-seller-lists">
        {results?.map((book, index) => (
          <div
            onClick={() => onClick(book.list_name)}
            className="best-seller"
            key={index}
          >
            <span className="best-seller__name">
              {book.display_name}
              <i className="fa-solid fa-arrow-right fa-2xs"></i>
            </span>
          </div>
        ))}
      </div>
      <style jsx>{`
        .container {
          max-width: 50%;
          min-width: 600px;
          padding: 10px 20px;
          border-bottom-right-radius: 5px;
          border-bottom-left-radius: 5px;
          box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.15);
        }
        .best-seller-lists {
          display: flex;
          flex-wrap: wrap;
        }
        .best-seller {
          border: 2px solid rgba(0, 0, 0, 0.5);
          border-radius: 3px;
          padding: 10px;
          margin: 0px 30px 30px 0px;
          box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.1);
          cursor: pointer;
          transition: all 0.1s linear;
        }
        .best-seller:hover,
        .best-seller:active {
          transform: translateY(5px);
          box-shadow: 0px 10px 5px rgba(0, 0, 0, 0.1);
        }
        .best-seller:active {
          border: 2px solid white;
        }
        .book:visited {
          border: 2px solid blue;
        }
      `}</style>
    </div>
  );
}
