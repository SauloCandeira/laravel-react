
import { ComponentMeta, Story } from '@storybook/react'
import Label, {SpanProps} from "../Label/Label";

export default {
    title: 'Components/Label',
    component: Label,
    argsTypes: {
        label: {
            defaultValue: 'default',
            control: {
                type: 'select',
                values: ['default', 'primary', 'secondary', 'tertiary']
            }
        }
    }
} as ComponentMeta<typeof Label>


export const Default: Story<LabelProps> = (args) => (
    <Label {... args}> Default </Label>
)

Default.args = {
    variant: 'default',
}

export const Primary: Story<LabelProps> = (args) => (
    <Label {... args}> Primary </Label>
)

Primary.args = {
    variant: 'primary',
}


export const Secondary: Story<LabelProps> = (args) => (
    <Label {... args}> Secondary </Label>
)

Secondary.args = {
    variant: 'secondary',
}


export const Tertiary: Story<LabelProps> = (args) => (
    <Label {... args}> Tertiary </Label>
)

Tertiary.args = {
    variant: 'tertiary',
}
