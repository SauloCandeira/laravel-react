import { Container } from "./styles"
import { FormEvent, useState, useEffect }from 'react';

export type InputXProps = {
  request: Object
}


export function InputPrioridade({request} : InputXProps) {

  const [open, setOpen] = useState(false);

  // const [clientes, setClientes] = useState([]);
  const [inputValue, setInputValue] = useState("")
  const [selected, setSelected] = useState("")

  return (
    <>
      <div className="relative z-40 w-full mb-6 group">

        <input 
          autoComplete="off"
          type="text" 
          id="cliente" 
          onClick={() => setOpen(!open)}
          value={inputValue}
          onChange={(e)=>setInputValue(e.target.value.toLowerCase())} 
          className="block py-2.5 px-0 w-full text-sm text-gray-400  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
          placeholder=" " 
        />
        
        <label 
          htmlFor="floating_cliente" 
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        > 
          Prioridade
        </label>
        
        <ul 
          className={`fixed z-40 bg-white w-full mt-2 overflow-auto border max-h-52 text-black
          ${open ? 'absolute' : 'hidden'}`}>

          {request.map((item) => (
            <li 
              key={item} 
              className={`z-40 p-2 text-sm hover:bg-gray-400 
              ${item.toLowerCase() === selected?.toLowerCase() &&
              'bg-gray-100 text-black'  }
              ${item.toLowerCase().startsWith(inputValue)
                ? "block"
                : "hidden"
              }`}
              onClick={() => {
                if(item.toLowerCase() !== selected.toLowerCase()){
                  setInputValue(item)
                  setOpen(false)
                }
              }}
            >

              {item}
            </li>
          ))}

        </ul>

      </div>  
    </>

  )
}


export default InputPrioridade;