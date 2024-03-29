const img1 = document.getElementById("img1");
const bloc1 = document.getElementById("bloc1");
const text1 = document.getElementById("text1");
const bloc2 = document.getElementById("bloc2");
const text2 = document.getElementById("text2");
const img2 = document.getElementById("img2");
const mediaQuery = window.matchMedia('all and (max-device-width: 480px)')
img1.addEventListener('mouseenter', e => {
    if (mediaQuery.matches) {
        return;
    }
    text1.style.display= "block";
    img1.style.display= "block";
    img1.style.marginRight = "60px";
    bloc1.style.display="flex";
    bloc1.style.flexDirection= "row";
    bloc1.style.justifyContent= "space-around";
    bloc1.style.alignItems= "center";
    bloc1.style.margin = "0px 0px 25px 20 px" ;
    bloc1.style.paddingTop= "20px";
})
bloc1.addEventListener("mouseleave", e =>{
    if (mediaQuery.matches) {
        return;
    }
    setTimeout(() => {
        text1.style.display= "none";
        img1.style.boxShadow = "6px 6px 40px black";
        bloc1.style.display="block";
        img1.style.marginRight = "0px";    
    }, 200)
    
})

//Bloc2 animation

img2.addEventListener('mouseenter', e => {
    if (mediaQuery.matches) {
        return;
    }
    text2.style.display= "block";
    img2.style.display= "block";
    img2.style.marginRight = "60px";
    bloc2.style.display="flex";
    bloc2.style.flexDirection= "row";
    bloc2.style.justifyContent= "space-around";
    bloc2.style.alignItems= "center";
    bloc2.style.margin = "0px 0px 25px 20 px" ;
    bloc2.style.paddingTop= "20px";
    
})
bloc2.addEventListener("mouseleave", e =>{
    if (mediaQuery.matches) {
        return;
    }
    setTimeout(() => {
        text2.style.display= "none";
        img2.style.boxShadow = "6px 6px 40px black";
        bloc2.style.display="block";
        img2.style.marginRight = "0px";    
    }, 200)
})
if (mediaQuery.matches) {
    text1.style.display= "block";
    text2.style.display= "block";
    text2.style.marginBottom="10px";

    img1.style.display= "block";
    img2.style.display= "block";

    img1.style.width = "500px";
    img2.style.width = "500px";
    
    bloc1.style.display="flex";
    bloc1.style.flexDirection= "column";
    bloc1.style.justifyContent= "center";
    bloc1.style.alignItems= "center";
    bloc2.style.display="flex";
    bloc2.style.flexDirection= "column-reverse";
    bloc2.style.justifyContent= "center";
    bloc2.style.alignItems= "center";

}