import React, { Component } from 'react';
import { StatusBar, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';

import Container from '../components/Container';
import Header from '../components/Header';
import Guest from '../components/Guest';

import {
  changeCurrentGuestId,
  addGuest,
  deleteGuest,
  changeFirstName,
  changeLastName,
  changeCheckIn,
  changeCheckOut,
  changeTo,
  changeBadge,
} from '../actions';

class GuestScreen extends Component {
  handleBackButtonPress = () => {
    if (!this.props.guest.firstName ||
        !this.props.guest.lastName ||
        !this.props.guest.checkIn ||
        !this.props.guest.checkOut ||
        !this.props.guest.to ||
        !this.props.guest.badge
      ) {
      alert('Please, fill all inputs');
      return;
    }
    this.props.dispatch(changeCurrentGuestId(0));
    this.props.navigation.goBack(null);
  }

  handleRemoveButtonPress = () => {
    this.props.dispatch(deleteGuest(this.props.id));
    this.props.navigation.goBack(null);
  }

  handleChangeFirstName = (val) => {
    this.props.dispatch(changeFirstName(this.props.id, val));
  }

  handleChangeLastName = (val) => {
    this.props.dispatch(changeLastName(this.props.id, val));
  }

  handleChangeCheckIn = (val) => {
    this.props.dispatch(changeCheckIn(this.props.id, val));
  }

  handleChangeCheckOut = (val) => {
    this.props.dispatch(changeCheckOut(this.props.id, val));
  }

  handleChangeTo = (val) => {
    this.props.dispatch(changeTo(this.props.id, val));
  }

  handleChangeBadge = (val) => {
    this.props.dispatch(changeBadge(this.props.id, val));
  }

  render() {
    return (
      <Container>
        <StatusBar translucent={false} barStyle="default" />
        <KeyboardAvoidingView behavior="padding" enabled>
          <Header
            onPress={this.handleRemoveButtonPress}
            buttonIcon={'remove'}
            text={'Guest'}
            backButton={true}
            onBackButtonPress={this.handleBackButtonPress}
          />
          { this.props.id ?
            <Guest
              guest={this.props.guest}
              onChangeFirstName={this.handleChangeFirstName}
              onChangeLastName={this.handleChangeLastName}
              onChangeCheckIn={this.handleChangeCheckIn}
              onChangeCheckOut={this.handleChangeCheckOut}
              onChangeTo={this.handleChangeTo}
              onChangeBadge={this.handleChangeBadge}
            /> : null
          }
        </KeyboardAvoidingView>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  const id = state.currentGuestId;
  return {
    id: id,
    guest: state.guests.find((guest) => guest.id === id),
  }
}

export default connect(mapStateToProps)(GuestScreen);
