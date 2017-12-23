/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import { DocumentPicker, DocumentPickerUtil } from 'react-native-document-picker';
import RNFetchBlob from 'react-native-fetch-blob';
import {firebaseApp} from './firebaseconf';

// Initialize Firebase
const storage = firebaseApp.storage();

const Blob = RNFetchBlob.polyfill.Blob
window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest
window.Blob = Blob

export default class App extends Component {
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
  uploadImage = (uri, mime = 'application/octet-stream',fileName) => {
    return new Promise((resolve, reject) => {
      const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri
        const sessionId = new Date().getTime()
        let uploadBlob = null
        const imageRef = storage.ref().child(`${sessionId}`).child(fileName);

        RNFetchBlob.fs.readFile(uploadUri, 'base64')
        .then((data) => {
          return Blob.build(data, { type: `${mime};BASE64` })
        })
        .then((blob) => {
          this.setState({afterUpload:0});
          uploadBlob = blob
          let uploadTask = imageRef.put(blob, { contentType: mime });
          uploadTask.on('state_changed',(snapshot)=>{
            this.setState({isUploading:1});
            // let progress = (snapshot.bytesTransferred / snapshot.totalBytes);
            let progress = (100.0 * snapshot.bytesTransferred) / snapshot.totalBytes;
            if(snapshot.bytesTransferred <= snapshot.totalBytes)
            {
              this.setState({uploadPercentage:Math.ceil(progress)});
            }

          });
          return uploadTask
        })
        .then(() => {
          uploadBlob.close()
          return imageRef.getDownloadURL()
        })
        .then((url) => {
          resolve(url)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }

  pickFile()
  {
    DocumentPicker.show({
      filetype: [DocumentPickerUtil.allFiles()],
    },(error,res) => {
      this.setState({errText:null});
      if(res===null)
      {
        return false;
      }
      if(res.fileSize > 3*1024*1024)
      {
        this.setState({uploadPercentage:0,afterUpload:1,isUploading:0,errText:'Exceed file size limit'});
        return false;
      }
      this.uploadImage(res.uri,res.type,res.fileName).then((res)=>{
        console.log(res);
        this.setState({uploadPercentage:0,afterUpload:1,isUploading:0});
      })
      .catch((err)=>{
        this.setState({uploadPercentage:0,afterUpload:1,isUploading:0,errText:err.code});
        console.log(err);
      });
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Button 
          title="Pick"
          onPress={()=>this.pickFile()}/>
          {this.state.isUploading === 1 && <Text>{'Uploading '+ this.state.uploadPercentage+'%'}</Text>}
          {(this.state.afterUpload === 1 && this.state.errText===null )&& <Text>{'Upload success'}</Text>}
          {this.state.errText !== null && <Text>{this.state.errText}</Text>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
