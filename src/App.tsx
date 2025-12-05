import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.min.css";
import "./App.css";
import Topbar from "./components/Topbar";
import News from "./components/News";
import NewsRadio from "./components/NewsRadio";
import NewReleases from "./components/NewReleases";
import Explore from "./components/Explore";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";

export default function App() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<[]>([]);

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
      <Topbar onSearchChange={setQuery} />
      <News />
      <NewsRadio />
      <NewReleases results={results} />
      <Explore />
      <Footer />
    </>
  );
}
