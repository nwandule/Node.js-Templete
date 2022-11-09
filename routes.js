var express=require("express");

var router=express.Router();

router.get("/",function(req,res){
console.log("Hello im on basic view");
res.render("_home/index");
});

router.get("/home",function(req,res){
    console.log("Im home now");
    res.render("_home/home");
    });
module.exports=router;