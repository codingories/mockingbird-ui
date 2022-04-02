import React, {useState} from 'react';
// import Menu from './components/Menu/menu';
// import MenuItem from './components/Menu/menuItem';
// import SubMenu from './components/Menu/subMenu';
import { library } from '@fortawesome/fontawesome-svg-core'
import Transition from './components/Transition/transition';
import Button from './components/Button/button'
import { fas } from '@fortawesome/free-solid-svg-icons'
import Icon from './components/Icon/icon';
import {Input} from './components/Input/input';
// import {action} from '@storybook/addon-actions';
library.add(fas)



const App: React.FC = () => {
  const [ show, setShow ] = useState(false);
  return (
    <div className="App">
      <header>
        <Icon theme="primary" icon="coffee" size="10x"/>

        <Button size="lg" onClick={() => { setShow(!show) }}>
            Toggle
        </Button>
        <Transition in={show} timeout={300} animation="zoom-in-top">
          <div>
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
          </div>
        </Transition>
        <Transition in={show} timeout={300} animation="zoom-in-top" wrapper>
          <Button btnType="primary" size="lg">A Large Button</Button>
        </Transition>
      </header>
      <p>defaultInput</p>
      <Input
        style={{width: '300px'}}
        placeholder="placeholder"
        onChange={()=>{}}
      />
      <p>disabledInput</p>
      <Input
        style={{width: '300px'}}
        placeholder="disabled input"
        disabled
      />
      <p>iconInput</p>
      <Input
        style={{width: '300px'}}
        placeholder="input with icon"
        icon="search"
      />
      <p>sizeInput</p>
      <>
        <Input
          style={{width: '300px'}}
          defaultValue="large size"
          size="lg"
        />
        <Input
          style={{width: '300px'}}
          placeholder="small size"
          size="sm"
        />
      </>
      <p>prependInput</p>
      <>
        <Input
          style={{width: '300px'}}
          defaultValue="prepend text"
          prepend="https://"
        />
        <Input
          style={{width: '300px'}}
          defaultValue="google"
          append=".com"
        />
      </>
    </div>
  );
}

export default App;
