import './App.css'
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Navbar from './components/navbar/Navbar';

function App() {

  return (
    <>
    <Navbar/>
    <Login />
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    </>
  )
}

export default App