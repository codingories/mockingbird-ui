import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Menu, {MenuProps} from './menu';
import MenuItem from './menuItem';
import SubMenu from './subMenu';



export default {
  title: '组件展示/menu',
  component: Menu,
  subcomponents: { SubMenu, MenuItem },
  argTypes: {
    mode: {
      description: '菜单模式',
      table: {
        defaultValue: { summary: 'vertical' },
        type: { summary: 'vertical | horizontal' },
      },
      control: { type: 'select', options: ['vertical', 'horizontal'] }
    },
    defaultIndex: {
      description: '菜单下标',
      table: {
        defaultValue: { summary: 0 },
        type: { summary: '0 | 1 | ...' },
      },
      control: { type: 'text', options: ['0', '1', '2', '3'] }
    },
    onSelect: {
      description: '点击事件',
      table: {
        defaultValue: { summary: '' },
        type: { summary: '(index: string) => { alert(index) }' },
      },
    },
    defaultOpenSubMenus: {
      description: '垂直模式下是否展开子菜单',
      table: {
        defaultValue: { summary: [] },
        type: { summary: '[2]' },
      },
      control: { type: 'array', options: ['2'] }
    },
  }
} as ComponentMeta<typeof Menu>;


const Template: ComponentStory<typeof Menu> = (args) => <Menu {...args} />;

export const 水平菜单 = (args: MenuProps) => (
    <Menu {...args}>
      <MenuItem>
        cool link
      </MenuItem>
      <MenuItem disabled>
        cool link 2
      </MenuItem>
      <SubMenu title="dropdown">
        <MenuItem>
          dropdown 1
        </MenuItem>
        <MenuItem>
          dropdown 2
        </MenuItem>
      </SubMenu>
      <MenuItem>
        cool link 3
      </MenuItem>
    </Menu>
)
水平菜单.args = {
  mode: 'horizontal',
  defaultIndex: '0',
  onSelect: (index: string) => {  },
  defaultOpenSubMenus: ['2'],
};

export const 垂直菜单 = (args: MenuProps) => (
  <Menu {...args}>
    <MenuItem>
      cool link
    </MenuItem>
    <MenuItem disabled>
      cool link 2
    </MenuItem>
    <SubMenu title="dropdown">
      <MenuItem>
        dropdown 1
      </MenuItem>
      <MenuItem>
        dropdown 2
      </MenuItem>
    </SubMenu>
    <MenuItem>
      cool link 3
    </MenuItem>
  </Menu>
)

垂直菜单.args = {
  mode: 'vertical',
  defaultIndex: '0',
  onSelect: (index: string) => {  },
  defaultOpenSubMenus: ['2'],
};

