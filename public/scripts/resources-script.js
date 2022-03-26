//SUGGEST A RESOURCE

console.log("OMG I'm the resources script and I'm doing the thing!")

const resourceForm = document.getElementById("add-resource-form"); 
const resourceformEvent = resourceForm.addEventListener("submit", (event) => {
    // event.preventDefault();

  let mail = new FormData(resourceForm);
  sendResourceMail(mail);
})

const sendResourceMail = (mail) => {
    // fetch("https://friendlytherapy.herokuapp.com/contact", { 
    fetch("https://friendlytherapy.herokuapp.com/resources", { 
    // fetch("http://localhost:3000/resources", {
        method: "POST", 
        body: mail,
    
      }).then((response) => {
        return response;
      });
    }; 