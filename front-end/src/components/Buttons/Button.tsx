import { Container, variantToColor, variantToSize } from "./styles";


export type ButtonProps = {
    children: string;
    size: 'p' | 'm' | 'g';
    variant: 'primary' | 'secondary' | 'outline' | 'quaternary' | 'tertiary';

}

export function Button({ size, children, variant, }: ButtonProps) {

        
    const {height, width} = variantToSize[size];
    const {bgColor, borderColor,color, hover} = variantToColor[variant];

   
    return (
        // <button className="py-3 px-2 bg-orange-50 rounded font-semibold text-white text-sm w-full transition-colors">
        //     {children}
        // </button>

        <Container
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