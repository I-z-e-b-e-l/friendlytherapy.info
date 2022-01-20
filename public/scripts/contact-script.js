//contact page

console.log("oh hai! I'm a script for your contact page doing the thing!")

const contactForm = document.getElementById("contact-form"); 
const formEvent = contactForm.addEventListener("submit", (event) => {
    // event.preventDefault();

  let mail = new FormData(contactForm);
  sendMail(mail);
});

const sendMail = (mail) => {
    fetch("https://friendlytherapy.herokuapp.com/contact", {
    // fetch("http://localhost:3000/contact", {
        method: "POST", 
        body: mail,
    
      }).then((response) => {
        // return response.json();
        return response;
      });
    }; 