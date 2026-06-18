// 1.local module

const getsum = function(a,b){
    return a+b
}
const getsub = function(a,b){
    return a-b
}
const getmulti = function(a,b){
    return a*b
}
const getdivide = function(a,b){
    return a/b
}

// module.exports = getsum;
// module.exports = getsub;

module.exports = {getsub,getsum,getmulti,getdivide
    
}