import Link from "next/link";
import { useRouter } from "next/router";

export async function getServerSideProps(ctx) {
  const { results } = await (
    await fetch(
      `https://books-api.nomadcoders.workers.dev/list?name=${ctx.query.name}`
    )
  ).json();

  return {
    props: {
      results,
    },
  };
}

export default function List({ results }) {
  console.log(results);
  return (
    <div className="container">
      <h1 className="lists-name"> {results.list_name} </h1>
      <div className="books">
        {results?.books.map((book) => (
          <div className="book" key={book.rank}>
            <div className="book__image">
              <img src={`${book.book_image}`} />
            </div>
            <div className="book_info">
              <span className="book_info__title">{book.title}</span>
              <span className="book_info__author">{book.author}</span>
              <Link href={`${book.amazon_product_url}`}>
                <div className="book_info__buy-button">
                  Buy now &nbsp;
                  <i className="fa-solid fa-arrow-right fa-2xs"></i>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        img {
          width: inherit;
        }

        .lists-name {
          margin: 60px 0px;
        }

        .container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .books {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          flex-wrap: wrap;
          gap: 30px;
        }

        .book {
          display: flex;
          flex-direction: column;
          border: 1px solid rgba(0, 0, 0, 0.1);
          border-radius: 5px;
          box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.1);
        }

        .book__image {
          overflow: hidden;
          width: 100%;
        }

        .book_info {
          display: flex;
          flex-direction: column;
          padding: 10px 15px 25px 15px;
        }

        .book_info__title {
          font-size: 20px;
        }

        .book_info__author {
          color: blue;
          font-size: 14px;
          margin: 15px 0px;
        }

        .book_info__buy-button {
          width: max-content;
          border: 1.5px solid black;
          padding: 10px;
          border-radius: 3px;
          box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.1);
          transition: all 0.1s linear;
          cursor: pointer;
        }

        .book_info__buy-button:hover,
        .book_info__buy-button:active {
          transform: translateY(5px);
          box-shadow: 0px 10px 5px rgba(0, 0, 0, 0.1);
        }
        .book_info__buy-button:active {
          border: 2px solid white;
        }
      `}</style>
    </div>
  );
}
