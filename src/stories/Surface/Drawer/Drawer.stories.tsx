import { ComponentStory, ComponentMeta } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";

import Breadcrumb from "../Breadcrumb/Breadcrumb";
// import Drawer from "./Drawer";

export default {
  title: "Surface/Drawer",
  component: Breadcrumb,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} as ComponentMeta<typeof Breadcrumb>;

const Template: ComponentStory<typeof Breadcrumb> = (args) => (
  <Breadcrumb {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  label: "Project Name",
};
