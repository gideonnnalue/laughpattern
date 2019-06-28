import React from 'react';

const InputTextAreaGroup = (props) => {
    return (
        <textarea className="form-control input" id={props.id} placeholder={props.placeholder} rows="6"></textarea>
    );
};

export default InputTextAreaGroup;