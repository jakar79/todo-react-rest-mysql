import { useEffect, useState } from 'react';
import './App.css';
import Header from './component/Header';
import axios from 'axios';

const App = () => {
  const [editMode, setEditMode] = useState(false);
  const [list, setList] = useState([]);

  const showList = async () => {
    try {
      const {data} = axios.get('/api/show/list');
      setList(data);
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
          <form>
            <div className="form-wrapper" style={{display: "flex", justifyContent: "space-between"}} >
              <div style={{flex: 1, marginRight: "10px"}} >
                <input className="form-control" type="text" placeholder="Todo" name="Todo" />
              </div>
              <div style={{flex: 1}} >
              <input className="form-control" type="text" placeholder="Priority" name="Priority" />
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
            
            <tr>
              <th scope="row">2</th>
              <td>appeler mon pere</td>
              <td>High</td>
              <td>
                <i className="fa-solid fa-pen-to-square" style={{ color: "green", cursor: "pointer", marginRight: "25px"}} ></i>
                <i className="fa-solid fa-trash-can" style={{ color: "red", cursor: "pointer" }} ></i>
              </td>
            </tr>
            

          </tbody>
        </table>

      </div>
    </>
  )
}

export default App
