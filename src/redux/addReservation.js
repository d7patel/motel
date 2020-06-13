import { RESERVATION } from '../shared/reservation';
import * as ActionTypes from './ActionTypes';

export const Reservation = (state = RESERVATION, action) => {
    switch(action.type){
        case ActionTypes.ADD_RESERVATION:
            var newRese = action.payload;
            newRese.id = state.length;
            newRese.date = new Date().toISOString();
            return state.concat(newRese);
        default:
            return state;
    }
}