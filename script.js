let ham = document.getElementById("class-i");
let xBar = document.getElementById("class-j");
let navCont = document.querySelector(".nav-container");
navCont.style.display = "none";

ham.addEventListener("click", () => {
    if (navCont.style.display === "none") {
        navCont.style.display = "block";
        ham.style.display = "none";
        xBar.style.display = "block";
    }
});
xBar.addEventListener("click", () => {
    ham.style.display = "block";
    navCont.style.display = "none";
    xBar.style.display = "none";
});





