import { BrowserRouter as Router, Routes,Route,Link } from 'react-router-dom'
import HomePage from './menu/HomePage/HomePage'
import Header from './Layout/Header/Header'
import AboutPage from './menu/AboutPage/AboutPage'

const App = () => {
  
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
      </Routes>
    </Router>
  )
}

export default App

