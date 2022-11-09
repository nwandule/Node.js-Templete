var express=require("express");

var router=express.Router();

router.get("/",function(req,res){
console.log("Hell0 im on basic view");
res.render("_home/index");
});

router.get("/home",function(req,res){
    console.log("Im home now");
    res.render("_home/home");
 });

 router.get("/about",function(req,res){
    console.log("Im home now");
    res.render("_home/about");
 });
module.exports=router;