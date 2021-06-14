const mongoose = require ('mongoose');

const {Schema} = mongoose;

const resourceSuggestionSchema = new Schema ({
    resourceName: {
        type: String,
    },

    resourceLink: {
        type: String,
    },

    resourceInfo: {
        type: String,
    },

    resourceKnow: {
        type: String,
    },

    dateSent: { 
        type: Date, default: Date.now() 
    },

})

const ResourceSuggestion = mongoose.model('ResourceSuggestion', resourceSuggestionSchema)

module.exports=ResourceSuggestion;