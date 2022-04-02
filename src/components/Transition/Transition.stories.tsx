import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Transition from './transition';
import Button from '../Button/button';



export default {
  title: '组件展示/Transition动画',
  component: Transition,
  argTypes: {
    animation: {
      description: '动画类型',
      table: {
        defaultValue: { summary: 'zoom-in-top' },
        type: { summary: 'zoom-in-top | zoom-in-left | zoom-in-bottom |zoom-in-right' },
      },
      control: { type: 'select', options: ['zoom-in-top', 'zoom-in-left', 'zoom-in-bottom', 'zoom-in-right'] }
    },
    in: {
      description: '是否打开，默认false为关闭，true为打开',
      table: {
        defaultValue: { summary: false },
        type: { summary: 'false | true' },
      },
    },
    timeout: {
      description: '动画时长',
      table: {
        defaultValue: { summary: 300 },
        type: { summary: 'number' },
      },
      control: { type: 'number' }
    },
    wrapper: {
      description: '在外面添加空的wrapper节点，解决与内部元素transition冲突的问题。',
      table: {
        defaultValue: { summary: false },
        type: { summary: 'false | true' },
      },
    },
  }
} as ComponentMeta<typeof Transition>;


const Template: ComponentStory<typeof Transition> = (args) => <Transition {...args} />;


export const 动画 = (args:any ) => {
  const [ show, setShow ] = useState(false);
  const {timeout, animation, wrapper} = args
  return <>
    <Button size="lg" onClick={() => { setShow(!show) }}>
      Toggle
    </Button>
    <Transition in={show} timeout={timeout} animation={animation}>
      <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur debitis dolor eligendi labore nulla possimus praesentium, quaerat quam? Aliquam aliquid aperiam atque debitis deserunt dolorum ducimus ea eos ex facere, necessitatibus, nulla officia quia sapiente voluptatum? A, beatae, blanditiis commodi et, eveniet harum itaque magni modi mollitia quas qui velit. A alias aliquam amet aperiam atque commodi corporis cumque deleniti deserunt distinctio dolore doloremque dolores eius eligendi enim eos harum in incidunt ipsa magni molestiae necessitatibus obcaecati perspiciatis placeat porro quasi quibusdam quis quod ratione reiciendis saepe, similique sint tempore temporibus tenetur totam veritatis? Dolores ducimus perferendis quod soluta. Accusantium adipisci at aut corporis dolorem iure maiores maxime, necessitatibus nihil praesentium provident quod sed sequi tempore ullam? Animi aspernatur assumenda debitis, eum expedita impedit molestias odit quo reiciendis sit temporibus ullam. A assumenda aut excepturi explicabo impedit ipsam obcaecati odit officia quisquam rem! Culpa dolorem ea eaque eius itaque natus repellendus repudiandae! Accusamus accusantium aperiam aspernatur cum eius error eum, facilis illum laudantium magnam minus mollitia nesciunt quam quasi qui quo, quos ratione recusandae rem repellendus tenetur velit voluptatibus. Adipisci cupiditate doloremque, impedit laborum quibusdam ratione recusandae? Adipisci asperiores aspernatur blanditiis delectus, dicta, mollitia odit officia, placeat possimus repudiandae rerum!
      </div>
    </Transition>
    { show && <p style={{ fontSize: "12px", color: "#666"  }}>以下是带有transtion样式的Button，当wrapper为true存在动画，否则动画无效</p>}
    <Transition in={show} timeout={timeout} animation={animation} wrapper={wrapper}>
      <Button btnType="primary" size="lg">A Large Button</Button>
    </Transition>
  </>
}

动画.args = {
  animation: 'zoom-in-top',
  wrapper: false,
  timeout: 300
};


