import {
  CHANGE_FILTER_DATE,
  FETCH_DATA,
  CHANGE_CURRENT_GUEST_ID,
  ADD_GUEST,
  DELETE_GUEST,
  CHANGE_FIRST_NAME,
  CHANGE_LAST_NAME,
  CHANGE_CHECKIN,
  CHANGE_CHECKOUT,
  CHANGE_TO,
  CHANGE_BADGE,
} from '../actions';

import guestsData from '../data/guests';

const initialState = {
  filterDate: '',
  currentGuestId: 0,
  guests: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return { ...state, guests: guestsData }
    case CHANGE_FILTER_DATE:
      return { ...state, filterDate: action.date || '' }
    case CHANGE_CURRENT_GUEST_ID:
      return { ...state, currentGuestId: action.id || 0 }
    case ADD_GUEST:
      let maxId = 0;
      state.guests.map((guest) => {
        if (guest.id > maxId) maxId = guest.id
      });
      const newId = ++maxId;
      const newGuest = { id: newId };
      return {
        ...state,
        currentGuestId: newId,
        guests: [
          ...guests,
          newGuest
        ]
      }
    case DELETE_GUEST:
      return {
        ...state,
        currentGuestId: 0,
        guests: state.guests.filter(guest => guest.id !== action.id)
      }
    case CHANGE_FIRST_NAME:
      return {
        ...state,
        guests: state.guests.map(guest => (
            guest.id === action.id ? { ...guest, firstName: action.val} : guest
          ))
      }
    case CHANGE_LAST_NAME:
      return {
        ...state,
        guests: state.guests.map(guest => (
            guest.id === action.id ? { ...guest, lastName: action.val} : guest
          ))
      }
    case CHANGE_CHECKIN:
      return {
        ...state,
        guests: state.guests.map(guest => (
            guest.id === action.id ? { ...guest, checkIn: action.val} : guest
          ))
      }
    case CHANGE_CHECKOUT:
      return {
        ...state,
        guests: state.guests.map(guest => (
            guest.id === action.id ? { ...guest, checkOut: action.val} : guest
          ))
      }
    case CHANGE_TO:
      return {
        ...state,
        guests: state.guests.map(guest => (
            guest.id === action.id ? { ...guest, visiting: action.val} : guest
          ))
      }
    case CHANGE_BADGE:
      return {
        ...state,
        guests: state.guests.map(guest => (
            guest.id === action.id ? { ...guest, badge: action.val} : guest
          ))
      }
    default:
      return state;
  }
}
