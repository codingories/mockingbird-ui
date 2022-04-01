import React, {useContext} from 'react';
import classNames from 'classnames';
import {MenuContext} from './menu'

export interface MenuItemProps {
  /**
   * 子菜单的索引值
   */
  index?: string
  /**
   * 是否禁用菜单
   */
  disabled?: boolean
  /**
   * 自定义类名
   */
  className?: string;
  /**
   * 自定义的class样式
   */
  style?: React.CSSProperties
}

const MenuItem: React.FC<MenuItemProps> = ({index, disabled = false, style, children}) => {
  // const {index, disabled, style, children} = props;
  const context = useContext(MenuContext);
  const classes = classNames('menu-item', classNames, {
    'is-disabled': disabled,
    'is-active': context.index === index
  });
  const handleClick = () => {
    if (context.onSelect && !disabled && (typeof index === 'string')) {
      context.onSelect(index)
    }
  }
  return (
    <li className={classes} style={style} onClick={handleClick}>
      {children}
    </li>
  );
};

MenuItem.displayName = 'MenuItem'

export default MenuItem
