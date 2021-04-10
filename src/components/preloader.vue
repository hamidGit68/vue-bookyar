<template>
    <section id="preload" v-if="!hiden">
      <div class="contain">
        <div class="parent">
            <h2 class="animate__animated
            animate__rotateIn
            animate__delay-2s">کتاب یار
            </h2>
            <div class="book-child"></div>
        </div>
      </div>
    </section>
</template>

<script>
    export default {
        name: "preloader",
        data() {
            return {
                hiden: false
            }
        },
        methods: {
            displayOff: function () {
                let vueInc = this;
                document.onreadystatechange = function () {
                    if(document.readyState === "complete") {
                        setTimeout(function () {
                            vueInc.hiden = true;
                            /* $parent makes it possible to access to the parent data */
                            vueInc.$parent.showCont = true;
                        }, 5000);

                        // $("#preload").fadeOut(5000, function () {
                        //     // vueInc.loadShow = true;
                        //     // vueInc.$parent.showCont = true;
                        // });
                    }
                }
            }
        },
        mounted() {
            this.displayOff();
        }
    }
</script>

<style scoped src="./compoStyles/preloader.css"></style>

