import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
    name: String,
    mail: String,
    token: String,
    balance: Number
})