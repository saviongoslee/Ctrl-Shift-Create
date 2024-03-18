// This is the profile creation screen.

import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import TextBox from '../components/profile/Textbox';
import Button from '../components/profile/Button';
import * as SecureStore from 'expo-secure-store';

// Functions

const save = async (key, value) => {
    await SecureStore.setItemAsync(key, value);
}

const get = async (key) => {
    let result = await SecureStore.getItemAsync(key);
    if (!result) return null;
    return result;
}

const setProfileID = (ID) => {
    global.GlobalProfileID = ID; // This sets the Global Profile ID, to help other screens render content based on the profile.
}

const generateProfileID = () => { // This creates a random profile ID.
    return Math.floor(Math.random() * 90000) + 10000;
}

const handleProfileStore = (ProfileData, ProfileID, ProfileName, notifyOnSuccess /*<-- optional*/) => { // This allows StoreProfile to upload the profile with a function.
    save('profiles', ProfileData);
    setProfileID(ProfileID);

    if (notifyOnSuccess == true) {
    Alert.alert('Profile Created', `${ProfileName}'s profile was successfully created.`);
    }
}

const validateUsername = (username, notifyFormatTips /*<-- optional*/) => { // This validates the username to ensure that it can be displayed correctly.
    if (!username || username.length === 0) return; // If a username isn't specified, ignore.
    
    const alphanumeric = /^[a-zA-Z0-9 ]+$/;
    const label = 'Bad Profile Name';

    if (!alphanumeric.test(username)) { // If the username doesn't only have alphanumeric characters or spaces, ignore.
        Alert.alert(label, "Profile names may only contain letters and numbers. (A-Z, 0-9)");
        return false;
    }
    
    if (username.charAt(0) === ' ' || username.charAt(username.length - 1) === ' ') { // If the username starts or ends with a space, ignore.
        Alert.alert(label, "Profile names cannot start or end with a space.");
        return false;
    }
    return true;
}

const StoreProfile = async (username, notifyOnSuccess) => {
    if (!validateUsername(username, true)) return; // If a username is invalid, ignore.

    const ProfileID = generateProfileID();
    const ProfileData = await get('profiles');

    if (ProfileData) {
        let profiles = JSON.parse(ProfileData);

        if (profiles[ProfileID]) return false; // Non-unique ID generated, return unexpected error.
        
        profiles[ProfileID] = JSON.stringify({ProfileName: username});
        handleProfileStore(JSON.stringify(profiles), ProfileID, username, notifyOnSuccess);
    
    } else {
        let profile = JSON.stringify({[ProfileID]: {ProfileName: username}}); // Create a new data structure, with the new profile.
        handleProfileStore(profile, ProfileID, username, notifyOnSuccess);
    }
    return true;
}

const handleButtonCallback = async (username, navigator) => { // This handles the button callback.
    const profileStored = await StoreProfile(username, true);
    
    if (profileStored == true) { // If the profile was stored successfully.
        navigator.navigate('Menu');
    } else if (profileStored == false) { // If there was an unexpected error while storing the profile.
        Alert.alert('Unexpected Error', "Your profile couldn't be saved, try again.");
    }
}

// Screen

export default function CreateProfile() {
    const navigator = useNavigation();
    const [username, setUsername] = useState('');

    return (
        <View style={styles.container}>
            <Title>Create Profile</Title>
            <TextBox label="Name" placeholder="Enter a name" onAdjust={setUsername} />
            <Button title="Save" onButtonPushed={() => handleButtonCallback(username, navigator)} />
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
