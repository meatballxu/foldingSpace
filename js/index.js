/*
firstPage
 */
var mySwiper;$('.arrowDown').on("click",function(){mySwiper.slideNext()});$(".header .nav").on("click",function(e){var _this=$(this);var id=_this.data("id");mySwiper.slideTo(id);if(!$(this).hasClass("active")){$(this).addClass("active").siblings().removeClass("active")}});$(".detailTab>li").on("click",function(e){var _this=$(this);var id=_this.data("id");$(".detailSolution").show().animate({left:'0%'});mySwiperSon.slideTo(id);if(!$(this).hasClass("active")){$(this).addClass("active").siblings("li").removeClass("active")}$(".swiper-pagination").fadeOut()});$(".closeDetail").on("click",function(e){$(".swiper-pagination").fadeIn();$(".detailSolution").animate({left:'100%'}).hide();$(".detailTab li").removeClass("active")});mySwiper=new Swiper('.swiper-container-father',{direction:'vertical',resistance:'100%',loop:false,slidesPerView:'auto',mousewheelControl:true,grabCursor:false,pagination:'.swiper-pagination',paginationClickable:true,paginationBulletRender:function(swiper,index,className){return '<span class="'+className+'">0'+(index+1)+'</span>'},onFirstInit:function(){},onSlideChangeStart:function(sw){var pagination=document.querySelector(".swiper-pagination-bullets");if(sw.realIndex==0){pagination.style.display='none'}else{pagination.style.display='inline-block'}console.log(sw.realIndex)},onSlideNextStart:function(swiper){var activeIndex=swiper.activeIndex;$(".header .nav").removeClass("active");$(".header .nav[data-id="+activeIndex+"]").addClass("active");if(activeIndex!=0){$(".logo").css("background-image",'url(img/logo-black.png)');$(".header .nav").addClass("newClass");$(".header").addClass("headerActive")}else{$(".logo").css("background-image",'url(img/logo.png)');$(".header").removeClass("headerActive")}},onSlidePrevStart:function(swiper){var activeIndex=swiper.activeIndex;$(".header .nav").removeClass("active");$(".header .nav[data-id="+activeIndex+"]").addClass("active");if(activeIndex==0){$(".logo").css("background-image",'url(img/logo.png)');$(".header .nav").removeClass("newClass");$(".header").removeClass("headerActive")}else{$(".logo").css("background-image",'url(img/logo-black.png)');$(".header").addClass("headerActive")}}});mySwiperSon=new Swiper('.swiper-container-son',{direction:'vertical',resistance:'100%',loop:false,mousewheelControl:true,grabCursor:false,onInit:function(){$(".detailSolution").hide()}});var userAgentInfo=navigator.userAgent;var Agents=["Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"];var flag=true;for(var v=0;v<Agents.length;v+=1){if(userAgentInfo.indexOf(Agents[v])>0){flag=false;break}}if(flag){var body=document.querySelector("body");body.style.minWidth="830px";var p=document.querySelectorAll("p");for(var i=0;i<p.length;i+=1){p[i].classList.add("swiper-no-swiping")}var textCon=document.querySelectorAll(".textCon");for(var i=0;i<textCon.length;i+=1){textCon[i].classList.add("swiper-no-swiping")}}else{document.querySelector(".navCon").style.display="none"}particlesJS("particles-js",{"particles":{"number":{"value":20,"density":{"enable":true,"value_area":300}},"color":{"value":"#333333"},"shape":{"type":"circle","stroke":{"width":0,"color":"#333333"},"polygon":{"nb_sides":1},"image":{"src":"image/par.svg","width":1000,"height":1000}},"opacity":{"value":0.9,"random":true,"anim":{"enable":true,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":5,"random":true,"anim":{"enable":true,"speed":30,"size_min":.5,"sync":false}},"line_linked":{"enable":true,"distance":77,"color":"#999999","opacity":1,"width":1},"move":{"enable":true,"speed":3,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":true,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"grab"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":140,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});