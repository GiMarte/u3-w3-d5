import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.min.css";
import "./App.css";
import Topbar from "./components/Topbar";
import News from "./components/News";
import NewsRadio from "./components/NewsRadio";
import NewReleases from "./components/NewReleases";
import Explore from "./components/Explore";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import { useState, useEffect } from "react";

export default function App() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<[]>([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const fetchData = async (q: string = "daft punk") => {
    try {
      const res = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/search?q=${q}`
      );
      const data = await res.json();
      setResults(data.data);
      console.log(data.data);
    } catch (e) {
      console.error("FETCH ERROR:", e);
      setResults([]);
    }
  };

  useEffect(() => {
    fetchData();
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (query.trim() === "") {
      setResults([]);
      return;
    }
    const timer = setTimeout(() => {
      fetchData(query);
    }, 400);

    return () => clearTimeout(timer);
  }, [query]);

  return (
    <>
      {!isMobile && (
        <div className="container-fluid">
          <div className="row">
            <div className="col col-3 border-end" id="sidebar">
              <Sidebar onSearchChange={setQuery} />
            </div>
            <div className="col col-9 p-0">
              <News />
              <NewsRadio />
              <NewReleases results={results} />
              <Explore />
              <Footer />{" "}
            </div>
          </div>
        </div>
      )}
      {isMobile && (
        <>
          <Topbar onSearchChange={setQuery} />
          <News />
          <NewsRadio />
          <NewReleases results={results} />
          <Explore />
          <Footer />{" "}
        </>
      )}
    </>
  );
}
