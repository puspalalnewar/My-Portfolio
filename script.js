let ham = document.getElementById("class-i");
let xBar = document.getElementById("class-j");
let navCont = document.querySelector(".nav-container");
let b = document.querySelector("body");
let c = document.querySelector(".nav-links");
navCont.style.display = "none";



if (c.style.display === "block") {
    b.style.color = "red"; 
    // ham.style.display = "none";
    // navCont.style.display = "none";
    // xBar.style.display = "none";
}
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




// if(b.style.width >= "762px"){
//     ham.style.display = "none";
//     navCont.style.display = "none";
//     xBar.style.display = "none";
// }




