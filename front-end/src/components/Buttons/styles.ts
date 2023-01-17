import styled from 'styled-components';
import { AppColors } from '../../styles/global';

type ContainerProps = {
    bgColor: string,
    color: string,
    borderColor: string,
    hoverBgColor: string,
    hoverColor: string,
    height: string,
    width: string
}

export const variantToSize = { 
    p: {
        width: '65px',
        height:'26px'
    },
    m: {
        width: '97px',
        height:'29px'
    },
    g: {
        width: '120px',
        height: '36px'
    }

}

export const variantToColor = { 
    primary: {
        bgColor: AppColors.primary,
        borderColor: AppColors.primary,
        color: AppColors.white,
        hover: {
            bgColor: AppColors.secondary,
            color: AppColors.white
        }

    },
    secondary: {
        bgColor: AppColors.secondary,
        borderColor: AppColors.secondary,
        color: AppColors.dark,
        hover: {
            bgColor: AppColors.primaryHover,
            color: AppColors.primaryHover
        }
    },
    outline: {
        bgColor: 'transparent',
        borderColor: AppColors.primary,
        color: AppColors.primary,
        hover: {
            bgColor: AppColors.primary,
            color: AppColors.white,
        }
    },
    quaternary: {
        bgColor: AppColors.blue,
        borderColor: AppColors.blue,
        color: AppColors.white,
        hover: {
            bgColor: AppColors.blue,
            color: AppColors.white,
        }
    },
    tertiary: {
        bgColor: 'transparent',
        borderColor: AppColors.blue,
        color: AppColors.blue,
        hover: {
            bgColor: AppColors.blue,
            color: AppColors.white,
        }
    }

}




export const Container = styled.button<ContainerProps>`
    /* width: 100%; */
    width: ${props => props.width};
    height: ${props => props.height};
    background-color: ${props => props.bgColor};
    border: 1px solid ${props => props.borderColor};
    color: ${props => props.color};
    font-size: 16px;
    cursos: pointer;
    border-radius: 6px;
    margin: 0 5px;

    &:hover {
        background-color: ${props => props.hoverBgColor};
        border: 1x solid ${props => props.hoverColor};
        color: ${props => props.hoverColor};
    } 
`;

