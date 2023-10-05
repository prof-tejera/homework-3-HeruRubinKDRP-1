import React from "react";
import LoginForm from "./LoginForm";
import { Meta, StoryFn } from "@storybook/react";

export default {
  title: "Organism Components/LoginForm",
  component: LoginForm,
  tags: ["autodocs"],
  argTypes :{

  }
} as Meta;

const Template : StoryFn = (args) => <LoginForm {...args} />;

export const Default = Template.bind({});

Default.args = {

}