<template>
  <div class="home">
    <div class="home-intro">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12">
            <div class="intro-part">
              <div id="register">
                <button class="btn btn-default btn-def">
                  ثبت نام در سایت
                </button>
                <span class="glyphicon glyphicon-arrow-right"></span>
              </div>
              <p class="text-right lead">
                در این وب سایت قصد داریم شما را با مجموعه ای از کتب ارزشمند به
                خصوص در زمینه های علمی، دانشگاهی و مذهبی آشنا کنیم. به طور کلی
                در این سایت به توضیحات کلی و منابعی که از آنها می‌توانید کتب ذکر
                شده را تهیه کنید پرداخته شده است. در این سایت شما می‌توانید با
                ما در ارتباط بوده و ما را از نظرات و پیشنهادات خود به جهت بهبود
                کیفیت مطالب ارائه شده بهره‌مند نمایید.
              </p>
              <div id="login">
                <span class="glyphicon glyphicon-arrow-left"></span>
                <button class="btn btn-default btn-def">
                  ورود به سایت
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <sliderCompo></sliderCompo>

    <cardScroll></cardScroll>
    <cardInfo></cardInfo>
    <servicCompo></servicCompo>
    <siteGuide></siteGuide>
    <footerBook></footerBook>
  </div>
</template>

<script>
import sliderCompo from "../components/sliderCompo";
import cardScroll from "../components/cardScroll";
import cardInfo from "../components/cardInfo";
import servicCompo from "../components/servicCompo";
import siteGuide from "../components/siteGuide";
import footerBook from "../components/footerBook";
// @ is an alias to /src
// import "../my-scripts/homeScript.js";
export default {
  name: "Home",
  components: {
    sliderCompo,
    cardScroll,
    cardInfo,
    servicCompo,
    siteGuide,
    footerBook
  }
  // mounted() {
  //   let myscript = document.createElement("script");
  //   myscript.setAttribute("src", "../src/my-scripts/homeScript.js");
  //   myscript.setAttribute("type", "text/javascript");
  //   document.head.appendChild(myscript);
  // }
};
</script>

<style src="../../public/styles/homeStyle.css"></style>
