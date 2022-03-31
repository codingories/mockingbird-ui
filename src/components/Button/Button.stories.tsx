import React from 'react';
import {storiesOf} from '@storybook/react';
import {action, decorate} from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info'
import Button from './button';



const defaultButton = () => (
  <Button onClick={action('clicked')}>default button</Button>
)

// buttonWithSize
const buttonWithSize = () => (
  <>
    <Button size="lg"> large button </Button>
    <Button size="sm"> large button </Button>
  </>
)

// buttonWithType
const buttonWithType = () => (
  <>
    <Button btnType="primary"> large button </Button>
    <Button btnType="danger"> danger button </Button>
    <Button btnType="link" href="https://baidu.com"> link button </Button>
  </>
)

// info: {
//   text: 'this is a very nice component',
//     inline: true
// },

  // .addDecorator(CenterDecorator)

storiesOf('Button Component', module)
  // @ts-ignore
  .addDecorator(withInfo)
  .addParameters({
    info: {
      text: `
      this is a very nice component
      ## this is a header
      ~~~js
      const a = 'hello'
      ~~~
      `,
      inline: false
    }
  })
  .add('默认 Button', defaultButton, {info: { inline: true }})
  .add('不同尺寸的 Button', buttonWithSize)
  // .add('不同类型的 Button', buttonWithType)
