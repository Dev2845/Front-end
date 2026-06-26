const getuser = (req,res)=>{
    console.log("url :",req.url,"methdo :",req.method)
    res.send("All users");
    res.end()
}

module.exports = {
    getuser
}