const menuicon = document.querySelector(".menu-icon");
    const navMenu = document.querySelector(".nav-menu");

    menuicon.addEventListener("click", function () {
    menuicon.classList.toggle("active");
    navMenu.classList.toggle("active");
    });

    $('.slider_big').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
    });
    $('.slider_small').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        responsive: [
        {
            breakpoint: 991,
            settings: {
            slidesToShow: 2,
            }
        },
        {
            breakpoint: 767,
            settings: {
            slidesToShow: 2,
            }
        }
        ]
    });