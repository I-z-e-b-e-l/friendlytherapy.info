//contact page

console.log("ooooo... I'm a sexy sexy script for your contact page. Hello.")

const contactForm = document.getElementById("contact-form"); 
const formEvent = contactForm.addEventListener("submit", (event) => {
    // event.preventDefault();

let mail = new FormData(contactForm);
sendMail(mail);
})

const sendMail = (mail) => {
    fetch("https://friendlytherapy.herokuapp.com/contact", {
    // fetch("http://localhost:3000/contact", {
        method: "post", 
        body: mail,
    
      }).then((response) => {
        // return response.json();
        return response;
      });
    }; 