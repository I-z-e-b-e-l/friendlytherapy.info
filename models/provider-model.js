const mongoose = require ('mongoose');

const {Schema} = mongoose;

const providerSchema = new Schema ({
    name: {
        type: String,
        minLength: [4, 'Minimum length for a provider\'s first and last name is 4 characters.']
    },
    practice: {
        type: String
        // minLength: [3, 'Minimum length for provider\'s institution or practice is 3 characters.']
    },

    providerType: {
        type: [String],
        minLength: [4, 'Minimum length for provider type is 4 characters.']
    },

    pronouns: {
        type: String
    },

    licensure: {
        type: String
    },
    
    acceptingClients: {
        type: String
    },

    teletherapy: {
        type: Boolean
    },

    licenseState: {
        // type: [] 
        type: [String]
    },

    location: {
        type: String
    },

    queerRating: {
        // type: Number,
        // minimum: [0, 'Minimum rating is 0.'],
        // maximum: [3, 'Maximum rating is 3.']
        type: String
    },

    transRating: {
        type: String
    },

    polyRating: {
        type: String
    },

    kinkRating: {
        type: String
    },

    swRating: {
        type: String
    },

    bipocRating: {
        type: String
    },

    additionalRating: {
        type: String
    },

    commentsReCommunity: {
        type: String
    },

    couplesTherapy: {
        type: Boolean
    },

    youthTherapy: {
        type: Boolean
    },

    website: {
        type: String
    },

    contact: {
        type: String
    },

    acceptInsurance: {
        type: Boolean
    },

    whichInsurance: {
        type: String
    },

    additionalInsurance: {
        type: String
    },

    insuranceFromClient: {
        type: String
    },

    acceptMassHealth: {
        type: Boolean
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

    lastUpdate: {
        type: String
    },

    added: { 
        type: Date, default: Date.now() 
    },

    whoAddedInfo: {
        type: String
    }

})

const Provider = mongoose.model('Provider', providerSchema)

module.exports=Provider;