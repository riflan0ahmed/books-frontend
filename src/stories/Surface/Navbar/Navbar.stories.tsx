import { ComponentStory, ComponentMeta } from "@storybook/react";

import Navbar from "./Navbar";

export default {
  title: "Surface/Navbar",
  component: Navbar,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Project Name",
};
