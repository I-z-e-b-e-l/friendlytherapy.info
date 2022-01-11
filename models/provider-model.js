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

    whoAddedInfo: {
        type: [String]
    },

    credentials: {
        type: String
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
        type: [String]
    },

    location: {
        type: String
    },

    address: {
        type: String
    },

    queerRating: {
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

    adhdRating: {
        type: String
    },

    autismRating: {
        type: String
    },

    disabilityRating: {
        type: String
    },

    traumaRating: {
        type: String
    },

    substanceUseRating: {
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

    secondWebsite: {
        type: String
    },

    contact: {
        type: String
    },

    acceptInsurance: {
        type: Boolean
    },

    whichInsurance: {
        type: [String]
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