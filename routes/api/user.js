var express=require("express");

var router=express.Router();

router.get("/",function(req,res){
console.json("this is json object");
});
module.exports=router;