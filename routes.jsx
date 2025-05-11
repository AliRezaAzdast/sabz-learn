import CourseInfo from './src/pages/CourseInfo/CourseInfo'
import Index from './src/pages/Index/Index'
import Category from './src/pages/Category/Category'
import ArticleInfo from './src/pages/ArticleInfo/ArticleInfo'

const route = [
    { path: '/' , element:<Index/>},
    { path: '/course-info/:courseName' , element:<CourseInfo/>},
    { path: '/category-info/:categoryName' , element:<Category/>},
    { path: '/article-info/:articleName' , element:<ArticleInfo/>},
]

export default route