import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection:'column',
      justifyContent: 'flex-end',
      alignItems: 'stretch',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
  });

export const styles = style;