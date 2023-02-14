import { FormEvent, useState, useEffect }from 'react';
import axios from 'axios';
import InputClientes  from '../../Inputs/InputClientes/InputClientes';
import InputY from '../../Inputs/InputY/InputY';
import InputZ from '../../Inputs/InputZ/InputZ';
import InputW from '../../Inputs/InputW/InputW';
import InputA from '../../Inputs/InputA/InputA';
import { InputTipos } from '../../Inputs/InputTipos/InputTipos';
import InputPrioridade from '../../Inputs/InputPrioridade/InputPrioridade';
import InputProblema from '../../Inputs/InputProblema/InputProblema';
import InputFuncionarios from '../../Inputs/InputFuncionarios/InputFuncionarios';
import InputFuncionariosB from '../../Inputs/InputFuncionariosB/InputFuncionariosB';

const defaultFormData = {
  cliente: "",
  tipo: "",
  data: "",
  prioridade: "",
  funcionarios: "",
  descricao: "",
  condominio: ""
};

export type ModalXProps = {
  tipos: Object
  clientes: Object
  visible: Boolean
  onClose: any
}


export default function ModalX({ empresas, tipos , visible, onClose } : ModalProps ) {

  // console.log('empresas', empresas)
  // console.log('tipos', tipos)

  // console.log('data', request)
  const [selectedOption, setSelectedOption] = useState("");
  const [text, setText] = useState("")
  const [clientes, setClientes] = useState([]);
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState("")
  const [selected, setSelected] = useState("")
  const [formData, setFormData] = useState(defaultFormData);
  const { condominio, cliente, tipo, data, prioridade, funcionarios, descricao } = formData;

  // console.log(formData)
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }

  async function onSubmit (e: FormEvent) {
    e.preventDefault();

    console.log(formData)
    const res = await axios.post('http://127.0.0.1:8000/api/os', formData)

    if(res.data.status === 200)
    {
      // console.log('formData', formData)
      // console.log('message', res.data.message)
      setFormData(defaultFormData);

    }

  }

  const handleOnClose = (e) => {
    if(e.target.id === "container")
   
    onClose()
  };

  const [resultFuncionario, setResultFuncionarios] = useState('')

  // const updateFuncionarios = r => {
  //   setResultFuncionarios(r)
  //   formData.funcionarios = resultFuncionario
  // }

  const [resultClientes, setResultClientes] = useState('')

  const updateClientes = r => {
    setResultClientes(r)
    formData.condominio = resultClientes
  }

  const [resultTipo, setResultTipo] = useState('')

  const updateTipo = r => {
    setResultTipo(r)
    formData.tipo = resultTipo
  }

  const [resultPrioridade, setResultPrioridade] = useState('')

  const updatePrioridade = r => {
    setResultPrioridade(r)
    formData.prioridade = resultPrioridade
  }

  formData.cliente = '1'
  formData.funcionarios = '1'


  if (!visible) return null;

  return (
    <div 
      id="container"
      onClick={handleOnClose}
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center"
    >

      <div className="bg-white p-5 rounded w-auto h-4/">
        
        <h1 className="font-thin text-left text-lg text-gray-700 pb-14 ">
         Abrir Ordem de Serviço (ModalX)
        </h1>

        <form onSubmit={onSubmit} className='relative'>

          <input type="hidden" id="condominio"  name="condominio" value={data} />

          <div className="grid md:grid-cols-2 md:gap-4">
 
            <InputClientes handleResult={updateClientes} onChange={onChange}  request={empresas} />

            <InputTipos handleResult={updateTipo} request={tipos} />

          </div>

          <div className="grid md:grid-cols-2 md:gap-4">
            <div className="relative z-0 w-full mb-6 group">
              <input type="date" id="data" onChange={onChange} value={data} className="block py-2.5 px-0 w-full text-sm text-gray-400  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
              <label htmlFor="floating_cliente" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> Data do agendamento </label>
            </div>

            <div className="relative z-0 w-full mb-6 group">
              <input type="time" id="time" className="block py-2.5 px-0 w-full text-sm text-gray-400  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
              <label htmlFor="floating_cliente" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> Hora do agendamento </label>
            </div>
          </div>

          <div className="grid md:grid-cols-2 md:gap-4">
            <InputPrioridade handleResult={updatePrioridade} request={[{'no_prioridade': 'Baixa', 'id_prioridade': 1}, {'no_prioridade': 'Média', 'id_prioridade': 2}, {'no_prioridade': 'Alta', 'id_prioridade': 3} ]}/>
          </div>

          {/* <div className="grid md:grid-cols-1 md:gap-4">
            <InputFuncionarios request={['teste','teste-2','teste-3']} />
          </div> */}

          <div className="grid md:grid-cols-1 md:gap-4">
            {/* <InputFuncionariosB id="funcionarios" handleResult={updateFuncionarios} onChange={onChange} value={funcionarios} request={['teste','teste-2','teste-3']} /> */}
          </div>

          <div className="grid md:grid-cols-1 md:gap-4">
            <InputProblema />
          </div>

          <div className="text-right">
            <button className="px-5 py-2 bg-gray-700 text-black rounded">
              Voltar
            </button>
            <button type="submit" className="px-5 py-2 bg-gray-700 text-black rounded">
              Abrir 
            </button>
          </div>
        
        </form>
      </div>
    </div>
  );
}