const mongoose = require ('mongoose');

const {Schema} = mongoose;

const providerSchema = new Schema ({
    name: {
        type: String,
        minLength: [4, 'Minimum length for a provider\'s first and last name is 4 characters.']
    },
    institution: {
        type: String,
        minLength: [3, 'Minimum length for provider\'s institution or practice is 3 characters.']
    },

    providerType: {
        type: String,
        minLength: [4, 'Minimum length for provider type is 4 characters.']
    },

    teletherapy: {
        type: Boolean
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

    final:{
        // required: [true, 'An image is required'],
    }

})

const Comic = mongoose.model('Comic', comicSchema)

module.exports=Comic;