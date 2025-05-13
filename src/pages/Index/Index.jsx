import React from "react";
import "./Index.css";
import Header from "../../componets/Header/Header";
import Laning from "../../componets/Landing/Laning";
import LastCourses from "../../componets/LastCourses/LastCourses";

export default function Index() {
  return (
    <>
      <Header />
      <Laning />
      <LastCourses/>
    </>
  );
}
