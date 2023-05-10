//goal 스크롤
const goal = document.querySelector('.goal')

ScrollTrigger.create({
    trigger:'.goal',
    start:'0 10%',
    end:'100% 0',
    onEnter:() => goal.classList.add('goalEvent'),
    // markers:true
})

// keywords 스크롤
const kscroll_wrap =document.querySelector('#keywords .scroll_wrap')
const kscroll_scroll =document.querySelector('#keywords .scroll_wrap .scroll')
console.log(kscroll_wrap, kscroll_scroll)

window.addEventListener('scroll',()=>{
    //1. 윈도우에서 얼마나 스크롤 되었는가?
    let yOffset = window.scrollY
    console.log(`Yoffset=>${yOffset}`)
    //2. 스크롤요소(scroll_wrap) 기준으로 얼마나 스크롤 하고 있는가?
    console.log(`scroll_wrap 위치 => ${kscroll_wrap.offsetTop}`)
    console.log(`scroll_wrap 기준 스크롤값=>${yOffset-kscroll_wrap.offsetTop}`)
    let amount = yOffset-kscroll_wrap.offsetTop
    //윈도우에서 스크롤 된 만큼이 keywords의 탑보다 크거나 같으면
    if(yOffset >= kscroll_wrap.offsetTop){
        //키워드의 x축을 전체스크롤에서 내 위치의 탑 만큼을 뺀 나머지만큼 이동시켜라. 
        kscroll_scroll.style.transform = `translateX(-${amount}px)`
    }else{ //그게 아니면 x축을 0으로 만들어라 
        kscroll_scroll.style.transform = `translateX(0px)` //스크롤의
    }
})

//career 스크롤
const career = document.querySelector('.career')
ScrollTrigger.create({
    trigger:'.career',
    start:'0 10%',
    end:'100% 0',
    onEnter:() => career.classList.add('careerEvent'),
    // markers:true
})


// choice 스크롤
const choice = document.querySelector('.choice')

ScrollTrigger.create({
    trigger:'.choice',
    start:'0 10%',
    end:'100% 0',
    onEnter:() => choice.classList.add('choiceEvent'),
    // onLeave:() =>,
    // markers:true
})