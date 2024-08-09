<script setup lang="ts">
import { RouterLink } from 'vue-router';

defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="pubBook">
    <div class="conBigTitle">
      <h2>{{ msg }}</h2>
      <p>
        <a href="https://vitejs.dev/" target="_blank" rel="noopener">小说</a> |
        <a href="https://vuejs.org/" target="_blank" rel="noopener">励志成功</a> |
        <a href="https://vitejs.dev/" target="_blank" rel="noopener">文学</a> |
        <a href="https://vuejs.org/" target="_blank" rel="noopener">经济管理</a> |
        <a href="https://vitejs.dev/" target="_blank" rel="noopener">更多</a> |
      </p>
    </div>

    <div class="show">
      <div class="showLeft">
        <h3>
          <RouterLink to="/read">
          <a title="悍女三嫁">
            悍女三嫁
          </a>
        </RouterLink>
        </h3>

        <p class="author">
          作者: 秋李子
        </p>

        <p class="introduce">
          一个与众不同的侯门千金的故事。
        </p>

        <span>
          <a href="https://www.ireader.com.cn/index.php?ca=bookdetail.index&amp;pca=channel.index&amp;bid=11868201"
            target="_blank" title="悍女三嫁">
            <img
              src="https://bookbk.img.zhangyue01.com/idc_1/m_1,w_156,h_208,q_100/62b6c89d/group61/M00/15/A2/CmQUOV1eXVOEZgKZAAAAACMUKlk298154081.jpg?v=lXgf2ndV&amp;t=CmQUOV1eXVM."
              title="悍女三嫁" alt="悍女三嫁" class="bookCover lazy">
          </a>
          <img src="//pweb.d.ireader.com/static/images/index/shadow.gif" alt="悍女三嫁" class="shadow">
        </span>
      </div>

      <ul class="showMid">
        <li>
          <a href="https://www.ireader.com.cn/index.php?ca=bookdetail.index&amp;pca=channel.index&amp;bid=12047680"
            target="_blank" title="中药很苦，你很甜">
            <img
              src="https://bookbk.img.zhangyue01.com/idc_1/m_1,w_117,h_156,q_100/568404c4/group61/M00/7F/63/CmQUOF3zObaEDD1yAAAAAKrf8H8384796143.jpg?v=CSVnf1yI&amp;t=CmQUOF6IxqM."
              title="中药很苦，你很甜" alt="中药很苦，你很甜" class="lazy">
          </a>
          <p class="bookName">
            <a href="https://www.ireader.com.cn/index.php?ca=bookdetail.index&amp;pca=channel.index&amp;bid=12047680"
              title="中药很苦，你很甜" target="_blank">中药很苦，你很甜</a>
          </p>
          <p>乔方</p>
        </li>
        <li>
          <a href="https://www.ireader.com.cn/index.php?ca=bookdetail.index&amp;pca=channel.index&amp;bid=11870329"
            target="_blank" title="宅中歌">
            <img
              src="https://bookbk.img.zhangyue01.com/idc_1/m_1,w_117,h_156,q_100/c0e01cab/group61/M00/21/22/CmQUOV1wn9GEOlMmAAAAAJKg8kc470575815.jpg?v=18zG1qo-&amp;t=CmQUOV6Ixg4."
              title="宅中歌" alt="宅中歌" class="lazy">
          </a>
          <p class="bookName">
            <a href="https://www.ireader.com.cn/index.php?ca=bookdetail.index&amp;pca=channel.index&amp;bid=11870329"
              title="宅中歌" target="_blank">宅中歌</a>
          </p>
          <p>白鹭成双</p>
        </li>
        <li>
          <a href="https://www.ireader.com.cn/index.php?ca=bookdetail.index&amp;pca=channel.index&amp;bid=11870175"
            target="_blank" title="奢侈">
            <img
              src="https://bookbk.img.zhangyue01.com/idc_1/m_1,w_117,h_156,q_100/37008d81/group61/M00/19/82/CmQUOV1l6xKEQhczAAAAAMJWPo0436163770.jpg?v=Lj6LYvER&amp;t=CmQUOV6Ixgw."
              title="奢侈" alt="奢侈" class="lazy">
          </a>
          <p class="bookName">
            <a href="https://www.ireader.com.cn/index.php?ca=bookdetail.index&amp;pca=channel.index&amp;bid=11870175"
              title="奢侈" target="_blank">奢侈</a>
          </p>
          <p>折火一夏</p>
        </li>
        <li>
          <a href="https://www.ireader.com.cn/index.php?ca=bookdetail.index&amp;pca=channel.index&amp;bid=12045225"
            target="_blank" title="先婚后爱，楚少慢慢来">
            <img
              src="https://bookbk.img.zhangyue01.com/idc_1/m_1,w_117,h_156,q_100/e5f3c04e/group61/M00/60/F9/CmQUOV3p8t6EAa2hAAAAACHwWUU991029340.jpg?v=uXBVqjto&amp;t=CmQUOV6Ixpw."
              title="先婚后爱，楚少慢慢来" alt="先婚后爱，楚少慢慢来" class="lazy">
          </a>
          <p class="bookName">
            <a href="https://www.ireader.com.cn/index.php?ca=bookdetail.index&amp;pca=channel.index&amp;bid=12045225"
              title="先婚后爱，楚少慢慢来" target="_blank">先婚后爱，楚少慢慢来</a>
          </p>
          <p>天青烟雨</p>
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
          <li class="">
            <dl class="close">
              <dt>2</dt>
              <dd>
                <span class="bookName">
                  <a href="https://www.ireader.com.cn/index.php?ca=bookdetail.index&amp;pca=channel.index&amp;bid=13079292"
                    title="择夫记" target="_blank">择夫记</a>
                </span>
                <span class="num"><el-icon>
                    <View />
                  </el-icon>14724</span>
              </dd>
            </dl>
            <dl class="open">
              <dt>2</dt>
              <dd>
                <div>
                  <span class="bookPic">
                    <a href="https://www.ireader.com.cn/index.php?ca=bookdetail.index&amp;pca=channel.index&amp;bid=13079292"
                      target="_blank" title="择夫记">
                      <img
                        src="https://bookbk.img.zhangyue01.com/idc_1/m_1,w_63,h_84,q_100/0d439bb1/group62/q8/V4/44a3047688a2daf38691d71210deab88.jpg?v=Yz8eKnTP&amp;t=fwAAAWYbmEk."
                        title="择夫记" alt="择夫记" class="lazy">
                    </a>
                  </span>
                  <div class="bookCon">
                    <p>
                      <a href="https://www.ireader.com.cn/index.php?ca=bookdetail.index&amp;pca=channel.index&amp;bid=13079292"
                        title="择夫记" target="_blank">择夫记</a>
                    </p>
                    <span class="num"><el-icon>
                        <View />
                      </el-icon>14724</span>
                  </div>
                </div>
              </dd>
            </dl>
          </li>
          <li class="onShow">
            <dl class="close">
              <dt>3</dt>
              <dd>
                <span class="bookName">
                  <a href="https://www.ireader.com.cn/index.php?ca=bookdetail.index&amp;pca=channel.index&amp;bid=13095855"
                    title="小楼一夜听春雨" target="_blank">小楼一夜听春雨</a>
                </span>
                <span class="num"><el-icon>
                    <View />
                  </el-icon>791</span>
              </dd>
            </dl>
            <dl class="open">
              <dt>3</dt>
              <dd>
                <div>
                  <span class="bookPic">
                    <a href="https://www.ireader.com.cn/index.php?ca=bookdetail.index&amp;pca=channel.index&amp;bid=13095855"
                      target="_blank" title="小楼一夜听春雨">
                      <img
                        src="https://bookbk.img.zhangyue01.com/idc_1/m_1,w_63,h_84,q_100/5c205ab9/group62/0d/WV/064fa98acf91be4b590bfe5987f074b1.jpg?v=Wm_UKLMf&amp;t=fwAAAWZDXx0."
                        title="小楼一夜听春雨" alt="小楼一夜听春雨" class="lazy">
                    </a>
                  </span>
                  <div class="bookCon">
                    <p>
                      <a href="https://www.ireader.com.cn/index.php?ca=bookdetail.index&amp;pca=channel.index&amp;bid=13095855"
                        title="小楼一夜听春雨" target="_blank">小楼一夜听春雨</a>
                    </p>
                    <span class="num"><el-icon>
                        <View />
                      </el-icon>791</span>
                  </div>
                </div>
              </dd>
            </dl>
          </li>
          <li class="">
            <dl class="close">
              <dt>4</dt>
              <dd>
                <span class="bookName">
                  <a href="https://www.ireader.com.cn/index.php?ca=bookdetail.index&amp;pca=channel.index&amp;bid=11787714"
                    title="平凡的世界（全3册）" target="_blank">平凡的世界（全3册）</a>
                </span>
                <span class="num"><el-icon>
                    <View />
                  </el-icon>1087</span>
              </dd>
            </dl>
            <dl class="open">
              <dt>4</dt>
              <dd>
                <div>
                  <span class="bookPic">
                    <a href="https://www.ireader.com.cn/index.php?ca=bookdetail.index&amp;pca=channel.index&amp;bid=11787714"
                      target="_blank" title="平凡的世界（全3册）">
                      <img
                        src="https://bookbk.img.zhangyue01.com/idc_1/m_1,w_63,h_84,q_100/e951d63b/group61/M00/8F/C6/CmQUOVyQnaKES5D5AAAAAKy6Afc541531539.jpg?v=BwLL8pOf&amp;t=CmQUOWLD6bI."
                        title="平凡的世界（全3册）" alt="平凡的世界（全3册）" class="lazy">
                    </a>
                  </span>
                  <div class="bookCon">
                    <p>
                      <a href="https://www.ireader.com.cn/index.php?ca=bookdetail.index&amp;pca=channel.index&amp;bid=11787714"
                        title="平凡的世界（全3册）" target="_blank">平凡的世界（全3册）</a>
                    </p>
                    <span class="num"><el-icon>
                        <View />
                      </el-icon>1087</span>
                  </div>
                </div>
              </dd>
            </dl>
          </li>
          <li class="">
            <dl class="close">
              <dt>5</dt>
              <dd>
                <span class="bookName">
                  <a href="https://www.ireader.com.cn/index.php?ca=bookdetail.index&amp;pca=channel.index&amp;bid=13025968"
                    title="法律的悖论（罗翔普法新作）" target="_blank">法律的悖论（罗翔普法新作）</a>
                </span>
                <span class="num"><el-icon>
                    <View />
                  </el-icon>367</span>
              </dd>
            </dl>
            <dl class="open">
              <dt>5</dt>
              <dd>
                <div>
                  <span class="bookPic">
                    <a href="https://www.ireader.com.cn/index.php?ca=bookdetail.index&amp;pca=channel.index&amp;bid=13025968"
                      target="_blank" title="法律的悖论（罗翔普法新作）">
                      <img
                        src="https://bookbk.img.zhangyue01.com/idc_1/m_1,w_63,h_84,q_100/3b1bcad5/group62/3a/5V/3f8a284642a6b0db6182f2f4eec5465d.jpg?v=oqS2NdEJ&amp;t=fwAAAWVy-C8."
                        title="法律的悖论（罗翔普法新作）" alt="法律的悖论（罗翔普法新作）" class="lazy">
                    </a>
                  </span>
                  <div class="bookCon">
                    <p>
                      <a href="https://www.ireader.com.cn/index.php?ca=bookdetail.index&amp;pca=channel.index&amp;bid=13025968"
                        title="法律的悖论（罗翔普法新作）" target="_blank">法律的悖论（罗翔普法新作）</a>
                    </p>
                    <span class="num"><el-icon>
                        <View />
                      </el-icon>367</span>
                  </div>
                </div>
              </dd>
            </dl>
          </li>
          <li class="">
            <dl class="close">
              <dt>6</dt>
              <dd>
                <span class="bookName">
                  <a href="https://www.ireader.com.cn/index.php?ca=bookdetail.index&amp;pca=channel.index&amp;bid=13076165"
                    title="胜天半子" target="_blank">胜天半子</a>
                </span>
                <span class="num"><el-icon>
                    <View />
                  </el-icon>1407</span>
              </dd>
            </dl>
            <dl class="open">
              <dt>6</dt>
              <dd>
                <div>
                  <span class="bookPic">
                    <a href="https://www.ireader.com.cn/index.php?ca=bookdetail.index&amp;pca=channel.index&amp;bid=13076165"
                      target="_blank" title="胜天半子">
                      <img
                        src="https://bookbk.img.zhangyue01.com/idc_1/m_1,w_63,h_84,q_100/c212b037/group62/LS/1y/2e8e696c08a829dbd0bc7a6d6f2087fc.jpg?v=4DV7lWLt&amp;t=fwAAAWZC2m8."
                        title="胜天半子" alt="胜天半子" class="lazy">
                    </a>
                  </span>
                  <div class="bookCon">
                    <p>
                      <a href="https://www.ireader.com.cn/index.php?ca=bookdetail.index&amp;pca=channel.index&amp;bid=13076165"
                        title="胜天半子" target="_blank">胜天半子</a>
                    </p>
                    <span class="num"><el-icon>
                        <View />
                      </el-icon>1407</span>
                  </div>
                </div>
              </dd>
            </dl>
          </li>
          <li class="">
            <dl class="close">
              <dt>7</dt>
              <dd>
                <span class="bookName">
                  <a href="https://www.ireader.com.cn/index.php?ca=bookdetail.index&amp;pca=channel.index&amp;bid=11739080"
                    title="大唐兴亡三百年（全7册）" target="_blank">大唐兴亡三百年（全7册）</a>
                </span>
                <span class="num"><el-icon>
                    <View />
                  </el-icon>575</span>
              </dd>
            </dl>
            <dl class="open">
              <dt>7</dt>
              <dd>
                <div>
                  <span class="bookPic">
                    <a href="https://www.ireader.com.cn/index.php?ca=bookdetail.index&amp;pca=channel.index&amp;bid=11739080"
                      target="_blank" title="大唐兴亡三百年（全7册）">
                      <img
                        src="https://bookbk.img.zhangyue01.com/idc_1/m_1,w_63,h_84,q_100/75681b1c/group61/M00/0E/37/CmQUOFv3Y6aEZQTfAAAAALPkT8g472171469.jpg?v=4tgBOWYt&amp;t=CmQUOGL9qxs."
                        title="大唐兴亡三百年（全7册）" alt="大唐兴亡三百年（全7册）" class="lazy">
                    </a>
                  </span>
                  <div class="bookCon">
                    <p>
                      <a href="https://www.ireader.com.cn/index.php?ca=bookdetail.index&amp;pca=channel.index&amp;bid=11739080"
                        title="大唐兴亡三百年（全7册）" target="_blank">大唐兴亡三百年（全7册）</a>
                    </p>
                    <span class="num"><el-icon>
                        <View />
                      </el-icon>575</span>
                  </div>
                </div>
              </dd>
            </dl>
          </li>
          <li class="">
            <dl class="close">
              <dt>8</dt>
              <dd>
                <span class="bookName">
                  <a href="https://www.ireader.com.cn/index.php?ca=bookdetail.index&amp;pca=channel.index&amp;bid=11663885"
                    title="百年孤独" target="_blank">百年孤独</a>
                </span>
                <span class="num"><el-icon>
                    <View />
                  </el-icon>540</span>
              </dd>
            </dl>
            <dl class="open">
              <dt>8</dt>
              <dd>
                <div>
                  <span class="bookPic">
                    <a href="https://www.ireader.com.cn/index.php?ca=bookdetail.index&amp;pca=channel.index&amp;bid=11663885"
                      target="_blank" title="百年孤独">
                      <img
                        src="https://bookbk.img.zhangyue01.com/idc_1/m_1,w_63,h_84,q_100/6a3ab27f/group6/M00/E7/EC/CmQUNlsLwkaECSEsAAAAAJOpcg0715902694.jpg?v=oMXJSqI4&amp;t=CmQUNl6Iu9M."
                        title="百年孤独" alt="百年孤独" class="lazy">
                    </a>
                  </span>
                  <div class="bookCon">
                    <p>
                      <a href="https://www.ireader.com.cn/index.php?ca=bookdetail.index&amp;pca=channel.index&amp;bid=11663885"
                        title="百年孤独" target="_blank">百年孤独</a>
                    </p>
                    <span class="num"><el-icon>
                        <View />
                      </el-icon>540</span>
                  </div>
                </div>
              </dd>
            </dl>
          </li>
          <li class="">
            <dl class="close">
              <dt>9</dt>
              <dd>
                <span class="bookName">
                  <a href="https://www.ireader.com.cn/index.php?ca=bookdetail.index&amp;pca=channel.index&amp;bid=12430186"
                    title="半小时漫画经济学系列（全4册)" target="_blank">半小时漫画经济学系列（全4册)</a>
                </span>
                <span class="num"><el-icon>
                    <View />
                  </el-icon>138</span>
              </dd>
            </dl>
            <dl class="open">
              <dt>9</dt>
              <dd>
                <div>
                  <span class="bookPic">
                    <a href="https://www.ireader.com.cn/index.php?ca=bookdetail.index&amp;pca=channel.index&amp;bid=12430186"
                      target="_blank" title="半小时漫画经济学系列（全4册)">
                      <img
                        src="https://bookbk.img.zhangyue01.com/idc_1/m_1,w_63,h_84,q_100/cb0612f0/group61/M00/86/DB/CmQUOF-rVGuERa_oAAAAAJZo6Ns234949948.jpg?v=O_r6P6V6&amp;t=CmQUOF-rVGs."
                        title="半小时漫画经济学系列（全4册)" alt="半小时漫画经济学系列（全4册)" class="lazy">
                    </a>
                  </span>
                  <div class="bookCon">
                    <p>
                      <a href="https://www.ireader.com.cn/index.php?ca=bookdetail.index&amp;pca=channel.index&amp;bid=12430186"
                        title="半小时漫画经济学系列（全4册)" target="_blank">半小时漫画经济学系列（全4册)</a>
                    </p>
                    <span class="num"><el-icon>
                        <View />
                      </el-icon>138</span>
                  </div>
                </div>
              </dd>
            </dl>
          </li>
          <li>
            <dl class="close">
              <dt>10</dt>
              <dd>
                <span class="bookName">
                  <a href="https://www.ireader.com.cn/index.php?ca=bookdetail.index&amp;pca=channel.index&amp;bid=13134422"
                    title="食南之徒" target="_blank">食南之徒</a>
                </span>
                <span class="num"><el-icon>
                    <View />
                  </el-icon>1585</span>
              </dd>
            </dl>
            <dl class="open">
              <dt>10</dt>
              <dd>
                <div>
                  <span class="bookPic">
                    <a href="https://www.ireader.com.cn/index.php?ca=bookdetail.index&amp;pca=channel.index&amp;bid=13134422"
                      target="_blank" title="食南之徒">
                      <img
                        src="https://bookbk.img.zhangyue01.com/idc_1/m_1,w_63,h_84,q_100/cabb13be/group62/aR/sP/549debc37801a21b9ce1e2584f7bc6d9.jpg?v=3INdVZ5X&amp;t=fwAAAWZ9dzA."
                        title="食南之徒" alt="食南之徒" class="lazy">
                    </a>
                  </span>
                  <div class="bookCon">
                    <p>
                      <a href="https://www.ireader.com.cn/index.php?ca=bookdetail.index&amp;pca=channel.index&amp;bid=13134422"
                        title="食南之徒" target="_blank">食南之徒</a>
                    </p>
                    <span class="num"><el-icon>
                        <View />
                      </el-icon>1585</span>
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
