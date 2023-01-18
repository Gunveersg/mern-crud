import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Home</h1>
        </Link>
        <Link to="/read">
          <h1>Read</h1>
        </Link>

        <Link to="/add">
          <h1>Add</h1>
        </Link>
        <Link to="/update">
          <h1>Update</h1>
        </Link>
        <Link to="/delete">
          <h1>Delete</h1>
        </Link>
      </div>
    </header>
  )
}

export default Navbar