import React, {createContext, useState} from 'react';
import classNames from 'classnames';
import {MenuItemProps} from './menuItem';

// 字符串字面量替换enum，这种方式更简便
type MenuMode = 'horizontal' | 'vertical'
type SelectCallback = (selectedIndex: number) => void

export interface MenuProps {
  defaultIndex?: number;
  className?: string;
  mode?: MenuMode;
  style?: React.CSSProperties;
  onSelect?: SelectCallback;
}

interface IMenuContext {
  index: number;
  onSelect?: SelectCallback;
}

export const MenuContext = createContext<IMenuContext>({index: 0});

const Menu: React.FC<MenuProps> = (props) => {
  const {className, mode, style, children, defaultIndex, onSelect} = props;
  const [currentActive, setCurrentActive] = useState(defaultIndex);
  const classes = classNames('viking-menu', className, {
    'menu-vertical': mode === 'vertical',
    'menu-horizontal': mode !== 'vertical'
  });
  const handleClick = (index: number) => {
    setCurrentActive(index);
    if (onSelect) {
      onSelect(index);
    }
  };
  const passedContext: IMenuContext = {
    index: currentActive ? currentActive : 0,
    onSelect: handleClick
  };

  const renderChildren = () => {
    // 直接用children很危险，React文档官方提供了React.Children.map的方法
    return React.Children.map(children, (child, index) => {
      const childElement = child as React.FunctionComponentElement<MenuItemProps>;
      const {displayName} = childElement.type;
      if (displayName === 'MenuItem' || displayName === 'SubMenu') {
        return React.cloneElement(childElement, {
          index
        })
      } else {
        console.warn("Warning: Menu has a child which is not a MenuItem component")
      }
    });
  };

  return (
    <ul className={classes} style={style} data-testid="test-menu">
      <MenuContext.Provider value={passedContext}>
        {renderChildren()}
      </MenuContext.Provider>
    </ul>
  );
};

Menu.defaultProps = {
  defaultIndex: 0,
  mode: 'horizontal'
};

export default Menu;
