import styled from 'styled-components';
import { AppVisibility } from '../../styles/global';

type TablesProps = {
    visibility: string,
}

export const variantToVisibility = { 
    default: {
        visibility: AppVisibility.default

    },
    primary: {
        visibility: AppVisibility.primary
    }

}

export const Container = styled.div`
    width: 100%;
    max-width: 2529px;
    height: 289px;
    background-color: #fff;
    text-indent: initial;
    border-spacing: 2px;
    border-color: grey;
    font-size: 16px;
    cursos: pointer;
    border-radius: 6px;
    display: table;
`;

export const Header = styled.div`
    width: 100%;
    max-width: 2529px;
    height: 65px;
    background-color: #fff;
    text-indent: initial;
    border-spacing: 2px;
    border-color: grey;
    font-size: 16px;
    cursos: pointer;
    border-radius: 6px;
    display: table;
`;

export const Thead = styled.div`
    width: 100%;
    max-width: 2529px;
    height: 65px;
    background-color: #8898aa;;
    /* text-indent: initial; */
    border-spacing: 2px;
    border-color: grey;
    font-size: 16px;
    /* cursos: pointer;
    border-radius: 6px;
    display: table;
    vertical-align: inherit; */
    border-collapse: collapse;
`;

export const Tbody = styled.div<TablesProps>`
    width: 100%;
    max-width: 2529px;
    height: 65px;
    background-color: blue;
    border-spacing: 2px;
    border-color: grey;
    font-size: 16px;
    cursos: pointer;
    border-radius: 6px;
    display: flex;
    visibility: ${props => props.visibility};
    text-align: center;
    color: #fff;
    /* vertical-align: middle; */
    justify-content: center;
    /* display: ${props => props.visibility}; */

`;