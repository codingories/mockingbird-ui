import { configure,addDecorator } from '@storybook/react';
import React from 'react';


const styles: React.CSSProperties = {
  textAlign: 'center'
}

configure(require.context('../src', true, /\.story\.tsx$/), module);


const CenterDecorator = (storyFn: any) => (
  <div style={styles}>
    {storyFn()}
  </div>
)

addDecorator(CenterDecorator)
