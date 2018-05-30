import moment from 'moment';

export default guests = [
  {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    checkIn: moment().subtract(1, 'hour').valueOf(),
    checkOut: moment().add(1, 'hour').valueOf(),
    badge: '14',
    visiting: 'Bartholomew Shoe',
  },
  {
    id: 2,
    firstName: 'Alan',
    lastName: 'Cooper',
    checkIn: moment().subtract(4, 'hour').valueOf(),
    checkOut: moment().subtract(3, 'hour').valueOf(),
    badge: '13',
    visiting: 'Gideon Guernsey-Marmaduke',
  },
  {
    id: 3,
    firstName: 'Sebastian',
    lastName: 'Smith',
    checkIn: moment().subtract(1, 'day').valueOf(),
    checkOut: moment().subtract(1, 'day').add(1, 'hour').valueOf(),
    badge: '12',
    visiting: 'Malcolm Function',
  },
  {
    id: 4,
    firstName: 'Gunther',
    lastName: 'Beard',
    checkIn: moment().subtract(1, 'day').add(2, 'hour').valueOf(),
    checkOut: moment().subtract(1, 'day').add(4, 'hour').valueOf(),
    badge: '11',
    visiting: 'Hanson Deck',
  },
  {
    id: 5,
    firstName: 'Brandon',
    lastName: 'Guidelines',
    checkIn: moment().add(1, 'day').valueOf(),
    checkOut: moment().add(1, 'day').add(1, 'hour').valueOf(),
    badge: '10',
    visiting: 'Nathaneal Down',
  },
];
