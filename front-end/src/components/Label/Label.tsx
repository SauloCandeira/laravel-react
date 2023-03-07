import { Container, variantToColor } from './styles'
import { Text } from "../Texts/Text"
import { ReactNode } from 'react';

export type LabelProps = {
  children: ReactNode;
  variant: 'default' | 'primary' | 'secondary' | 'tertiary' ;
}

export function Label({children,variant}:LabelProps) { 
  
  const {bgColor, color } = variantToColor[variant];
  
  return (
    <Container
      bgColor={bgColor}
      color={color}
    >
    <Text size="textCustom">
      {children}
    </Text>


    </Container>
    
  );
};

export default Label;