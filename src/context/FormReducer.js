import { CLICK_CONTINUE, CLICK_BACK, SUBMIT } from '../actions';

const FormReducer = ( state, action ) => {

    switch( action.type ) {
        case CLICK_CONTINUE:
            return {
                ...state,
                step: state.step + 1,    
            }
        case CLICK_BACK:
            return {
                ...state,
                step: state.step - 1,
            }
        case SUBMIT:
            return {
                ...state,
                isSubmitted: true,
                step: null,
            }
        default:
            return state;
    }

}

export default FormReducer;