<template>
  <!-- this component is used for navigation link of website pages -->
  <div id="nav" class="container-fluid">
    <div class="col-sm-12">
      <div class="row ul-nav">
        <div class="logo col-sm-2 col-xs-4">
          <img
            class="img-responsive"
            src="../assets/images/logo1.svg"
            alt="logo of the site"
          />
        </div>
        <div class="col-sm-10 col-xs-8 mar-top navIts">
          <div>
            <router-link class="padd" to="/"
              >خانه
              <i class="fas fa-home"></i>
            </router-link>

            <router-link class="padd" to="/about"
              >درباره ما
              <i class="fas fa-address-card"></i>
            </router-link>
            <dropCompo v-bind:mohtava="topics">موضوعات کتب</dropCompo>
            <dropCompo v-bind:mohtava="menueDrop">خدمات سایت</dropCompo>
          </div>
        </div>

        <div class="image-book col-sm-10 col-xs-8" v-if="togg1">
          <h2 class="text-center">
            به <strong>کتاب یار</strong> خوش آمدید
          </h2>
        </div>

        <button
          class="col-md-1 style-btn btn btn-default btn-lg pull-right"
          v-on:click="clickNav"
        >
          <i class="fas fa-bars"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import dropCompo from "../components/dropCompo";
export default {
  name: "theNanigation",
  components: {
    dropCompo
  },
  data() {
    return {
      togg1: true,
      menueDrop: [
        {
          icon: "fas fa-language",
          title: "ترجمه کتاب",
          linkItem: "/translateserv"
        },
        {
          icon: "fas fa-search-dollar",
          title: "پرفروش ها",
          linkItem: "/bestselers"
        },
        { icon: "fas fa-print", title: "چاپ کتاب", linkItem: "/publishbook" },
        {
          icon: "far fa-comments",
          title: "پیشنهاد کتاب",
          linkItem: "/suggestbooks"
        }
      ],

      topics: [
        {
          icon: "fas fa-atom",
          title: "کتب علمی",
          linkItem: "/science"
        },
        {
          icon: "fas fa-mosque",
          title: "کتب مذهبی",
          linkItem: "/religous"
        },
        {
          icon: "fas fa-university",
          title: "کتب دانشگاهی",
          linkItem: "/university"
        }
      ]
    };
  },
  methods: {
    clickNav() {
      /* this method hides and show the navbar. */
      // eslint-disable-next-line no-undef
      let navPar = $(".navIts");
      navPar.toggle(1500);
      /* the toggle method from jquery makes toggling with transition of "1500ms" */
      if (this.togg1 == true) {
        this.togg1 = false;
      } else {
        this.togg1 = true;
      }
    }
  }
};
</script>

<style scoped src="./compoStyles/navig.css"></style>
