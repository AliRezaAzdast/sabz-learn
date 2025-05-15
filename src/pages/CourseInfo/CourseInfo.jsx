import React from 'react'
import Header from '../../componets/Header/Header'
import Footer from '../../componets/Footer/Footer'

import './CourseInfo.css'
import Breadcrum from '../../componets/Breadcrum/Breadcrum'


export default function CourseInfo() {
  return (
    <>
    <Header/>
    <Breadcrum
      links={[
        {id:1 , title:'خانه' , path:'/'},
        {id:2 , title:'آموزش برنامه نویسی فرانت اند' , path:'/category-info/frontend'},
        {id:3 , title:'دوره متخصص جاوا اسکریپت' , path:'/category-info/js-expert'},
      ]}
    />
    <Footer/>
    </>
  )
}
