import styled from 'styled-components';


export const Container = styled.div`
    width: 34px;
    height: 34px;
    background-color: #0E41FA;
    border-radius: 50%;
    /* align-items: center; */
    text-align: center;
    /* justify-content: center; */
    color: #fff;
    font-weight: bold;
    padding-top: 5px;
    border-color: '#fff';
    border: 2px solid white;

    &:hover {
        position: relative;
        cursor: pointer;
    } 

`;


// width: 86px;
// height: 18px;
// background-color: ${props => props.bgColor};
// color: ${props => props.color};
// text-align: center;
// justify-content: center;
// align-items: center;
// padding-top: 3px;
// text-transform: uppercase;
// border-radius: 4px;
