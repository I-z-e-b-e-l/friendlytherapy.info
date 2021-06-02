const mongoose = require ('mongoose');


mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useFindAndModify: false
}, (err) => {
    if(!err) {
      console.log("Successful connection with MongoDB Server. Hurray! You're doing great!");  
    }
    else {
        console.log("Uh oh...Error with MongoDB's connectivity");
    }
  });

