// This is the profile creation screen.

import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Textbox from '../components/profile/Textbox';
import Button from '../components/profile/Button';
import * as SecureStore from 'expo-secure-store';

// Functions

const save = async (key, value) => {
    await SecureStore.setItemAsync(key, value);
}

const get = async (key) => {
    let result = SecureStore.getItemAsync(key);
    if (!result) return null;
    return result;
}

// Screen

export default function CreateProfile() {
    const navigator = useNavigation();
    const [username, setUsername] = useState('');

    return (
        <View style={styles.container}>
            <Title>Create Profile</Title>
            <Textbox label="Name" placeholder="Enter a name" onAdjust={setUsername} />
            <Button title="Save" onButtonPushed={() => {
                console.log(username);
                if (!username || username.length === 0) return;
                const randomID = Math.floor(Math.random() * 90000) + 10000;
                save(randomID.toString(), username);
                global.GlobalProfileID = randomID;
                navigator.navigate('Menu');
            }} />
        </View>
    );
}

// Styles

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        height: "100%",
        justifyContent: 'center',
        alignItems: 'center',
        resizeMode: 'cover',
    },
});
