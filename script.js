let ham = document.getElementById("class-i");
let xBar = document.getElementById("class-j");
let navCont = document.querySelector(".nav-container");
let b = document.querySelector("body");
navCont.style.display = "none";



ham.addEventListener("click", ()=>{
    if(navCont.style.display === "none"){
        navCont.style.display = "block";
        ham.style.display = "none";
        xBar.style.display = "block";
    }else{
        // navCont.style.display = "none";
        // ham.style.display = "block";
        // xBar.style.display = "none";
    //     ham.style.display = "block";
    // navCont.style.display = "none";
    // xBar.style.display = "none";

    }
});
xBar.addEventListener("click", ()=>{
    ham.style.display = "block";
    navCont.style.display = "none";
    xBar.style.display = "none";
});


    

