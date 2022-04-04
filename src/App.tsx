import React, {useState, useEffect} from 'react';
import axios from 'axios';


const App: React.FC = () => {
  const [title, setTitle] = useState('');
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts/1', {
      headers: {
        'X-Requested-with': 'XMLHttpRequest',
      },
      responseType: 'json',
    })
      .then(res => {
        console.log(res.data);
        setTitle(res.data.title)
      })
      .catch(err => console.log(err));
  }, []);
  return (
    <div className="App">
      <header>
        <h1>{title}</h1>
      </header>
    </div>
  );
};

export default App;
