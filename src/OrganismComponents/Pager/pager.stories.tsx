import React from 'react';
import Pager from "./Pager";
import { Meta } from "@storybook/react";

export default {
  title: 'Organism Components/Pager',
  component : Pager,
  tags: ['autodocs'],
  argTypes :{
    totalPages : {
      control : 'number'
    }
  }
} as Meta;

const Template = (args) => <Pager {...args} />;

export const Default = Template.bind({});

Default.args = {
  totalPages : 10,
}

