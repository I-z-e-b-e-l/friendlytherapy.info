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
    // document.querySelector('.add-provider-submit').style.display = "block";
    document.querySelector('#who-button-horizontal').classList.remove('button-align');
    document.querySelector('.spacer2').style.display = "none";
    document.querySelector('#who-button-horizontal').classList.add('center-me');
}

function displayProviderForm() {
    document.querySelector('.provider-add-provider').classList.add('show-me-resource');
    document.querySelector('#client-display-button').style.display = "none";
    // document.querySelector('.add-provider-submit').style.display = "block";
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

let checkBoxQueer = document.getElementById("queer_check");
let queerRating = document.getElementById("queer_rating");

function showQueerRating() {
    
    if (checkBoxQueer.checked == true){
        queerRating.style.display = "block";
    } else {
        queerRating.style.display = "none";
    }
}

let checkBoxTrans = document.getElementById("trans_check");
let transRating = document.getElementById("trans_rating");

function showTransRating() {
    if (checkBoxTrans.checked == true){
        transRating.style.display = "block";
    } else {
        transRating.style.display = "none";
    }
}

let checkBoxPoly = document.getElementById("nonmono_check");
let polyRating = document.getElementById("poly_rating");
function showPolyRating() {
    if (checkBoxPoly.checked == true){
        polyRating.style.display = "block";
    } else {
        polyRating.style.display = "none";
    }
  }

let checkBoxKink = document.getElementById("kink_check");
let kinkRating = document.getElementById("kink_rating");  
function showKinkRating() {
    if (checkBoxKink.checked == true){
        kinkRating.style.display = "block";
    } else {
        kinkRating.style.display = "none";
    }

}

let checkBoxSW = document.getElementById("sw_check");
let SWRating = document.getElementById("sw_rating");
function showSWRating() {
    if (checkBoxSW.checked == true){
        SWRating.style.display = "block";
    } else {
        SWRating.style.display = "none";
    }
}

let checkBoxBIPOC = document.getElementById("bipoc_check");
let bipocRating = document.getElementById("bipoc_rating");
function showBIPOCRating() {
    if (checkBoxBIPOC.checked == true){
        bipocRating.style.display = "block";
    } else {
        bipocRating.style.display = "none";
    }
}

let additionalRating = document.getElementById("additional_rating");

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



// manage checkboxes

    //name = license_state_client_input

// let license_state_client_input_array = []
// let license_state_client_input_checkboxes = document.querySelectorAll('input[type=checkbox]:checked')

// for (let i = 0; i < license_state_client_input_checkboxes.length; i++) {
//     license_state_client_input_array.push(license_state_client_input_checkboxes[i].value)
// }


    //a variable that will hold the index number of the selected radio button
    // var theone
// for (i=0;i<document.tv.station.length;i++){
// if (document.tv.station[i].checked==true){
// theone=i
//break //exist for loop, as target acquired.
//}
//}







//contact page

// const contactForm = document.getElementById("contact-form"); 
// const formEvent = form.addEventListener("submit", (event) => {
//     event.preventDefault();

// let mail = new FormData(form);
// sendMail(mail);
// })

// const sendMail = (mail) => {
//     fetch("https://nodemailer-vic-lo.herokuapp.com/send", {
//         method: "post", //2.
//         body: mail, //3.
    
//       }).then((response) => {
//         return response.json();
//       });
//     };