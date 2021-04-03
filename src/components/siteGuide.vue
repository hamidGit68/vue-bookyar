<template>
  <div id="guide" class="container-fluid">
    <div class="row">
      <div class="col-md-12">
        <div class="parentAll">
          <h1>کاربر جدید کتاب یار هستید؟</h1>
          <a>اطلاعات کامل در مورد سایت</a>
        </div>

        <div class="row">
          <div class="col-md-3">
            <div class="divPar jumbotron">
              <h2 class="title">خدمات و ویژگی های سایت</h2>
              <p>
                نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص
                طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت
                می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و علی
                الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در
                این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
                راهکارها و
              </p>
            </div>
          </div>

          <div
            id="div2"
            @mouseenter="mouseFunc"
            class="col-md-3"
            @mouseleave="mouseFunc"
          >
            <div class="divPar jumbotron">
              <h2 class="title">اهداف و خط مشی سایت</h2>
              <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه آینده
                علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.
                در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
                راهکارها و شناخت فراوان جامعه و متخصصان را می طلبد تا با
              </p>
            </div>
          </div>

          <div
            id="div3"
            class="col-md-3"
            @mouseenter="mouseFunc"
            @mouseleave="mouseFunc"
          >
            <div class="divPar jumbotron">
              <h2 class="title">ارتباط با مسئولین سایت</h2>
              <p>
                نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص
                طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت
                می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و علی
                الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در
                این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
                راهکارها و
              </p>
            </div>
          </div>

          <div class="col-md-3">
            <div class="divPar jumbotron">
              <h2 class="title">چگونگی عضویت در سایت</h2>
              <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه آینده
                علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.
                در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
                راهکارها و شناخت فراوان جامعه و متخصصان را می طلبد تا با
              </p>
            </div>
          </div>
        </div>

        <div id="sokhan">
          <h2 class="title">پند کتاب یار</h2>
          <div class="row pands">
            <div class="col-md-6">
              <img
                class="img-circle img-responsive center-block"
                src="../assets/images/pands/Gustave_Flaubert.jpg"
                alt="Gustave_Flaubert image"
              />
              <span>گاستو فلاورت</span>
            </div>
            <div class="col-md-6">
              <p>
                مانند کودکان به جهت سرگرمی کتاب نخوانید، و نه مانند طالبان
                یادگیری که با هدف آموزش می خوانند، بلکه بخوانید تا زندگی کنید.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "siteGuide",
  methods: {
    mouseFunc: function(eventObj) {
      let idElem = eventObj.target.id;
      let eventName = eventObj.type;
      let sign1, sign2;
      if (eventName == "mouseenter") {
        sign1 = "+";
        sign2 = "-";
      } else {
        sign1 = "-";
        sign2 = "+";
      }

      if (idElem == "div2") {
        // eslint-disable-next-line no-undef
        $("#sokhan").animate(
          {
            left: sign1 + "=25%",
            right: sign2 + "=25%"
          },
          100
        );
      } else {
        // eslint-disable-next-line no-undef
        $("#sokhan").animate(
          {
            left: sign2 + "=25%",
            right: sign1 + "=25%"
          },
          100
        );
      }
    }
  }
};
</script>

<style scoped src="./compoStyles/guide.css"></style>
