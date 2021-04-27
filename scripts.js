console.log("I'm alive!!")


//HEADER

const hamburgerMenu = document.querySelector("#hamburger");
const menuItems = document.querySelector('.link-menu');
const toggleMenu = function () {
    menuItems.classList.toggle('open');
}
hamburgerMenu.addEventListener('click', toggleMenu);


// MOAR RESOURCES PAGE

function displaySWresource(){
    for (let i=0; i<document.querySelectorAll(".sw-resource").length; i++){
          document.querySelectorAll(".sw-resource")[i].classList.toggle('show-me-resource'); 
    }
}

function displayTransResource(){
    for (let i=0; i<document.querySelectorAll(".trans-resource").length; i++){
          document.querySelectorAll(".trans-resource")[i].classList.toggle('show-me-resource'); 
    }
}

function displayKinkResource(){
    for (let i=0; i<document.querySelectorAll(".kink-resource").length; i++){
        document.querySelectorAll(".kink-resource")[i].classList.toggle('show-me-resource'); 
}
}



// ...etc. Is there a more efficient way to do this?



// returns and applies only to first instance of .client-add-provider
//revisit form plan
//Make provider button disapear

// why does style.display work but not .classListadd('show-me-resource')???

function displayClientForm() {
    document.querySelector('.client-add-provider').classList.add('show-me-resource');
    document.querySelector('#provider-display-button').style.display = "none";
    // document.getElementById('add-provider-submit').classList.add('show-me-resource');
    // document.querySelector('.add-provider-submit').classList.add('show-me-resource');
    document.querySelector('.add-provider-submit').style.display = "block";

}


function displayProviderForm() {
    document.querySelector('.provider-add-provider').classList.add('show-me-resource');
    document.querySelector('#client-display-button').style.display = "none";
    document.querySelector('.add-provider-submit').style.display = "block";
}


// function displayClientForm() {
//     // this displays the form version
//     document.querySelector('.client-add-provider').classList.add('show-me-resource');
//     // this should display submit button but does not
//     document.getElementById('add-provider-submit').classList.add('show-me-resource');
//      document.querySelector('#add-provider-submit').classList.add('show-me-resource')
// }




// display rating options when identity is clicked

let checkBoxQueer = document.getElementById("queer-check");
let queerRating = document.getElementById("queer-rating");

function showQueerRating() {
    
    if (checkBoxQueer.checked == true){
        queerRating.style.display = "block";
    } else {
        queerRating.style.display = "none";
    }
}

let checkBoxTrans = document.getElementById("trans-check");
let transRating = document.getElementById("trans-rating");

function showTransRating() {
    if (checkBoxTrans.checked == true){
        transRating.style.display = "block";
    } else {
        transRating.style.display = "none";
    }
}

let checkBoxPoly = document.getElementById("nonmono-check");
let polyRating = document.getElementById("poly-rating");
function showPolyRating() {
    if (checkBoxPoly.checked == true){
        polyRating.style.display = "block";
    } else {
        polyRating.style.display = "none";
    }
  }

let checkBoxKink = document.getElementById("kink-check");
let kinkRating = document.getElementById("kink-rating");  
function showKinkRating() {
    if (checkBoxKink.checked == true){
        kinkRating.style.display = "block";
    } else {
        kinkRating.style.display = "none";
    }

}

let checkBoxSW = document.getElementById("sw-check");
let SWRating = document.getElementById("sw-rating");
function showSWRating() {
    if (checkBoxSW.checked == true){
        SWRating.style.display = "block";
    } else {
        SWRating.style.display = "none";
    }
}

let checkBoxBIPOC = document.getElementById("bipoc-check");
let bipocRating = document.getElementById("bipoc-rating");
function showBIPOCRating() {
    if (checkBoxBIPOC.checked == true){
        bipocRating.style.display = "block";
    } else {
        bipocRating.style.display = "none";
    }
}

let additionalRating = document.getElementById("additional-rating");

function showAdditionalRating() {
    if ((checkBoxQueer.checked == true) || (checkBoxTrans.checked == true) || (checkBoxPoly.checked == true)  (checkBoxKink.checked == true) ||  (checkBoxSW.checked == true) ||  (checkBoxBIPOC.checked == true)){
        additionalRating.style.display = "block";
    } else {
        additionalRating.style.display = "none";
    }
}


