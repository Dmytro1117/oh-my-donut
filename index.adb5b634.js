!function(){function e(){let e=document.body.offsetHeight,t=document.querySelector(".js-canvas-container"),n=document.querySelector(".background");n&&t.removeChild(n),n=document.createElement("div"),t.append(n),n.className="background",n.style.height=e-200+"px"}function t(){let e=document.querySelector(".background"),t=document.body.offsetHeight,n=document.body.offsetWidth;for(let a=0;a<=t-200;a+=40+Math.round(200*Math.random())){let t=document.createElement("div");t.className="circle circle--"+Math.round(2*Math.random()+1),e.append(t);let o=40+Math.round(60*Math.random()),i=Math.round(n*Math.random());t.style.height=o+"px",t.style.top=a+"px",t.style.left=i+"px";let s=n-i-o;s>=0?t.style.width=o+"px":t.style.width=o+s+"px"}}function n(){let e=document.body.offsetHeight,t=document.querySelector(".background"),n=Math.round(e/3),a=window.innerHeight,o=[],i=[];for(let e=0;e<=2;e+=1)o[e]=document.createElement("div"),t.append(o[e]),o[e].className="donat-bg-"+(e+1),o[e].style.height=n+"px",i[e]=0-n*e+window.pageYOffset+a/2-180,o[e].style.cssText="height: "+n+"px; background-position: 50% "+i[e]+"px;";window.addEventListener("scroll",function(){let e=window.innerHeight;for(let t=0;t<=2;t+=1)i[t]=0-n*t+window.pageYOffset+e/2-180;window.pageYOffset<n&&(o[0].style.cssText="height: "+n+"px; background-position: 50% "+i[0]+"px;"),window.pageYOffset>n-e/2-300&&window.pageYOffset<2*n&&(o[1].style.cssText="height: "+n+"px; background-position: 50% "+i[1]+"px;"),window.pageYOffset>2*n-e/2-300&&window.pageYOffset<3*n&&(o[2].style.cssText="height: "+(n+1e3)+"px; background-position: 50% "+i[2]+"px;")})}function a(){document.querySelectorAll(".js-hidden-text").forEach(e=>{let t=e.querySelector(".js-hidden-text-paragraph"),n=e.querySelector(".js-hidden-text-button");t.classList.contains("invisible")&&t.classList.remove("invisible"),n.classList.contains("invisible")||n.classList.add("invisible")})}function o(){document.querySelectorAll(".js-hidden-text").forEach(e=>{let t=e.querySelector(".js-hidden-text-paragraph"),n=e.querySelector(".js-hidden-text-button");t.classList.contains("invisible")||t.classList.add("invisible"),n.classList.contains("invisible")&&n.classList.remove("invisible"),n.innerText="Read more"})}document.querySelectorAll('a[href^="#"').forEach(e=>{e.addEventListener("click",function(e){e.preventDefault();let t=document.querySelector(".mob-menu");t.classList.contains("is-mob-menu-open")&&t.classList.toggle("is-mob-menu-open");let n=this.getAttribute("href").substring(1),a=document.getElementById(n),o=a.getBoundingClientRect().top;window.scrollBy({top:o-80,behavior:"smooth"})})}),$(document).ready(function(){$(".reviews-slide").slick({arrows:!0,slidesToShow:3,centerMode:!0,centerPadding:"0px",speed:1e3,waitForAnimate:!1,focusOnSelect:!0,responsive:[{breakpoint:1279,settings:{centerMode:!0,centerPadding:"0px",slidesToShow:3}},{breakpoint:767,settings:{slidesToShow:1,centerPadding:"0px",centerMode:!0,speed:500}}]})});var i=$(".slide-number");$(".reviews-slide").on("init reInit afterChange",function(e,t,n,a){var o=(n||0)+1;i.text(o+"/"+t.slideCount)}),function(){let e=window.screen.height,t=!1,n=!1;window.addEventListener("scroll",function(){if(!t){let n=document.querySelector(".speakers-title"),a=n.offsetTop,o=document.querySelector(".speaker-first"),i=document.querySelector(".speaker-second"),s=document.querySelector(".speaker-third"),r=document.querySelector(".speaker-fourth");window.pageYOffset>a-e+300&&(o.className="speaker-first speakers__item animate__animated animate__fadeIn animate__slower animate__delay-2s",i.className="speaker-first speakers__item animate__animated animate__fadeIn animate__slower animate__delay-3s",s.className="speaker-first speakers__item animate__animated animate__fadeIn animate__slower animate__delay-4s",r.className="speaker-first speakers__item animate__animated animate__fadeIn animate__slower animate__delay-5s",n.className="speakers-title section__title speakers__title animate__animated animate__fadeInUp animate__slower animate__delay-1s",t=!0)}if(!n){let t=document.querySelector(".program-title"),a=t.offsetTop,o=document.querySelector(".program-first"),i=document.querySelector(".program-second"),s=document.querySelector(".program-third"),r=document.querySelector(".program-fourth");window.pageYOffset>a-e&&(o.className="program__thumb program__thumb-top animate__animated animate__bounceIn animate__delay-1s",i.className="program__thumb program__thumb-bottom animate__animated animate__bounceIn animate__delay-3s",s.className="program__thumb program__thumb-top animate__animated animate__bounceIn animate__delay-2s",r.className="program-fourth transparent program__thumb program__thumb-bottom animate__animated animate__bounceIn animate__delay-4s",t.className="program-title program__title animate__animated animate__bounceIn animate__delay-1s",n=!0)}})}(),function(){let e=document.querySelector(".mob-menu"),t=document.querySelector(".mob-menu__button-open"),n=document.querySelector(".mob-menu__button-close"),a=()=>{e.classList.toggle("is-mob-menu-open")};t.addEventListener("click",a),n.addEventListener("click",a)}(),function(){let e=document.querySelector(".up-button");window.onscroll=function(){document.body.scrollTop>400||document.documentElement.scrollTop>400?e.classList.add("up-button--visible"):e.classList.remove("up-button--visible")}}(),document.querySelectorAll(".js-hidden-text").forEach(e=>{let t=e.querySelector(".js-hidden-text-button");t.addEventListener("click",function(e){let n=e.currentTarget.parentNode.querySelector(".js-hidden-text-paragraph");n.classList.toggle("invisible"),n.classList.contains("invisible")?t.innerText="Read more":t.innerText="Less"})}),e(),t(),n(),function(){let i=document.body.offsetWidth,s=0;i>=1280?(s=3,a()):(s=i<1280&&i>=768?2:1,o());let r=s;window.addEventListener("resize",function(){let i=document.body.offsetWidth,s=0;r!==(s=i>=1280?3:i<1280&&i>=768?2:1)&&(this.setTimeout(e,500),this.setTimeout(t,510),this.setTimeout(n,520),3===(r=s)?a():o())})}()}();
//# sourceMappingURL=index.adb5b634.js.map