//shop slide
var swiper = new Swiper("#shop .swiper", {
  slidesPerView: 3, //몇개씩 보일지
  slidesPerGroup : 3, //몇개씩 넘길지
  spaceBetween: 30, //사이간격
  navigation: {
    nextEl: '#shop .swiper-button-next',
    prevEl: '#shop .swiper-button-prev',
  },
  loop: true,
  mousewheel:{invert:true}
});

var swiper = new Swiper("#review .swiper", {
  direction:'horizontal',
  slidesPerView: 1,
  spaceBetween: 30,
  mousewheel: true,
  loop:true,
  autoplay:{
    // 1000,
    delay:3000,
    // disableOnInteraction:false,
  }
});