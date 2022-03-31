import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {withInfo} from '@storybook/addon-info';
import Button from './button';
import {PropsTable} from '../propsTable';


const defaultButton = () => (
  <Button onClick={action('clicked')}>default button</Button>
);

// buttonWithSize
const buttonWithSize = () => (
  <>
    <Button size="lg">large button</Button>
    <Button size="sm">large button</Button>
  </>
);

// buttonWithType
const buttonWithType = () => (
  <>
    <Button btnType="primary">large button</Button>
    <Button btnType="danger">danger button</Button>
    <Button btnType="link" href="https://baidu.com">link button</Button>
  </>
);

const propDefinitions = [{
  property: 'className',
  propType: 'string',
  required: '否',
  description: '按钮的自定义类名',
  defaultValue: '无'
}];

//
// // ts-ignore
// const Red = (props:any) => <span style={{ color: 'red' }} {...props} />;
//
// // ts-ignore
// const TableComponent = ({ propDefinitions:any }) => {
//   const props = propDefinitions.map(
//     // @ts-ignore
//     ({ property, propType, required, description, defaultValue }) => {
//       return (
//         <tr key={property}>
//           <td>
//             {property}
//             {required ? <Red>*</Red> : null}
//           </td>
//           <td>{propType.name}</td>
//           <td>{defaultValue}</td>
//           <td>{description}</td>
//         </tr>
//       );
//     }
//   );
//
//   return (
//     <table>
//       <thead>
//       <tr>
//         <th>name</th>
//         <th>type</th>
//         <th>default</th>
//         <th>description</th>
//       </tr>
//       </thead>
//       <tbody>{props}</tbody>
//     </table>
//   );
// };


// ## this is a header
// ~~~js
// const a = 'hello'
// ~~~

storiesOf('Button 组件', module)
  // @ts-ignore
  .addDecorator(withInfo)
  .addParameters({
    info: {
      text: `
      这是Button组件的文档
      `,
      inline: true,
      // TableComponent: () => PropsTable({propDefinitions}),
    }
  })
  .add('默认 Button', defaultButton)
  .add('不同尺寸的 Button', buttonWithSize)
  .add('不同类型的 Button', buttonWithType);
