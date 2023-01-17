import { ComponentMeta, Story } from '@storybook/react'
import Tables, { TablesProps }  from "./Tables";


export default {
    title: 'Components/Tables',
    component: Tables,
    argsTypes: {
        label: {
            defaultValue: 'default',
            control: {
                type: 'select',
                values: ['default', 'primary']
            }
        }    
    }
} as ComponentMeta<typeof Tables>

export const Default: Story<TablesProps> = (args) => (
    <Tables {... args}> Nenhuma OS </Tables>
)

Default.args = {
    variant: 'default',
}

export const Primary: Story<TablesProps> = (args) => (
    <Tables {... args}> Primary </Tables>
)

Primary.args = {
    variant: 'primary',
}

