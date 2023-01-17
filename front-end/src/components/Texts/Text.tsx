import { Container, variantSizeFont, variantStyleFont } from "./styles";

export type TextProps = {
    children: string;
    size: 'textCustom' | 'textSmall' | 'textMedium' | 'textLarge' | 'headingSmall' | 'headingMedium' | 'headingLarge';
    // style: 'textBold' | 'textRegular';
}

export function Text({ children, size }: TextProps) {

    const { fontSize } = variantSizeFont[size];
    // const { fontWeight } = variantStyleFont[style];

    return (
        <Container
            fontSize={fontSize}  
            // fontWeight={fontWeight}
        >
            {children}
        </Container>
    )
}

export default Text;