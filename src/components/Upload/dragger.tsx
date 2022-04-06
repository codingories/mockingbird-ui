import React, { FC, useState, DragEvent } from 'react';
import classNames from 'classnames';

interface DraggerProps {
  onFile: (files: FileList) => void;
}

export const Dragger: FC<DraggerProps> = (props) => {
  const { onFile, children } = props;
  const [ dragOver, setDragOver ] = useState(false)
  const klass = classNames('viking-uploader-dragger', {
    'is-dragover': dragOver
  })
  const handleDrag = (e: DragEvent<HTMLElement>, over: boolean) => {
    e.preventDefault()
    setDragOver(over)
  }
  return (
    <div className={klass}
         onDragOver = {e => { handleDrag(e, true) }}
         onDragLeave = {e => { handleDrag(e, false) }}
    >
      { children }
    </div>
  )
}

export default Dragger;
