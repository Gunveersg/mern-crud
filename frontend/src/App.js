import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages & components
import Home from './pages/Home';
import Getall from './pages/Getall'
import AddAccount from './pages/AddAccount';
import DeleteAccount from './pages/DeleteAccount';
import UpdateAccount from './pages/UpdateAccount';
import Navbar from './components/Navbar'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
          <Route 
              path="/" 
              element={<Home />} 
            />
            <Route 
              path="/read" 
              element={<Getall />} 
            />
             <Route 
              path="/add" 
              element={<AddAccount />} 
            />
            <Route 
              path="/update" 
              element={<UpdateAccount />} 
            />
            <Route 
              path="/delete" 
              element={<DeleteAccount />} 
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;