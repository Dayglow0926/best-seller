export default function About() {
  return (
    <div className="container">
      <h1>About us</h1>
      <p>
        Welcome to the official explorer for The New York Times Best Seller list
        explorer. <br />
        We hope you enjoy your stay!
      </p>
      <style jsx>{`
        .container {
          max-width: 50%;
          min-width: 600px;
          padding: 10px 20px;
          border-bottom-right-radius: 5px;
          border-bottom-left-radius: 5px;
          box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.15);
        }
        p {
          font-size: 13px;
          line-height: 26px;
        }
      `}</style>
    </div>
  );
}
