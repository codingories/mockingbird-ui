import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Transition from './transition';



export default {
  title: '组件展示/Transition动画',
  component: Transition,
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
} as ComponentMeta<typeof Transition>;


const Template: ComponentStory<typeof Transition> = (args) => <Transition {...args} />;


export const 动画 = Template.bind({});
动画.args = {
  children: '我是按钮',
};

// export const 不同大小按钮 = Template.bind({});
// 不同大小按钮.args = {
//   size: 'lg',
//   children: '不同大小按钮',
// };
//
// export const 不同类型按钮 = Template.bind({});
// 不同类型按钮.args = {
//   btnType: 'primary',
//   children: '不同类型按钮',
// };

