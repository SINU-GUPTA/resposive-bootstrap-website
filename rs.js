// here we animate main - container

gsap.from(".logo img", {
  y: -70,
  duration: 1,
  delay: 0.3,
  opacity: 0,
});
gsap.from(".right-logo i", {
  y: -60,
  duration: 1,
  delay: 0.1,
  opacity: 0,
});

gsap.from(".head", {
  x: 50,
  duration: 2,
  opacity: 0,
  delay: 1,
});

// here we animate main - content1

var sinu = gsap.timeline();

sinu.from(".img img", {
  y: 100,
  duration: 1,
  delay: 1,
  opacity: 0,
});

sinu.from(".line1,.line2", {
  y: 100,
  duration: 1.2,
  delay: 0,
  opacity: 0,
});
sinu.from(".box1 i,.box2 i,.box3 i,.box4 i", {
  scale: 0,
  duration: 0.7,
  opacity: 0,
});

sinu.from(
  ".box1 h1,.box1 p,.box2 h1,.box2 p,.box3 h1,.box3 p,.box4 h1,.box4 p",
  {
    y: 30,
    duration: 1,
    opacity: 0,
  }
);

// here we animate main - coontent2

gsap.from(".head1", {
  y: 100,
  duration: 1.5,
  opacity: 0,
  scrollTrigger: {
    trigger: ".head1",
    scroller: "body",
    scrub: 1,
    start: "top 50%%",
    end: "top 30%",
  },
});

gsap.from(".section1,.section2", {
  y: 100,
  duration: 1,
  stagger: 1,
  opacity: 0,
  scrollTrigger: {
    trigger: ".section1,.section2",
    scroller: "body",
    scrub: 1,
  },
});

gsap.from(".b2", {
  scale: 0,
  duration: 1,
  opacity: 0,
  scrollTrigger: {
    trigger: ".b2",
    scroller: "body",
    scrub: 1,
  },
});

// here we animate main - coontent3

sinu.from(".content3", {
  scrollTrigger: {
    trigger: ".content3",
    scroller: "body",
  },
});

sinu.from(".bx1", {
  opacity: 0,
  duration: 0.7,
  rotate: 120,
  scrollTrigger: {
    trigger: ".bx1",
    scroller: "body",
    scrub: 2,
    start: "top 30%",
    end: "bottom 70%",
  },
});

sinu.from(".bx2,.bx3,.bx4", {
  scale: 0,
  stagger: 1,
  opacity: 0,
  duration: 2,
  scrollTrigger: {
    trigger: ".bx1",
    scroller: "body",
    scrub: 5,
    start: "top 30%",
    end: "bottom 80%",
  },
});

// here we animate main - coontent4

gsap.from(".content4", {
  y: 100,
  opacity: 0,
  duartion: 1,
  scrollTrigger: {
    trigger: ".content4",
    scroller: "body",
    scrub: 1,
    stagger: 1,
  },
});

// here we animate main - coontent5

sinu.from(".image img", {
  scale: 0,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".content5",
    scroller: "body",
    scrub: 5,
    stagger: 1,
    end: "top 40%",
    start: "top 60%",
  },
});
sinu.from(".c1,.c2", {
  x: -200,
  opacity: 0,
  duration: 1,
  delay: 1,
  scrollTrigger: {
    trigger: ".c1,.c2",
    scroller: "body",
    scrub: 4,
    stagger: 2,
    end: "top 20%",
    start: "top 40%",
  },
});

sinu.from(".heading h1", {
  y: -100,
  scale: 0,
  duration: 1,
  opacity: 0,
  scrollTrigger: {
    trigger: ".heading h1",
    scroller: "body",
    scrub: 2,
    start: "top 80%",
    end: "top 50%",
  },
});
sinu.from(".heading", {
  y: 200,
  delay: 1,
  scrollTrigger: {
    trigger: ".heading",
    scroller: "body",
    scrub: 1,
  },
});

// here we animate content 6

sinu.from(".ex,.cards",{
  scale: 0,
  duration: 0.4,
  opacity: 0,
  scrollTrigger: {
    trigger: ".ex",
    scroller: "body",
    scrub: 1,
   
  },
});

// here we animate content 8

gsap.from(".bo1,.bo2",{
x:-350,
duration:1,
opacity:0,
scrollTrigger:{
  trigger: ".content8",
  scroller: "body",
  scrub: 3,


}

})

gsap.from(".bo1 h1,.bo2 h1",
{
  scale:0,
  duration:1,
  opacity:0,
  delay:2,
  scrollTrigger:{
    trigger: ".boxes",
    scroller: "body",
  
  
  }




})

// here we animate contact us page 
sinu.from(".container",{
  x:-400,
 duration:1,
 opacity:0,
 scrollTrigger:{
  trigger: ".container",
  scroller: "body",
  scrub:5,
  start:"top 50%",
  end:"top 30%"


}



})

// here we animate footer page 

gsap.from(".footer-content",{

  y:80,
  duartion:1,
  opacity:0,
  scrollTrigger:{
    trigger: "footer",
    scroller: "body",
    scrub:5,
    start:"top 80%",
    end:"top 50%"
  

   
  
  
  }


})