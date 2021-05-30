console.log("I'm alive!!")


//HEADER

const hamburgerMenu = document.querySelector("#hamburger");
const menuItems = document.querySelector('.link-menu');
const toggleMenu = function () {
    menuItems.classList.toggle('open');
}
hamburgerMenu.addEventListener('click', toggleMenu);


// FOOTER

const caretDown = document.querySelector("#caret-down-plz"); 
const caretUp = document.querySelector("#caret-up"); 
const extendfooter = document.querySelector(".extend-footer")

const toggleFatFooter = function() {
    extendfooter.classList.toggle('open');
    // caretUp.classList.toggle('open');
    //does not work
    // caretDown.classList.toggle('hide');
}

caretDown.addEventListener('click', toggleFatFooter);



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

function displayBIPOCResource(){
    for (let i=0; i<document.querySelectorAll(".bipoc-resource").length; i++){
        document.querySelectorAll(".bipoc-resource")[i].classList.toggle('show-me-resource'); 
}
}

function displayKinkResource(){
    for (let i=0; i<document.querySelectorAll(".kink-resource").length; i++){
        document.querySelectorAll(".kink-resource")[i].classList.toggle('show-me-resource'); 
}
}

function displayPolyResource(){
    for (let i=0; i<document.querySelectorAll(".poly-resource").length; i++){
        document.querySelectorAll(".poly-resource")[i].classList.toggle('show-me-resource'); 
}
}

function displayAllResource(){
    for (let i=0; i<document.querySelectorAll(".resource-square").length; i++){
        document.querySelectorAll(".resource-square")[i].classList.toggle('show-me-resource'); 
}
}


function displayAddResourceForm() {
    document.querySelector('#add-resource-form').style.display = "block";
    document.querySelector('#show-resources-form-button').style.display = "none";   

}

function displayThankYouResource(){
    document.querySelector('#thank-you-resource').style.display = "block";
}


//  ADD TO THE LIST

function displayClientForm() {
    document.querySelector('.client-add-provider').classList.add('show-me-resource');
    document.querySelector('#provider-display-button').style.display = "none";
    document.querySelector('.add-provider-submit').style.display = "block";
    document.querySelector('#who-button-horizontal').classList.remove('button-align');
    document.querySelector('.spacer2').style.display = "none";
    document.querySelector('#who-button-horizontal').classList.add('center-me');
}

function displayProviderForm() {
    document.querySelector('.provider-add-provider').classList.add('show-me-resource');
    document.querySelector('#client-display-button').style.display = "none";
    document.querySelector('.add-provider-submit').style.display = "block";
    document.querySelector('#who-button-horizontal').classList.remove('button-align');
    document.querySelector('#who-button-horizontal').classList.add('center-me');
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

function displayThankYouAdd(){
    document.querySelector('.thank-you-add').style.display = "block";
}
