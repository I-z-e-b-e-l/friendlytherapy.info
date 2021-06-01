
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

    how_to: (request, response) => {
        response.render('pages/how-to');
    },

    resources: (request, response) => {
        response.render('pages/resources');
    }


}


