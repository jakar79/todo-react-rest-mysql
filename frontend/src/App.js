import { useEffect, useState } from 'react';
import Header from './component/Header';
import axios from 'axios';

import './App.css';

const App = () => {
  const [editMode, setEditMode] = useState(false);
  const [list, setList] = useState([]);
  const [todo, setTodo] = useState('');
  const [priority, setPriority] = useState('');
  const [taskId, setTaskId] = useState('');

  const showList = async () => {
    try {
      const { data } = await axios.get('/api/show/list');
      setList(data);
    } catch (error) {
      console.log(error);
    }
  }

  // Add Line
  const addLine = async (e) => {
    e.preventDefault();  
    try {
      
      const insert = await axios.post('/api/insert/line', {todo, priority});

      if (insert.status === 200) {
        setTodo('');
        setPriority('');
        showList();
      }

    } catch (error) {
      console.log(error);
    }
  }

  // Delete Line
  const deleteLine = async (id) => {  
    try {
      
      const deleteTask = await axios.delete(`/api/delete/task/${id}`);

      if (deleteTask.status === 200) {
        showList();
      }

    } catch (error) {
      console.log(error);
    }
  }

  // Edit selected Line
  const editSelectedLine = async (id) => {  
    setEditMode(true);

    try {
      
      const { data } = await axios.get(`/api/task/${id}`);
      setTodo(data.todo);
      setPriority(data.priority);
      setTaskId(data.id);


    } catch (error) {
      console.log(error);
    }
  }

  // Update Line
  const updateLine = async (e) => {
    e.preventDefault()

    try {
      
      const update = await axios.put(`/api/update/task/${taskId}`, {todo, priority });
      console.log(update)

      if (update.status === 200) {
        setEditMode(false);
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
          
          <form onSubmit={ editMode ? updateLine : addLine}>
            <div className="form-wrapper" style={{display: "flex", justifyContent: "space-between"}} >
              <div style={{flex: 1, marginRight: "10px"}} >
                <input value={todo} onChange={(e) => setTodo(e.target.value)} className="form-control" type="text" placeholder="Todo" name="Todo" />
              </div>
              <div style={{flex: 1}} >
              <select value={priority} onChange={(e) => setPriority(e.target.value)} className="form-control" type="text" placeholder="Priority" name="Priority">
                  <option>Low</option>
                  <option>Medium</option>
                  <option>High</option>
              </select>
              </div>
              {
                editMode ? 
                <button type="submit" style={{ width: "200px", marginLeft: "10px" }} className="btn btn-primary" >Update</button>
                :
                <button type="submit" style={{ width: "200px", marginLeft: "10px" }} className="btn btn-success" > +Add</button>
              }  
            </div>
          </form>

        </div>
        <table className="table" >
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
              list && list.map(obj => (

            <tr key={obj.id}>
              <th scope="row">{obj.id}</th>
              <td>{obj.todo}</td>
              <td>{obj.priority}</td>
              <td>
                <i onClick={() => editSelectedLine(obj.id)} className="fa-solid fa-pen-to-square" style={{ color: "green", cursor: "pointer", marginRight: "25px"}} ></i>
                <i onClick={() => deleteLine(obj.id)} className="fa-solid fa-trash-can" style={{ color: "red", cursor: "pointer" }} ></i>
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
