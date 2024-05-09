import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './pages/Signwup'
import Signin  from './pages/Signwin'
import Dashboard from './pages/dashboard'
/*import {SendMoney} from './pages/sendmoney' */
import './App.css'

  function App() {
    return (
      <div>
         <BrowserRouter>
          <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/dashboard" element={<Dashboard />} />
           {/*} <Route path="/send" element={<SendMoney />} /> */}
          </Routes>
        </BrowserRouter>
      </div>
    )
  }


export default App
