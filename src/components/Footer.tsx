import { Fragment } from "react/jsx-runtime";

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
    <footer className="p-4 mt-5" id="footer">
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
              <Fragment key={index}>
                <a className="text-decoration-none text-white" href="#">
                  {item}
                </a>
                <i> | </i>
              </Fragment>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
