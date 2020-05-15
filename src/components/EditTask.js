import React from 'react';
const EditTask = props => {
    return (
        <div className='editTaskContener'>
            <label>
                <p className='editTask-text'>Zmień nazwę zadania:</p>
                <input
                    type="text"
                    name="editedTask"
                    id="editedTask"
                    onChange={props.change}
                    value={props.editedTask}
                    placeholder={props.editedPlaceholder}
                />
            </label>
            <button className='btnAccept btnEdit'
                onClick={() => props.accept(props.editedId, props.editedTask, props.editedPlaceholder)}
            >
                Akceptuj
                </button>
            <button className='btnCancle btnEdit'
                onClick={props.cancle}
            >
                Anuluj</button>
        </div>
    );
};

export default EditTask;