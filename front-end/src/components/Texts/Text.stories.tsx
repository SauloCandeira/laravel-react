import { ComponentMeta, Story } from '@storybook/react'
import Text, {TextProps} from "./Text";

export default {
    title: 'Components/Texts',
    component: Text,
    argsTypes: {
        label: {
            defaultValue: 'textSmall',
            control: {
                type: 'select',
                values: ['textSmall', 'textMedium', 'textLarge', 'headingSmall', 'headingMedium', 'headingLarge'],
            }
        }
    }
} as ComponentMeta<typeof Text>


// export const textRegular: Story<TextProps> = (args) => (
//     <Text {... args}> Text small </Text>
// )

// textRegular.args = {
//     style: 'textRegular'
// }

// export const textBold: Story<TextProps> = (args) => (
//     <Text {... args}> Text small </Text>
// )

// textBold.args = {
//     style: 'textBold'
// }



export const textCustom: Story<TextProps> = (args) => (
    <Text {... args}> Text Custom </Text>
)

textCustom.args = {
    size: 'textCustom'
}

export const textSmall: Story<TextProps> = (args) => (
    <Text {... args}> Text small </Text>
)

textSmall.args = {
    size: 'textSmall'
}

export const textMedium: Story<TextProps> = (args) => (
    <Text {... args}> Text medium </Text>
)

textMedium.args = {
    size: 'textMedium'
}


export const textLarge: Story<TextProps> = (args) => (
    <Text {... args}> Text large </Text>
)

textLarge.args = {
    size: 'textLarge'
}

export const headingSmall: Story<TextProps> = (args) => (
    <Text {... args}> Heading small </Text>
)

headingSmall.args = {
    size: 'headingSmall'
}

export const headingMedium: Story<TextProps> = (args) => (
    <Text {... args}> Heading medium </Text>
)

headingMedium.args = {
    size: 'headingMedium'
}

export const headingLarge: Story<TextProps> = (args) => (
    <Text {... args}> Heading large </Text>
)

headingLarge.args = {
    size: 'headingLarge'
}
