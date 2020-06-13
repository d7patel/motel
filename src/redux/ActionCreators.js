import * as ActionTypes from './ActionTypes';

export const addReservation = (reseId, firstname, lastname, phone, email, dob, checkInDate, checkOutDate, totalStay, totalPeople, roomtype, message) => ({
    type: ActionTypes.ADD_RESERVATION,
    payload: {
        reseId: reseId,
        firstname: firstname, 
        lastname: lastname, 
        phone: phone, 
        email: email, 
        dob: dob, 
        checkInDate: checkInDate, 
        checkOutDate: checkOutDate, 
        totalStay: totalStay, 
        totalPeople: totalPeople, 
        roomtype: roomtype, 
        message: message
    }
});