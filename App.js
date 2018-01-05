import React, { Component } from 'react';
import {firebaseConf} from './firebaseconf';
import firebase from 'firebase';
import { EventRegister } from 'react-native-event-listeners';
import RootDrawer from './src/routes'

export default class App extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      data:'no data',
    }
  }
  componentWillMount()
  {
    this.listener = EventRegister.addEventListener('AuthEvent', (data) => {
        this.setState({
            data,
        })
    })
    firebase.initializeApp(firebaseConf);
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
        let displayName = user.displayName;
        let email = user.email;
        let emailVerified = user.emailVerified;
        let photoURL = user.photoURL;
        let isAnonymous = user.isAnonymous;
        let uid = user.uid;
        let providerData = user.providerData;
        EventRegister.emit('AuthEvent', 'AUTH_SIGNED_IN');
      } else {
        EventRegister.emit('AuthEvent', 'AUTH_SIGNED_OUT')
      }
    });
  }

  componentWillUnmount() {
      EventRegister.removeEventListener(this.listener)
  }

  render() {
    return (
      <RootDrawer/>
    );
  }
}

