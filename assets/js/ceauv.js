let nav = document.querySelector(".nav");
let menubar = document.querySelector(".menubar");
let loadtake = document.querySelector(".nav-logo")
let finish = document.querySelectorAll(".finish");
let overlay = document.querySelector(".over-layer")
let bgbody = document.querySelector(".bg-bodys");
let fix1 = document.querySelector(".fix1");
let fix2 = document.querySelector(".fix2");
let fix3 = document.querySelector(".fix3");
nav.addEventListener("click", function () {
    menubar.classList.toggle("left-0")
    nav.classList.toggle("nav-bg")
    fix1.classList.toggle("fixer1")
    fix2.classList.toggle("fixer2")
    fix3.classList.toggle("fixer3")
    overlay.classList.toggle("left-0")
    bgbody.classList.toggle("over-flow")
})
overlay.addEventListener("click", function () {
    menubar.classList.toggle("left-0")
    fix1.classList.toggle("fixer1")
    nav.classList.toggle("nav-bg")
    fix2.classList.toggle("fixer2")
    fix3.classList.toggle("fixer3")
    overlay.classList.toggle("left-0")
    bgbody.classList.toggle("over-flow")
})
finish.forEach(e => {
    e.addEventListener("click", function () {
        menubar.classList.remove("left-0")
        fix1.classList.toggle("fixer1")
        nav.classList.toggle("nav-bg")
        fix2.classList.toggle("fixer2")
        fix3.classList.toggle("fixer3")
        bgbody.classList.remove("over-flow")
        overlay.classList.toggle("left-0")
        fix2.classList.toggle("fixer2")
        fix3.classList.toggle("fixer3")
    })
});
// preloder
setTimeout(() => {
    document.getElementById("preloder").classList.add("d-none");
    document.body.classList.remove("overflow-hidden");
}, 2000);

// backtotop

function backtop() {
    window.scrollTo(0, 0);
}

window.addEventListener("scroll", function () {
    const mybackto = document.getElementById("backtops");
    if (window.scrollY > 500) {
        mybackto.style.display = "block";
    }
    else {
        mybackto.style.display = "none";
    }
});