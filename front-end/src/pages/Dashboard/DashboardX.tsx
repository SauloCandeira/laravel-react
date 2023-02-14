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

export default function DashboardX() {

  const [showModal, setShowModal] = useState(false)
  const [os, setOs] = useState([]);
  const [empresas, setEmpresas] = useState([]);
  const [tipos, setTipos] = useState([]);
  const [osStatus, setOsStatus] = useState([]);

  const handleOnClose = () => setShowModal(false)

  const openModal = () => {
    setShowModal(prev=>!prev);
  };

  // async function getOs()
  // {
  //   try {
  //     const response = await axios.get('http://127.0.0.1:8000/api/os')

  //     const data = response.data;

  //     setOs(data)
    
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  async function getOsStatus()
  {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/os-status')

      const data = response.data;

      setOsStatus(data)
    
    } catch (error) {
      console.log(error);
    }
  }


  async function getEmpresas()
  {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/clientes')

      const data = response.data;
      // console.log(data)

      setEmpresas(data)
    
    } catch (error) {
      console.log(error);
    }
  }

  async function getTipos()
  {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/tipos')

      const data = response.data;
      // console.log(data)

      setTipos(data)
    
    } catch (error) {
      console.log(error);
    }
  }







  useEffect(() => {
    getEmpresas();
    getTipos();
    // getOs();
    getOsStatus();
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
              variant="primary"
            >
              {' '} + Abrir nova{' '}
            </Button>
      
            <Button
              size="g"
              variant="outline"
            >
              Atualizar
            </Button>
          </div>


          <div className="flex flex-col flex-1 py-4 p-4">
            <div className="relative z-0 w-full group">
              <input type="text" id="cliente" className="block py-2.5 px-0 w-full text-sm text-gray-400  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
              <label htmlFor="floating_cliente" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> Digite algo para filtrar </label>
            </div>
          </div>

          {/* <ModalX request={clientes} onClose={handleOnClose} visible={showModal}/> */}
          <ModalX empresas={empresas} tipos={tipos} onClose={handleOnClose} visible={showModal}/>

          <div className="flex flex-col flex-1 py-4 p-4">

            {osStatus.map((item, index) => {
              // console.log('item', item.lista_de_os)
              return (   
                
                <div key={index} style={{marginTop: '20px', backgroundColor: '#fff'}}>
                  {item.lista_de_os.length === 0 && (<> <Table4 data={null} nome={item.no_os_status} columns={null} hover={true} striped={true} /> </>)}
                  {item.lista_de_os.length > 0 && (<> <Table4 data={item.lista_de_os} nome={item.no_os_status} columns={null} hover={true} striped={true} /> </>)}
                </div>
              )
            })}
          
          </div>

        </div>





			</div>



      {/* <div className="grid grid-cols-4 gap-1">
        <div className="col-span-1" style={{ backgroundColor: `${getRandomColor()}`}}> 01 </div>
        <div className="col-start-n col-end-n" style={{ backgroundColor: `${getRandomColor()}`}}> 02 </div>
        <div style={{ backgroundColor: `${getRandomColor()}`}}> 03 </div>
        <div style={{ backgroundColor: `${getRandomColor()}`}}> 04 </div>
      </div>

      <div className="grid grid-rows-4 grid-cols-4 gap-1">
        <div className="col-span-3" style={{ backgroundColor: `${getRandomColor()}`}}> 01 </div>
        <div className="col-start-n col-end-n" style={{ backgroundColor: `${getRandomColor()}`}}> 02 </div>
        <div style={{ backgroundColor: `${getRandomColor()}`}}> 03 </div>
        <div style={{ backgroundColor: `${getRandomColor()}`}}> 04 </div>
      </div> */}


      {/* <div className="grid grid-cols-4 gap-1">
        <div className="col-span-1 w-full h-full" style={{ backgroundColor: `${getRandomColor()}`}}> 01 </div>
        <div className="col-span-3 w-full h-full" style={{ backgroundColor: `${getRandomColor()}`}}> 02 </div>
      </div> */}



    </>
  )
}


function getRandomColor() {
  return "#" + ((1<<24)*Math.random() | 0 ).toString(16);
}