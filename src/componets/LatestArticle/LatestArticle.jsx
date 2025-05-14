import React from "react";
import SectionHeader from '../SectionHeader/SectionHeader'

export default function LatestArticle() {
  return (
    <section class="articles">
      <div class="container">
        <SectionHeader
            title={'جدیدترین مقاله ها'}
            description={'پیش به سوی ارتقای دانش'}
            button={'تمامی مقاله ها'}
        />
      </div>
    </section>
  );
}
