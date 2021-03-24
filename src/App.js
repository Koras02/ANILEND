import React from "react";
import Anime from "./Anime";
import { BrowserRouter, Route } from "react-router-dom";
import RO from "./Pages/RO";

function App() {
  return (
    <>
      <BrowserRouter>
        <Route path="/" exact component={Anime} />
        <Route path="/FWS" component={RO} />
      </BrowserRouter>
    </>
  );
}

export default App;
