import { FormEvent, useState, useEffect}from 'react';
import { format, parseISO } from 'date-fns';
import axios from 'axios';
import { FaTimes, FaSave } from 'react-icons/fa';

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

  // console.log(os.lista_respostas)
  // console.log(format(new Date(os.dt_inicio), 'yyyy/MM/dd'))

  // console.log(os?.dt_inicio)
  
  
  // console.log(parseISO(os?.dt_inicio))


  //  console.log(format(new Date(parseISO(os.dt_inicio)), 'yyyy/MM/dd'))
  // console.log(parseISO(os.dt_inicio))

  // fechar no icone "X"
  const handleOnClose = (e) => {
    if(e.target.id === "container")
    console.log('clickou')
    onClose()
  };

  // fechar com "ESC"
  useEffect(() => {
    function handleEscapeKey(event: KeyboardEvent) {
      if (event.code === 'Escape') {
        onClose()
      }
    }
  
    document.addEventListener('keydown', handleEscapeKey)
    return () => document.removeEventListener('keydown', handleEscapeKey)
  }, [])
  


  if (!visible) return null;

  useEffect(() => {
    getOs();
  }, []);

  const timeout = setTimeout(function(){
    const dateFormat =  format(new Date(os.dt_inicio), 'ddMMyyyy')+-os.id_os
    // console.log(dateFormat)
    setNumeroOs(dateFormat)
  }, 100) //Após 3 segundos a função é executada.
  
  return (
    
    <div 
      // id="container"
      // onClick={handleOnClose}
      // className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full"
      className="fixed inset-0 overflow-auto bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center"
    >

      {/* <div className="relative bg-white p-5 w-auto h-full max-w-md md:h-auto"> */}
      {/* <div className="block bg-white p-5 rounded w-auto h-auto "> */}

      {/* <div className="fixed bg-white z-10 overflow-y-auto"> */}
      {/* <div className="flex bg-white min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"> */}

      {/* <div className="block bg-white"> */}
      
      {/* <div className="relative bg-white m-10 p-5 w-auto h-auto md:m-10 md:h-auto md:w-auto"> */}
      <div className="relative bg-white h-auto w-auto m-auto p-4">


        <FaTimes
          className="absolute right-0 top-0 cursor-pointer m-2"
          id="container"
          onClick={handleOnClose}
        />

        <h1 className="font-thin text-left text-lg text-gray-700 pb-6 ">
         Ordem de Serviço (Modal Y)
        </h1>

        <form onSubmit={onSubmit} className='relative h-auto w-auto m-auto'>

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

            <div className="grid grid-cols-1 md:grid-cols-1 px-5 ">
              

              <div className="grid grid-rows-1 md:grid-rows-5 gap-2">
              {/* <div className="grid h-full grid-rows-5 md:grid-rows-auto  gap-2"> */}
              {/* <div className="grid h-full grid-rows-5 md:grid-rows-auto grid-flow-col gap-2"> */}

                {os.lista_respostas?.map((item, index) => {
                  console.log('item', item)
                  return (   

                    <div className="relative z-0 p-8 h-36 w-full bg-gray-100 rounded-lg gap-2">
                      <h4> {item.id_funcionario}

                        <span style={{padding: '20px'}} >
                          {item.dt_inicio}
                        </span>

                      </h4>

                      <span>
                          {item.ds_os_resposta}
                      </span>

                      <span className='absolute right-10 items-center justify-center' >
                        <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-white rounded-full dark:bg-gray-600">
                          <span className="font-medium text-gray-600 dark:text-gray-300">NF</span>
                        </div>
                      </span>
                    </div>

                  )
                })}

              </div>
            </div>
          </div>
        
          <div className="text-right py-5 pl-6">
            <button className="px-5 py-2 bg-gray-700 shadow-md text-black rounded">
              Voltar
            </button>

            <button type="submit" className="px-5 py-2 w-32 bg-green-50 text-white rounded">

              <div className="text-center inline-flex items-center mr-2 ">
                <FaSave className="m-2" />  Salvar
              </div>

            </button>

            {/* FaSave */}

            {/* <button type="submit" className="px-5 py-2 bg-gray-700 bg-blue text-white rounded">
              Finalizar e enviar feedback
            </button> */}
          </div>

        </form>


      </div>
    </div>
  );
}