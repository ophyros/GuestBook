import moment from 'moment';

export const FETCH_DATA = 'FETCH_DATA';
export const CHANGE_FILTER_DATE = 'CHANGE_FILTER_DATE';
export const CHANGE_CURRENT_GUEST_ID = 'CHANGE_CURRENT_GUEST_ID';
export const ADD_GUEST = 'ADD_GUEST';
export const DELETE_GUEST = 'DELETE_GUEST';
export const CHANGE_FIRST_NAME = 'CHANGE_FIRST_NAME';
export const CHANGE_LAST_NAME = 'CHANGE_LAST_NAME';
export const CHANGE_CHECKIN = 'CHANGE_CHECKIN';
export const CHANGE_CHECKOUT = 'CHANGE_CHECKOUT';
export const CHANGE_TO = 'CHANGE_TO';
export const CHANGE_BADGE = 'CHANGE_BADGE';

export const fetchData = () => ({
  type: FETCH_DATA,
});

export const changeFilterDate = date => ({
  type: CHANGE_FILTER_DATE,
  date,
});

export const changeCurrentGuestId = id => ({
  type: CHANGE_CURRENT_GUEST_ID,
  id,
});

export const addGuest = () => ({
  type: ADD_GUEST,
});

export const deleteGuest = (id) => ({
  type: DELETE_GUEST,
  id,
});

export const changeFirstName = (id, val) => ({
  type: CHANGE_FIRST_NAME,
  id,
  val,
});

export const changeLastName = (id, val) => ({
  type: CHANGE_LAST_NAME,
  id,
  val,
});

export const changeCheckIn = (id, val) => ({
  type: CHANGE_CHECKIN,
  id,
  val: moment(val, 'DD-MM-YYYY HH:mm').valueOf()
});

export const changeCheckOut = (id, val) => ({
  type: CHANGE_CHECKOUT,
  id,
  val: moment(val, 'DD-MM-YYYY HH:mm').valueOf()
});

export const changeTo = (id, val) => ({
  type: CHANGE_TO,
  id,
  val,
});

export const changeBadge = (id, val) => ({
  type: CHANGE_BADGE,
  id,
  val,
});
