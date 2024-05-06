const lowerNav = document.getElementById("lower-nav");

let currentPosition;
let newPosition;


const ToggleLowerNav = () =>{
    if(currentPosition > 0){
        lowerNav.classList.add("hidden");   
    }
    
    if(currentPosition < newPosition){
        lowerNav.classList.remove("hidden");
    }
}

window.onscroll = function() {
    currentPosition = document.documentElement.scrollTop;
    
    ToggleLowerNav();
    newPosition = currentPosition;
};