<template>
  <div id="footer" class="container-fluid">
    <div class="row">
      <div class="col-md-12">
        <div class="page-header">
          <h1>با کتاب یار به مطالعه علاقه مند شوید:</h1>
        </div>
        <!-- part left -->
        <div class="col-md-4 footer-part">
          <h2>اطلاعات تماس:</h2>
          <div class="contact">
            <div class="contact-li clearfix">
              <span class="pull-left">02175581453</span>
              <i class="fas fa-phone-volume pull-right"></i>
            </div>

            <div class="contact-li clearfix">
              <span class="pull-left">ketabyar@info.com</span>
              <i class="fas fa-at pull-right"></i>
            </div>

            <div class="contact-li clearfix">
              <span class="pull-left">تهران، نارمک، خیابان دردشت، پلاک 25</span>
              <i class="fas fa-map-marker-alt pull-right"></i>
            </div>
          </div>
        </div>
        <!-- part middle -->
        <div class="col-md-4 footer-part">
          <h2>خدمات سایت:</h2>
          <ul class="nav nav-pills nav-stacked">
            <li role="presentation" @click="classActive" class="active">
              <a href="#">تخفیف های دانشجویی</a>
            </li>
            <li role="presentation" @click="classActive">
              <a href="#">تحویل فوری محصولات</a>
            </li>
            <li role="presentation" @click="classActive">
              <a href="#">خرید آنلاین</a>
            </li>
          </ul>
        </div>
        <!-- part right -->
        <div class="col-md-4 footer-part">
          <form class="form-horizontal">
            <div class="form-group">
              <label class="labelText" for="textAR"
                >منتظر نظرات شما هستیم:
              </label>
              <textarea
                @focus="textTanzim"
                rows="5"
                id="textAR"
                class="form-control"
              ></textarea>
            </div>
            <div class="form-group">
              <div class="col-sm-offset-2 col-sm-10">
                <button class="btn btn-default btn-book center-block">
                  ارسال نظر
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "footerBook",
  data() {
    return {
      countInit: 0
    };
  },
  methods: {
    classActive: function(eve) {
      eve.preventDefault();
      // eslint-disable-next-line no-undef
      $(".footer-part .nav-pills li").removeClass("active");
      let objectMored = eve.target;
      // eslint-disable-next-line no-undef
      $(objectMored)
        .parent()
        .addClass("active");
    },
    textTanzim: function() {
      let vueInc = this;
      let counter = vueInc.countInit;
      let arrEnglish = [];
      // eslint-disable-next-line no-undef
      $("#textAR").keypress(function(event) {
        counter++;
        let ew = event.which;
        if (counter < 6) {
          if (
            ew == 32 ||
            (48 <= ew && ew <= 57) ||
            (65 <= ew && ew <= 90) ||
            (97 <= ew && ew <= 122)
          ) {
            arrEnglish.push("english");
          }
        } else {
          vueInc.countInit = 6;
        } // end of "if"
        if (arrEnglish.length > 3) {
          // eslint-disable-next-line no-undef
          $(this).attr("dir", "ltr");
        }
      }); // end of function
    }
  }
};
</script>

<style scoped src="./compoStyles/footer.css"></style>
