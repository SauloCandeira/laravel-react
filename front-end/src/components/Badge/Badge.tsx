import { Container, variantToColor } from "../Badge/styles";

export type BadgeProps = {
    variant: 'primary' | 'secondary';
}

export function Badge({ variant }) {
   
    const {bgColor} = variantToColor[variant];

    return (

        <Container 
            bgColor={bgColor}
        />

    )
}


export default Badge;