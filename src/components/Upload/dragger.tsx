import React, {FC, useState, DragEvent, useRef, useEffect} from 'react';
import classNames from 'classnames';

interface DraggerProps {
  onFile: (files: FileList) => void;
}

export const Dragger: FC<DraggerProps> = (props) => {
  const drop = useRef<HTMLInputElement>(null);

  const {onFile, children} = props;
  const [dragOver, setDragOver] = useState(false);
  const klass = classNames('viking-uploader-dragger', {
    'is-dragover': dragOver
  });

  const handleDrop:any = (e: DragEvent<HTMLElement>) => {
    e.stopPropagation();
    e.preventDefault();
    setDragOver(false);
    onFile(e.dataTransfer.files);
  };

  useEffect(() => {
    if (drop.current) {
      drop.current.addEventListener('drop', handleDrop);
    }
    return () => {
      if (drop.current) {
        drop.current.addEventListener('drop', handleDrop);
      }
    };
  }, []);



  const handleDrag = (e: DragEvent<HTMLElement>, over: boolean) => {
    e.stopPropagation();
    e.preventDefault();
    setDragOver(over);
  };
  return (
    <div className={klass}
         ref={drop}
         onDragOver={e => { handleDrag(e, true); }}
         onDragLeave={e => { handleDrag(e, false); }}
         onDrag={handleDrop}
    >
      {children}
    </div>
  );
};

export default Dragger;
