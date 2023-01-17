import { Container } from './styles'



export type AvatarProps = {
  children: string;
}

export function Avatar({children}:AvatarProps) { 
  
  return (
    
    <Container>
      {children}
    </Container>
    
  )
}

export default Avatar;