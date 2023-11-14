import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home, Expenses } from 'src/pages'
import 'src/styles/main.scss'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/expenses' element={<Expenses />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
