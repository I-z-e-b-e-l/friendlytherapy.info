const mongoose = require ('mongoose');

const {Schema} = mongoose;

const resourceSchema = new Schema ({
    name: {
        type: String,
    },

    email: {
        type: String,
    },

    message: {
        type: String,
    },

    dateSent: { 
        type: Date, default: Date.now() 
    },

})

const Resource = mongoose.model('Resource', resourceSchema)

module.exports=Resource;