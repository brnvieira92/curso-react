import React, { useState } from 'react'
import {v4 as uuidv4} from 'uuid';

import Tasks from './components/Tasks';
import './App.css';
import AddTask from './components/AddTask';
const App = ()=> {
  // const message = 'Hello Worldd';
    const [tasks, setTasks] = useState([
      {
        id: '1',
        title: 'Estudar Programacao',
        completed: false,
      },
      {
        id: '2',
        title: 'Ler Livros',
        completed: true,
      },
    ]);

    const handleTaskAddition = (taskTitle) => {
        const newTasks = [
            ...tasks,
              {
                title: taskTitle,
                id: uuidv4(),
                completed: false,
              },
          ];

      setTasks(newTasks);
    }
    
return (
  <>
    <div className='container'>
      <AddTask handleTaskAddition={handleTaskAddition} />
      <Tasks tasks={tasks} />
    </div>
    
  </>
);

};

export default App;