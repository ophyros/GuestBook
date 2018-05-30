import React, { Component } from 'react';
import { StatusBar, FlatList } from 'react-native';
import { connect } from 'react-redux';

import moment from 'moment';

import Container from '../components/Container';
import Header from '../components/Header';
import GuestsList from '../components/GuestsList';
import Filter from '../components/Filter';

import {
  fetchData,
  changeFilterDate,
  changeCurrentGuestId,
  addGuest,
} from '../actions';

class HomeScreen extends Component {
  componentDidMount = () => {
    this.props.dispatch(fetchData());
  }

  handleAddButtonPress = () => {
    this.props.dispatch(addGuest());
    this.props.navigation.navigate('Guest');
  }

  handleGuestPress = (id) => {
    this.props.dispatch(changeCurrentGuestId(id));
    this.props.navigation.navigate('Guest');
  }

  handleFilterAllPress = () => {
    this.props.dispatch(changeFilterDate(''));
  }

  handleFilterDateChange = (date) => {
    this.props.dispatch(changeFilterDate(date));
  }

  render() {
    return (
      <Container>
        <StatusBar translucent={false} barStyle="default" />
        <Header
          onPress={this.handleAddButtonPress}
          buttonIcon={'add'}
          text={'GuestBook'}
        />
        <GuestsList
          guests={this.props.guestBook.guests}
          filterDate={this.props.guestBook.filterDate}
          onGuestPress={this.handleGuestPress}
        />
        <Filter
          filterDate={this.props.guestBook.filterDate}
          onAllPress={this.handleFilterAllPress}
          onDateChange={this.handleFilterDateChange}
        />
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  guestBook: state,
});

export default connect(mapStateToProps)(HomeScreen);
