import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

class Inputs extends Component {
    state = {
        email: '',
        password: '',
    }

    handleEmail = (text) => {
        this.setState({ email: text})
    }

    handlePassword = (text) => {
        this.setState({ password: text})
    }

    login = ( email, pass) => {
        alert("email: " + email + "password: " + pass)
    }
    render (){
        return(
            <View style = {styles.container}>
                <TextInput style = {styles.input}
                    underlineColorAndroid = 'transparent'
                    placeholder = 'Email'   
                    placeholderTextColor = '#9a73ef'
                    autoCapitalize = 'none'        
                    onChangeText = {this.handleEmail} 
                />

                <TextInput style = {styles.input}
                    underlineColorAndroid = 'transparent'
                    placeholder = 'Password'   
                    placeholderTextColor = '#9a73ef'
                    autoCapitalize = 'none'        
                    onChangeText = {this.handlePassword}
                />

                <TouchableOpacity
                    style = { styles.submitButton}
                    onPress = {
                        () => this.login(this.state.email, this.state.password)
                    }>
                        <Text style = {styles.submitButtonText}> Submit </Text>
                    </TouchableOpacity>
            </View>
        );
    }
}
export default Inputs

const styles = StyleSheet.create ({
    container: {
        paddingTop: 23,
    },
    input: {
        margin: 15,
        height: 40,
        borderColor: 'blue',
        borderWidth: 1,
    },
    submitButton: {
        backgroundColor: 'orange',
        padding: 10,
        margin: 15,
        height: 40,
    },
    submitButtonText: {
        color: 'white',
    },
})