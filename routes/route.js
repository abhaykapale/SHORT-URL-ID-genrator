const express=require("express");
const { getURL, Redirect }=require("../controllers/user")
const router=express.Router();

router.route('/')
.post(getURL)

router.get('/:id',Redirect)

module.exports= router;