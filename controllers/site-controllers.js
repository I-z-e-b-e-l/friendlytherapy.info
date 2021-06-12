
module.exports = {

    index: (request, response) => {
        response.render('pages/index');
    },

    about: (request, response) => {
        response.render('pages/about');
    },

    contact: (request, response) => {
        response.render('pages/contact');
    },

    //send an email via the form on contact page
    contact_post: (request, response) => {
        response.sendFile(process.cwd() + "/pages/contact");
    },

    how_to: (request, response) => {
        response.render('pages/how-to');
    },

    resources: (request, response) => {
        response.render('pages/resources');
    },

    //send an email via the form on resources page
    // resource_suggest_post: (request, response) => {
    //     response.sendFile(process.cwd() + "/pages/resources.html");
    // },

}


