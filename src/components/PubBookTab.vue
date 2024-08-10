<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { type BookData } from '../types/MainContentType';

defineProps<{
  tabTitle: string
  bookList: BookData[]
}>()
</script>

<template>
  <div class="pubBook">
    <div class="conBigTitle">
      <h2>{{ tabTitle }}</h2>
      <p>
        <a href="" target="_blank" rel="noopener">史记</a> |
        <a href="" target="_blank" rel="noopener">汉书</a> |
        <a href="" target="_blank" rel="noopener">后汉书</a> |
        <a href="" target="_blank" rel="noopener">三国志</a> |
        <a href="" target="_blank" rel="noopener">更多</a> |
      </p>
    </div>

    <div class="show">
      <div class="showLeft">
        <h3>
          <RouterLink to="read">
            <a title="史记">
              史记
            </a>
          </RouterLink>
        </h3>

        <p class="author">
          作者: 司马迁
        </p>

        <p class="introduce">
          《史记》全书包括十二本纪（记历代帝王政绩）、三十世家（记诸侯国和汉代诸侯、勋贵兴亡）、七十列传（记重要人物的言行事迹，主要叙人臣，其中最后一篇为自序）、十表（大事年表）、八书（记各种典章制度记礼、乐、音律、历法、天文、封禅、水利、财用）
        </p>

        <span>
          <a href="" target="_blank" title="史记">
            <img
              src="../assets/images/史记.jpg"
              title="史记" alt="史记" class="bookCover lazy">
          </a>
          <img src="//pweb.d.ireader.com/static/images/index/shadow.gif" alt="史记" class="shadow">
        </span>
      </div>

      <ul class="showMid">
        <li v-for="item in bookList" :key="item.id">
          <a href="" target="_blank">
            <img
              src="https://bookbk.img.zhangyue01.com/idc_1/m_1,w_117,h_156,q_100/568404c4/group61/M00/7F/63/CmQUOF3zObaEDD1yAAAAAKrf8H8384796143.jpg?v=CSVnf1yI&amp;t=CmQUOF6IxqM."
              :title="item.desc" :alt="item.title" class="lazy">
          </a>
          <p class="bookName">
            <a href="" :title="item.desc" target="_blank">{{ item.title }}</a>
          </p>
          <p>{{ item.author }}</p>
        </li>
      </ul>

      <div class="showRight">
        <h3>
          <a href="https://www.ireader.com.cn/index.php?ca=bookrank.ranklist&amp;pca=channel.index&amp;rankId=14877"
            target="_blank">
            畅销榜
          </a>
        </h3>
        <ul>
          <li class="">
            <dl class="close">
              <dt>1</dt>
              <dd>
                <span class="bookName">
                  <a href="https://www.ireader.com.cn/index.php?ca=bookdetail.index&amp;pca=channel.index&amp;bid=11851980"
                    title="微水浮尘" target="_blank">微水浮尘</a>
                </span>
                <span class="num">
                  <el-icon>
                    <View />
                  </el-icon>
                  83w+
                </span>
              </dd>
            </dl>
            <dl class="open">
              <dt>1</dt>
              <dd>
                <div>
                  <span class="bookPic">
                    <a href="https://www.ireader.com.cn/index.php?ca=bookdetail.index&amp;pca=channel.index&amp;bid=11851980"
                      target="_blank" title="微水浮尘">
                      <img
                        src="https://bookbk.img.zhangyue01.com/idc_1/m_1,w_63,h_84,q_100/e3156511/group61/M00/ED/95/CmQUOV0jGRyEJoaVAAAAAALs4JQ223908335.jpg?v=K9HfzX46&amp;t=CmQUOWLNLM4."
                        title="微水浮尘" alt="微水浮尘" class="lazy">
                    </a>
                  </span>
                  <div class="bookCon">
                    <p>
                      <a href="https://www.ireader.com.cn/index.php?ca=bookdetail.index&amp;pca=channel.index&amp;bid=11851980"
                        title="微水浮尘" target="_blank">微水浮尘</a>
                    </p>
                    <span class="num"><el-icon>
                        <View />
                      </el-icon>83w+</span>
                  </div>
                </div>
              </dd>
            </dl>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.pubBook {
  width: 62.5rem;
  overflow: hidden;
  margin: 0 auto;
}

