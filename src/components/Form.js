import React, { useState, useContext } from 'react';
import FormContext from '../context/FormContext';
import ThankYou from '../components/ThankYou';

const Form = () => {


    // define the Form Component Level State
    const [ firstname, setFirstname ] = useState('');
    const [ lastname, setLastname ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ address, setAddress ] = useState('');
    const [ phone, setPhone ] = useState('');
    const [ bio, setBio ] = useState('');

    const inputFieldChangeHandler = ( e ) => {
        
        switch( e.target.name ) {
            case 'firstname':
                setFirstname( e.target.value );
                break;
            case 'lastname':
                setLastname( e.target.value );
                break;
            case 'email':
                setEmail( e.target.value );
                break;
            case 'address':
                setAddress( e.target.value );
                break;
            case 'phone':
                setPhone( e.target.value );
                break;
            case 'bio':
                setBio( e.target.value );
                break;
            default:
                setFirstname('');
                setLastname('');
                setEmail('');
                setAddress('');
                setPhone('');
                setBio('');    
        }

    }


    const { 
        continueHandler,
        backHandler, 
        submitHandler,
        step,
        maxSteps,
        isSubmitted
    } = useContext( FormContext );

    
    const continueInit = () => {
        continueHandler();
    }

    const backInit = () => {
        backHandler();
    }

    const submitInit = ( e ) => {
        e.preventDefault();
        submitHandler();
    }

    if( isSubmitted ) {
        return (
            <ThankYou />
        );
    }

    return (
        <form className="multistep-form" onSubmit={ submitInit }>
            { step === 1 &&
                <div className="step-fields step-1-fields">
                    <input 
                        type="text"
                        name="firstname"
                        placeholder="Firstname"
                        onChange={ inputFieldChangeHandler }
                        value={ firstname }
                    />
                    <input 
                        type="text" 
                        name="lastname" 
                        placeholder="Lastname"
                        onChange={ inputFieldChangeHandler }
                        value={ lastname }
                    />
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Email"
                        onChange={ inputFieldChangeHandler }    
                        value={ email }
                    />
                </div> 
            }
            { step === 2 &&
                <div className="step-fields step-2-fields">
                    <input 
                        type="text" 
                        name="address" 
                        placeholder="Address"
                        onChange={ inputFieldChangeHandler }    
                        value={ address }
                    />
                    <input 
                        type="text" 
                        name="phone" 
                        placeholder="Phone"
                        onChange={ inputFieldChangeHandler }
                        value={ phone }
                    />
                    <input 
                        type="text" 
                        name="bio" 
                        placeholder="Bio"
                        onChange={ inputFieldChangeHandler }
                        value={ bio }
                    />
                </div>
            }
            { ( step >= 1 && step < maxSteps ) &&
                <button type="button" onClick={ continueInit }>Continue</button>
            }
            { ( step > 1 && step <= maxSteps ) &&
                <button type="button" onClick={ backInit }>Back</button>
            }
            { step === maxSteps &&
                <button type="submit">Submit</button>
            }
        </form>
    )
}

export default Form;
