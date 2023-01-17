import styled from 'styled-components';
import { AppColors } from '../../styles/global';

type LabelProps = {
    bgColor: string,
    color: string,
}

export const variantToColor = { 
    default: {
        bgColor: AppColors.redLight,
        color: AppColors.red,
    },
    primary: {
        bgColor: AppColors.greenLight,
        color: AppColors.green,
    },
    secondary: {
        bgColor: AppColors.orangeLight,
        color: AppColors.primary,
    },
    tertiary: {
        bgColor: AppColors.blueLight,
        color: AppColors.blue
    }
}

export const Container = styled.div<LabelProps>`
    width: auto;
    font-weight: 600;
    height: auto;
    background-color: ${props => props.bgColor};
    color: ${props => props.color};
    text-align: center;
    padding-top: 3px;
    text-transform: uppercase;
    border-radius: 4px;
    line-height: 1;
    display: inline-block;
    padding: 0.35rem 0.375rem;
`;
