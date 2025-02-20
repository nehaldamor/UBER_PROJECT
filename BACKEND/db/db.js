const mongoose = require('mongoose');


function connectToDb() {
    mongoose.connect(process.env.DB_CONNECT
    ).then(() => {  console.log(`connected on ${process.env.DB_CONNECT}`);
      
    }).catch(err => console.log(err));
}


module.exports = connectToDb;