// eslint-disable-next-line no-undef
// $(document).ready(function() {
//   // let baseSlider = ".slider";
//
//   // let imgContainer = "../assets/slider-imgs";
//
//   // eslint-disable-next-line no-undef
//   // let img2 = document.createElement("img");
//   // img2.src = "";
//   // eslint-disable-next-line no-undef
//   // $(".slider").append(
//   // );
//   // eslint-disable-next-line no-undef
//   $(".slider").append(
//     "<img src='../../public/images-other/slider-imgs/2.jpg'/>"
//   );
//
//   // let numberImg;
//   // eslint-disable-next-line no-undef
//   //   $.post("/numberoffiles.php", function(data) {
//   //     numberImg = Number(data) - 2;
//   //     console.log(numberImg);
//   //   });
//
function sliderRun(imgCurrent) {
  // eslint-disable-next-line no-undef
  let sliderActive = $(baseSlider + " img:nth-child(2)");
  sliderActive.fadeOut(3500, function() {
    let imgPlus = imgCurrent + 1;
    // eslint-disable-next-line no-undef
    $(this).remove();

    // eslint-disable-next-line no-undef
    $(baseSlider).prepend(
      "<img src='../assets/slider-imgs/" + imgPlus + ".jpg'>"
    );
    if (imgPlus > numberImg - 1) {
      imgPlus = 0;
    }
    sliderRun(imgPlus);
  });

  // fadeFunc( sliderActive, imgCurrent )
  // let mySlide = setTimeout(sliderRun, 1500);

  // function fadeFunc(sliderActive, imgCurrent) {
  //
  // }
}

sliderRun(2);
// });



/* gaygozin */
// sliderActive.fadeOut(3500, function(imgPlus) {
//   imgPlus = imgCurrent + 1;
//   // eslint-disable-next-line no-undef
//   $(this).remove();
//
//   // eslint-disable-next-line no-undef
//   $(".slider").prepend(
//       `<img :src=${sliderKol.imageLoad(imgPlus)} alt="slider image" />`
//   );
//   if (imgPlus > 5) {
//     imgPlus = 0;
//   }
//   // eslint-disable-next-line no-undef
//   sliderKol.addImg(imgPlus);
// });


// sliderActive.fadeOut(3500, function() {
//   // imgPlus = imgCurrent + 1;
//   // eslint-disable-next-line no-undef
//   $(this).remove();
//
//   // eslint-disable-next-line no-undef
//   $(".slider").prepend(
//       `<img src=${sliderKol.imageLoad(imgCurrent)} alt="slider image" />`
//   );
//   sliderKol.nextImg++;
//   if (sliderKol.nextImg > 6) {
//     sliderKol.nextImg = 1;
//   }
// });

//
sliderActive.fadeOut(3500, function() {
  // imgPlus = imgCurrent + 1;

  imgSelect = document.getElementsByClassName("img2")[0];
  imgSelect.src = require("../assets/slider-imgs/" + imgCurrent + ".jpg");

  imgBefor = document.getElementsByClassName("img1")[0];
  // eslint-disable-next-line no-undef
  $(imgSelect).insertBefore($(imgBefor));
  // eslint-disable-next-line no-undef
  $(imgSelect)
      .removeClass("img2")
      .addClass("img1");
  // eslint-disable-next-line no-undef
  $(imgBefor)
      .removeClass("img1")
      .addClass("img2");
  sliderKol.nextImg++;
  if (sliderKol.nextImg++ > 6) {
    sliderKol.nextImg = 1;
  }
});
