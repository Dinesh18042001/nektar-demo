$('.banner-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    animateOut: 'fadeOut', 
    animateIn: 'fadeIn', 
    autoplay: true,       
    autoplayTimeout: 2000, 
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});


let nav = document.querySelector(".navbar");
window.onscroll = function (){
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("header-scrolled");
    }else{
        nav.classList.remove("header-scrolled");
    }
};


$('.service-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText : [
        '<i class="fa-solid fa-arrow-left"></i>',
        '<i class="fa-solid fa-arrow-right"></i>'
    ],
    autoplay: true,       
    autoplayTimeout: 2000, 
    autoplayHoverPause: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
});



// $(document).ready(function () {
//     $('.credits-carousel').owlCarousel({
//         loop: true,
//         center: true,
//         margin: 10,
//         nav: true,
//         dots: false,
//         navText: [
//             '<i class="fa-solid fa-arrow-left"></i>',
//             '<i class="fa-solid fa-arrow-right"></i>'
//         ],
//         responsive: {
//             0: {
//                 items: 1
//             },
//             600: {
//                 items: 3
//             },
//             1000: {
//                 items: 4
//             }
//         }
//     }).on('initialized.owl.carousel changed.owl.carousel', function (event) {
//         // Remove "second-item" ID from all items
//         $('.credits-carousel .item').removeAttr('id');

       
//         var firstVisibleIndex = event.item.index;

//         var secondItemIndex = firstVisibleIndex + 1; 

        
//         $('.credits-carousel .owl-item').eq(secondItemIndex).find('.item').attr('id', 'second-item');
//     });

  
//     $(window).on('load', function () {
//         var visibleItems = $('.credits-carousel .owl-item.active');
//         if (visibleItems.length > 1) {
            
//             visibleItems.eq(visibleItems.length - 2).find('.item').addClass('default-second-item');
//         }
//     });
// });




$(document).ready(function () {
    $('.credits-carousel').owlCarousel({
        loop: true,
        center: true,
        margin: 10,
        nav: true,
        dots: false,
        autoplay:true,
        navText: [
            '<i class="fa-solid fa-arrow-left"></i>',
            '<i class="fa-solid fa-arrow-right"></i>'
        ],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 4
            },
            1000: {
                items: 4
            }
        }
    }).on('initialized.owl.carousel changed.owl.carousel', function (event) {
        // Remove all previous IDs
        $('.credits-carousel .item').removeAttr('id');

        // Loop through all visible items and assign unique IDs
        $('.credits-carousel .owl-item').each(function (index) {
            var item = $(this).find('.item');

            // Assign a unique ID based on index
            var uniqueID = `item-${index}`;
            item.attr('id', uniqueID);
        });

        // Highlight the second item dynamically
        var firstVisibleIndex = event.item.index;
        var secondItemIndex = firstVisibleIndex + 1;

        // Apply the ID "second-item" to the second visible item
        $('.credits-carousel .owl-item').eq(secondItemIndex).find('.item').attr('id', 'second-item');
    });

    // Apply the default ID for the right-second item on page load
    $(window).on('load', function () {
        var visibleItems = $('.credits-carousel .owl-item.active');
        if (visibleItems.length > 1) {
            
            visibleItems.eq(visibleItems.length - 2).find('.item').attr('id', 'default-second-item');
        }
    });
});
















$('.alongside-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText : [
        '<i class="fa-solid fa-arrow-left"></i>',
        '<i class="fa-solid fa-arrow-right"></i>'
    ],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})



