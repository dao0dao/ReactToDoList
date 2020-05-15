import React from 'react';
import './App.css';
import AddTask from './AddTask';
import TaskList from './TaskList';
import EditTask from './EditTask'

class App extends React.Component {

  counter = 0;

  state = {
    tasks: [],
    newTask: '',
    important: false,
    date: '',
    editedActive: false,
    editedTask: '',
    editedText: '',
    editedValue: '',
    editedId: ''
  };


  handleDoneClick = id => {
    const tasks = [...this.state.tasks];
    tasks.map(task => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = `${new Date().getUTCDate()}.${new Date().getUTCMonth() + 1}.${new Date().getFullYear()} - ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`;
        task.hiddenFinisDate = new Date().getTime();
      };
      return task
    });
    this.setState({
      tasks
    });
  };

  handleRemoveClick = id => {
    let tasks = [...this.state.tasks].filter(task => task.id !== id);
    this.setState({
      tasks
    });
  };

  handleChange = (e) => {
    const type = e.target.type
    const name = e.target.name
    if (type === 'checkbox') {
      const checked = e.target.checked
      this.setState({
        [name]: checked
      })
    } else {
      const value = e.target.value
      this.setState({
        [name]: value
      })
    };
  };

  handleAddTask = () => {

    if (this.state.newTask !== '' && this.state.date !== '') {
      let tasks = [...this.state.tasks];
      const newTask = {
        id: this.counter,
        text: this.state.newTask,
        date: this.state.date,
        important: this.state.important,
        active: true,
        finishDate: null,
        hiddenFinisDate: null
      };
      this.counter++;
      tasks.push(newTask);
      this.setState({
        tasks,
        newTask: '',
        important: false,
        date: ''
      });
    } else {
      alert('Należy wpisać zadanie oraz datę.')
    };
  };

  handleEditTask = id => {
    let tasks = [...this.state.tasks]
    tasks.map(task => {
      if (task.id === id) {
        this.setState({
          editedText: task.text,
          editedId: task.id,
          editedActive: true
        });
      };
    });
  };

  handleAccept = (id, newTask, oldTask) => {
    let tasks = [...this.state.tasks]
    if (newTask === '') { newTask = oldTask }
    tasks.map(task => {
      if (task.id === id) {
        task.text = newTask
      };
      this.setState({
        tasks,
        editedTask: '',
        editedText: '',
        editedValue: '',
        editedId: '',
        editedActive: false
      })
    });
  };

  handleCancle = () => {
    this.setState({
      editedTask: '',
      editedText: '',
      editedValue: '',
      editedId: '',
      editedActive: false
    })
  };

  render() {
    const { tasks, newTask, important, date, editedTask, editedText, editedId, editedActive } = this.state

    return (
      <div className='App'>
        <AddTask
          newTask={newTask}
          important={important}
          date={date}
          change={this.handleChange}
          addTask={this.handleAddTask}
        />
        {tasks == 0 ? null :
          <TaskList
            tasks={tasks}
            doneClick={this.handleDoneClick}
            removeClick={this.handleRemoveClick}
            editTask={this.handleEditTask}
          />
        }
        {editedActive &&
          <EditTask
            editedId={editedId}
            change={this.handleChange}
            editedTask={editedTask}
            editedPlaceholder={editedText}
            accept={this.handleAccept}
            cancle={this.handleCancle}
          />
        }
      </div>
    );
  };
};

export default App;
