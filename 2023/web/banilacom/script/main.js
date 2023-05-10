// banner img 전환
// let bannerSlide = new Swiper('#banner .swiper',{
//     direction:'horizontal',
//     loop:'1',
//     // centeredSlides: true,
//     slidesPerView:1,
//     autoplay:{
//         delay:1000,
//     }
// })
let bannerSwiper = new Swiper("#banner .swiper", {
    direction: "horizontal",
    slidesPerView: 1,
    // spaceBetween: 30,
    mousewheel: true,
    // pagination: {
    //     el: ".swiper-pagination",
    //     clickable: true,
    // },
});
// slide 전환
let bestSwiper = new Swiper('.best .swiper',{
    direction:'horizontal',
    loop:'1',
    // centeredSlides: true,
    slidesPerView:3,
    spaceBetween:30,
    autoplay:{
        delay:3000,
        // disableOnInteraction: false,
    }
})