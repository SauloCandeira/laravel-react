import './global.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard } from './pages/Dashboard/Dashboard';
import { NewOs } from './components/Form/NewOs';


export function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/NewOs" element={<NewOs />} />
      </Routes>
    </BrowserRouter>

  )
}
