import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Upload, {UploadProps} from './upload';
import { action } from '@storybook/addon-actions';
// import MenuItem from './menuItem';
// import SubMenu from './subMenu';



export default {
  title: '组件展示/upload',
  component: Upload,
  // subcomponents: { SubMenu, MenuItem },
  argTypes: {

  }
} as ComponentMeta<typeof Upload>;


const Template: ComponentStory<typeof Upload> = (args) => <Upload {...args} />;

// onProgress={action('progress')}
// onSuccess={action('success')}
// onError={action('error')}

export const SimpleUpload = (args: UploadProps) => (
    <Upload
            {...args}>
    </Upload>
)
SimpleUpload.args = {
  action: 'http://192.168.1.13:3000/upload',
  onSuccess: action('success'),
  onProgress: action('progress'),
  onError: action('error')

};
