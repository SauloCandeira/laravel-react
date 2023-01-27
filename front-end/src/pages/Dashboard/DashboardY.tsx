import { Button } from "../../components/Buttons/Button";
import { Modal } from "../../components/Modal/Modal";
import  ModalX  from "../../components/ModalX/ModalX";
import { Input } from "../../components/Input/Input";
import { Text } from "../../components/Texts/Text";
import { Table } from "../../components/Table/Table";
import { TableX } from "../../components/TableX/TableX";
import  Sidebar  from '../../components/Sidebar/sidebar'
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios';

export function DashboardY() {

  const [showModal, setShowModal] = useState(false)
  const [os, setOs] = useState([]);
  const [osStatus, setOsStatus] = useState([]);

  const handleOnClose = () => setShowModal(false)

  const openModal = () => {
    setShowModal(prev=>!prev);
  };

  async function getOs()
  {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/os')

      const data = response.data;

      setOs(data)
    
    } catch (error) {
      console.log(error);
    }
  }

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

  useEffect(() => {
    getOs();
    getOsStatus();
  }, []);

  return (
    <>

      <div className="flex flex-row ">


        {/* Componente Sidebar */}
        <div className="flex flex-col  space-y-5 justify-between min-h-screen w-96 px-2 py-4 bg-gray-50">
          <div className="flex flex-col bg-gray-500 h-screen justify-between w-64">
            <Sidebar />
          </div>
        </div>
        
        
        {/* Componente Dashboard */}
        <div className="flex-auto">
          <div className="flex flex-col">

            <div className="flex flex-col bg-black h-24 p-2 drop-shadow-2xl">
              <div className="flex flex-row space-x-3">

                <ModalX onClose={handleOnClose} visible={showModal}/>
                   
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
                  {' '} Atualizar {' '}
                </Button>
                
              </div>
            </div>


            <div className="relative z-0 w-full mb-6 group">
              <input type="text" id="cliente" className="block py-2.5 px-0 w-auto text-sm text-gray-400  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
              <label htmlFor="floating_cliente" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> Digite algo para filtrar </label>
            </div>

            {osStatus.map((item, index) => {
            return (   
              <div key={index}>
              
                <Text size="headingSmall">
                  { item.no_os_status }
                </Text>

                <TableX data={item.lista_de_os} columns={null} hover={true} striped={true} />

              </div>
            )
            })}
            {/* </div> */}

          </div>
        </div>
      </div>

    </>
    
  )
}