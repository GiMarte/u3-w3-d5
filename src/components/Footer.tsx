type ArrExpType = string;

const arrExp: ArrExpType[] = [
  "Condizioni dei servizi internet",
  "Apple Music e privacy",
  "Avviso sui cookie",
  "Support",
  "Feedback",
];

const Footer = () => {
  return (
    <footer className="p-4" id="footer">
      <div className="container">
        <div>
          <a href="#" className="text-decoration-none text-white">
            Italia
          </a>
          <i> | </i>
          <a href="#" className="text-decoration-none text-white">
            English (Uk)
          </a>
        </div>
        <p>
          Copyright © {new Date().getFullYear()} Mela Inc. Tutti i diritti
          riservati.
        </p>
        <div>
          {arrExp.map((item, index) => {
            return (
              <>
                <a
                  className="text-decoration-none text-white"
                  key={index}
                  href="#">
                  {item}
                </a>
                <i> | </i>
              </>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
