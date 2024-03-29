import { Container } from "./styles"
import { FormEvent, useState, useEffect }from 'react';

export type InputXProps = {
  request: Object
  id: String
  onChange: any
  value: Object
  handleResult: any
}


export function InputFuncionariosB({request, id, onChange, value, handleResult } : InputXProps) {
  
  // console.log('request', request)

  // request.map((item) => {
  //   console.log(item.no_funcionario)
  //   console.log(item.id_funcionario)
  // })
  // console.log('id', id)
  // console.log('onChange',onChange)
  // console.log('value',value)

  const [open, setOpen] = useState(false);

  // const [clientes, setClientes] = useState([]);
  const [inputValue, setInputValue] = useState("")
  const [selected, setSelected] = useState("")

  const [itemsList, setItemsList] = useState([]);
  const [checkedValues, setValue] = useState([])
  const [checkedValuesIds, setValueIds] = useState([])


  function handleChange(event){

    const datakey = event.target.getAttribute('data-key'); 
    const { value, checked } = event.target


    if(checked){
      setValue(pre => [...pre, value])
      setValueIds(pre => [...pre, datakey])
    }else {
      setValue(pre => {
        return [...pre.filter(skill => skill !== value)]
      })
      setValueIds(pre => {
        return [...pre.filter(skill => skill !== datakey)]
      })
    } 
  }
  
  handleResult(checkedValuesIds)

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('itemsList', itemsList)
  
  }

  return (
    <>
      <div className="relative z-10 w-full mb-6 group">

        <input 
          autoComplete="off"
          type="text" 
          id="cliente" 
          onClick={() => setOpen(!open)}
          value={checkedValues}
          onChange={onChange} 
          className="block py-2.5 px-0 w-full text-sm text-gray-400  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
          placeholder=" " 
        />

        <label 
          htmlFor="floating_cliente" 
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        > 
          Funcionário
        </label>

        <ul 
          className={`fixed z-40 bg-white w-full mt-2 overflow-auto border max-h-52 text-black
          ${open ? 'absolute' : 'hidden'}`}>

          {request.map((item) => (


            <li
              key={item.id_funcionario} 
              className={`z-40 p-2 text-sm hover:bg-gray-400 
              ${item.no_funcionario.toLowerCase() === selected?.toLowerCase() &&
              'bg-gray-100 text-black'  }
              ${item.no_funcionario.toLowerCase().startsWith(inputValue)
                ? "block"
                : "hidden"
              }`}
              onClick={() => {
                if(item.no_funcionario.toLowerCase() !== selected.toLowerCase()){
                  // setInputValue(item)
                  setOpen(false)
                  // handleSubmit
                  setItemsList(item.no_funcionario)

                }
              }}
            >
              {/* <p> 
                {item.no_funcionario}
              </p> */}

              <input 
                type="checkbox" 
                className="border-gray-300 rounded h-5 w-5" 
                onChange={handleChange}
                value={item.no_funcionario}
                data-key={item.id_funcionario} 
              />

              <label htmlFor="checkbox" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                {item.no_funcionario}
              </label>



            </li>

          ))}

        </ul>
      </div>
    </>

  )
}


export default InputFuncionariosB;