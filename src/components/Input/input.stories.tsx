import React from "react";
import Input, { iInputProps } from "./Input";
import { Meta } from "@storybook/react";

export default {
  title: "Atomic Components/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes :{

  }
} as Meta;

const Template = (args : iInputProps ) => <Input {...args} />;

export const Default = Template.bind({});

Default.args = {
  label : 'Default Input',
}