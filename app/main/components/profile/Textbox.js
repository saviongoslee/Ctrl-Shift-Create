// This creates a TextBox.

import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export default TextBox = ({ label, placeholder, onAdjust }) => {
    return (
        <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>{label}</Text>
            <View style={styles.textInputContainer}>
               
                <TextInput
                    style={styles.textInput}
                    placeholder={placeholder}
                    placeholderTextColor={'#878'}
                    onChangeText={(text) => onAdjust(text)} //
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        width: '100%',
    },
    inputLabel: {
        fontSize: 12,
        color: '#888',
        marginBottom: 5,
    },
    textInputContainer: {
        borderBottomWidth: 1,
        borderBottomColor: '#888',
        paddingBottom: 5,
    },
    textInput: {
        color: 'white',
        fontSize: 16,
    },
});
