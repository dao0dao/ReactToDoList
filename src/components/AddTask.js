import React from 'react';

const AddTask = props => {
    return (
        <div className='addTask taskContener'>
            <input
                type="text"
                name="newTask"
                id="newTask"
                placeholder="Wpisz swoje zadanie"
                value={props.newTask}
                onChange={props.change}
            />
            <label htmlFor="important">
                <input
                    type="checkbox"
                    name="important"
                    id="important"
                    checked={props.important}
                    onChange={props.change}
                />
                <p className='importantText'>Czy jest to ważne zadanie?</p>
            </label>

            <label htmlFor="date">
                <p className='dateText'>Do kiedy ma być zrobione:</p>
                <input
                    type="date"
                    name="date"
                    id="date"
                    value={props.date}
                    onChange={props.change} />
            </label>
            <button
                className='buttonAddTask'
                onClick={props.addTask}
            >
                Dodaj
                 </button>

        </div>
    );
}

export default AddTask;