const { Router } = require("express");
const router = Router();
const User = require("../models/user"); // ✅ Make sure to import your User model

// GET: Signin page
router.get("/signin", (req, res) => {
    return res.render("signin");
});

// GET: Signup page
router.get("/signup", (req, res) => {
    return res.render("signup"); // ❌ removed '/' at start
});


router.post("/signin",async(req,res)=>{

    const{email,password}=req.body;
    try{
        const token=await User.matchPasswordAndGenerateToken(email,password);

    
        return res.cookie("token",token).redirect("/");
    } catch(error){
        return res.render('signin',{
            error: "Incorrect Email or Password",
    });
    }
    
});

router.get("/logout",(req,res)=> {
    res.clearCookie("token").redirect("/");
});
// POST: Signup form submission
router.post("/signup", async (req, res) => { // ✅ added async
    try {
        const { fullName, email, password } = req.body;

        await User.create({
            fullName,
            email,
            password,
        });

        return res.redirect("/");
    } catch (error) {
        console.error("Signup error:", error);
        return res.status(500).send("Something went wrong");
    }
});

module.exports = router;
