import React, { FC, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';



// ButtonSize
export type ButtonSize = 'lg' | 'sm';
// ButtonType
export type ButtonType = 'primary' | 'default' | 'danger' | 'link';


interface BaseButtonProps {
  className?: string;
  disabled?: boolean;
  size?: ButtonSize;
  btnType?: ButtonType;
  children: React.ReactNode;
  href?: string;
}

// 拿到所有Button的属性
// 联合类型的亲兄弟，交叉类型看，将多个类型合并到一个类型

type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>

type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>

// Partial 把属性都设置成可选的
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>

export const Button: FC<ButtonProps> = (props) => {
  const {
    btnType,
    className,
    disabled,
    size,
    children,
    href,
    ...restProps // 取出剩下的属性
  } = props;
  // 根据不同的type，size添加不同的className
  // btn，btn-lg，btn-primary，把用户自定义的className也加上去
  const classes = classNames('btn', className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    'disabled': (btnType === 'link') && disabled
  });

  if (btnType === 'link' && href) {
    return (
      <a className={classes}
         href={href}
        {...restProps}
      >
        {children}
      </a>
    );
  } else {
    return (
      <button
        className={classes}
        disabled={disabled}
        {...restProps}
      >{
        children
      }</button>
    );
  }


};



Button.defaultProps = {
  disabled: false,
  btnType: 'default'
};

export default Button;
