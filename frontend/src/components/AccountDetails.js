const AccountDetails = ({ account }) => {

    return (
      <div className="account-details">
        <p><strong>First Name: </strong>{account.firstName}</p>
        <p><strong>Last Name: </strong>{account.lastName}</p>
        <p><strong>Mobile Number: </strong>{account.mobileNumber}</p>
        <p><strong>Age: </strong>{account.age}</p>
      </div>
    )
  }
  
  export default AccountDetails