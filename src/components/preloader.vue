<template>
    <section id="preload">
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
        methods: {
            displayOff: function () {
                document.onreadystatechange = function () {
                    if(document.readyState === "complete") {
                        $("#preload").fadeOut(1500);
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

