import React from "react";
import "./Courses.css";

import Header from "../../componets/Header/Header";
import Footer from "../../componets/Footer/Footer";
import Breadcrum from "../../componets/Breadcrum/Breadcrum";
import CourseBox from "../../componets/CourseBox/CourseBox";
import Pagination from '../../componets/Pagination/Pagination'

export default function Courses() {
  return (
    <>
      <Header />
      <Breadcrum
        links={[
          { id: 1, title: "خانه", path: "/" },
          {
            id: 2,
            title: "تمام دوره ها",
            path: "/courses",
          },
        ]}
      />

      {/* <!--------------------------------  Courses-Section  --------------------------------> */}
      <section class="courses">
        <div class="container">
          <div class="courses-content">
            <div class="container">
              <div class="row">
                <CourseBox
                  img={"images/courses/fareelancer.png"}
                  title={"دوره پروژه محور متخصص جنگو"}
                  teacher={"رضا دولتی"}
                  price={"1,000,000"}
                  views={500}
                />
                <CourseBox
                  img={"images/courses/fareelancer.png"}
                  title={"دوره پروژه محور متخصص جنگو"}
                  teacher={"رضا دولتی"}
                  price={"1,000,000"}
                  views={500}
                />
                <CourseBox
                  img={"images/courses/fareelancer.png"}
                  title={"دوره پروژه محور متخصص جنگو"}
                  teacher={"رضا دولتی"}
                  price={"1,000,000"}
                  views={500}
                />
                <CourseBox
                  img={"images/courses/fareelancer.png"}
                  title={"دوره پروژه محور متخصص جنگو"}
                  teacher={"رضا دولتی"}
                  price={"1,000,000"}
                  views={500}
                />
                <CourseBox
                  img={"images/courses/fareelancer.png"}
                  title={"دوره پروژه محور متخصص جنگو"}
                  teacher={"رضا دولتی"}
                  price={"1,000,000"}
                  views={500}
                />
                <CourseBox
                  img={"images/courses/fareelancer.png"}
                  title={"دوره پروژه محور متخصص جنگو"}
                  teacher={"رضا دولتی"}
                  price={"1,000,000"}
                  views={500}
                />
              </div>
            </div>
          </div>

          <Pagination/>
        </div>
      </section>
      {/* <!--------------------------------  Courses-Section  --------------------------------> */}

      <Footer />
    </>
  );
}
