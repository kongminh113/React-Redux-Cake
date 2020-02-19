import { BUY_CAKE } from './cakeTypes'

const initialState = {
    numOfCakes: 20
}

interface Actions {
    type: string;
}

const cakeReducer = (state = initialState, action: Actions) => {
    switch(action.type){
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }
        default: return state
    }
}

export default cakeReducer