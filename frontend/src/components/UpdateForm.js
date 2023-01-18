import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom';

const UpdateForm = () => {
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
  const [mobileError, setMobileError] = useState(false)
  const [found,setFound] = useState(true)

  const [accounts, setAccounts] = useState(null)
  useEffect(() => {
    const fetchAccounts = async () => {
      const response = await fetch('/api/accounts')
      const json = await response.json()

      if (response.ok) {
        setAccounts(json)
      }
    }

    fetchAccounts()
  }, [])
  

  const handleMobileSubmit = (e) => {
    e.preventDefault()
    setFirstName('')
    setLastName('')
    setAge('')
    setMobileError('')
    setFound(false)

     accounts.forEach(account => {
        if(account.mobileNumber == mobileNumber){
            setMobileError('')
            console.log(account.firstName)
            setFirstName(`${account.firstName}`)
            setLastName(`${account.lastName}`)
            setMobileNumber(mobileNumber)
            setAge(account.age)
            return;
        }
        
    });

    if(firstName==='' || !found) 
       {
         setMobileError('Account does not exist for entered mobile number - try again');
       }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const updatedAccount = {firstName, lastName, mobileNumber, age}

    const response = await fetch(`/api/accounts/${mobileNumber}`, {
      method: 'PATCH',
      body: JSON.stringify(updatedAccount),
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

      console.log('account updated', json)
      navigate('/');

    }

  }

  return (
    <div>
    <form className="createForm" onSubmit={handleMobileSubmit}> 
    <h3>Update Account</h3>

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

    <button>Fetch Account</button>
  </form>
  {firstName===''&& !found && <div className="error">{mobileError}</div>}
    <br></br>
    <form className="createForm" onSubmit={handleSubmit}> 

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
        value={mobileNumber} 
        readOnly
      />

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


      <button>Update Account</button>
      {error && <div className="error">{error}</div>}
    </form>
    </div>
  )
}

export default UpdateForm