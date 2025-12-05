import { useState, useEffect } from "react";

type ArrExpType = string;

const arrExp: ArrExpType[] = [
  "Esplora per genere",
  "Decenni",
  "Attivita' e stati d'animo",
  "Worldwide",
  "Classifiche",
  "Audio spaziale",
  "Video musicali",
  "Nuovi artisti",
  "Hit del passato",
];

const Explore = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const columnsDesktop = isMobile
    ? [arrExp]
    : [arrExp.slice(0, 3), arrExp.slice(3, 6), arrExp.slice(6, 9)];

  return (
    <div className="container mt-4">
      <h3>Altro da esplorare</h3>

      {isMobile ? (
        <div className="d-flex flex-column gap-2 mt-3">
          {arrExp.map((item, index) => (
            <button
              key={index}
              className="d-flex justify-content-between align-items-center p-3 border-0 rounded bg-dark text-danger">
              {item}
              <i className="bi bi-chevron-right text-danger"></i>
            </button>
          ))}
        </div>
      ) : (
        <div className="d-flex justify-content-between mt-3">
          {columnsDesktop.map((col, colIndex) => (
            <div
              key={colIndex}
              className="d-flex flex-column gap-2 flex-grow-1 mx-2">
              {col.map((item, index) => (
                <button
                  key={index}
                  className="d-flex justify-content-between align-items-center p-3 border-0 rounded bg-dark text-danger">
                  {item}
                  <i className="bi bi-chevron-right text-danger"></i>
                </button>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Explore;
