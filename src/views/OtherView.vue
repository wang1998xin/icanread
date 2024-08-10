<script setup lang="ts">
import { useCssVar } from '@vueuse/core';
import { ref, reactive } from "vue";

const color1 = useCssVar("--vt-c-white");
// 修改body背景色
color1.value = '#e3d1bd';

const color2 = useCssVar("--vt-c-indigo");
// 修改段落文字颜色
color2.value = '##333';

let currentTime = ref('')
let t = setTimeout(time, 1000); //開始运行
function time() {
    clearTimeout(t); //清除定时器
    let dt = new Date();
    let y = dt.getFullYear();
    let mt = dt.getMonth() + 1;
    let day = dt.getDate();
    let h = dt.getHours(); //获取时
    let m = dt.getMinutes(); //获取分
    let s = dt.getSeconds(); //获取秒
    currentTime.value =
        "当前时间：" +
        y +
        "年" +
        mt +
        "月" +
        day +
        "-" +
        h +
        "时" +
        m +
        "分" +
        s +
        "秒";
    t = setTimeout(time, 1000); //设定定时器，循环运行
}


</script>

<template>
    <header>
        <h1>可视化展板-ECharts</h1>
        <div class="showTime">当前时间：2020年3月17-0时54分14秒</div>
    </header>
    <section class="mainbox">
        <div class="column">
            <div class="panel bar">
                <h2>
                    柱状图-就业行业 <a href="javascript:;">2019</a>
                    <a href="javacript:;"> 2020</a>
                </h2>
                <div class="chart"></div>
                <div class="panel-footer"></div>
            </div>
            <div class="panel line">
                <h2>折线图-人员变化</h2>
                <div class="chart"></div>
                <div class="panel-footer"></div>
            </div>
            <div class="panel pie">
                <h2>饼形图-年龄分布</h2>
                <div class="chart"></div>
                <div class="panel-footer"></div>
            </div>
        </div>
        <div class="column">
            <div class="no">
                <div class="no-hd">
                    <ul>
                        <li>125811</li>
                        <li>104563</li>
                    </ul>
                </div>
                <div class="no-bd">
                    <ul>
                        <li>前端需求人数</li>
                        <li>市场供应人数</li>
                    </ul>
                </div>
            </div>
            <div class="map">
                <div class="chart"></div>
                <div class="map1"></div>
                <div class="map2"></div>
                <div class="map3"></div>
            </div>
        </div>
        <div class="column">
            <div class="panel bar1">
                <h2>柱状图-技能掌握</h2>
                <div class="chart"></div>
                <div class="panel-footer"></div>
            </div>
            <div class="panel line1">
                <h2>折线图-播放量</h2>
                <div class="chart"></div>
                <div class="panel-footer"></div>
            </div>
            <div class="panel pie1">
                <h2>饼形图-地区分布</h2>
                <div class="chart"></div>
                <div class="panel-footer"></div>
            </div>
        </div>
    </section>
</template>

<style></style>
