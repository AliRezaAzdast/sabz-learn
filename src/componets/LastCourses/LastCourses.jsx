import React from "react";
import './LastCourses.css'
import SectionHeader from "../SectionHeader/SectionHeader";
import CourseBox from "../CourseBox/CourseBox";

export default function Courses() {
  return (
    <div className="courses">
      <div className="container">
            <SectionHeader title={'جدیدترین دوره ها'} description={'سکوی پرتاپ شما به سمت موفقیت'} button={'تمامی دوره ها'}/>

        <div className="courses-content">
        <div className="container">
          <div className="row">
            <CourseBox img={"images/courses/fareelancer.png"} title={'دوره پروژه محور متخصص جنگو'} teacher={'رضا دولتی'} price={'1,000,000'} views={500}/>
            <CourseBox img={"images/courses/fareelancer.png"} title={'دوره پروژه محور متخصص جنگو'} teacher={'رضا دولتی'} price={'1,000,000'} views={500}/>
            <CourseBox img={"images/courses/fareelancer.png"} title={'دوره پروژه محور متخصص جنگو'} teacher={'رضا دولتی'} price={'1,000,000'} views={500}/>
            <CourseBox img={"images/courses/fareelancer.png"} title={'دوره پروژه محور متخصص جنگو'} teacher={'رضا دولتی'} price={'1,000,000'} views={500}/>
            <CourseBox img={"images/courses/fareelancer.png"} title={'دوره پروژه محور متخصص جنگو'} teacher={'رضا دولتی'} price={'1,000,000'} views={500}/>
            <CourseBox img={"images/courses/fareelancer.png"} title={'دوره پروژه محور متخصص جنگو'} teacher={'رضا دولتی'} price={'1,000,000'} views={500}/>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
