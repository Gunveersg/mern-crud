import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const DeleteForm = () => {

    const navigate = useNavigate();
    const [mobileNumber, setMobileNumber] = useState('')
    const [mobileNumberErr, setMobileNumberErr] = useState(false)
    const [error, setError] = useState(false)
 
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(`/api/accounts/${mobileNumber}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const json = await response.json()
      if (!response.ok) {
        setError(json.error)
      }
      if(response.ok){
        setError(false)
        setMobileNumber('')
        setMobileNumberErr(false)
        console.log('account deleted')
        navigate('/')
      }
  }

  return (
    <form className="createForm" onSubmit={handleSubmit}> 
      <h3>Delete Account</h3>

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

      <button>Delete Account</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default DeleteForm