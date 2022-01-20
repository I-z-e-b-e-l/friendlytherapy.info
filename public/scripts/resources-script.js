//SUGGEST A RESOURCE

console.log("OMG I'm a resource script and I'm runnin baby!!!")

const resourceForm = document.getElementById("add-resource-form"); 
const resourceformEvent = resourceForm.addEventListener("submit", (event) => {
    // event.preventDefault();

let mail = new FormData(resourceForm);
sendResourceMail(mail);
})

const sendResourceMail = (mail) => {
    // fetch("https://friendlytherapy.herokuapp.com/contact", { 
    // should probably be: 
    // fetch("https://friendlytherapy.herokuapp.com/resources", { 
    fetch("http://localhost:3000/resources", {
        method: "post", 
        body: mail,
    
      }).then((response) => {
        return response;
      });
    }; 