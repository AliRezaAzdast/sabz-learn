import React from "react";
import "./Index.css";
import Header from "../../componets/Header/Header";
import Laning from "../../componets/Landing/Laning";
import LastCourses from "../../componets/LastCourses/LastCourses";
import AboutUs from "../../componets/AboutUs/AboutUs";
import PopularCourses from "../../componets/PopularCourses/PopularCourses";
import PresellCourses from "../../componets/PresellCourses/PresellCourses";
import LatestArticle from "../../componets/LatestArticle/LatestArticle";

export default function Index() {
  return (
    <>
      <Header />
      <Laning />
      <LastCourses/>
      <AboutUs/>
      <PopularCourses/>
      <PresellCourses/>
      <LatestArticle/>
    </>
  );
}
