var swiper = new Swiper ('.swp_promo1', {
    direction: "horizontal",
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el:'.swiper-pagination',
        clickable: true,
        breakpoints: {
        576: {
            direction: "vertical",
        }
        },
    },
    breakpoints: {
        576: {
            direction: "vertical",
        }
    },
})

var swiper2 = new Swiper ('.swp_promo2', {
    direction: "vertical",
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
}) 

var swiper3 = new Swiper ('.swp_clients', {
    slidesPerView: 5,
    loop: true,
    clickable: true,
    breakpoints: {
        576: {
            slidesPerView: 3,
        }
    }
}) 

var swiper4 = new Swiper ('.swp_management', {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        clickable: true,
    },
    breakpoints: {
        576: {
            slidesPerView: 2,
        }
    },
});

swiper.controller.control = this.swiper2;
if($('.swiper-promo2').length != 0) {
    swiper2.controller.control = this.swiper;
}

const burgerMenu = document.querySelector('.burger_menu');
if(burgerMenu) {
    const sideMenu = document.querySelector('.sidemenu');
    burgerMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        burgerMenu.classList.toggle('active');
        sideMenu.classList.toggle('active');
    });
}

const subMenu = document.querySelector('.sidemenu_link');
if(subMenu) {
    const subMenuList = document.querySelector('.submenu_sidemenu');
    subMenu.addEventListener("click",  function (e) {
        subMenuList.classList.toggle('open');
    })
}

var elems = [document.querySelectorAll(".tabs li"),
             document.querySelectorAll(".tab-content")];
[].forEach.call(elems[0], function(el, indx) {
    el.onclick = function() {
        var current = document.querySelectorAll(".current");
        for (var i = 0; i < current.length; i++) {
            current[i].classList.remove("current");
            elems[i][indx].classList.add("current")
        }
        return false
    }
});
