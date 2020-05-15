import React from 'react';

const Buttons = props => {

    const id = props.id

    return (
        <>
            {props.active && <>
                <button
                    className='buttonDone'
                    onClick={() => props.doneClick(id)}
                >
                    Zrobione
                        </button>
                <button className='buttonEdit'
                    onClick={() => props.editTask(id)}
                >
                    Edytuj
                    </button>
            </>}
            <button
                className='buttonDelete'
                onClick={() => props.removeClick(id)}
            >
                X
                 </button>
        </>
    );
}

export default Buttons;