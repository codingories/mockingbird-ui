import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import Button from './button';


const defaultButton = () => (
  <Button onClick={action('clicked')}> default button </Button>
)

storiesOf('Button Component', module)
  .add('Button', defaultButton)
