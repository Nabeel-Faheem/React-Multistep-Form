import React, { useReducer } from 'react';
import FormContext from './FormContext';
import FormReducer from './FormReducer';
import { CLICK_CONTINUE, CLICK_BACK, SUBMIT } from '../actions';

const FormContextProvider = ( props ) => {

    const initialState = {
        step: 1,
        maxSteps: 2,
        isSubmitted: false,
    };

    const [ state, dispatch ] = useReducer( FormReducer, initialState );

    // action handlers
    const continueHandler = () => {
        // console.log('It is continue handler!');
        dispatch({ type: CLICK_CONTINUE });
    }

    const backHandler = () => {
        // console.log('It is back handler!');
        dispatch({ type: CLICK_BACK });
    }

    const submitHandler = () => {
        dispatch({ type: SUBMIT });
    }

    return (
        <FormContext.Provider value={{ 
            step: state.step,
            maxSteps: state.maxSteps,
            continueHandler,
            backHandler,
            submitHandler,
            isSubmitted: state.isSubmitted        
        }}>
            { props.children }
        </FormContext.Provider>
    )
}

export default FormContextProvider;
