import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AccountForm = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [mobileNumber, setMobileNumber] = useState('')
  const [age, setAge] = useState('')
  const [firstNameErr, setFirstNameErr] = useState(false)
  const [lastNameErr, setLastNameErr] = useState(false)
  const [mobileNumberErr, setMobileNumberErr] = useState(false)
  const [ageErr, setAgeErr] = useState(false)
  const [error, setError] = useState(false)
  

  const handleSubmit = async (e) => {
    e.preventDefault()

    const account = {firstName, lastName, mobileNumber, age}
    
    const response = await fetch('/api/accounts', {
      method: 'POST',
      body: JSON.stringify(account),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
    }
    if (response.ok) {
      setError(false)

      setFirstName('')
      setLastName('')
      setMobileNumber('')
      setAge('')
      setAgeErr(false)
      setFirstNameErr(false)
      setLastNameErr(false)
      setMobileNumberErr(false)

      console.log('new account added:', json)
      navigate('/');

    }

  }

  return (
    <form className="createForm" onSubmit={handleSubmit}> 
      <h3>Add a New Account</h3>

      <label>First Name:</label>
      <input 
        type="text" 
        onChange={(e) => {

            if(e.target.value.match("^[a-zA-Z]*$")!=null) {
                 setFirstNameErr(false)
                 setFirstName(e.target.value)
              }
            else{
                setFirstNameErr(true)
            }
        }
        } 
        value={firstName}
      />
      {firstNameErr?<div className='inputerr'>Only aplhabets allowed</div>:""}

      <label>Last Name:</label>
      <input 
        type="text" 
        onChange={(e) => {

            if(e.target.value.match("^[a-zA-Z]*$")!=null) {
                setLastNameErr(false) 
                setLastName(e.target.value)
              }
            else{
                setLastNameErr(true)
            }
        }
        } 
        value={lastName}
      />
      {lastNameErr?<div className='inputerr'>Only aplhabet allowed</div>:""}

      <label>Mobile Number:</label>
      <input 
        type="number" 
        onChange={(e) => {
            if(e.target.value.match("^[0-9]{10}$")!=null) {
                setMobileNumberErr(false) 
                setMobileNumber(e.target.value)
              }
            else{
                setMobileNumberErr(true)
                setMobileNumber(e.target.value)
            }
        }
        } 
        value={mobileNumber} 
      />
      {mobileNumberErr?<div className='inputerr'>Only 10 digit numbers allowed</div>:""}

      <label>Age:</label>
      <input 
        type="number" 
        onChange={(e) => {
            if(e.target.value.match("^[0-9]{1,3}$")!=null || e.target.value<100 ||e.target.value>0) {
                setAgeErr(false) 
                setAge(e.target.value)
              }
            else{
                setAgeErr(true)
            }
        }
        } 
        value={age} 
      />
      {ageErr?<div className='inputerr'>Age should be between 0-100</div>:""}


      <button>Add Account</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default AccountForm