import React, { Component } from 'react';
import { EventRegister } from 'react-native-event-listeners';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import firebase from 'firebase';
import {styles} from '../styles/style'

const email = "tahubulat@test.com"
const password = "tahubulat";

export default class Login extends Component {
    constructor()
    {
      super();
      this.state = {
        uploadPercentage:0,
        isUploading:0,
        afterUpload:0,
        errText:null
      }
    }

    componentDidMount()
    {
        EventRegister.on('AuthEvent',(data)=>{
            console.log(data);
        });
    }

    doLogin()
    {
        firebase.auth().signInWithEmailAndPassword(email,password).catch((error)=>{
            console.log(error.message);
        });
    }

    doLogOut()
    {
        firebase.auth().signOut();
    }

    render() {
        return (
          <View style={styles.container}>
            <Button
                title="LOGIN"
                onPress={()=>this.doLogin()}/>
            <Button
                color="red"
                title="LOGOUT"
                onPress={()=>this.doLogOut()}/>
          </View>
        );
      }
}