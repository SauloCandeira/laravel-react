import styled from 'styled-components';

type ContainerProps = {
    bgColor: string
}


export const variantToColor = { 
    primary: {
        bgColor: '#000'
    },
    secondary: {
        bgColor: '#2dce89'
    }
}



export const Container = styled.button<ContainerProps>`

    display: inline-block;
    width: 5px;
    height: 5px;
    margin-right: 0.375rem;
    vertical-align: middle;
    border-radius: 50%;
    background-color: ${props => props.bgColor};
`;

