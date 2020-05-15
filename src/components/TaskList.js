import React from 'react';
import Task from './Task';

const TaskList = props => {

    const activeTasks = props.tasks.filter(task => task.active);
    const showActiveTasks = activeTasks.map(task => <Task
        id={task.id}
        key={task.id}
        text={task.text}
        date={task.date}
        important={task.important}
        active={task.active}
        doneClick={props.doneClick}
        removeClick={props.removeClick}
        editTask={props.editTask}
    />);

    const doneTasks = props.tasks.filter(task => !task.active);
    const showDoneTasks = doneTasks.map(task => <Task
        id={task.id}
        key={task.id}
        text={task.text}
        date={task.finishDate}
        important={task.important}
        active={task.active}
        removeClick={props.removeClick}
    />)
    return (
        <div className='taskContener'>
            {showActiveTasks == 0 ? null :
                <div className='taskListActive taskList'>
                    <table>
                        <thead>

                            <tr>
                                <td>Treść zadania</td>
                                <td>Do kiedy ma być wykonane</td>
                                <td></td>
                            </tr>
                        </thead>
                        <tbody>
                            {showActiveTasks}
                        </tbody>
                    </table>
                </div>
            }
            {showDoneTasks == 0 ? null :
                <div className='taskListDone taskList'>
                    <table>
                        <thead>
                            <tr>
                                <td>Treść zadania</td>
                                <td>Kiedy zostało wykonane</td>
                                <td>Ważne?</td>
                                <td></td>
                            </tr>
                        </thead>
                        <tbody>
                            {showDoneTasks}
                        </tbody>
                    </table>
                </div>
            }
        </div>
    );
}

export default TaskList;