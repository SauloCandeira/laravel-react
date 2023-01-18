import { Button } from "../../components/Buttons/Button";
import { Modal } from "../../components/Modal/Modal";
import { Input } from "../../components/Input/Input";
import { Text } from "../../components/Texts/Text";
import { Table } from "../../components/Table/Table";
import { TableX } from "../../components/TableX/TableX";
import  Sidebar  from '../../components/Sidebar/sidebar'
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios';

export function Dashboard() {

  const [showModal, setShowModal] = useState(false)
  const [os, setOs] = useState([]);

  const openModal = () => {
    setShowModal(prev=>!prev);
  };

  async function getOs()
  {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/os')

      const data = response.data;

      console.log('Data dashboard', data);
      setOs(data)
    
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getOs();
  }, []);



  const data = [
    {
      cliente: 'Residencial das Palmeiras',
      prioridade: "ALTA",
      numero: "202301026452",
      abertura: "02/01/23 às 14:15",
      status: "Fechada",
      tipo: "ATENDIMENTO MORADOR - TAG",
      funcionario:["R", "AV", "TT"],
      variant: 'default'
    },
    {
      cliente: 'Residencial das Palmeiras',
      prioridade: "MEDIA",
      numero: "202301026452",
      abertura: "02/01/23 às 14:15",
      status: "Fechada",
      tipo: "ATENDIMENTO MORADOR - TAG",
      funcionario: ["R", "AV", "TT"],
      variant: 'primary'
    },
    {
      cliente: 'Residencial das Palmeiras',
      prioridade: "BAIXA",
      numero: "202301026452",
      abertura: "02/01/23 às 14:15",
      status: "Fechada",
      tipo: "ATENDIMENTO MORADOR - TAG",
      funcionario: ["R", "AV", "TT"],
      variant: 'secondary'
    }
  ];

  const columns = [
    { field: "id", header: "Cliente" },
    { field: "teste", header: "Prioridade" },
    { field: "name", header: "Numero" },
    { field: "address", header: "Abertura" },
    { field: "date", header: "Status" },
    { field: "order", header: "Tipo" },
    { field: "teste", header: "Funcionarios" },
    { field: "teste", header: "BOTÕES" },
  ];


  // const [sidebar, setSidebar] = useState(true)


  return (
    <>
    
      <div style={{backgroundColor: '#f1f1ef', height: '1300px'}}>

        {/* <Header /> */}

        <Sidebar />

        <div style={{padding: '20px', marginLeft: '19.0rem'}}>


          <Link to={'NewOs'}> 
            <Button
              size="g"
              variant="primary"
            >
              {' '} + Abrir nova{' '}
            </Button>
          </Link>

          <Button
            size="g"
            variant="outline"
            onClick={openModal}
          >
            {' '} Atualizar {' '}
          </Button>

          <Modal showModal={showModal} setShowModal={setShowModal} />

        </div>

        {/* <form style={{padding: '30px', marginTop: '20px', backgroundColor: '#fff', marginLeft: '20rem'}}>
            <input style={{width: '1540px'}}type="text" placeholder="Digite algo para filtrar" />
        </form> */}

        <div style={{  marginLeft: '20rem'}}>
            <Input/>
        </div>


        <div style={{padding: '30px', marginTop: '20px', backgroundColor: '#fff', marginLeft: '20rem'}}>
          
          <div style={{fontWeight: 'bold'}}>
            <Text size="headingSmall">
              Fechada
            </Text>
          </div>


          <Table />
          {/* <Table data={tableData} columns={columns} hover={true} striped={true} /> */}
        </div>


        <div style={{padding: '30px', marginTop: '20px', backgroundColor: '#fff', marginLeft: '20rem'}}>
          
          <div style={{fontWeight: 'bold'}}>
            <Text size="headingSmall">
              Pendente
            </Text>
          </div>

          <Table />

        </div>
        

        <div style={{padding: '30px', marginTop: '20px', backgroundColor: '#fff', marginLeft: '20rem'}}>
          
      
          <Text size="headingSmall">
            Agendamento
          </Text>

          <TableX data={os} columns={null} hover={true} striped={true}/>

        </div>

        <div style={{padding: '30px', marginTop: '20px', backgroundColor: '#fff', marginLeft: '20rem'}}>
          
      
          <Text size="headingSmall">
            Em atendimento
          </Text>

          <Table data={null} columns={null} hover={true} striped={true} />

        </div>

        <div style={{padding: '30px', marginTop: '20px', backgroundColor: '#fff', marginLeft: '20rem'}}>
          
      
          <Text size="headingSmall">
            A caminho
          </Text>

          <Table data={null} columns={null} hover={true} striped={true} />

        </div>

        <div style={{padding: '30px', marginTop: '20px', backgroundColor: '#fff', marginLeft: '20rem'}}>
          
      
          <Text size="headingSmall">
            Aberta
          </Text>

          <Table data={null} columns={null} hover={true} striped={true} />

        </div>


        {/* <Text size="textLarge">
          {' '}Text large{' '}
        </Text> */}


      </div>
    
    </>
    // <div className="w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100">

  )
}