import React from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import ArticleBox from "../ArticleBox/ArticleBox";

import "./LatestArticle.css";

export default function LatestArticle() {
  return (
    <section className="articles">
      <div className="container">
        <SectionHeader
          title={"جدیدترین مقاله ها"}
          description={"پیش به سوی ارتقای دانش"}
          button={"تمامی مقاله ها"}
        />
        <div className="articles__content">
          <div className="row">
            <ArticleBox
              img={"images/blog/3.jpg"}
              title={"نحوه نصب کتابخانه در پایتون | آموزش نصب کتابخانه پایتون"}
              desc={
                "زبان پایتون هم مانند دیگر زبان­های برنامه نویسی رایج، دارای کتابخانه های مختلفی برای تسریع..."
              }
            />
            <ArticleBox
              img={"images/blog/3.jpg"}
              title={"نحوه نصب کتابخانه در پایتون | آموزش نصب کتابخانه پایتون"}
              desc={
                "زبان پایتون هم مانند دیگر زبان­های برنامه نویسی رایج، دارای کتابخانه های مختلفی برای تسریع..."
              }
            />
            <ArticleBox
              img={"images/blog/3.jpg"}
              title={"نحوه نصب کتابخانه در پایتون | آموزش نصب کتابخانه پایتون"}
              desc={
                "زبان پایتون هم مانند دیگر زبان­های برنامه نویسی رایج، دارای کتابخانه های مختلفی برای تسریع..."
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}
