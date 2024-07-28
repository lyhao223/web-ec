import mongoose, {models, Schema} from "mongoose";
import { use } from "react";

const userSchema = new Schema({
    email:{
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    address: {
        city:{
            type: String,
            required: true
        },
        street:{
            type: String,
            required: true
        }
    },
    phone:{
        type: Number,
        required: true
    }
}, {timestamps: true});

const User = models.User || mongoose.model("User", userSchema);

export default User;