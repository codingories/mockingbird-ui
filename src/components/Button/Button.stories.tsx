import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import Button from './button';
import { withInfo } from '@storybook/addon-info'

// const styles: React.CSSProperties = {
//   textAlign: 'center'
// }
//
// const CenterDecorator = (storyFn: any) => (
//   <div style={styles}>
//     {storyFn()}
//   </div>
// )


const defaultButton = () => (
  <Button onClick={action('clicked')}> default button </Button>
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


storiesOf('Button Component', module)
  // @ts-ignore
  .addDecorator(withInfo)
  .add('默认 Button', defaultButton)
  .add('不同尺寸的 Button', buttonWithSize)
  .add('不同类型的 Button', buttonWithType)
