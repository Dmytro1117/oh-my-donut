function e(){const e=document.body.offsetHeight,t=document.querySelector(".js-canvas-container");let n=document.querySelector(".background");n&&t.removeChild(n),n=document.createElement("div"),t.append(n),n.className="background",n.style.height=e-200+"px"}function t(){const e=document.querySelector(".background"),t=document.body.offsetHeight,n=document.body.offsetWidth;for(let o=0;o<=t-200;o+=40+Math.round(200*Math.random())){let t=document.createElement("div");t.className="circle circle--"+Math.round(2*Math.random()+1),e.append(t);let a=40+Math.round(60*Math.random()),s=Math.round(n*Math.random());t.style.height=a+"px",t.style.top=o+"px",t.style.left=s+"px";let i=n-s-a;t.style.width=i>=0?a+"px":a+i+"px"}}function n(){const e=document.body.offsetHeight,t=document.querySelector(".background"),n=Math.round(e/3),o=window.innerHeight;let a=[],s=[];for(let e=0;e<=2;e+=1)a[e]=document.createElement("div"),t.append(a[e]),a[e].className="donat-bg-"+(e+1),a[e].style.height=n+"px",s[e]=0-n*e+window.pageYOffset+o/2-180,a[e].style.cssText="height: "+n+"px; background-position: 50% "+s[e]+"px;";window.addEventListener("scroll",(function(){const e=window.innerHeight;for(let t=0;t<=2;t+=1)s[t]=0-n*t+window.pageYOffset+e/2-180;window.pageYOffset<n&&(a[0].style.cssText="height: "+n+"px; background-position: 50% "+s[0]+"px;"),window.pageYOffset>n-e/2-300&&window.pageYOffset<2*n&&(a[1].style.cssText="height: "+n+"px; background-position: 50% "+s[1]+"px;"),window.pageYOffset>2*n-e/2-300&&window.pageYOffset<3*n&&(a[2].style.cssText="height: "+(n+1e3)+"px; background-position: 50% "+s[2]+"px;")}))}function o(){document.querySelectorAll(".js-hidden-text").forEach((e=>{const t=e.querySelector(".js-hidden-text-paragraph"),n=e.querySelector(".js-hidden-text-button");t.classList.contains("invisible")&&t.classList.remove("invisible"),n.classList.contains("invisible")||n.classList.add("invisible")}))}function a(){document.querySelectorAll(".js-hidden-text").forEach((e=>{const t=e.querySelector(".js-hidden-text-paragraph"),n=e.querySelector(".js-hidden-text-button");t.classList.contains("invisible")||t.classList.add("invisible"),n.classList.contains("invisible")&&n.classList.remove("invisible"),n.innerText="Read more"}))}document.querySelectorAll('a[href^="#"').forEach((e=>{e.addEventListener("click",(function(e){e.preventDefault();const t=document.querySelector(".mob-menu");t.classList.contains("is-mob-menu-open")&&t.classList.toggle("is-mob-menu-open");let n=this.getAttribute("href").substring(1);const o=document.getElementById(n).getBoundingClientRect().top-80;window.scrollBy({top:o,behavior:"smooth"})}))})),$(document).ready((function(){$(".reviews-slide").slick({arrows:!0,slidesToShow:3,centerMode:!0,centerPadding:"0px",speed:1e3,waitForAnimate:!1,focusOnSelect:!0,responsive:[{breakpoint:1279,settings:{centerMode:!0,centerPadding:"0px",slidesToShow:3}},{breakpoint:767,settings:{slidesToShow:1,centerPadding:"0px",centerMode:!0,speed:500}}]})}));var s=$(".slide-number");$(".reviews-slide").on("init reInit afterChange",(function(e,t,n,o){var a=(n||0)+1;s.text(a+"/"+t.slideCount)})),function(){const e=window.screen.height;let t=!1,n=!1;window.addEventListener("scroll",(function(){if(!t){const n=document.querySelector(".speakers-title"),o=n.offsetTop,a=document.querySelector(".speaker-first"),s=document.querySelector(".speaker-second"),i=document.querySelector(".speaker-third"),r=document.querySelector(".speaker-fourth");window.pageYOffset>o-e+300&&(a.className="speaker-first speakers__item animate__animated animate__fadeIn animate__slower animate__delay-2s",s.className="speaker-first speakers__item animate__animated animate__fadeIn animate__slower animate__delay-3s",i.className="speaker-first speakers__item animate__animated animate__fadeIn animate__slower animate__delay-4s",r.className="speaker-first speakers__item animate__animated animate__fadeIn animate__slower animate__delay-5s",n.className="speakers-title section__title speakers__title animate__animated animate__fadeInUp animate__slower animate__delay-1s",t=!0)}if(!n){const t=document.querySelector(".program-title"),o=t.offsetTop,a=document.querySelector(".program-first"),s=document.querySelector(".program-second"),i=document.querySelector(".program-third"),r=document.querySelector(".program-fourth");window.pageYOffset>o-e&&(a.className="program__thumb program__thumb-top animate__animated animate__bounceIn animate__delay-1s",s.className="program__thumb program__thumb-bottom animate__animated animate__bounceIn animate__delay-3s",i.className="program__thumb program__thumb-top animate__animated animate__bounceIn animate__delay-2s",r.className="program-fourth transparent program__thumb program__thumb-bottom animate__animated animate__bounceIn animate__delay-4s",t.className="program-title program__title animate__animated animate__bounceIn animate__delay-1s",n=!0)}}))}(),function(){const e=document.querySelector(".mob-menu"),t=document.querySelector(".mob-menu__button-open"),n=document.querySelector(".mob-menu__button-close"),o=()=>{e.classList.toggle("is-mob-menu-open")};t.addEventListener("click",o),n.addEventListener("click",o)}(),function(){const e=document.querySelector(".up-button");window.onscroll=function(){document.body.scrollTop>400||document.documentElement.scrollTop>400?e.classList.add("up-button--visible"):e.classList.remove("up-button--visible")}}(),document.querySelectorAll(".js-hidden-text").forEach((e=>{const t=e.querySelector(".js-hidden-text-button");t.addEventListener("click",(function(e){const n=e.currentTarget.parentNode.querySelector(".js-hidden-text-paragraph");n.classList.toggle("invisible"),n.classList.contains("invisible")?t.innerText="Read more":t.innerText="Less"}))})),e(),t(),n(),function(){const s=document.body.offsetWidth;let i=0;s>=1280?(i=3,o()):s<1280&&s>=768?(i=2,a()):(i=1,a());let r=i;window.addEventListener("resize",(function(){const s=document.body.offsetWidth;let i=0;i=s>=1280?3:s<1280&&s>=768?2:1,r!==i&&(this.setTimeout(e,500),this.setTimeout(t,510),this.setTimeout(n,520),r=i,3===r?o():a())}))}();
//# sourceMappingURL=index.985a8e40.js.map
