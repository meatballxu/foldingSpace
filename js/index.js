/*
firstPage
 */
var mySwiper;
$('.arrowDown').on("click",function(){
	mySwiper.slideNext();
})







/*
firstPageEnd
 */


/*
secondPage
 */
$(".header .nav").on("click",function(e){
    var _this=$(this);
    var id=_this.data("id");
    mySwiper.slideTo(id);
    if(!$(this).hasClass("active")){
        $(this).addClass("active").siblings().removeClass("active");
    }
});
$(".detailTab>li").on("click",function(e){
    var _this=$(this);
    var id=_this.data("id");
    $(".detailSolution").show().animate({left:'0%'});
    mySwiperSon.slideTo(id);
    if(!$(this).hasClass("active")){
        $(this).addClass("active").siblings("li").removeClass("active");
    }
});
$(".closeDetail").on("click",function(e){
    $(".detailSolution").animate({left:'100%'}).hide();
    $(".detailTab li").removeClass("active");
})






/*
secondPageEnd
 */



/*
thirdPage
 */




/*
thirdPageEnd
 */


/*
fourthPage
 */




/*
fourthPageEnd
 */
mySwiper = new Swiper('.swiper-container-father',{
  direction: 'vertical', 
  resistance:'100%',
  loop:false,
  slidesPerView:'auto',
  mousewheelControl : true,
  grabCursor: false,
  pagination: '.swiper-pagination',
  paginationClickable: true,
  paginationBulletRender: function (swiper, index, className) {
    return '<span class="' + className + '">0' + (index + 1) + '</span>';
  },
  onFirstInit:function(){
      
   },
   onSlideChangeStart:function(sw){
    var pagination = document.querySelector(".swiper-pagination-bullets");
    if(sw.realIndex==0){
      pagination.style.display = 'none';
    }else{
      pagination.style.display = 'inline-block';
    }
    console.log(sw.realIndex);
   },
   onSlideNextStart: function(swiper){
       var activeIndex=swiper.activeIndex;
       $(".header .nav").removeClass("active");
       $(".header .nav[data-id="+activeIndex+"]").addClass("active");
       if(activeIndex!=0){
           $(".logo").css("background-image",'url(img/logo-black.png)')
           $(".header .nav").addClass("newClass");
           $(".header").addClass("headerActive");
       }else{
           $(".logo").css("background-image",'url(img/logo.png)');
           $(".header").removeClass("headerActive");
       }
   },
   onSlidePrevStart: function(swiper){
       var activeIndex=swiper.activeIndex;
       $(".header .nav").removeClass("active");
       $(".header .nav[data-id="+activeIndex+"]").addClass("active");
       if(activeIndex==0){
           $(".logo").css("background-image",'url(img/logo.png)')
           $(".header .nav").removeClass("newClass");
           $(".header").removeClass("headerActive");
       }else{
           $(".logo").css("background-image",'url(img/logo-black.png)');
           $(".header").addClass("headerActive");
       }
   }
})
mySwiperSon = new Swiper('.swiper-container-son',{
    direction: 'vertical', 
    resistance:'100%',
    loop:false,
    mousewheelControl : true,
    grabCursor: false,
    onInit:function(){
        $(".detailSolution").hide();
     }
})
/*PC限制最小宽度*/
var userAgentInfo = navigator.userAgent;
var Agents = ["Android", "iPhone",
            "SymbianOS", "Windows Phone",
            "iPad", "iPod"];
var flag = true;
for (var v = 0; v < Agents.length; v++) {
    if (userAgentInfo.indexOf(Agents[v]) > 0) {
        flag = false;
        break;
    }
}
if(flag){
	var body = document.querySelector("body");
	body.style.minWidth = "830px";
	/*文字可复制*/
	var p = document.querySelectorAll("p");
	for(var i=0;i<p.length;i++){
		p[i].classList.add("swiper-no-swiping");
	}
	var textCon = document.querySelectorAll(".textCon");
	for(var i=0;i<textCon.length;i++){
		textCon[i].classList.add("swiper-no-swiping");
	}
}else{
    document.querySelector(".navCon").style.display = "none"
}
/*canvas粒子*/
particlesJS("particles-js", {
  "particles": {
        "number": {                   
            "value": 20,                 // 固定粒子数量
            "density": {
                "enable": true,           // 启用粒子密度
                "value_area":300         // 固定粒子数量的区域大小
            }
        },
        "color": {
            "value": "#333333"            // 粒子颜色
        },
        "shape": {
            "type": "circle",             // 粒子形状
            "stroke": {
                "width": 0,               // 粒子边框宽度
                "color": "#333333"        // 粒子边框颜色
            },
            "polygon": {
                "nb_sides": 1             // 多边形粒子的边数
            },
            "image": {
                "src": "image/par.svg",  // 自定义粒子(svg/png/gif/jpg)
                "width": 1000,             // 自定义粒子图片宽度
                "height": 1000             // 自定义粒子图片高度
            }
        },
        "opacity": {
            "value": 0.9,                 // 不透明度 0 ~ 1
            "random": true,              // 随机不透明度
            "anim": {
                "enable": true,          // 开启过渡、渐变
                "speed": 1,               // 渐变动画速度
                "opacity_min": 0.1,       // 渐变动画不透明度
                "sync": false
            }
        },
        "size": {
            "value": 5,                   // 粒子大小
            "random": true,               // 粒子大小随机
            "anim": {
                "enable": true,           // 开启粒子缩放动画
                "speed": 30,              // 动画速度
                "size_min": .5,           // 最小收缩粒子大小 0 ~ 1
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,               // 开启连接线
            "distance": 77,              // 连接线有效距离
            "color": "#999999",           // 连接线颜色
            "opacity": 1,               // 连接线不透明度 0 ~ 1
            "width": 1                    // 连接线的宽度
        },
        "move": {
            "enable": true,               // 开启粒子移动
            "speed": 3,                   // 移动速度
            "direction": "none",          // 移动方向
            "random": false,              // 移动方向随机
            "straight": false,            // 直接移动
            "out_mode": "out",            // 边缘移出 out、反弹 bounce
            "bounce": false,              // 是否跳动移动
            "attract": {
                "enable": true,          // 粒子之间吸引
                "rotateX": 600,           // X 水平距离
                "rotateY": 1200           // Y 水平距离
            }
        }
    },

    "interactivity": {
        "detect_on": "canvas",            // 粒子之间互动检测
        "events": {
            "onhover": {
                "enable": true,           // 开启鼠标悬停
                "mode": "grab"            // 悬停模式
            },
            "onclick": {
                "enable": true,           // 开启鼠标单击
                "mode": "push"            // 单击模式
            },
            "resize": true                // 互动事件调整
        },
        "modes": {
            "grab": {
                "distance": 140,          // 粒子互动抓取距离
                "line_linked": {
                    "opacity": 1          // 粒子互动抓取距离连线不透明度
                }
            },
            "bubble": {
                "distance": 400,          // 粒子抓取泡沫效果之间的距离
                "size": 40,               // 粒子抓取泡沫效果之间的大小
                "duration": 2,            // 粒子抓取泡沫效果之间的持续时间
                "opacity": 8,             // 不透明度
                "speed": 3                // 速度
            },
            "repulse": {
                "distance": 200,          // 击退效果距离
                "duration": 0.4           // 击退效果持续时间
            },
            "push": {
                "particles_nb": 4         // 粒子推出的数量
            },
            "remove": {
                "particles_nb": 2         // 粒子移除的数量
            }
        }
    },
    "retina_detect": true                 // 视网膜检测，即无闪烁
});