.conBigTitle {
  width: 62.5rem;
  text-align: center;
  padding: 2.5rem 0 1.875rem;
}

.conBigTitle h2 {
  color: #212121;
  font-size: 1.625rem;
  height: 2.8125rem;
}

.conBigTitle p a {
  margin: 0 .25rem;
}

.show {
  width: 62.5rem;
  height: 32.875rem;
  background-color: #ffff;
}

.showLeft {
  width: 15.375rem;
  height: 30.0625rem;
  float: left;
  padding: 2.8125rem 3.5rem 0;
}

.showLeft h3 {
  width: 15.375rem;
  height: 1.375rem;
  font-size: 1.25rem;
  font-weight: 300;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #212121
}

.showLeft h3 a {
  color: #212121
}

.showLeft .author {
  margin: .625rem 0 1.25rem;
}

.showLeft .introduce {
  width: 15.375rem;
  height: 4rem;
  overflow: hidden;
  line-height: 1rem;
  text-overflow: ellipsis;
  margin-bottom: 5.875rem;
}

.show .showLeft span {
  width: 9.875rem;
  height: 11.875rem;
  float: right;
  position: relative;
  ;
}

.show .showLeft .bookCover {
  width: 9.75rem;
  height: 13rem;
  position: absolute;
  z-index: 1;
}

.show .showLeft .shadow {
  position: absolute;
  right: -1.25rem;
  bottom: -1.25rem;
  z-index: 0;
}

.show .showMid {
  float: left;
  width: 22.375rem;
  border-left: .0625rem solid #f0f0f0;
  box-sizing: border-box;
}

.show .showMid li {
  float: left;
  width: 6.3125rem;
  padding: 2.5rem 2.375rem 2.625rem;
  border-right: .0625rem solid #f0f0f0;
}

.show .showMid li:nth-child(n + 3) {
  border-top: .0625rem solid #f0f0f0;
}

.show .showMid li p {
  width: 6.3125rem;
  height: 1.25rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.show .showMid li img {
  width: 6.375rem;
  height: 8.5rem;
}

.show .showRight {
  float: left;
  width: 15.8125rem;
  padding: 1.75rem 0 0 1.875rem;

}

.show .showRight h3 {
  width: 14.25rem;
  height: 1.875rem;
  font-size: 1.4375rem;
  color: #f26552;
  position: relative;
  padding-left: 1.75rem;
  font-weight: 300;
}

.content h3 a {
  color: #212121;
}

.show .showRight li {
  overflow: hidden;
}

/* .show .showRight .onShow .open {
  display: block;
} */

.show .showRight li .open {
  display: none;
}

.show .showRight li:hover .close {
  display: none;
}

.show .showRight li:hover .open {
  display: block;
}

.show .showRight .close dt {
  line-height: 2.1875rem;
}

.show .showRight dl dt {
  float: left;
  text-align: right;
  width: .625rem;
  margin-right: 1.125rem;
}

.show .showRight .close dd {
  width: 12.5rem;
  height: 2.1875rem;
  line-height: 2.1875rem;
}

.show .showRight dl dd {
  float: left;
  border-bottom: .0625rem solid #f0f0f0;
  width: 12.5rem;
}

.show .showRight .close dd .bookName {
  float: left;
  width: 8.125rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.show .showRight .close dd .num {
  float: left;
  font-family: arial;
}

.show .showRight .close dd .num .el-icon {
  float: left;
  margin: .5rem .375rem 0 0;
}

.show .showRight .open {
  padding-top: 1rem;
}

.show .showRight .open dd .bookPic {
  display: block;
  width: 3.9375rem;
  height: 5.25rem;
  border: .0625rem solid #f0f0f0;
  float: left;
  margin: 0 1rem 1rem 0;
}

.show .showRight .open dd .bookCon p {
  color: #212121;
  width: 6.25rem;
  max-height: 2.25rem;
  line-height: 1rem;
  text-overflow: ellipsis;
  overflow: hidden;
}

.show .showRight .open dd .bookCon p a {
  color: #212121;
  font-size: .8125rem;
}
</style>
