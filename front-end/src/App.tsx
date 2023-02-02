import './global.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './pages/Dashboard/Dashboard';
import  DashboardX   from './pages/Dashboard/DashboardX';
import { DashboardY } from './pages/Dashboard/DashboardY';
import { NewOs } from './components/Form/NewOs';
import ModalX from './components/Modals/ModalX/ModalX';
import ModalZ from './components/Modals/ModalZ/ModalZ';


export function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardX />} />
        {/* <Route path="/DashboardY" element={<DashboardY />} />
        <Route path="/DashboardX" element={<DashboardX />} />
        <Route path="/create" element={<ModalX  visible={true}/>} />
        <Route path="/visualizar/:id" element={<NewOs />} />
        <Route path="/arquivar/:id" element={<NewOs />} /> */}
      </Routes>
    </BrowserRouter>

  )
}
