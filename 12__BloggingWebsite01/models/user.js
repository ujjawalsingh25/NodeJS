
const { error } = require('console');
const {createHmac, randomBytes} = require('crypto')
const {Schema, model} = require('mongoose')

const userSchema = new Schema({
    fullName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    salt: {
        type: String,
    },
    password: {
        type: String,
        required: true,
    },
    profileImageURL: {
        type: String,
        default: "/images/default.png",
    },
    role: {
        type: String,
        enum: ["USER", "ADMIN"],    // can't assign other value except the two.
        default: "USER",
    },
}, {timestamps: true});

userSchema.pre("save", function(next) {         // Generates salt for all user before saving its Schema-Data.
    const user = this;
    if(!user.isModified("password"))    return; 

    const salt = randomBytes(16).toString();        // Every user have a random 16 digit Secret-Key i.e Salt
    const hashedPassword = createHmac('sha256', salt)       // (Algorithm, Secret-Key) the Salt hashed with User's password
    .update(user.password)                                  // update password
    .digest("hex");                                           

    this.salt = salt;
    this.password = hashedPassword;                 // original password have been replaced now.
    
    next();
});

userSchema.static('matchPassword', async function(email, password) {
    const user = await this.findOne({email});
    if(!user) throw new Error('User not Found!');

    const salt = user.salt;
    const hashedPassword = user.password;
    const userProvidedHash = createHmac('sha256', salt)       // (Algorithm, Secret-Key) the Salt hashed with User's password
    .update(password)                                  // update password
    .digest("hex"); 
    
    if(hashedPassword !== userProvidedHash) throw new Error('Incorrect Password');
             // if matched then user given same || right password.

    return user;
})

const User = model('user', userSchema);

module.exports = User;