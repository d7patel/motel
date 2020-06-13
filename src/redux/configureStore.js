import {createStore, combineReducers } from 'redux';
import {Promotions} from './promotions';
import {Reservation} from './reservation';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            promotions: Promotions,
            reservation: Reservation
        })
    );
    return store;
}