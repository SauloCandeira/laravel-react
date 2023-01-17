
import { ComponentMeta, Story } from '@storybook/react'
import Button, {ButtonProps} from "./Button";


export default {
    title: 'Components/Buttons',
    component: Button,
    // args: {
    //     size: 'p',
    // },
    argsTypes: {
        label: {
            defaultValue: 'primary',
            control: {
                type: 'select',
                values: ['primary', 'secondary', 'outline', 'tertiary']
            }
        },
        size: {
            defaultValue: 'g',
            options: ['p', 'm', 'g'],
            control: {
                type: 'select'
            }

        }
    }

} as ComponentMeta<typeof Button>

export const Primary: Story<ButtonProps> = (args) => (
    <Button {... args}> Primary </Button>
)

Primary.args = {
    variant: 'primary',
    size: 'g'
}

Primary.parameters = {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/3tRZNTkSN9Dhh5bXpjCYeD/Helpdesk---Dashboard?node-id=5%3A6&t=p7BXUe32BiYNsjOn-4",
    },
};


export const Secondary: Story<ButtonProps> = (args) => (
    <Button {... args}> Secondary </Button>
    
)

Secondary.args = {
    variant: 'secondary',
    size: 'g'
}

export const Outline: Story<ButtonProps> = (args) => (
    <Button {... args}> Outline </Button>
)

Outline.args = {
    variant: 'outline',
    size: 'g'
}

Outline.parameters = {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/3tRZNTkSN9Dhh5bXpjCYeD/Helpdesk---Dashboard?node-id=5%3A23&t=p7BXUe32BiYNsjOn-4",
    },
};

export const Quaternary: Story<ButtonProps> = (args) => (
    <Button {... args}> Quaternary </Button>
)

Quaternary.args = {
    variant: 'quaternary',
    size: 'm'
}



export const Tertiary: Story<ButtonProps> = (args) => (
    <Button {... args}> Tertiary </Button>
)

Tertiary.args = {
    variant: 'tertiary',
    size: 'p'
}

