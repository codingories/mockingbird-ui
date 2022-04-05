import React, {useState, useEffect} from 'react';
import axios from 'axios';


const App: React.FC = () => {
  // const [title, setTitle] = useState('');
  // useEffect(() => {
  //   axios.get('https://jsonplaceholder.typicode.com/posts/1', {
  //     headers: {
  //       'X-Requested-with': 'XMLHttpRequest',
  //     },
  //     responseType: 'json',
  //   })
  //     .then(res => {
  //       console.log(res.data);
  //       setTitle(res.data.title)
  //     })
  //     .catch(err => console.log(err));
  // }, []);
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files) {
      const uploadedFile = files[0]
      const formData = new FormData()
      formData.append("fileName", uploadedFile)
      // 192.168.1.13:8080
      // 150.158.10.2:8013
      // 线上地址
      // http://150.158.10.2:8013/upload
      axios.post('http://192.168.1.13:3000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }
  }
  return (
      <div className="App" style={{marginTop: '100px', marginLeft: '100prx'}}>
        <input type="file" name="file" onChange={handleFileChange}/>
      </div>
  );
}

export default App;
