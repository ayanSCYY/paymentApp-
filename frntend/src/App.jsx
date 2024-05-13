import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './pages/Signwup'
import Signin  from './pages/Signwin'
import Dashboard from './pages/dashboard'
import SendMoney from './pages/sendmoney' 
import Firstpage from './pages/firstpage';
import Transaction from './pages/transaction'

  function App() {
    return (
      <div>
        <BrowserRouter>
           <Routes>
             <Route path="/" element={<Firstpage/>}/>
             <Route path="/signup" element={<Signup />} />
             <Route path="/signin" element={<Signin />} />
             <Route path="/dashboard" element={<Dashboard />} />
             <Route path="/transaction" element={<Transaction />}/>
             <Route path="/send" element={<SendMoney />}/>
           </Routes>
        </BrowserRouter>
      </div>
    )
  }


export default App
