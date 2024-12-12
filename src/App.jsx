
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/header'
import Home from './pages/Home'


function App() {

  return (
   <>
   <BrowserRouter>
   <Header />
    <Routes >
      <Route path={'/'} exact={true} element={<Home />} />
    </Routes>
   </BrowserRouter>
   </>
  )
}

export default App
