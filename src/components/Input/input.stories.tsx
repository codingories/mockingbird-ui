import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {Input} from './input';

export default {
  title: '组件展示/Input',
  component: Input,
  argTypes: {
    // className: {
    //   description: '自定义的类名',
    //   table: {
    //     defaultValue: { summary: '' },
    //     type: { summary: 'string' },
    //   },
    //   control: { type: 'text' }
    // },
    //
    // btnType: {
    //   description: '按钮的类型',
    //   table: {
    //     defaultValue: { summary: 'default' },
    //     type: { summary: 'default | primary | danger |link' },
    //   },
    //   control: { type: 'select', options: ['default', 'primary', 'danger', 'link'] }
    // },
    // disabled: {
    //   description: '是否启用',
    //   table: {
    //     defaultValue: { summary: false },
    //     type: { summary: 'false | true' },
    //   },
    //   control: { type: 'boolean', options: ['default', 'primary', 'danger', 'link'] }
    // },
    // size: {
    //   description: '控制按钮的大小',
    //   table: {
    //     defaultValue: { summary: 'md' },
    //     type: { summary: 'sm | md | lg' },
    //   },
    //   control: { type: 'select', options: ['sm', 'md', 'lg'] }
    // },
    // children: {
    //   description: '传入的参数',
    //   table: {
    //     defaultValue: { summary: '' },
    //     type: { summary: 'string' },
    //   },
    // },
    //
    // href: {
    //   description: '链接地址，当type为link时生效',
    //   table: {
    //     defaultValue: { summary: '' },
    //     type: { summary: 'string' },
    //   },
    //   control: { type: 'text' }
    // },
  }
} as ComponentMeta<typeof Input>;


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

