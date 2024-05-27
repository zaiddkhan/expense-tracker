const ExpenseSchema = require("../models/ExpenseModel")

exports.addExpense = async (req,res) => {
    const { title,amount,category,description,date} = req.body
    const income = ExpenseSchema({
        title,
        amount,
        category,
        description,
        date
    })
    
    try{
        if(!title || !category || !amount || !description || !date){
            return res.status(400).json({
                message : "invalid input"
            }
            )
        }
        await income.save()
        res.status(200).json({
            message : "succesfully saved"
        })

    }catch(err){

    }


}

exports.getExpenses = async (req,res) => {
    try{
        const incomes = await ExpenseSchema.find().sort({createdAt : -1})
        res.status(200).json(incomes)
    }catch(err){
        res.status(500).json(
            {
                message : 'error'
            }
        )
    }
}

exports.deleteExpense = async (req,res) => {
    try{
        const { id } = req.params;
        ExpenseSchema.findByIdAndDelete(id)
        .then((income) => {
            res.status(200).json({
                message : 'Income deleted'
            })
        })
    }catch(err){
        res.status(500).json({
            message : 'Server error'
        })
    }
}