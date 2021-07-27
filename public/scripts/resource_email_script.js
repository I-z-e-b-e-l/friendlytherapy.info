const resourceForm = document.getElementById("add-resource-form"); 
const resourceformEvent = resourceForm.addEventListener("submit", (event) => {
    // event.preventDefault();

let mail = new FormData(resourceForm);
sendResourceMail(mail);
})

const sendResourceMail = (mail) => {
    // fetch("https://friendlytherapy.herokuapp.com/contact", {
    fetch("http://localhost:3000/contact", {
        // headers: {'Content-Type': 'application/json'},
        method: "post", 
        body: mail,
    
      }).then((response) => {
        return response.json();
      });
    }; 