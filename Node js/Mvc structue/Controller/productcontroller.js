const getproduct = (req,res)=>{
    console.log("url",req.url,"req method",req.method);
    res.send("All product")
    res.end()
    }

    module.exports = getproduct