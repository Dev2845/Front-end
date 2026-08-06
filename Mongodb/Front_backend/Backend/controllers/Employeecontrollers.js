const employee = require("../models/Employee")

const createemployee = async (req, res) => {
    try {

        const Employee = await employee.create(req.body);

        res.status(201).json({
            sucess: true,
            message: "employees Added",
            data: Employee
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}


const getall = async (req, res) => {
        const employees = await employee.find();

        res.json(employees);
}


const deleteEmployee = async(req,res) =>{
    try {
        await Employee.findByIdandDelete(req.params.id)

        res.status(200).json({
            message:"deleted"
        })
    } catch (error) {
        res.status(500).json({
            message: error.message,
        })
    }
}

module.exports = {getall,createemployee,deleteEmployee}