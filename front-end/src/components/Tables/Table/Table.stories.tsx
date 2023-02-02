import { ComponentMeta, Story } from '@storybook/react'
import Table, { TableProps }  from "./Table";

export default {
    title: 'Components/Table',
    component: Table,
    argsTypes: {
        label: {
            defaultValue: 'default',
            control: {
                type: 'select',
                values: ['default', 'primary']
            }
        }    
    }
} as ComponentMeta<typeof Table>

export const Default: Story<TableProps> = (args) => (
    <Table {... args}> Nenhuma OS </Table>
)

Default.args = {
    variant: 'default',
}

export const Primary: Story<TableProps> = (args) => (
    <Table {... args}> Primary </Table>
)

Primary.args = {
    variant: 'primary',
}

