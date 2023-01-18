import { Link } from 'react-router-dom'

const Home = () => {

  return (
      <div className="Homecontainer">

        <Link to="/read">
          <h1 className='homeButtons'>See all accounts</h1>
        </Link>

        <Link to="/add">
          <h1 className='homeButtons'>Add an account</h1>
        </Link>
        <Link to="/update">
          <h1 className='homeButtons'>Update an account</h1>
        </Link>
        <Link to="/delete">
          <h1 className='homeButtons'>Delete an account</h1>
        </Link>
      </div>
  )
}

export default Home