<template>
<div class="stars-animation">
  <div id="stars"></div>
  <div id="stars2"></div>
  <div id="stars3"></div>
</div>
</template>

<script>
export default {
  name: "StarsLayout"
}
</script>

<style lang="sass">
//@import compass


// n is number of stars required
@function multiple-box-shadow($n)
   $value: '#{random(2000)}px #{random(2000)}px #FFF'
   @for $i from 2 through $n
      $value: '#{$value} , #{random(2000)}px #{random(2000)}px #FFF'
   @return unquote($value)

$shadows-small:  multiple-box-shadow(700)
$shadows-medium: multiple-box-shadow(200)
$shadows-big:    multiple-box-shadow(100)
.stars-animation
  position: fixed
  top: 0
  left: 0
  width: 100vw
  z-index: -1
#stars
  width: 1px
  height: 1px
  background: transparent
  border-radius: 50%
  box-shadow: $shadows-small
  animation			: animStar 50s linear infinite

  &:after
    content: " "
    position: absolute
    top: 100vh
    width: 1px
    height: 1px
    border-radius: 50%
    background: transparent
    box-shadow: $shadows-small

#stars2
  width: 2px
  height: 2px
  background: transparent
  border-radius: 50%
  box-shadow: $shadows-medium
  animation			: animStar 100s linear infinite

  &:after
    content: " "
    position: absolute
    top: 100vh
    width: 2px
    height: 2px
    border-radius: 50%
    background: transparent
    box-shadow: $shadows-medium

#stars3
  width: 3px
  height: 3px
  background: transparent
  border-radius: 50%
  box-shadow: $shadows-big
  animation			: animStar 150s linear infinite
  &:after
    content: " "
    position: absolute
    top: 100vh
    width: 3px
    height: 3px
    border-radius: 50%
    background: transparent
    box-shadow: $shadows-big

#title
  position: absolute
  top: 50%
  left: 0
  right: 0

  color: #FFF
  text-align: center
  font-family: 'lato',sans-serif
  font-weight: 300
  font-size: 50px
  letter-spacing: 10px

  margin-top: -60px
  padding-left: 10px

  span
    background: -webkit-linear-gradient(white, #38495a)
    -webkit-background-clip: text
    -webkit-text-fill-color: transparent

@keyframes animStar
  from
    transform: translateY(0vh)
  to
    transform: translateY(-100vh)

</style>
