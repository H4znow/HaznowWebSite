const creation1 = document.getElementById("creation1");
const creation2 = document.getElementById("creation2");
const creation3 = document.getElementById("creation3");
const creation4 = document.getElementById("creation4");
const creation5 = document.getElementById("creation5");
const creation6 = document.getElementById("creation6");
const creation7 = document.getElementById("creation7");
const creations = [creation1, creation2, creation3, creation4, creation5, creation6, creation7];
const mediaQuery = window.matchMedia('all and (max-device-width: 480px)');
const classCreations = document.getElementsByClassName("creation");
/*creation1.addEventListener('mouseenter', e => {
    if (mediaQuery.matches) {
        return;
    }
    creation1.style.boxShadow = "6px 6px 10px #black";
    creation1.style.border = "3px solid #474747";
    creation1.style.width = "200px";
    creation1.style.height = "300px";
})
creation1.addEventListener('mouseleave', e =>{
    if (mediaQuery.matches) {
        return;
    }
    creation1.style.boxShadow = "2px 5px 10px black";
    creation1.style.border = "none";
    creation1.style.width = "150px";
    creation1.style.height = "250px";
})
creation2.addEventListener('mouseenter', e => {
    if (mediaQuery.matches) {
        return;
    }
    creation2.style.boxShadow = "6px 6px 10px #black";
    creation2.style.border = "3px solid #474747";
    creation2.style.width = "200px";
    creation2.style.height = "300px";
})
creation2.addEventListener('mouseleave', e =>{
    if (mediaQuery.matches) {
        return;
    }
    creation2.style.boxShadow = "2px 5px 10px black";
    creation2.style.border = "none";
    creation2.style.width = "150px";
    creation2.style.height = "250px";
})
creation3.addEventListener('mouseenter', e => {
    if (mediaQuery.matches) {
        return;
    }
    creation3.style.boxShadow = "6px 6px 10px #black";
    creation3.style.border = "3px solid #474747";
    creation3.style.width = "200px";
    creation3.style.height = "300px";
})
creation3.addEventListener('mouseleave', e =>{
    if (mediaQuery.matches) {
        return;
    }
    creation3.style.boxShadow = "2px 5px 10px black";
    creation3.style.border = "none";
    creation3.style.width = "150px";
    creation3.style.height = "250px";
})
creation4.addEventListener('mouseenter', e => {
    if (mediaQuery.matches) {
        return;
    }
    creation4.style.boxShadow = "6px 6px 10px #black";
    creation4.style.border = "3px solid #474747";
    creation4.style.width = "200px";
    creation4.style.height = "300px";
})
creation4.addEventListener('mouseleave', e =>{
    if (mediaQuery.matches) {
        return;
    }
    creation4.style.boxShadow = "2px 5px 10px black";
    creation4.style.border = "none";
    creation4.style.width = "150px";
    creation4.style.height = "250px";
})
creation5.addEventListener('mouseenter', e => {
    if (mediaQuery.matches) {
        return;
    }
    creation5.style.boxShadow = "6px 6px 10px #black";
    creation5.style.border = "3px solid #474747";
    creation5.style.width = "200px";
    creation5.style.height = "300px";
})
creation5.addEventListener('mouseleave', e =>{
    if (mediaQuery.matches) {
        return;
    }
    creation5.style.boxShadow = "2px 5px 10px black";
    creation5.style.border = "none";
    creation5.style.width = "150px";
    creation5.style.height = "250px";
})
creation6.addEventListener('mouseenter', e => {
    if (mediaQuery.matches) {
        return;
    }
    creation6.style.boxShadow = "6px 6px 10px #black";
    creation6.style.border = "3px solid #474747";
    creation6.style.width = "200px";
    creation6.style.height = "300px";
})
creation6.addEventListener('mouseleave', e =>{
    if (mediaQuery.matches) {
        return;
    }
    creation6.style.boxShadow = "2px 5px 10px black";
    creation6.style.border = "none";
    creation6.style.width = "150px";
    creation6.style.height = "250px";
})
creation7.addEventListener('mouseenter', e => {
    if (mediaQuery.matches) {
        return;
    }
    creation7.style.boxShadow = "6px 6px 10px #black";
    creation7.style.border = "3px solid #474747";
    creation7.style.width = "200px";
    creation7.style.height = "300px";
})
creation7.addEventListener('mouseleave', e =>{
    if (mediaQuery.matches) {
        return;
    }
    creation7.style.boxShadow = "2px 5px 10px black";
    creation7.style.border = "none";
    creation7.style.width = "150px";
    creation7.style.height = "250px";
})*/
if (mediaQuery.matches) {
    for(let i =0; i < creations.length; i++){
        creations[i].style.marginRight="20px";
        creations[i].style.marginTop="15px";
        creations[i].style.width = "250px";
        creations[i].style.height = "400px";
        creations[i].style.fontSize = "1.5em";
    }
    const chatBox = document.getElementById("chatBox");
    const titrePartage = document.getElementById("titrePartage");
    titrePartage.style.fontSize = "5em";
    chatBox.style.display = "none";
}

