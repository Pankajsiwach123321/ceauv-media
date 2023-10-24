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
    fix1.classList.toggle("fixer1")
    fix2.classList.toggle("fixer2")
    fix3.classList.toggle("fixer3")
    overlay.classList.toggle("left-0")
    bgbody.classList.toggle("over-flow")
    // nav.classList.toggle("left-corner")
})
overlay.addEventListener("click", function () {
    menubar.classList.toggle("left-0")
    fix1.classList.toggle("fixer1")
    fix2.classList.toggle("fixer2")
    fix3.classList.toggle("fixer3")
    loadtake.classList.toggle("nav-logo-routate")
    overlay.classList.toggle("left-0")
    bgbody.classList.toggle("over-flow")
    // nav.classList.toggle("left-corner")
})
finish.forEach(e => {
    e.addEventListener("click", function () {
        menubar.classList.remove("left-0")
        fix1.classList.toggle("fixer1")
        fix2.classList.toggle("fixer2")
        fix3.classList.toggle("fixer3")
        bgbody.classList.remove("over-flow")
        overlay.classList.toggle("left-0")
        loadtake.classList.toggle("nav-logo-routate")
        fix2.classList.toggle("fixer2")
        fix3.classList.toggle("fixer3")
        // nav.classList.toggle("left-corner")
    })
});