<template>
  <div class="v-cursor">
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>


  </div>
</template>

<script>
export default {
  name: "VCursor",
  mounted() {
    const coords = { x: 0, y: 0 };
    const circles = document.querySelectorAll(".circle");


    circles.forEach(function (circle, index) {
      circle.x = null;
      circle.y = null;
      // circle.style.backgroundColor = colors[index % colors.length];
    });

    window.addEventListener("mousemove", function(e){
      coords.x = e.clientX;
      coords.y = e.clientY;
    });

    function animateCircles() {

      let x = coords.x;
      let y = coords.y;

      circles.forEach(function (circle, index) {
        circle.style.left = x - 75 + "px";
        circle.style.top = y - 75 + "px";

        // circle.style.scale = (circles.length - index) / circles.length;

        circle.x = x;
        circle.y = y;

        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.90;
        y += (nextCircle.y - y) * 0.90;
        if (index > 1 && Math.round(circle.x) === coords.x) {
          circle.style.display = 'none'
        } else {
          circle.style.display = 'block'
        }
      });

      requestAnimationFrame(animateCircles);
    }

    animateCircles();
  },
  unmounted() {
    window.removeEventListener('mousemove',  function(e){
      coords.x = e.clientX;
      coords.y = e.clientY;
    })
  }
}
</script>

<style scoped lang="scss">
.circle {
  position: fixed;
  top: 0px;
  left: 0px;
  height: 150px;
  width: 150px;
  border-radius: 50%;
  /*background: conic-gradient(from 90deg at 40% -25%, #ffd700, #f79d03, #ee6907, #e6390a, #de0d0d, #d61039, #cf1261, #c71585, #cf1261, #d61039, #de0d0d, #ee6907, #f79d03, #ffd700, #ffd700, #ffd700);*/
  /*filter: blur(10px);*/
  background:  #69FFE5;
  /*box-shadow: 0 0 10px 10px rgba(#69FFE5, 0.5),*/
  /*0 0 20px 20px rgba(7, 8, 75, 0.3),*/
  /*0 0 30px 30px rgba(7, 8, 75, 0.1);*/
  filter: blur(40px);
  -webkit-filter: blur(40px);
  z-index: -1;
  opacity: .4;
  display: none;
}
@media screen and (max-width: 768px){
  .v-cursor {
    display: none;
  }
}
</style>
