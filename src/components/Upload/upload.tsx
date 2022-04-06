import React, {FC, useRef, useState} from 'react';
import axios from 'axios';
import Button from '../Button/button';
import {ChangeEvent} from 'react';

export type UploadFileStatus = 'ready' | 'uploading' | 'success' | 'error';

export interface UploadFile {
  uid: string;
  size: number;
  name: string;
  status?: UploadFileStatus;
  percent?: number;
  raw?: File;
  response?: any;
  error?: any;
}

export interface UploadProps {
  action: string;
  defaultFileList?: UploadFile[];
  beforeUpload?: (file: File) => boolean | Promise<File>;
  onProgress?: (percentage: number, file: File) => void;
  onSuccess?: (data: any, file: File) => void;
  onError?: (err: any, file: File) => void;
  onChange?: (file: File) => void;
  onRemove?: (file: UploadFile) => void;
}

export const Upload: FC<UploadProps> = (props) => {
  const {action, defaultFileList, beforeUpload, onProgress, onSuccess, onError, onChange, onRemove} = props;
  const fileInput = useRef<HTMLInputElement>(null);
  const [ fileList, setFileList ] = useState<UploadFile[]>(defaultFileList || []);
  const handleClick = () => {
    if (fileInput.current) {
      fileInput.current.click();
    }
  };
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) {
      return;
    }
    uploadFiles(files);
    if (fileInput.current) {
      fileInput.current.value = '';
    }
  };

  const uploadFiles = (files: FileList) => {
    let postFiles = Array.from(files);
    postFiles.forEach(file => {
      if (!beforeUpload) {
        post(file);
      } else {
        const result = beforeUpload(file);
        if (result && result instanceof Promise) {
          result.then(processedFile => {
            post(processedFile);
          });
        } else if (result !== false) {
          post(file);
        }
      }
    });
  };

  const post = (file: File) => {
    let _file: UploadFile = {
      uid: Date.now() + 'upload-file',
      status: 'ready',
      name: file.name,
      size: file.size,
      percent: 0,
      raw: file
    }
    setFileList([_file, ...fileList]);
    let formData = new FormData();
    // "fileName"
    formData.append(file.name, file);
    axios.post(action, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      onUploadProgress: (e) => {
        let percentage = Math.round((e.loaded * 100) / e.total) || 0;
        if (percentage < 100) {
          // console.log('fileList', fileList)
          setFileList((prevList) => {
            console.log(prevList)
            return prevList
          })
          if (onProgress) {
            onProgress(percentage, file);
          }
        }
      }
    }).then(resp => {
      console.log(resp);
      if (onSuccess) {
        onSuccess(resp.data, file);
      }
      if (onChange) {
        onChange(file);
      }
    }).catch(err => {
      console.error(err);
      if (onError) {
        onError(err, file);
      }
      if (onChange) {
        onChange(file);
      }
    });
  };

  console.log(fileList)
  return (
    <div className="viking-upload-component">
      <Button
        btnType="primary"
        onClick={handleClick}
      >
        Upload File
      </Button>
      <input
        className="viking-file-input"
        style={{display: 'none'}}
        ref={fileInput}
        onChange={handleFileChange}
        type="file"
      ></input>
    </div>
  );
};

export default Upload;