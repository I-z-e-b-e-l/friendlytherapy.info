const mongoose = require ('mongoose');

const {Schema} = mongoose;

const emailSchema = new Schema ({
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

const Email = mongoose.model('Email', emailSchema)

module.exports=Email;