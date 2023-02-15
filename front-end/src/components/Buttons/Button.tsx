import { Container, variantToColor, variantToSize } from "./styles";
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

        <Container
            onClick={onClick}
            bgColor={bgColor}
            color={color}
            borderColor={borderColor}
            hoverBgColor={hover.bgColor}
            hoverColor={hover.color}
            width={width}
            height={height}
        >
            {children}
        </Container>


    )
}


export default Button;