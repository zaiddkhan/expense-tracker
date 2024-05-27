const express = require('express');
const { addIncome, getIncomes, deleteIncome } = require('../controllers/Income');
const { addExpense, getExpenses, deleteExpense } = require('../controllers/expenses');
const router = express.Router();


router.post('/add-income',addIncome)
.get('/get-incomes',getIncomes)
.delete('/delete-income/:id',deleteIncome)
.post('/add-expense',addExpense)
.get('/get-expenses',getExpenses)
.delete('delete-expense/:id',deleteExpense)


module.exports = router