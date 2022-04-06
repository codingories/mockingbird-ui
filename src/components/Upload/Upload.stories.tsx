import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import Upload, {UploadFile, UploadProps} from './upload';
import {action} from '@storybook/addon-actions';
import Icon from '../Icon/icon';


const checkFileSize = (file: File) => {
  if (Math.round(file.size / 1024) > 50) {
    alert('file too big');
    return false;
  }
  return true;
};

const filePromise = (file: File) => {
  // 讲fileName进行转换，转成fileName
  const newFile = new File([file], 'fileName', {type: file.type});
  return Promise.resolve(newFile);
};

export default {
  title: '组件展示/upload',
  component: Upload,
  argTypes: {}
} as ComponentMeta<typeof Upload>;


const Template: ComponentStory<typeof Upload> = (args) => <Upload {...args} />;


export const SimpleUpload = (args: UploadProps) => {
  console.log('fuck2', args);
  return (<Upload
      {...args}>
      <Icon icon="upload" size="5x" theme="secondary" />
      <br/>
      <p>Drag file over to upload</p>
    </Upload>
  );
};

// onSuccess: action('success'),
//   onProgress: action('progress'),
//   onError: action('error')

// @ts-ignore
const defaultFileList = [
  {uid: '123', size: 1234, name: 'hello.md', status: 'uploading', percent: 30},
  {uid: '122', size: 1234, name: 'xyz.md', status: 'success', percent: 30},
  {uid: '121', size: 1234, name: 'eyiha.md', status: 'error', percent: 30}
];

SimpleUpload.args = {
  action: 'http://192.168.1.13:3000/upload',
  onChange: action('changed'),
  // beforeUpload: filePromise,
  defaultFileList: defaultFileList,
  style: {width: '500px'},
  name: 'fileName',
  data: {'key': 'value'},
  headers: {'X-Powered-By': 'vinkingship'},
  accept: '.pdf',
  multiple: true,
  drag: true
};

