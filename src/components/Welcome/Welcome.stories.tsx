import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
// import  Button  from './button';
import "./welcome.scss"


export default {
  title: '介绍/起步',
  argTypes: {
  }
} as ComponentMeta<any>;

export const 欢迎 = (args:any) => (
    <div className="wrapper">
      <h1>欢迎来到 mockingbird-ui 组件库</h1>
      <p>mockingbird-ui 是我个人从0到1完成的一款基于react的UI组件库，欢迎大家使用</p>
      <h3>安装方式</h3>
      <code>
        npm install mockingbird-ui --save
      </code>
      <h3>
        <a href="https://github.com/codingories/mockingbird-ui" className="aLink">代码仓库链接</a>
      </h3>
    </div>
)
