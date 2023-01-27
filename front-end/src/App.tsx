import './global.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard } from './pages/Dashboard/Dashboard';
import { DashboardY } from './pages/Dashboard/DashboardY';
import { NewOs } from './components/Form/NewOs';
import ModalX from './components/ModalX/ModalX';


export function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/NewOs" element={<NewOs />} />
        <Route path="/create" element={<ModalX  visible={true}/>} />
        <Route path="/visualizar/:id" element={<NewOs />} />
        <Route path="/arquivar/:id" element={<NewOs />} />
      </Routes>
    </BrowserRouter>

  )
}
