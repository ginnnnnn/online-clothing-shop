import React from 'react';
import './form-input.styles.scss';

const FormInput = ({ handleChange, label, ...otherInputProps }) => {
    return (
        <div className="group">
            <input className="form-input"
                {...otherInputProps}
                onChange={handleChange}
            />
            {label ?
                <label className={`${otherInputProps.value.length ? 'shrink' : ""} form-input-label`}>{label}</label> : null
            }
        </div>
    );
}

export default FormInput;

//label className will check the value of input ,if user type in something ,label will add
//'shrink className and  always has form-input-label className