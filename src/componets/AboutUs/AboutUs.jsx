import React from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import "./AboutUs.css";
import AboutUsBox from "../AboutUsBox/AboutUsBox";

export default function AboutUs() {
  return (
    <div className="about-us">
      <div className="container">
        <SectionHeader
          className="about-us__header"
          title={"ما چه کمکی بهتون میکنیم؟"}
          description={"از اونجایی که آکادمی آموزشی سبزلرن یک آکادمی خصوصی هست"}
        />

        <div class="container">
          <div class="row">
            <AboutUsBox
              title={'دوره های اختصاصی'}
              description={'با پشتیبانی و کیفیت بالا ارائه میده !'}
              svg={'far fa-copyright about-us__icon'}
            />
            <AboutUsBox
              title={'اجازه تدریس'}
              description={'به هر مدرسی رو نمیده. چون کیفیت براش مهمه !'}
              svg={'fas fa-leaf about-us__icon'}
            />
            <AboutUsBox
              title={'دوره پولی و رایگان'}
              description={'براش مهم نیست. به مدرسینش حقوق میده تا نهایت کیفیت رو در پشتیبانی و اپدیت دوره ارائه بده'}
              svg={'fas fa-gem about-us__icon'}
            />
            <AboutUsBox
              title={'اهمیت به کاربر'}
              description={'اولویت اول و آخر آکادمی آموزش برنامه نویسی سبزلرن اهمیت به کاربرها و رفع نیاز های آموزشی و رسوندن اونها به بازار کار هست'}
              svg={'fas fa-crown about-us__icon'}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
