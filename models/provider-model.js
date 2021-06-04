const mongoose = require ('mongoose');

const {Schema} = mongoose;

const providerSchema = new Schema ({
    name: {
        type: String,
        minLength: [4, 'Minimum length for a provider\'s first and last name is 4 characters.']
    },
    practice: {
        type: String,
        minLength: [3, 'Minimum length for provider\'s institution or practice is 3 characters.']
    },

    providerType: {
        type: String,
        minLength: [4, 'Minimum length for provider type is 4 characters.']
    },
    
    acceptingClients: {
        type: String
    },

    teletherapy: {
        type: String
    },

    licenseState: {
        type: String 
    },

    location: {
        type: String
    },

    queerRating: {
        type: Number,
        minimum: [0, 'Minimum rating is 0.'],
        maximum: [3, 'Maximum rating is 3.']
    },

    transRating: {
        type: Number,
        minimum: [0, 'Minimum rating is 0.'],
        maximum: [3, 'Maximum rating is 3.']
    },

    polyRating: {
        type: Number,
        minimum: [0, 'Minimum rating is 0.'],
        maximum: [3, 'Maximum rating is 3.']
    },

    kinkRating: {
        type: Number,
        minimum: [0, 'Minimum rating is 0.'],
        maximum: [3, 'Maximum rating is 3.']
    },

    swRating: {
        type: Number,
        minimum: [0, 'Minimum rating is 0.'],
        maximum: [3, 'Maximum rating is 3.']
    },

    bipocRating: {
        type: Number,
        minimum: [0, 'Minimum rating is 0.'],
        maximum: [3, 'Maximum rating is 3.']
    },

    additionalRating: {
        type: String
    },

    commentsReCommunity: {
        type: String
    },

    couplesTherapy: {
        type: String
    },

    youthTherapy: {
        type: String
    },

    website: {
        type: String
    },

    contact: {
        type: String
    },

    acceptInsurance: {
        type: String
    },

    whichInsurance: {
        type: String
    },

    acceptMassHealth: {
        type: String
    },

    cost: {
        type: String
    },

    accessibility: {
        type: String
    },

    comments: {
        type: String
    },

    commentsAdmin: {
        type: String
    },

})

const Provider = mongoose.model('Provider', providerSchema)

module.exports=Provider;