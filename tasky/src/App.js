import './App.css';
import Task from './components/Task';
import React, { useState } from 'react';


function App() {

  const [ taskState, setTaskState ] = useState({
    tasks: [
      { 
        id: 1, 
        title: "Dishes",
        description: "Empty dishwasher", 
        deadline: "Today"
      },
      { 
        id: 2,
        title: "Laundry",
        description: "Fold clothes and put away", 
        deadline: "Tomorrow"
      },
      { 
        id: 3, 
        title: "Tidy up", 
        deadline: "Today"
      },
      {
        id: 4,
        title: "Walk the dog",
        description: "Not just around the house...",
        deadline: "Today"
      },
      {
        id: 5,
        title: "complete college labs",
        description: "Complete Web Dev and Dev ops labs",
        deadline: "27th September"
      }
    ]
  });


  return (
    <div className="container">
      <h1>Tasky</h1>
      
      {taskState.tasks.map((task) => (
        <Task 
        title={task.title} 
        description={task.description}
        deadline={task.deadline} 
        key={task.id} 
        />
      ))}

    </div>
  );
}

export default App;
