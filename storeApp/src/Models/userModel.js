import mongoose from 'mongoose';
const UserSchema = mongoose.Schema;

const UserModel = new UserSchema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique:true },
    password: { type: String, required: false },
    role: { type: String, required: false },
    shop: { type: String, required: false },
});

const User = mongoose.model('user', UserModel);
export default User;