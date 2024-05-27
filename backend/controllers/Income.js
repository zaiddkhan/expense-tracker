const IncomeModel = require("../models/IncomeModel")

exports.addIncome = async (req,res) => {
    const { title,amount,category,description,date} = req.body
    const income = IncomeModel({
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

exports.getIncomes = async (req,res) => {
    try{
        const incomes = await IncomeModel.find().sort({createdAt : -1})
        res.status(200).json(incomes)
    }catch(err){
        res.status(500).json(
            {
                message : 'error'
            }
        )
    }
}

exports.deleteIncome = async (req,res) => {
    try{
        const { id } = req.params;
        IncomeModel.findByIdAndDelete(id)
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