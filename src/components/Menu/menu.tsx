import React from 'react';
import classNames from 'classnames';

// 字符串字面量替换enum，这种方式更简便
type MenuMode = 'horizontal' | 'vertical'

export interface MenuProps {
  defaultIndex?: number;
  className?: string;
  mode?: MenuMode;
  style?: React.CSSProperties;
  onSelect?: (selectedIndex: number) => void;
}

