// $(document).ready(function(){
//     $(".owl-carousel").owlCarousel();
//   });
$('.owl-carousel')
.owlCarousel({ 
    autoplay:true, 
    autoplayTimeout: 4500, 
    autoplaySpeed: 3000, 
    loop: true, 
    responsive:{ 
        0:{ 
            items:1 
        }, 
        1100:{ 
            items:1 
        } 
    } 
})