import { ReactNode } from 'react';

export type TooltipProps = {
    children: ReactNode;
    message: String;
}

  
export default function Tooltip({ message, children } : TooltipProps) {

    return (

        // <div className="group relative inline-block">
        <div className="group static inline-block hover:relative ">


            {children}


            <span className="pointer-events-none absolute text-xss -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-black px-1 py-1 text-white opacity-0 transition before:absolute before:left-1/2 before:top-full before:-translate-x-1/2 before:border-4 before:border-transparent before:border-t-black before:content-[''] group-hover:opacity-100">
                
                {message}
            
            </span> 
           
        </div>
    )
}