<template>
  <div class="cardAsli">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3">
          <div id="card-par1">
            <div class="panel panel-default">
              <div class="panel-heading">
                فرمانده
              </div>
              <section>
                <img
                  src="../assets/images/best-sellers/farmandeh.jpg"
                  class="img-responsive"
                  alt="best-selers-imgs"
                  @mouseover="animT.card1 = true"
                  @mouseleave="animT.card1 = false"
                />

                <transition name="animTitle">
                  <div v-if="animT.card1" class="transDiv">
                    <div>
                      فرمانده، نوشته «روری کارول» است که در سال 2013 توسط
                      انتشارات پنگوئن منتشر شده است. این کتاب علاوه بر روایت
                      زندگی هوگو چاوز رهبر فقید ونزوئلا، به سیاست‌های وی در
                      دوران ریاست جمهوری، چگونگی اجرای این برنامه‌ها در حوزه‌های
                      مختلف و همین‌طور اوضاع و احوال فعلی این کشور می‌پردازد.
                    </div>
                  </div>
                </transition>
              </section>
              <div class="panel-body">
                <p>نویسنده: <strong>روری کارول</strong></p>
                <p>سال انتشار: <strong>1397</strong></p>
              </div>
              <div class="panel-footer">
                <span>
                  <span>قیمت: </span>
                  <strong>56250 تومان</strong>
                </span>
                <span
                  class="shop"
                  data-toggle="tooltip"
                  data-placement="right"
                  title="افزودن به سبد خرید"
                >
                  <i class="fas fa-shopping-bag"></i>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-3">
          <div id="card-par2">
            <div class="panel panel-default">
              <div class="panel-heading">
                آب نبات هل دار
              </div>
              <section>
                <img
                  src="../assets/images/best-sellers/abnabat.jpg"
                  class="img-responsive"
                  alt="best-selers-imgs"
                  @mouseover="animT.card2 = true"
                  @mouseleave="animT.card2 = false"
                />

                <transition name="animTitle">
                  <div v-if="animT.card2" class="transDiv">
                    <div>
                      «آبنبات هل دار» داستان طنزی است از زبان یک کودک بجنوردی؛
                      برادر این کودک قرار است به جبهه برود. محسن، راوی داستان،
                      فرزند آخر یک خانواده پنج نفری است. آن ها همراه مادربزرگشان
                      در یکی از محله های قدیم بجنورد زندگی می کنند. فضای داستان
                      سرتاسر ماجراهای خنده دار و حیرت آور است؛ ماجراهایی که محسن
                      آن ها را ایجاد می کند. یکی از نقاط قوت کتاب توانایی
                      نویسنده در نشان دادن فضای پشت جبهه هاست؛ نویسنده نشان می
                      دهد که چگونه مردم در این فضا زندگی روزمره خود را می
                      گذراندند و سرگرمی های خاص خود را داشتند.
                    </div>
                  </div>
                </transition>
              </section>
              <div class="panel-body">
                <p>نویسنده: <strong>مهرداد صادقی</strong></p>
                <p>سال انتشار: <strong>1395</strong></p>
              </div>
              <div class="panel-footer">
                <span>
                  <span>قیمت: </span>
                  <strong>50000 تومان</strong>
                </span>
                <span
                  class="shop"
                  data-toggle="tooltip"
                  data-placement="right"
                  title="افزودن به سبد خرید"
                >
                  <i class="fas fa-shopping-bag"></i>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-3">
          <div id="card-par3">
            <div class="panel panel-default">
              <div class="panel-heading">
                ویژوآل استودیو کد
              </div>
              <section>
                <img
                  src="../assets/images/best-sellers/visual-studio-code.jpg"
                  class="img-responsive"
                  alt="best-selers-imgs"
                  @mouseover="animT.card3 = true"
                  @mouseleave="animT.card3 = false"
                />

                <transition name="animTitle">
                  <div v-if="animT.card3" class="transDiv">
                    <div dir="ltr">
                      Visual Studio Code: End-to-End Editing and Debugging Tools
                      for Web Developers helps readers to become familiar with
                      and productive in Visual Studio Code. This up-to-date
                      guide covers all of the essential components of the
                      software, including the editing features of the workspace,
                      advanced functionality such as code refactoring and key
                      binding, and integration with Grunt, Gulp, NPM, and other
                      external tools.
                    </div>
                  </div>
                </transition>
              </section>
              <div class="panel-body">
                <p>نویسنده: <strong>بروس جانسون</strong></p>
                <p>سال انتشار: <strong>2019</strong></p>
              </div>
              <div class="panel-footer">
                <span>
                  <span>قیمت: </span>
                  <strong>58000 تومان</strong>
                </span>
                <span
                  class="shop"
                  data-toggle="tooltip"
                  data-placement="right"
                  title="افزودن به سبد خرید"
                >
                  <i class="fas fa-shopping-bag"></i>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-3">
          <div id="card-par4">
            <div class="panel panel-default">
              <div class="panel-heading">
                سلاح ریاضیات
              </div>
              <section>
                <img
                  src="../assets/images/best-sellers/weapons-of-math.jpg"
                  class="img-responsive"
                  alt="best-selers-imgs"
                  @mouseover="animT.card4 = true"
                  @mouseleave="animT.card4 = false"
                />

                <transition name="animTitle">
                  <div v-if="animT.card4" class="transDiv">
                    <div dir="ltr">
                      We live in the age of the algorithm. Increasingly, the
                      decisions that affect our lives—where we go to school,
                      whether we can get a job or a loan, how much we pay for
                      health insurance—are being made not by humans, but by
                      machines. In theory, this should lead to greater fairness:
                      Everyone is judged according to the same rules.
                    </div>
                  </div>
                </transition>
              </section>
              <div class="panel-body">
                <p>نویسنده: <strong>کاتی اونیل</strong></p>
                <p>سال انتشار: <strong>2017</strong></p>
              </div>
              <div class="panel-footer">
                <span>
                  <span>قیمت: </span>
                  <strong>65000 تومان</strong>
                </span>
                <span
                  class="shop"
                  data-toggle="tooltip"
                  data-placement="right"
                  title="افزودن به سبد خرید"
                >
                  <i class="fas fa-shopping-bag"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--    <button @click="animT = !animT">click me</button>-->
  </div>
</template>

<script>
export default {
  name: "cardInfo",
  data() {
    return {
      animT: {
        card1: false,
        card2: false,
        card3: false,
        card4: false
      }
    };
  },
  methods: {
    tooltipFunc: function() {
      // eslint-disable-next-line no-undef
      $(function() {
        // eslint-disable-next-line no-undef
        $('[data-toggle="tooltip"]').tooltip();
        // eslint-disable-next-line no-undef
        $('[data-toggle="tooltip"]').on("shown.bs.tooltip", function() {
          // eslint-disable-next-line no-undef
          $(this)
            .next()
            .children(".tooltip-arrow")
            .css("border-right-color", "var(--primaSe)");
          // eslint-disable-next-line no-undef
          $(this)
            .next()
            .children(".tooltip-inner")
            .css({
              "background-color": "var(--primaSe)",
              "font-family": "Bshiraaaz"
            });
        });
      });
    }
  },
  mounted() {
    this.tooltipFunc();
  }
};
</script>

<style scoped src="./compoStyles/card.css"></style>
