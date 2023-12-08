import { useEffect, useState } from 'react';
import Header from './component/Header';
import axios from 'axios';

import './App.css';

const App = () => {
  const [editMode, setEditMode] = useState(false);
  const [list, setList] = useState([]);
  const [todo, setTodo] = useState('');
  const [priority, setPriority] = useState('');

  const showList = async () => {
    try {
      const { data } = await axios.get('/api/show/list');
      setList(data);
    } catch (error) {
      console.log(error);
    }
  }

  const addRecord = async (e) => {
    e.preventDefault();  
    try {
      
      const add = await axios.post('/api/create/list', {todo, priority});

      if (add.status === 200) {
        setTodo('');
        setPriority('');
        showList();
      }

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=> {
    showList();
  }, []);


  return (
    <>
      <Header />
      <div className="container">
        <div className="form" style={{paddingBottom: "50px", paddingTop: " 50px"}} >
          
          <form onSubmit={addRecord}>
            <div className="form-wrapper" style={{display: "flex", justifyContent: "space-between"}} >
              <div style={{flex: 1, marginRight: "10px"}} >
                <input onChange={(e) => setTodo(e.target.value)} value={todo} className="form-control" type="text" placeholder="Todo" name="Todo" />
              </div>
              <div style={{flex: 1}} >
              <input onChange={(e) => setPriority(e.target.value)} value={priority} className="form-control" type="text" placeholder="Priority" name="Priority" />
              </div>
              {
                editMode ? 
                <button type="submit" style={{ width: "200px", marginLeft: "10px" }} className="btn btn-primary" >Edit</button>
                :
                <button type="submit" style={{ width: "200px", marginLeft: "10px" }} className="btn btn-success" >+ Add</button>
              }  
            </div>
          </form>

        </div>
        <table className="table">
          <thead>
            <tr>
            <th scope="col"> id</th>
              <th scope="col"> Todo</th>
              <th scope="col"> Priority</th>
              <th scope="col"> Actions</th>
            </tr>
          </thead>
          <tbody>
          {
              list && list.map(df => (

            <tr key={df.id}>
              <th scope="row">{df.id}</th>
              <td>{df.todo}</td>
              <td>{df.priority}</td>
              <td>
                <i className="fa-solid fa-pen-to-square" style={{ color: "green", cursor: "pointer", marginRight: "25px"}} ></i>
                <i className="fa-solid fa-trash-can" style={{ color: "red", cursor: "pointer" }} ></i>
              </td>
            </tr>
            
              ))
          }  

          </tbody>
        </table>

      </div>
    </>
  )
}

export default App
