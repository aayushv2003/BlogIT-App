require('dotenv').config();
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const { checkForAuthenticationCookie } = require("./middlewares/authentication");

const app = express();
const PORT = process.env.PORT || 8000;

// --- DB ---
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error("MongoDB connection error:", err));

// --- Views ---
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

// --- Middlewares (order matters) ---
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(checkForAuthenticationCookie("token"));
app.use(express.static(path.resolve('./public')));

// Make user available in all EJS views/partials
app.use((req, res, next) => {
  res.locals.user = req.user || null;
  next();
});

// --- Routes ---
const userRoute = require("./routes/user");
const blogRoute = require("./routes/blog");
const Blog = require("./models/blog");

app.get("/", async (req, res) => {
  // res.locals.user already set

  const allBlogs=await Blog.find({});
  res.render("home",{
    user:req.user,
    blogs:allBlogs,
  });
});

app.use("/user", userRoute);
app.use("/blog", blogRoute);

// --- Start server ---
app.listen(PORT, () => {
  console.log(`Server Started at PORT: ${PORT}`);
});
