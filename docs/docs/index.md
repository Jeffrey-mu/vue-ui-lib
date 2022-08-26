---
layout: page
---
<!--Hey! This is the original version
of Simple CSS Waves-->
<style>
  @import url(//fonts.googleapis.com/css?family=Lato:300:400);


.homepage h1 {
  font-family: 'Lato', sans-serif;
  font-weight:300;
  letter-spacing: 2px;
  font-size:48px;
}
.homepage p {
  font-family: 'Lato', sans-serif;
  letter-spacing: 1px;
  font-size:14px;
  color: #333333;
}

.homepage .header {
  position:relative;
  text-align:center;
  background: linear-gradient(60deg, rgba(84,58,183,1) 0%, rgba(0,172,193,1) 100%);
  color:white;
}
.dark .homepage .header {
  position:relative;
  text-align:center;
  background: linear-gradient(60deg, #c13 0%, #c1d 100%);
  color:white;
}
.homepage .logo {
  width:50px;
  fill:white;
  padding-right:15px;
  display:inline-block;
  vertical-align: middle;
}

.homepage .inner-header {
  height:65vh;
  width:100%;
  margin: 0;
  padding: 0;
}

.homepage .flex { /*Flexbox for containers*/
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.homepage .waves {
  position:relative;
  width: 100%;
  height:15vh;
  margin-bottom:-7px; /*Fix for safari gap*/
  min-height:100px;
  max-height:150px;
}

.homepage .content {
  position:relative;
  height:20vh;
  text-align:center;
  background-color: white;
}

/* Animation */

.homepage .parallax > use {
  animation: move-forever 25s cubic-bezier(.55,.5,.45,.5)     infinite;
}
.homepage .parallax > use:nth-child(1) {
  animation-delay: -2s;
  animation-duration: 7s;
}
.homepage .parallax > use:nth-child(2) {
  animation-delay: -3s;
  animation-duration: 10s;
}
.homepage .parallax > use:nth-child(3) {
  animation-delay: -4s;
  animation-duration: 13s;
}
.homepage .parallax > use:nth-child(4) {
  animation-delay: -5s;
  animation-duration: 20s;
}
@keyframes move-forever {
  0% {
   transform: translate3d(-90px,0,0);
  }
  100% {
    transform: translate3d(85px,0,0);
  }
}
/*Shrinking for mobile*/
@media (max-width: 768px) {
  .homepage .waves {
    height:40px;
    min-height:40px;
  }
  .homepage .content {
    height:30vh;
  }
  .homepage h1 {
    font-size:24px;
  }
}
.bounce {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
	color: white;
  height: 100%;
  font: normal bold 6rem "Product Sans", sans-serif;
  white-space: nowrap;
}

.letter {
  animation: bounce 0.75s cubic-bezier(0.05, 0, 0.2, 1) infinite alternate;
  display: inline-block;
  transform: translate3d(0, 0, 0);
  margin-top: 0.5em;
  text-shadow: rgba(255, 255, 255, 0.4) 0 0 0.05em;
  font: normal 500 6rem 'Varela Round', sans-serif;
}
.letter:nth-child(1) {
  animation-delay: 0s;
}
.letter:nth-child(2) {
  animation-delay: 0.0333333333s;
}
.letter:nth-child(3) {
  animation-delay: 0.1333333333s;
}
.letter:nth-child(4) {
  animation-delay: 0.2333333333s;
}
.letter:nth-child(5) {
  animation-delay: 0.3333333333s;
}
.letter:nth-child(6) {
  animation-delay: 0.4333333333s;
}
.letter:nth-child(7) {
  animation-delay: 0.5333333333s;
}
.letter:nth-child(8) {
  animation-delay: 0.6333333333s;
}
.letter:nth-child(9) {
  animation-delay: 0.7333333333s;
}
.letter:nth-child(10) {
  animation-delay: 0.8333333333s;
}
.letter:nth-child(11) {
  animation-delay: 0.9333333333s;
}
.letter:nth-child(12) {
  animation-delay: 1.133333333s;
}
.letter:nth-child(13) {
  animation-delay: 1.233333333s;
}
.letter:nth-child(14) {
  animation-delay: 1.333333333s;
}
.letter:nth-child(15) {
  animation-delay: 1.433333333s;
}
.letter:nth-child(16) {
  animation-delay: 1.533333333s;
}

@keyframes bounce {
  0% {
    transform: translate3d(0, 0, 0);
    text-shadow: rgba(255, 255, 255, 0.4) 0 0 0.05em;
  }
  100% {
    transform: translate3d(0, -1em, 0);
    text-shadow: rgba(255, 255, 255, 0.4) 0 1em 0.35em;
  }
}
</style>
<div class="homepage">
<div class="header">

<!--Content before waves-->
<div class="inner-header flex">
<!--Just the logo.. Don't mind this-->
<h1 class="HomePageh1 bounce">
<span class="letter">W</span>
	<span class="letter">e</span>
	<span class="letter">l</span>
	<span class="letter">c</span>
	<span class="letter">o</span>
	<span class="letter">m</span>
  <span class="letter">e</span>
  <span class="letter">-</span>
  <span class="letter">V</span>
  <span class="letter">u</span>
  <span class="letter">e</span>
  <span class="letter">-</span>
  <span class="letter">u</span>
  <span class="letter">i</span>
  <span class="letter">-</span>
  <span class="letter">l</span>
  <span class="letter">i</span>
  <span class="letter">b</span>
  <span class="letter">s</span></h1>
</div>

<!--Waves Container-->
<div>
<svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
<defs>
<path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
</defs>
<g class="parallax">
<use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
<use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
<use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
<use xlink:href="#gentle-wave" x="48" y="7" fill="#fff" />
</g>
</svg>
</div>
<!--Waves end-->

</div>
<!--Header ends-->

<!--Content starts-->
<div class="content flex">
  <p>By.Goodkatz | Free to use </p>
</div>
</div>
<!--Content ends-->
