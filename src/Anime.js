/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";

import Data from "./Anime.json";
import "./Anime.scss";
import {
  AnimerWrapper,
  AnimerWrapper2,
  AnimerWrapper3,
  AnimerWrapper4,
  Router,
} from "./AnimeStyle";

function Anime({ title1 }) {
  const [scrollNav, setScrollNav] = useState(true);

  const changeNav = () => {
    if (window.scrollY > 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);
  return (
    <div>
      {Data.map((title) => {
        return (
          <>
            <AnimerWrapper className="list" scrollNav={scrollNav}>
              <AnimerWrapper2 scrollNav={scrollNav}>
                <img className="logo" src="../images/ANILEND.png"></img>
                <h1 className="h2">{title.title2}</h1>
              </AnimerWrapper2>
            </AnimerWrapper>
            <AnimerWrapper3 className="list" scrollNav={scrollNav}>
              <AnimerWrapper4 scrollNav={scrollNav}>
                <img className="logo" src="../images/ANILEND.png"></img>
                <h1 className="h2">{title.title2}</h1>
              </AnimerWrapper4>
            </AnimerWrapper3>
            <div className="imgForm">
              <h1 className="h4">신작 보기</h1>
              <div className="imgContainer">
                <Router href="https://ko.wikipedia.org/wiki/%EC%A7%84%EA%B2%A9%EC%9D%98_%EA%B1%B0%EC%9D%B8">
                  <img src={title.img} alt="Attack of Titan" className="img" />
                </Router>
                <Router href="https://ko.wikipedia.org/wiki/%EC%A3%BC%EC%88%A0%ED%9A%8C%EC%A0%84">
                  <img src={title.img3} alt="" className="img" />
                </Router>
                <Router to="/FWS">
                  <img src={title.img4} alt="" className="img" />
                </Router>
                <Router to="/FWS">
                  <img src={title.img} alt="" className="img" />
                </Router>
                <Router to="/FWS">
                  <img src={title.img} alt="" className="img" />
                </Router>
              </div>
              <div className="imgTitle">
                <div className="TitleContainer">
                  <div className="h1Form">
                    <h1 className="h3">{title.title1}</h1>
                  </div>
                  <div className="h1Form">
                    <h1 className="h3">{title.title3}</h1>
                  </div>
                  <div className="h1Form">
                    <h1 className="h3">{title.title4}</h1>
                  </div>
                  <div className="h1Form">
                    <h1 className="h3">{title.title1}</h1>
                  </div>{" "}
                  <div className="h1Form">
                    <h1 className="h3">{title.title1}</h1>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default Anime;
