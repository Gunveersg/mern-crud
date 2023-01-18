import { useEffect, useState } from "react"

// components
import AccountDetails from "../components/AccountDetails"

const Getall = () => {
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

  return (
        <div className="page">
        <div className="get-heading"><strong>Read All Accounts:</strong></div>
        <div className="accounts">
          {accounts && accounts.map(account => (
            <AccountDetails account={account} key={account._id} />
          ))}
        </div>
      </div>
    )
}
  
export default Getall