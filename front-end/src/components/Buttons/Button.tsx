import { Container, variantToColor, variantToSize} from "./styles";
import { useState, InputHTMLAttributes, ReactNode } from 'react';




export type ButtonProps = {
    children: ReactNode;
    size: 'p' | 'm' | 'g';
    variant: 'primary' | 'secondary' | 'outline' | 'quaternary' | 'tertiary';
    onClick: any,
    
}

export function Button({ size, children, variant, onClick }: ButtonProps) {

        
    const {height, width} = variantToSize[size];
    const {bgColor, borderColor,color, hover} = variantToColor[variant];

   
    return (
        // <button className="py-3 px-2 bg-orange-50 rounded font-semibold text-white text-sm w-full transition-colors">
        //     {children}
        // </button>
        // <Tooltip message={"✨ Coming soon!"}>


            <Container
                onClick={onClick}
                bgColor={bgColor}
                color={color}
                borderColor={borderColor}
                hoverBgColor={hover.bgColor}
                hoverColor={hover.color}
                width={width}
                height={height}

                // data-te-placement="top"
                // data-te-toggle="tooltip"
                // data-te-ripple-init
                // data-te-ripple-color="light"
                // title="Tooltip on top"
                // data-tip="hello"
                // margin={margin}
            >
                
                {children}
                        
            </Container>


        // </Tooltip>



    )
}


export default Button;