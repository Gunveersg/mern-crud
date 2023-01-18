const accounts = require('../models/accountsModel')
const mongoose = require('mongoose')

// get all 
const getAccounts = async (req, res) => {
  const allAccounts = await accounts.find({})
  res.status(200).json(allAccounts)
}



// create 
const createAccount = async (req, res) => {
  const {firstName, lastName, mobileNumber, age} = req.body

  const account = await accounts.findOne({mobileNumber: mobileNumber})
  if(account) {
    return res.status(400).json({error: 'Account already exists'})
  }

  // add to the database
  try {
    const account = await accounts.create({ firstName, lastName, mobileNumber, age})
    res.status(200).json(account)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// delete 
const deleteAccount = async (req, res) => {
  const { mobileNumber } = req.params
  const account = await accounts.findOneAndDelete({mobileNumber: mobileNumber})

  if(!account) {
    return res.status(400).json({error: 'Account does not exist'})
  }

  res.status(200).json(account)
}

// update
const updateAccount = async (req, res) => {
  const { mobileNumber } = req.params
  const account = await accounts.findOneAndUpdate({mobileNumber: mobileNumber}, {
    ...req.body
  })

  if (!account) {
    return res.status(400).json({error: 'No such account'})
  }

  res.status(200).json(account)
}

module.exports = {
    getAccounts,  
    createAccount, 
    deleteAccount, 
    updateAccount,
}