import React from 'react';
import Buttons from './Buttons'

const Task = props => {
    return (

        <tr>
            <td className={props.important ? "importantText important" : null}>{props.text}</td>
            <td className={props.important ? "importantDate important" : null}>{props.date}</td>
            <td>
                <Buttons
                    id={props.id}
                    active={props.active}
                    doneClick={props.doneClick}
                    removeClick={props.removeClick}
                    editTask={props.editTask}
                />
            </td>
        </tr>

    );
}

export default Task;