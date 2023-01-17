import styled from 'styled-components';
import { AppFontSize, AppFontStyle } from '../../styles/global';

type ContainerProps = {
    fontSize: string,
    // fontWeight: string
}

export const variantSizeFont = { 
    textCustom: {
        fontSize: '66%'
    },
    textSmall: {
        fontSize: AppFontSize.textSmall
    },
    textMedium: {
        fontSize: AppFontSize.textMedium
    },
    textLarge: {
        fontSize: AppFontSize.textLarge
    },
    headingLarge: {
        fontSize: AppFontSize.headingLarge
    },
    headingMedium: {
        fontSize: AppFontSize.headingMedium
    },
    headingSmall: {
        fontSize: AppFontSize.headingSmall
    }
}


// export const variantStyleFont = { 
//     textRegular: {
//         fontWeight: AppFontStyle.textRegular
//     },
//     textBold: {
//         fontWeight: AppFontStyle.textBold
//     }
// }


export const Container = styled.div<ContainerProps>`
    font-size: ${props => props.fontSize};
    /* font-weight: ${props => props.fontWeight}; */
    border: 0;
    /* position: relative; */
`;

