import { FormEvent, useState, useEffect}from 'react';
import { format, parseISO } from 'date-fns';
import axios from 'axios';

const defaultFormData = {
  cliente: "",
  tipo: "",
  data: "",
  prioridade: "",
  funcionarios: "",
  descricao: ""
};


export default function ModalY({ visible, onClose, id}) {

  // console.log(id)
  const [os, setOs] = useState('');

  async function getOs()
  {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/os/'+id)
      // console.log('response', response)
      const data = response.data;

      setOs(data)
    
    } catch (error) {
      console.log(error);
    }
  }


  const [formData, setFormData] = useState(defaultFormData);
  const [numeroOs, setNumeroOs] = useState(defaultFormData);
  const { cliente, tipo, data, prioridade, funcionarios, descricao } = formData;

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
      console.log('formData', formData)
      console.log('message', res.data.message)
      setFormData(defaultFormData);

    }
  }

  console.log(os.funcionario)
  // console.log(format(new Date(os.dt_inicio), 'yyyy/MM/dd'))

  // console.log(os?.dt_inicio)
  
  
  // console.log(parseISO(os?.dt_inicio))


  //  console.log(format(new Date(parseISO(os.dt_inicio)), 'yyyy/MM/dd'))
  // console.log(parseISO(os.dt_inicio))

  

  const handleOnClose = (e) => {
    if(e.target.id === "container")
    onClose()
  };


  if (!visible) return null;

  useEffect(() => {
    getOs();
  }, []);

  const timeout = setTimeout(function(){
    const dateFormat =  format(new Date(os.dt_inicio), 'ddMMyyyy')+-os.id_os
    console.log(dateFormat)
    setNumeroOs(dateFormat)
  }, 100) //Após 3 segundos a função é executada.
  
  return (
    
    <div 
      id="container"
      onClick={handleOnClose}
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center"
    >

      <div className="bg-white p-5 rounded w-auto h-5/5 ">
        
        <h1 className="font-thin text-left text-lg text-gray-700 pb-6 ">
         Ordem de Serviço (Modal Y)
        </h1>

        <form onSubmit={onSubmit}>

          <div className="grid md:grid-cols-2">

            <div className="grid md:grid-cols-1">

              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-6 group">
                  <input type="text" id="cliente" onChange={onChange}  value={os.condominio?.no_condominio} className="block py-2.5 px-0 w-full text-sm text-gray-400  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                  <label htmlFor="floating_cliente" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> Cliente </label>
                </div>

                <div className="relative z-0 w-full mb-6 group">
                  <input type="text" id="tipo" onChange={onChange} value={numeroOs} className="block py-2.5 px-0 w-full text-sm text-gray-400 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                  <label htmlFor="floating_company" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> Numero da OS </label>
                </div>
              </div>

              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-6 group">
                  <input type="text" id="cliente" onChange={onChange}  value={''} className="block py-2.5 px-0 w-full text-sm text-gray-400  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                  <label htmlFor="floating_cliente" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> Aberta por </label>
                </div>

                <div className="relative z-0 w-full mb-6 group">
                  <input type="text" id="tipo" onChange={onChange} value={os.dt_inicio} className="block py-2.5 px-0 w-full text-sm text-gray-400 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                  <label htmlFor="floating_company" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> Data da abertura</label>
                </div>
              </div>

              <div className="grid md:grid-cols-3">
                <div className="relative z-0 w-full mb-6 group">
                  <input type="select" id="prioridade" onChange={onChange} value={os.status?.no_os_status} className="block py-2.5 px-0 w-full text-sm text-gray-400  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                  <label htmlFor="floating_cliente" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> Status </label>
                </div>

                <div className="relative z-0 w-full mb-6 group">
                  <input type="select" id="prioridade" onChange={onChange} value={os.nu_prioridade} className="block py-2.5 px-0 w-full text-sm text-gray-400  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                  <label htmlFor="floating_cliente" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> Prioridade </label>
                </div>

                <div className="relative z-0 w-full mb-6 group">
                  <input type="select" id="prioridade" onChange={onChange} value={os.tipo?.no_os_tipo} className="block py-2.5 px-0 w-full text-sm text-gray-400  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                  <label htmlFor="floating_cliente" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> Tipo </label>
                </div>
              </div>


              <div className="grid md:grid-cols-2">

                <div className="relative z-0 w-full mb-6 group">
                  <input type="date" id="cliente" onChange={onChange}  value={''} className="block py-2.5 px-0 w-full text-sm text-gray-400  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                  <label htmlFor="floating_cliente" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> Data do agendamento </label>  
                </div>

                <div className="relative z-0 w-full mb-6 group">
                  <input type="time" id="tipo" onChange={onChange} value={os.dt_inicio} className="block py-2.5 px-0 w-full text-sm text-gray-400 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                  <label htmlFor="floating_company" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> Hora do agendamento </label>
                </div>

              </div>

              <div className="relative z-0 w-full mb-6 group">
                <input type="select" id="funcionarios" onChange={onChange} value={os.funcionario?.no_funcionario} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                <label htmlFor="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> Funcionarios responsáveis </label>
              </div>

              <div className="relative z-0 w-full mb-6 group">
                <input type="text" id="descricao" onChange={onChange} value={descricao} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer pb-20" placeholder=" " required />
                <label htmlFor="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> Problema informado pelo cliente </label>
              </div>

              <div className="relative z-0 w-full mb-6 group">
                <input type="text" id="descricao" onChange={onChange} value={descricao} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer pb-20" placeholder=" " required />
                <label htmlFor="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> Parecer do técnico em relação ao problema </label>
              </div>

              <div className="relative z-0 w-full mb-6 group">
                <input type="text" id="descricao" onChange={onChange} value={descricao} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer pb-20" placeholder=" " required />
                <label htmlFor="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> O que foi feito para solucionar o problema </label>
              </div>

            </div>

            <div className="grid md:grid-cols-1 px-5">

              <div className="relative z-0 p-8 h-1/5 w-full bg-gray-100">
                <h4> Nome do funcionario
                  
                  <span style={{padding: '20px'}} >
                    13/02/23 as 15:15
                  </span>

                </h4>

                <span>
                    A caminho - (Texto automatico)
                </span>

                <span className='absolute right-10 items-center justify-center' >
                  <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-white rounded-full dark:bg-gray-600">
                    <span className="font-medium text-gray-600 dark:text-gray-300">I</span>
                  </div>
                </span>


              </div>

            </div>


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