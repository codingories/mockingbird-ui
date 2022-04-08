import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Input from './input';

export default {
  title: '组件展示/Input',
  component: Input,
  argTypes: {
  }
} as ComponentMeta<typeof Input>;

const ControlledInput = () => {
  const [value, setValue] = useState('')
  return <Input value={value} defaultValue={value} onChange={(e) => {setValue(e.target.value)}}/>
}

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;


export const 默认Input = Template.bind({});
export const 被禁用的Input = Template.bind({});
export const 带图标的Input = Template.bind({});
export const 大小不同的Input = Template.bind({});
export const 带前后缀的Input = Template.bind({});

默认Input.args = {
  placeholder: 'placeholder',
  style: {"width": '300px'}
};

被禁用的Input.args = {
  placeholder: 'disabled input',
  style: {"width": '300px'},
  disabled: true
}

带图标的Input.args = {
  placeholder: 'input with icon',
  style: {"width": '300px'},
  icon: "search"
}

大小不同的Input.args = {
  placeholder: 'large size',
  style: {"width": '300px'},
  size: "lg"
}

带前后缀的Input.args = {
  defaultValue: "baidu",
  style: {"width": '300px'},
  append: ".com"
}

