const express = require('express')
const {
  getAccounts,  
  createAccount, 
  deleteAccount, 
  updateAccount,
} = require('../controllers/accountsController')

const router = express.Router()

// get accounts
router.get('/', getAccounts)

// create account
router.post('/', createAccount)

// delete account
router.delete('/:mobileNumber', deleteAccount)

// update account
router.patch('/:mobileNumber', updateAccount)

module.exports = router