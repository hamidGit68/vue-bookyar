<template>
  <div class="sliderShow">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-7 par-slider">
          <div class="slider center-block">
            <img class="img1" :src="imageLoad(2)" alt="slider image" />
            <img class="img2" :src="imageLoad(1)" alt="slider image" />
          </div>
        </div>

        <div class="col-md-5 par-slider">
          <div class="bg-frame center-block">
            <p class="p-text">{{ this.textSlider[0] }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "sliderCompo",
  data() {
    return {
      nextImg: 3,
      speed: 3500,
      finalAxe: 7 /* total number of slider images*/,
      textSlider: [
        "تجربه خرید آنلاین کتاب با تحویل فوری",
        "مجموعه ای از بهترین کتب مذهبی مطرح",
        "تنوع بالایی از انواع کتب متناسب با سلیقه های گوناگون",
        "امکان تهیه نسخه های قدیمی و ارزشمند",
        "مطالعه آنلاین و دستیابی به نسخه های الکترونیکی",
        "طبقه بندی و دسته بندی موضوعی کتابها",
        "بسته های پیشنهادی متناسب با انواع نیازها"
      ]
    };
  },
  methods: {
    imageLoad: function(inputNum) {
      return require(`../assets/slider-imgs/${inputNum}.jpg`); // the module request
    },

    addImg: function() {
      // eslint-disable-next-line no-undef
      let sliderActive = $(".slider img:nth-child(2)");
      let sliderKol = this;
      kolTekrar(sliderKol.nextImg);

      function kolTekrar(numTec) {
        sliderActive.fadeOut(sliderKol.speed, tekrar);
        // eslint-disable-next-line no-undef
        function tekrar() {
          // eslint-disable-next-line no-undef
          $(this).attr("src", require(`../assets/slider-imgs/${numTec}.jpg`));
          // eslint-disable-next-line no-undef
          $(this).fadeIn(sliderKol.speed, function() {
            if (numTec + 1 > sliderKol.finalAxe) {
              numTec = 0;
            }
            // eslint-disable-next-line no-undef
            $(this)
              .prev()
              .attr("src", require(`../assets/slider-imgs/${numTec + 1}.jpg`));
          });
          sliderKol.nextImg += 2;
          if (sliderKol.nextImg > sliderKol.finalAxe) {
            sliderKol.nextImg = 1;
          }
          kolTekrar(sliderKol.nextImg);
        }
      }
    }, // end of "addImg" method

    textChange: function() {
      this.textSlider.push(this.textSlider.shift());
      setTimeout(this.textChange, this.speed);
    }
  }, //end of methods
  mounted: function() {
    this.addImg();
    setTimeout(this.textChange, this.speed);
  }
};
</script>

<style scoped src="./compoStyles/slider.css"></style>
