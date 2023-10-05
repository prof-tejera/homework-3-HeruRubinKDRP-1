import React from "react";
import { iRadioButtonItemProps, RadioButtonItem } from "./RadioButtonItem";
import { Meta } from "@storybook/react";

export default {
  title : 'Atomic Components/Radio Button item',
  component : RadioButtonItem,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control : 'text',
      description : 'text to display on the button',
    }
  }
} as Meta;

const Template = (args : iRadioButtonItemProps) => <RadioButtonItem {...args} />;

export const Default = Template.bind({});
Default.args = {
    label: "Radio Button",
  }
