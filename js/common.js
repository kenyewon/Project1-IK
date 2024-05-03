$(document).ready(function(){//start

    //모바일 gnb open
    $(".btn-ham").click(function(){
      $(".mgnb-wrap, .dim").fadeIn();
    });
  
    //모바일 gnb close
    $(".mgnb-close").click(function(){
      $(".mgnb-wrap, .dim").fadeOut();
    });
    $(".btn-sc").click(function(){
      $(".search").fadeIn();
    });
    $(".search-close").click(function(){
      $(".search").fadeOut();
    });
  
   //모바일 gnb depth2
   $(".depth2").hide();
   $(".mgnb > li").click(function(){
     $(".depth2").stop().slideUp();
     $(this).children(".depth2").stop().slideDown();
    });

  $(".dim").click(function(){
    $(".mgnb-wrap").hide();
    $(".dim").hide();
  });

    //메인비주얼
    var mv = new Swiper(".mv", {
      effect : "fade",
    fadeEffect : {
      crossFade : true
    },
    speed : 1000,
    loop : true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".mv .swiper-pagination",
      clickable: true,
    },
    });


    //컬렉션
    var productlist = new Swiper(".product-list", {
        slidesPerView: 1,
        centeredSlides: true,
        speed : 1000,
        loop : true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        scrollbar: {
          el: ".product-list .swiper-scrollbar",
        },
        breakpoints : {
          1024 : {
            slidesPerView: 3,
            spaceBetween: 0
          },
          1920 : {
            slidesPerView: 3,
            spaceBetween: 0
          }
        }
      });//product


      //헤더 스크롤 이벤트
      window.addEventListener('scroll', function() {
  var header = document.querySelector('header');

     //헤더 스크롤 위치 확인
  if (window.scrollY > 50) {
    header.classList.remove('visible');
    } else {
    header.classList.add('visible');
    }
     });


    //아카이브
     var archive = new Swiper(".archive", {
      slidesPerView: 1,
      spaceBetween: 10,
      freeMode: true,
      pagination: {
        el: ".archive .swiper-pagination",
        clickable: true,
      },
        scrollbar: {
          el: ".archive .swiper-scrollbar",
        },
      breakpoints : {
        1024 : {
          slidesPerView: 2,
          spaceBetween: 10
        },
        1920 : {
          slidesPerView: 2,
          spaceBetween: 10
        }
      }
    });

  
    //슬로건 타이핑 효과
    const content = "We make light. \n by IIKwang Lightings Presents.";
    const text = document.querySelector(".text");
    let i = 0;

    function typing(){
    let txt = content[i++];
    text.innerHTML += txt=== "\n" ? "<br/>": txt;
    if (i > content.length) {
        text.textContent = "";
        i = 0;
        }
       }
    setInterval(typing, 250)

    AOS.init({
      duration: 1200,
    })
  

  
  });//end