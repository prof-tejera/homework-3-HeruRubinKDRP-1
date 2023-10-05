import Button, { iButtonProps } from "./Button";
import React from "react";
import { Meta, StoryFn } from "@storybook/react";
export default {
  title: 'Atomic Components/Button',
  component: Button,
  tags : ['autodocs'],
  argTypes :{
    label: {
      description: 'Label text for the button',
      control: 'text'
    },
    active: {
      description: 'set button to be enabled or disabled from its parent',
      control: 'boolean'
    },
    classes: {
      description: 'if you need a custom css class if absolutely necessary, try to work within the limits of the baked in styling',
      control: 'text'
    },
    theme: {
      description : 'select from predefined themes so it matches the rest of the site',
      control: 'radio',
      options: ['default', 'primary', 'secondary', 'tertiary'] },
  },
  hoverType :{
    description : 'select from predefined hover states so it can be consistent',
    control: 'radio',
    options: ['default-hover', 'expand-bg']
  }
} as Meta;


const Template : StoryFn = (args : iButtonProps ) => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {
  label : 'Default Button',
  classes : 'test-item',
  theme: 'default',
  hoverType : 'default-hover',
}

export const Primary = Template.bind({});

Primary.args = {
  label : 'Primary Button',
  classes : 'primary-test',
  theme: 'primary',
  hoverType : 'expand-bg',
}

export const Secondary = Template.bind({});
Secondary.args = {
  label : 'Secondary Button',
  classes : 'secondary-test',
  theme: 'secondary',
  hoverType : 'expand-bg',
}
