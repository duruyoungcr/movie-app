import React from "react";
import "./App.css";
import requests from "./requests";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Row from "./components/Row";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero fetchUrl={requests.trending} />
      <Row title="HOT 🔥" url={requests.trending} isHot />
      <Row title="Top Rated" url={requests.topRated} isRated />
      <Row title="Action Movies" url={requests.actionMovies} />
      <Row title="Comedy Movies" url={requests.comedyMovies} />
      <Row title="Horror Movies" url={requests.horrorMovies} />
      <Row title="Romance Movies" url={requests.romanceMovies} />
      <Footer />
    </div>
  );
}

export default App;
