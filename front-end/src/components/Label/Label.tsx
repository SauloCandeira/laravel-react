import { Container, variantToColor } from './styles'
import { Text } from "../Texts/Text"

export type LabelProps = {
  children: string;
  variant: 'default' | 'primary' | 'secondary' ;
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