import { Outlet } from "react-router-dom";
import SidebarX from "../../components/SidebarX/SidebarX";
import { Button } from "../../components/Buttons/Button";
import axios from 'axios';
import { useEffect, useState } from "react";
import ModalX from "../../components/Modals/ModalX/ModalX";
import { TableX } from "../../components/Tables/TableX/TableX";
import Table4  from "../../components/Tables/Table4/Table4";
import { Text } from "../../components/Texts/Text";
import ModalZ from "../../components/Modals/ModalZ/ModalZ";
import { FaHome, FaPlus, FaEye, FaSyncAlt} from 'react-icons/fa'
import { Link } from "react-router-dom";
import api from '../../services/api'


export default function DashboardX() {

  const [showModal, setShowModal] = useState(false)
  const [os, setOs] = useState([]);
  const [empresas, setEmpresas] = useState([]);
  const [tipos, setTipos] = useState([]);
  const [osStatus, setOsStatus] = useState([]);
  const [query, setQuery] = useState("");
  const [funcionarios, setFuncionarios] = useState([]);

  const handleOnClose = () => setShowModal(false)
  
  // console.log(osStatus.lista_de_os.filter(item => item.includes("bo"))

  // console.log('query', query)

  const openModal = () => {
    setShowModal(prev=>!prev);
  };


  async function getOsStatus()
  {
    try {
      const response = await api.get('/api/os-status')
      const data = response.data;
      setOsStatus(data)
    
    } catch (error) {
      console.log(error);
    }
  }

  async function getFuncionarios()
  {
    try {
      const response = await api.get('/api/funcionarios')
      const data = response.data;
      // console.log(data)
      setFuncionarios(data)
    
    } catch (error) {
      console.log(error);
    }
  }


  async function getEmpresas()
  {
    try {
      const response = await api.get('/api/clientes')
      const data = response.data;
      setEmpresas(data)
    
    } catch (error) {
      console.log(error);
    }
  }

  async function getTipos()
  {
    try {
      const response = await api.get('/api/tipos')
      const data = response.data;
      setTipos(data)
    
    } catch (error) {
      console.log(error);
    }
  }


  const refreshPage = ()=>{
    window.location.reload();
  }

  useEffect(() => {
    getEmpresas();
    getTipos();
    getOsStatus();
    getFuncionarios();
  }, []);

  return (
    <>

      <div className= "bg-back h-screen w-screen overflow-hidden flex flex-row">
        
        <SidebarX />
        
        <div className="flex-1 p-4 overflow-auto ">
          
          <div className="pl-2.5 m-auto">

            <Button
              onClick={(e) => setShowModal(true)}
              size="g"
              variant="secondary"
            >

              <div className="text-center inline-flex items-center mr-2 ">
                <FaPlus className="m-2 h-3" /> Abrir nova 
              </div>
  
            </Button>

            <Button
              size="g"
              variant="outline"
              onClick={refreshPage}
            >

              <div className="text-center inline-flex items-center mr-2 ">
                <FaSyncAlt className="m-2 h-3" /> Atualizar
              </div>
            
            </Button>

          </div>

          <div className="flex flex-col flex-1 py-8 p-4">
            <div className="relative z-0 w-full group">

              <input 
                type="text" 
                id="cliente" 
                className="block py-2 px- w-full text-sm text-gray-400  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                placeholder=" " 
                onChange={(e) => setQuery(e.target.value)}
              />
              
              <label htmlFor="floating_cliente" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> 
                Digite algo para filtrar 
              </label>
            </div>
          </div>

          <ModalX empresas={empresas} tipos={tipos} listaFuncionarios={funcionarios} onClose={handleOnClose} visible={showModal}/>

          <div className="flex flex-col flex-1 py-0 p-4">

            {osStatus.map((item, index) => {

              return (   
                <>
                  {/* {query ? 

                    <div key={index} style={{marginTop: '20px', backgroundColor: '#fff'}}>
                    
                      {item.lista_de_os.length === 0 && (<> <Table4 data={null} nome={item.no_os_status} columns={null} hover={true} striped={true}  query={query} /> </>)}
                    
                      {item.lista_de_os.length > 0 && (<> <Table4 data={item.lista_de_os.filter(item_os => item_os.condominio.no_condominio.toLowerCase().includes(query))} nome={item.no_os_status} columns={null} hover={true} striped={true} query={query} /> </>)}
                    
                    </div>
                  :
                    <div key={index} style={{marginTop: '20px', backgroundColor: '#fff'}}>
                    
                      {item.lista_de_os.length === 0 && (<> <Table4 data={null} nome={item.no_os_status} columns={null} hover={true} striped={true}  query={query} /> </>)}
                    
                      {item.lista_de_os.length > 0 && (<> <Table4 data={item.lista_de_os} nome={item.no_os_status} columns={null} hover={true} striped={true} query={query} /> </>)}
                    
                    </div>
                  } */}


                  <div key={index} style={{marginTop: '20px', backgroundColor: '#fff'}}>
                    
                    {item.lista_de_os.length === 0 && (<> <Table4 data={null} nome={item.no_os_status} columns={null} hover={true} striped={true} /> </>)}
                  
                    {item.lista_de_os.length > 0 && (<> <Table4 data={item.lista_de_os} nome={item.no_os_status} query={query} columns={null} hover={true} striped={true} /> </>)}
                  
                  </div>

                </>
              )

            })}
          
          </div>

        </div>

			</div>

    </>
  )
}


function getRandomColor() {
  return "#" + ((1<<24)*Math.random() | 0 ).toString(16);
}