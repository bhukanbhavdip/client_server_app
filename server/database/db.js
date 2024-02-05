const mongoose = require("mongoose");
// const autoIncrement = require("mongoose-auto-increment")

const userSchema = mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    username:{
        type: String,
        required: true,
        unique: true
    },
    email:{
        type: String,
        unique: true,
        required: true
    },
    phone:{
        type: Number,
        unique: true,
        required: true
    }
},
    {timestamps:true}
);

// autoIncrement.initialize(mongoose.connection);
// userSchema.plugin(autoIncrement.plugin,'user');

const user = mongoose.model("user",userSchema);

module.exports = user;