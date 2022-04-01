import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import Icon from './icon';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {library} from '@fortawesome/fontawesome-svg-core';

library.add(fas);


export default {
  title: '组件展示/icon',
  component: Icon,
  argTypes: {
    className: {
      description: '自定义的类名',
      table: {
        defaultValue: { summary: '' },
        type: { summary: 'string' },
      },
      control: { type: 'text' }
    },
    theme: {
      description: '图标类型',
      table: {
        defaultValue: {summary: 'primary'},
        type: {summary: `primary | secondary | success | info | warning | danger | light | dark`},
      },
      control: {type: 'select', options: ['default', 'primary', 'danger', 'link']}
    },
    icon: {
      description: '图标名称',
      table: {
        defaultValue: { summary: "" },
        type: { summary: `angle-left | arrow-down | apple-whole | bicycle | ...`, detail: "更多: https://fontawesome.com/v6/icons/address-card?s=solid" },
      },
    },
    size: {
      description: '图标大小',
      table: {
        defaultValue: { summary: '1x' },
        type: { summary: '1x | 2x | ... | 10x' },
      },
    },
  }
} as ComponentMeta<typeof Icon>;


const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;


export const 图标 = Template.bind({});
图标.args = {
  theme: 'primary',
  icon: 'coffee',
  size: '5x'
};


