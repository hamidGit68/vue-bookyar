<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12">
        <div id="parent" class="jumbotron">
          <ul id="ul-service">
            <li v-for="item in servicData" :key="item.id">
              {{ item.message }}
            </li>
          </ul>
          <!-- showing icons related to texts -->
          <div id="icons">
            <div class="iconParent" v-for="item in servicData" :key="item.id">
              <div class="iconCircle">
                <i :class="item.icon"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="buttonParent">
              <button @click="routFunc" class="btn btn-primary">
                جستجو در فروشگاه سایت
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "servicCompo",
  data() {
    return {
      polling: null,
      liNum: 1,
      totalLi: 4,
      servicData: [
        {
          message: "مقالات مرتبط با موضوع کتاب",
          id: "1",
          icon: "fas fa-feather-alt"
        },
        {
          message: "امکان جستجوی پیشرفته",
          id: "2",
          icon: "fab fa-searchengin"
        },
        {
          message: "تخفیف های خاص در ایام سال",
          id: "3",
          icon: "fas fa-money-bill"
        },
        {
          message: "کتب علمی تخصصی دانشجویان",
          id: "4",
          icon: "fas fa-graduation-cap"
        }
      ]
    };
  },
  methods: {
    routFunc: function() {
      /* redirect to bookStore page */
      this.$router.push({ name: "bookStore" });
    }, // end of "routFunc" method

    activeChange: function() {
      // eslint-disable-next-line no-undef
      $("#ul-service li").removeClass("active-li");
      // eslint-disable-next-line no-undef
      $("#ul-service li:nth-child(" + this.liNum + ")").addClass("active-li");

      // eslint-disable-next-line no-undef
      $("#icons .iconParent").removeClass("iconLi");
      // eslint-disable-next-line no-undef
      $("#icons .iconParent:nth-child(" + this.liNum + ")").addClass("iconLi");

      this.liNum++;
      if (this.liNum > this.totalLi) {
        this.liNum = 1;
      }
    },

    interValFunv: function() {
      this.polling = setInterval(this.activeChange, 4000);
    }
  },

  beforeDestroy() {
    clearInterval(this.polling);
  },

  created() {
    this.interValFunv();
  }
};
</script>

<style scoped src="./compoStyles/services.css"></style>
