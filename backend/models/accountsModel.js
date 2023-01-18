const mongoose = require('mongoose')
const schema = mongoose.Schema({
      firstName:{
        type:'String',
        required: true
    },
      lastName:{
        type:'String',
        required:true
      },
      mobileNumber:{
        type:'Number',
        required:true
      },
      age:{
        type:'Number',
        min:0,
        max:100,
        required:true
    }
} )

 module.exports = mongoose.model('accounts', schema)