import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import Upload, {UploadProps} from './upload';
import {action} from '@storybook/addon-actions';


const checkFileSize = (file: File) => {
  if (Math.round(file.size / 1024) > 50) {
    alert('file too big');
    return false;
  }
  return true;
}

const filePromise = (file: File) => {
  // 讲fileName进行转换，转成fileName
  const newFile = new File([file], 'fileName', {type: file.type});
  return Promise.resolve(newFile);
}

export default {
  title: '组件展示/upload',
  component: Upload,
  argTypes: {}
} as ComponentMeta<typeof Upload>;


const Template: ComponentStory<typeof Upload> = (args) => <Upload {...args} />;


export const SimpleUpload = (args: UploadProps) => (
  <Upload
    {...args}>
  </Upload>
);

// onSuccess: action('success'),
//   onProgress: action('progress'),
//   onError: action('error')
SimpleUpload.args = {
  action: 'http://192.168.1.13:3000/upload',
  onChange: action('changed'),
  // filePromise
  // checkFileSize
  // beforeUpload: filePromise
};
