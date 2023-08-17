function init() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
      el: document.querySelector(".main"),
      smooth: true
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy(".main", {
      scrollTop(value) {
          return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
          return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
      },
      pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
  });


  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();

}

init()

var crsr = document.querySelector(".cursor")
var main = document.querySelector(".main")
document.addEventListener("mousemove",function(dets){
  crsr.style.left = dets.x + 20+"px"
  crsr.style.top = dets.y + 20+"px"
})

gsap.from(".page1 h1,.page1 h2", {
  y: 10,
  rotate: 10,
  opacity: 0,
  delay: 0.3,
  duration: 0.7
})
var tl = gsap.timeline({
  scrollTrigger: {
      trigger: ".page1 h1",
      scroller: ".main",
      // markers:true,
      start: "top 27%",
      end: "top 0",
      scrub: 3
  }
})
tl.to(".page1 h1", {
  x: -100,
}, "anim")
tl.to(".page1 h2", {
  x: 100
}, "anim")
tl.to(".page1 video", {
  width: "90%"
}, "anim")

var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".main",
        // markers:true,
        start: "top -50%",
        end: "top -120%",
        scrub: 3
    }
})
tl2.to(".main", {
    backgroundColor: "#fff",
})

var tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".main",
        // markers:true,
        start: "top -480%",
        end: "top -600%",
        scrub: 3
    }
})

tl3.to(".main",{
    backgroundColor:"#0F0D0D",

})

var boxes = document.querySelectorAll(".box")
boxes.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
       var att = elem.getAttribute("data-image")
       crsr.style.width = "450px"
       crsr.style.height = "400px"
       crsr.style.borderRadius= "0"
       crsr.style.backgroundImage = `url(${att})`
    })
    elem.addEventListener("mouseleave", function(){
        elem.style.backgroundColor = "transparent"
        crsr.style.width = "20px"
        crsr.style.height = "20px"
        crsr.style.borderRadius = "50%"
        crsr.style.backgroundImage = `none`
    })
})


let timVine = document.getElementById("main");
let navbar = document.getElementById("nav");

let navPos = navbar.getBoundingClientRect().top;

window.addEventListener("scroll", e => {
  let scrollPos = window.scrollY;
  if (scrollPos > navPos) {
    console.log()
    navbar.classList.add('sticky');
    main.classList.add('navbarOffsetMargin');
  } else {
    navbar.classList.remove('sticky');
    main.classList.remove('navbarOffsetMargin');
  }
});

function maneticButton(){var buttons = document.querySelectorAll(".btn__circle");

if (buttons) {
    buttons.forEach((btn) => {
        var offsetHoverMax = 1;
        var offsetHoverMin = 1;
        var hover = false;

        window.addEventListener("mousemove", function (e) {
            var hoverArea = hover ? offsetHoverMax : offsetHoverMin;

            var cursor = {
                x: e.clientX,
                y: e.clientY + this.window.scrollY,
            };

            var width = btn.clientWidth;
            var height = btn.clientHeight;

            function getOffset(element) {
                if (!element.getClientRects().length) {
                    return { top: 0, left: 0 };
                }

                let rect = element.getBoundingClientRect();
                let win = element.ownerDocument.defaultView;
                return {
                    top: rect.top + win.pageYOffset,
                    left: rect.left + win.pageXOffset,
                };
            }
            var offset = getOffset(btn);

            var elPos = {
                x: offset.left + width / 2,
                y: offset.top + height / 2,
            };

            var x = cursor.x - elPos.x;
            var y = cursor.y - elPos.y;

            var dist = Math.sqrt(x * x + y * y);

            var mutHover = false;

            if (dist < width * hoverArea) {
                mutHover = true;
                if (!hover) {
                    hover = true;
                }
                onHover(x, y);
            }

            if (!mutHover && hover) {
                onLeave();
                hover = false;
            }
        });

        var onHover = function (x, y) {
            document.body.classList.add("cursor__hidden");
            btn.classList.add("active");
            gsap.to(btn, 0.4, {
                x: x * 0.4,
                y: y * 0.4,
                ease: Power2.easeOut,
            });
            gsap.to(btn.querySelector("*"), 0.4, {
                x: x * 0.1,
                y: y * 0.1,
                ease: Power2.easeOut,
            });
        };

        var onLeave = function () {
            document.body.classList.remove("cursor__hidden");
            btn.classList.remove("active");
            gsap.to(btn, 1, {
                x: 0,
                y: 0,
                scale: 1,
                ease: Elastic.easeOut.config(1.2, 0.4),
            });
            gsap.to(btn.querySelector("*"), 1, {
                x: 0,
                y: 0,
                scale: 1,
                ease: Elastic.easeOut.config(1.2, 0.4),
            });
        };
    });
}

}
maneticButton();

// var h4 = document.querySelectorAll("#nav h4")
// var purple = document.querySelector(".purple")
// h4.forEach(function(elem){
//     elem.addEventListener("mouseenter",function(){
//         purple.style.display = "block"   
//         purple.style.opacity = "1"
//     })
//     elem.addEventListener("mouseleave",function(){
//         purple.style.display = "none"   
//         purple.style.opacity = "0"
//     })
// })


const hoverHeading1 = document.querySelector('.work');
const hoverHeading2 = document.querySelector('.home');
const hoverHeading3 = document.querySelector('.about');
const hoverHeading4 = document.querySelector('.contact');

const purple1 = document.getElementById('purple1');
const purple2 = document.getElementById('purple2');
const purple3 = document.getElementById('purple3');
const purple4 = document.getElementById('purple4');

hoverHeading1.addEventListener('mouseenter', () => {
  purple1.style.display = "block";
  purple1.style.opacity = "1";
});

hoverHeading1.addEventListener('mouseleave', () => {
  purple1.style.opacity = "0";
  purple1.style.display = "none";
});

hoverHeading2.addEventListener('mouseenter', () => {
  purple2.style.display = "block";
  purple2.style.opacity = "1";
});

hoverHeading2.addEventListener('mouseleave', () => {
  purple2.style.opacity = "0";
  purple2.style.display = "none";
});

hoverHeading3.addEventListener('mouseenter', () => {
  purple3.style.display = "block";
  purple3.style.opacity = "1";
});

hoverHeading3.addEventListener('mouseleave', () => {
  purple3.style.opacity = "0";
  purple3.style.display = "none";
});

hoverHeading4.addEventListener('mouseenter', () => {
    purple4.style.display = "block";
    purple4.style.opacity = "1";
  });
  
  hoverHeading4.addEventListener('mouseleave', () => {
    purple4.style.opacity = "0";
    purple4.style.display = "none";
  });
  

  document.addEventListener('DOMContentLoaded', function() {
    // Get references to the link and divs
    const workLink = document.getElementById('work-link');
    const divsToHide = [
      document.querySelector('.page1'),
      document.querySelector('.page2'),
      document.querySelector('.page3'),
      document.querySelector('.page4'),
      document.querySelector('.page5')
    ];
  
    // Add click event listener to the "Work" link
    workLink.addEventListener('click', function() {
      // Hide the divs
      divsToHide.forEach(div => {
        div.style.display = 'none';
      });
    });
  });
  






