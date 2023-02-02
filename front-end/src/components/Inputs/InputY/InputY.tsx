import { Container } from "./styles"
import { useState, useEffect, useRef }from 'react';

export type InputYProps = {
  value: ''
  options: Object
}

function getOptionClass(index, length, cursor) {
  let className = "hover:bg-gray-100 px-4 py-2";
  if(index === 0) className += "rounded-t-lg";
  else if(index === length -1) className += "rounded-b-lg";
  if( index === cursor) className += "bg-gray-100"
  return className
}



export function InputY({value, onChange, options}) {

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
      
      <div className="absolute" ref={ref}>
        <label htmlFor="floating_cliente" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> Escolha o cliente </label>
        <input 
           className="block py-2.5 px-0 w-full text-sm text-gray-400  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
          type="text" 
          value={value} 
          onFocus={e => setShowOption(true)}
          onChange={changeHandler}
          onKeyUp={keyHandler}
        />
        
        {showOption && (
          <ul className="absolute shadow-lg hover:shadow-xl w-full rounded-lg">
            {filteredOptions.map((option, i) => (
              <li 
                className={getOptionClass(i, filteredOptions.length, cursor)} 
                key={option} 
                onClick={e => select(option)}> 
                {option} 
              </li>
            ))}
          </ul>
        )}


      </div>

    )
}


export default InputY;