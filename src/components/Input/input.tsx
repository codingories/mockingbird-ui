import React, {ReactElement, InputHTMLAttributes, FC} from 'react';
import classNames from 'classnames';
import { IconProp } from '@fortawesome/fontawesome-svg-core'

type InputSize = 'lg' | 'md' | 'sm';
export interface InputProps extends Omit<InputHTMLAttributes<HTMLElement>, 'size'>{
  disabled?: boolean;
  size?: InputSize;
  icon?: IconProp;
  prepend?: string | ReactElement;
  append?: string | ReactElement;
}

export const Input: FC<InputProps> = (props) => {
  // 取出各种的属性

  // 根据属性计算不同的className

  return (
    // 根据属性判断是否要添加特定的节点
    <>
    </>
  )
}
