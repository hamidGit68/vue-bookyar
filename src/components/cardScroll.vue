<template>
  <div class="par-scroll">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <div class="par-title center-block">
            <div>
              <div class="flesh col-md-2">
                <div class="dispFlex"></div>
              </div>
              <h1 :class="[$style.title]">پرفروش ترین ها</h1>
              <div class="flesh col-md-2">
                <div class="dispFlex"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "cardScroll",
  data() {
    return {
      sotonFlesh: 6
    };
  },
  methods: {
    scrollFire: function() {
      let currentCompo = this;
      // eslint-disable-next-line no-undef
      $(window).scroll(function() {
        // eslint-disable-next-line no-undef
        let hT = $(".par-scroll").offset().top,
          // eslint-disable-next-line no-undef
          hH = $(".par-scroll").outerHeight(),
          // eslint-disable-next-line no-undef
          wH = $(window).height(),
          // eslint-disable-next-line no-undef
          wS = $(this).scrollTop();
        if (wS > hT + hH - wH && hT > wS && wS + wH > hT + hH) {
          currentCompo.animateFlesh();
          // eslint-disable-next-line no-undef
          $(this).off("scroll");
        }
      });
    }, //end of "scrollFire" method

    animateFlesh: function() {
      // defining variables ----------
      let current = this;
      let sotonNum = this.sotonFlesh;
      let axesoton = 10;
      let orderVar = this.sotonFlesh;

      // first loop ----------
      // eslint-disable-next-line no-undef
      let parentFlesh = $(".flesh .dispFlex");
      for (let io = 0; io < this.sotonFlesh; io++) {
        parentFlesh.prepend("<div></div>");
        parentFlesh.children("div").css("width", "16.66%");
      }

      // second loop ----------
      // eslint-disable-next-line no-undef
      let satrCol = $(".flesh > div > div");
      satrCol.each(function(indexDiv, elementDiv) {
        // changing the order of columns of circles
        if (sotonNum < 1) {
          sotonNum = current.sotonFlesh;
          axesoton = -sotonNum;
        }

        if (axesoton === 10) {
          orderVar++;
        } else {
          orderVar--;
        }
        // end of changing the order of columns of circles

        // eslint-disable-next-line no-undef
        $(elementDiv).css("order", orderVar);

        for (let ib = 0; ib < sotonNum; ib++) {
          // eslint-disable-next-line no-undef
          $(elementDiv).prepend("<div></div>");
        }

        // eslint-disable-next-line no-undef
        $(elementDiv)
          .children("div")
          .addClass(current.$style.circleMe)
          .hide();
        sotonNum--;
      }); // end of "each1"

      // show circles one by one ----------
      // eslint-disable-next-line no-undef
      let oneBig = $(".flesh > div > div:first-child");
      let speedShow = 1500;
      oneBig.hide().show(1);
      oneBig.queue(colomShow);

      function colomShow() {
        // eslint-disable-next-line no-undef
        let oneColumn = $(
          // eslint-disable-next-line no-undef
          $(this)
            .last()
            .children("div:nth-child(1)")
        );
        oneColumn.show(speedShow / current.sotonFlesh, showFunc);

        function showFunc() {
          // eslint-disable-next-line no-undef
          $(this)
            .next()
            .show(speedShow / current.sotonFlesh, showFunc);
        }

        // eslint-disable-next-line no-undef
        $(this)
          .next()
          .delay(speedShow)
          .show(1, colomShow);

        speedShow *= 0.83;
      }

      // let mot = document.getElementsByClassName(this.$style.bgColor)[0];
      // // mot.classList.add(this.$style.bg2s);
      // // eslint-disable-next-line no-undef
      // $(mot).addClass(this.$style.bg2s);
      // console.log(mot.innerText);
      // -------------------------
    } // end of "animateFlesh" method
  }, // end of "methods"
  mounted() {
    this.scrollFire();
  }
};
</script>

<style scoped src="./compoStyles/scroll.css"></style>

<style module>
.circleMe {
  width: 8px;
  height: 8px;
  margin-bottom: 2px;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  background-color: rgba(160, 44, 61, 1);
}
.strokText {
  -webkit-text-stroke: 2px var(--primary1);
  -webkit-text-fill-color: var(--text2);
  opacity: 0;
}

.title {
  color: var(--text2);
  text-align: center;
  font-size: 50px;
}
</style>
