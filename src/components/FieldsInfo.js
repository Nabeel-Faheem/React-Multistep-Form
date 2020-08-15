import React, { useContext } from 'react';
import FormContext from '../context/FormContext';

const FieldsInfo = () => {

    const { step } = useContext( FormContext );

    if( step === 2 ) {
        return (
            <div className="fields-info">
                <h2>Personal Info!</h2>
            </div>
        );
    }

    return (
        <div className="fields-info">
            { step === 1 &&
                <h2>Important Credentials!</h2>
            }
        </div>
    )
}

export default FieldsInfo;
