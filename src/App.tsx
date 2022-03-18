import React from 'react';
import Button, {ButtonSize, ButtonType} from './components/Button/button';

function App() {
  return (
    <div className="App">
      <header>
      <Button disabled> Hello </Button>
      <Button> Hello </Button>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Large}> Hello </Button>
      <Button btnType={ButtonType.Link} disabled href="http://www.baidu.com" > baidu Link </Button>

      <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
