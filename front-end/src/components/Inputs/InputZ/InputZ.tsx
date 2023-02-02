import { Container } from "./styles"
import { useState, useEffect, useRef }from 'react';

export type InputYProps = {
  value: ''
  options: Object
}

function getOptionClass(index, length, cursor) {
  let className = "bg-black hover:bg-gray-100 px-4 py-2 Z-0";
  if(index === 0) className += "rounded-t-lg";
  else if(index === length -1) className += "rounded-b-lg";
  if( index === cursor) className += "bg-gray-100"
  return className
}



export function InputZ({value, onChange, options}) {

    console.log('options',options)

    const [showOption, setShowOption] = useState(false)
    const [cursor, setCursor] = useState(-1)
    const ref = useRef();
    
    const select = (option) => {
      onChange(option);
      setShowOption(false);
    }

    const changeHandler = (e) => {
      onChange(e.target.value)
      setCursor(-1)
      if(!showOption) {
        setShowOption(true)
      }
    }

    const keyHandler = (e) => {
      switch(e.code) {
        case "ArrowUp":
          if(cursor > 0) {
            setCursor((c) => c - 1)
          }
          break;
        case "ArrowDown":
          if(cursor < filteredOptions.length - 1){
            setCursor((c) => c + 1)
          }
          break;
        case "Enter":
          if(cursor !== -1){
            select(filteredOptions[cursor])
          }
          break;  
      }
    }

    let filteredOptions = options.filter(option => option.includes(value))


    useEffect(() => {
      const listener = e => {
        if(!ref.current.contains(e.target)){
          setShowOption(false);
          setCursor(-1)
        }
      };
      document.addEventListener('click', listener)
      document.addEventListener('focusin', listener)
      return () => {
        document.removeEventListener("click", listener);
        document.removeEventListener("focusin", listener);
      };
    }, [])

    return (
      <>
      
      <label htmlFor="floating_cliente" className=""> Escolha o cliente </label>
 
      <div className="z-0 relative" ref={ref}>

        <div className="z-0 0 h-10 bg-white flex border border-gray-200 rounded items-center">
          <input 
            className="px-4 appearance-none outline-none text-gray-800 w-full" checked 
            type="text" 
            value={value} 
            onFocus={e => setShowOption(true)}
            onChange={changeHandler}
            onKeyUp={keyHandler}
          />
        </div>

        
        {showOption && (
          
          <div className="z-0 absolute rounded shadow bg-white overflow-hidden  peer-checked:flex flex-col w-full mt-1 border border-gray-200">
            <ul className="z-0 cursor-pointer group" >
              {filteredOptions.map((option, i) => (
                <li 
                  className="z-0 block p-2 border-transparent border-l-4 group-hover:border-blue-600 group-hover:bg-gray-100" 
                  key={option} 
                  onClick={e => select(option)}> 
                  {option} 
                </li>
              ))}
            </ul>
          </div>
        )}


      </div>
    </>
    )
}


export default InputZ;