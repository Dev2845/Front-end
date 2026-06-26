const os = require("os")

console.log("plateform",os.platform());
console.log("cpu",os.cpus().length);
console.log("total memory",os.totalmem());
console.log("free memory",os.freemem());
console.log(os.hostname())

