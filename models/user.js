const { createHmac, randomBytes } = require("crypto");
const { Schema, model } = require("mongoose");
const { createTokenForUser } = require("../services/authentication");

const userSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
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
      enum: ["USER", "ADMIN"],
      default: "USER",
    },
  },
  { timestamps: true }
);

// Hash password before saving
userSchema.pre("save", function (next) {
  const user = this;

  // If password is not modified, skip hashing
  if (!user.isModified("password")) return next();

  const salt = randomBytes(16).toString("hex"); // ✅ added encoding
  const hashedPassword = createHmac("sha256", salt)
    .update(user.password)
    .digest("hex"); // ✅ fixed misplaced semicolon

  user.salt = salt;
  user.password = hashedPassword;

  next(); // ✅ added to proceed with save
});


userSchema.static("matchPasswordAndGenerateToken", async function(email,password)  {

  const user=await this.findOne({email});
  if(!user) throw new Error ('User not found!');
  const salt=user.salt;
  const hashedPassword=user.password;

  const userProvidedHash = createHmac("sha256", salt)
    .update(password)
    .digest("hex"); // ✅ fixed misplaced semicolon

    
    if(hashedPassword!==userProvidedHash) throw new Error ('Incorrect Password ');
    const token=createTokenForUser(user);
    return createTokenForUser(user);
});

const User = model("User", userSchema);
module.exports = User;
