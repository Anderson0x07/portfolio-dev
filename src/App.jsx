import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import PageNotFound from './components/PageNotFound'

function App() {

  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route index element={<Home />} />
          <Route path='/contact' element={<Contact />} />

          <Route path='/*' element={<PageNotFound />} />
        </Routes>

        
      </BrowserRouter>
    </>
  )
}

export default App
