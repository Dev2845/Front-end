
let employee = [];

const addemployee = (req,res)=>{
    employee.push(req.body);

    res.status(201).json({
        message : "employee added successfully"
    })
}

// 
const getemlpoyee = (req,res)=>{
    res.status(200).json(employee)
}




// delete employee

const deleteemployee = (req,res)=>{

    const id = req.params.id
    employee = employee.filter(e => e.id != id)

    res.status(200).json({
        message:"employee deleted successfully"
    })
} 


// update employee

const updatesemployee = (req,res)=>{
    const id = req.params.id
    const employee = employee.filter(e=> e.id == id)

    if(employee){
        employee.name = req.body.name
        employee.salary = req.body.salary

        res.status(200).json({
            message : "employee update suceess"
        })
    } 
    else{
        res.status(404).json({
            message:"employee not found"
        })
    }
}

module.exports = {
    getemlpoyee,addemployee,
    updatesemployee,deleteemployee
}