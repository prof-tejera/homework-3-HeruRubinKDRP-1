import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { iRadioButtonGroupProps, RadioButtons } from "./RadioButtons";


export default {
  title: "Organism Components/Radio Button Group",
  component: RadioButtons,
  tags: ["autodocs"],
  argTypes: {
    changeHandler : {
      description : 'function to handle the change event',
      control : 'function'
    },
    radioItems : {
      description : 'array of radio button items',
      control : 'array'
    },
    classes : {
      description : 'custom css classes, use sparingly',
      control : 'text'
    },
    groupName : {
      description : 'name of the radio buttons group',
      control : 'text'
    }
  }
}as Meta;

const Template : StoryFn = (args : iRadioButtonGroupProps) => <RadioButtons {...args} />;

export const Default = Template.bind({});
Default.args = {
  changeHandler : (e: any) => console.log(e),
  groupName : 'radio-group',
  radioItems : [
    {
      label : 'Radio Button 1',
      value : 'radio1',
      name : 'radio1',
      id : 'radio1'

    },
    {
      label : 'Radio Button 2',
      value : 'radio2',
      name : 'radio2',
      id : 'radio2'
    },
    {
      label : 'Radio Button 3',
      value : 'radio3',
      name : 'radio3',
      id : 'radio3'
    }
  ]
}
