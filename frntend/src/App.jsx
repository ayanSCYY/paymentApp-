import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './pages/Signwup'
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
             <Route path="/dashboard" element={<Dashboard />} />
             <Route path="/transaction" element={<Transaction />}/>
             <Route path="/send" element={<SendMoney />}/>
           </Routes>
        </BrowserRouter>
      </div>
    )
  }


export default App
