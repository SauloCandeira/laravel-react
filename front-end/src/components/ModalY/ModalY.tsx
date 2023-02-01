import { FormEvent, useState }from 'react';
import axios from 'axios';

const defaultFormData = {
  cliente: "",
  tipo: "",
  data: "",
  prioridade: "",
  funcionarios: "",
  descricao: ""
};


export default function ModalY({ visible, onClose }) {

  const [formData, setFormData] = useState(defaultFormData);
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

  const handleOnClose = (e) => {
    if(e.target.id === "container")
    onClose()
  };


  if (!visible) return null;

  return (
    <div 
      id="container"
      onClick={handleOnClose}
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center"
    >

      <div className="bg-white p-5 rounded w-auto h-4/5 ">
        
        <h1 className="font-thin text-left text-lg text-gray-700 pb-6 ">
         Ordem de Serviço (Modal Y)
        </h1>

        <form onSubmit={onSubmit}>
          <div className="grid md:grid-cols-4 md:gap-6">
            <div className="relative z-0 w-full mb-6 group">
                <input type="text" id="cliente" onChange={onChange}  value={cliente} className="block py-2.5 px-0 w-full text-sm text-gray-400  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                {/* <input type="text" name="floating_cliente" id="floating_cliente"  */}
                <label htmlFor="floating_cliente" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> Escolha o cliente </label>
                
            </div>
            <div className="relative z-0 w-full mb-6 group">
                {/* <input type="text" name="floating_company" id="floating_company"  */}
                <input type="text" id="tipo" onChange={onChange} value={tipo} className="block py-2.5 px-0 w-full text-sm text-gray-400 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                <label htmlFor="floating_company" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> Escolha o tipo </label>
            </div>
          </div>

          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-6 group">
                <input type="date" id="data" onChange={onChange} value={data} className="block py-2.5 px-0 w-full text-sm text-gray-400  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                <label htmlFor="floating_cliente" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> Escolha o cliente </label>
            </div>
          </div>

          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-6 group">
                <input type="time" name="floating_company" id="floating_company" className="block py-2.5 px-0 w-full text-sm text-gray-400  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                <label htmlFor="floating_company" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> Escolha o tipo </label>
            </div>
          </div>

          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-6 group">
                <input type="select" id="prioridade" onChange={onChange} value={prioridade} className="block py-2.5 px-0 w-full text-sm text-gray-400  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                {/* <input type="text" name="floating_cliente" id="floating_cliente"  */}
                <label htmlFor="floating_cliente" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> Prioridade </label>
            </div>
          </div>



          <div className="relative z-0 w-full mb-6 group">
              <input type="select" id="funcionarios" onChange={onChange} value={funcionarios} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
              {/* <input type="text" name="repeat_password" id="floating_repeat_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " /> */}
              <label htmlFor="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> Funcionarios responsáveis </label>
          </div>


          <div className="relative z-0 w-full mb-6 group">
              {/* <input type="text" name="repeat_password" id="floating_repeat_password"  */}
              <input type="text" id="descricao" onChange={onChange} value={descricao} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer pb-60" placeholder=" " required />
              <label htmlFor="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> Problema relatado pelo cliente </label>
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