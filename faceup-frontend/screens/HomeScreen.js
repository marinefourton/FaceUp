import React, {useState} from 'react';
import { StyleSheet, ImageBackground } from 'react-native';

import {Button, Input} from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';

import {connect} from 'react-redux';

function HomeScreen({ navigation, onSubmitPseudo }) {
    const [pseudo, setPseudo] = useState('');
    
    return (
    <ImageBackground source={require('../assets/home.jpg')} style={styles.container}>

        <Input
            containerStyle = {{marginBottom: 25, width: '70%'}}
            inputStyle={{marginLeft: 10}}
            placeholder='Name'
            leftIcon={
                <Icon
                name='user'
                size={24}
                color="#009788"
                />
            }
            onChangeText={(val) => setPseudo(val)}
        />
      
        <Button
           
            title="Go to gallery"
            type="solid"
            buttonStyle={{backgroundColor: "#009788"}}
            onPress={() => {onSubmitPseudo(pseudo); navigation.navigate('Gallery')}}
        />

    
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});


function mapDispatchToProps(dispatch) {
    return {
      onSubmitPseudo: function(pseudo) { 
        dispatch( {type: 'savePseudo', pseudo: pseudo }) 
      }
    }
  }
  
  export default connect(
      null, 
      mapDispatchToProps
  )(HomeScreen);