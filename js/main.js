$(document).ready(function () {
    $('.slider-products').slick({
        slidesToShow: 4,  // Muestra 4 productos por vez
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
        dots: false, // si quieres puntitos abajo, ponlo en true
        autoplay: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 2, slidesToScroll: 1 }
            },
            {
                breakpoint: 600,
                settings: { slidesToShow: 2, slidesToScroll: 1 }
            },
            {
                breakpoint: 480,
                settings: { slidesToShow: 1, slidesToScroll: 1 }
            }
        ]
    });
});

$(document).ready(function () {
    $('.slider-reviews').slick({
        slidesToShow: 3,  // Muestra 3 productos por vez
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
        dots: false, // si quieres puntitos abajo, ponlo en true
        autoplay: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 2, slidesToScroll: 1 }
            },
            {
                breakpoint: 600,
                settings: { slidesToShow: 2, slidesToScroll: 1 }
            },
            {
                breakpoint: 480,
                settings: { slidesToShow: 1, slidesToScroll: 1 }
            }
        ]
    });
});