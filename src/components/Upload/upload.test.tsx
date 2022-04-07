import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import axios from 'axios'
import { render, RenderResult, fireEvent, waitFor, createEvent } from '@testing-library/react'
import { Upload, UploadProps } from './upload'

jest.mock('../Icon/icon', () => {
  return ({icon, onClick}:any) => {
    return <span onClick={onClick}>{icon}</span>
  }
})

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

const testProps = {
  action: "fakeurl.com",
  onSuccess: jest.fn(),
  onChange: jest.fn(),
  onRemove: jest.fn()
}



let wrapper: RenderResult, fileInput: HTMLInputElement, uploadArea: HTMLElement

const testFile = new File(['xyz'], 'test.png', {type: 'image/png'});

describe('test upload component', () => {
  beforeEach(() => {
    wrapper = render(<Upload {...testProps}>Click to upload</Upload>)
    fileInput = wrapper.container.querySelector('.viking-file-input') as HTMLInputElement
    uploadArea = wrapper.getByText('Click to upload')
  })
  it('upload process should works fine', async () => {
    const {queryByText} = wrapper
    // 第一种方式
    // mockedAxios.post.mockImplementation(() => {
    //   return Promise.resolve({'data': 'cool'})
    // })

    // 第二种方式，比较简单
    mockedAxios.post.mockResolvedValue({'data': 'cool'})
    expect(uploadArea).toBeInTheDocument();
    expect(fileInput).not.toBeVisible();
    fireEvent.change(fileInput, {target: {files: [testFile]}})
    expect(queryByText('spinner')).toBeInTheDocument()
    await waitFor(()=> {
      expect(queryByText('test.png')).toBeInTheDocument()
    })
    expect(queryByText('check-circle')).toBeInTheDocument()
    expect(testProps.onSuccess).toHaveBeenCalledWith('cool', testFile)
    expect(testProps.onChange).toHaveBeenCalledWith(testFile)
    // remove the uploaded file
    expect(queryByText('times')).toBeInTheDocument();
    fireEvent.click(queryByText('times') as HTMLElement);
    expect(queryByText('test.png')).not.toBeInTheDocument()
    expect(testProps.onRemove).toHaveBeenCalledWith(expect.objectContaining({
      raw: testFile,
      status: 'success',
      name: 'test.png',
      size: 3
    }))
  })

})

