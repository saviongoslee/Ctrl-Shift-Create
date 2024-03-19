// This accepts an array of profiles, and lists them in the profile selection menu.
// {index : number, username : string, userid : number}

import React, { useEffect, useState } from 'react';
import { TouchableOpacity, View, StyleSheet, Image, Text, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import * as SecureStore from 'expo-secure-store';

// Functions

const ProfileObject = ({ username, userid }) => {
    const [hiddenProfile, setHiddenProfile] = useState('');
    const nav = useNavigation();

    const handleProfileClick = () => { // This handles when the profiles are pressed.
        global.GlobalProfileID = userid;
        nav.navigate('Menu');
    }

    const handleRemoveProfile = async (username, userid) => { // This handles when the profiles are removed.
        Alert.alert('Delete Profile', `Are you sure you want to delete ${username}'s profile? This cannot be undone.`, [
            {text: 'Cancel', style: 'cancel'},
            {text: 'Confirm', onPress: async () => {await removeProfile()}}
        ]);
        const removeProfile = async () => { // This function exists to prevent nesting.
            const ProfileData = await SecureStore.getItemAsync('profiles');
            const label = 'Unexpected Error';

            // Handle format errors, unexpected issues.
            if (!ProfileData) return Alert.alert(label, "There are no profiles to remove.");
            let profiles = JSON.parse(ProfileData);
            if (!profiles[userid]) return Alert.alert(label, 'This profile does not exist.');

            // Remove profile, save data to device.
            delete profiles[userid];
            await SecureStore.setItemAsync('profiles', JSON.stringify(profiles)); // No notification due to acknowledgement.
            setHiddenProfile(userid);
        }
    }

    return (
        <View style={styles.profileItem}>
            {hiddenProfile !== userid && (
                <>
                    <TouchableOpacity onPress={handleProfileClick}>
                        <LinearGradient // This creates a gradient outline for the profile picture.
                            colors={['#6A5ACD', '#9370DB']}
                            start={{x: 0, y: 0}}
                            end={{x: 1, y: 1}}
                            style={styles.gradient}
                        >
                            <Image source={require('../../assets/default_profile.png')} resizeMode='cover' style={styles.profileImage} />
                        </LinearGradient>
                    </TouchableOpacity>
                    <Text style={styles.profileText}>{username}</Text>
                    <TouchableOpacity onPress={async () => await handleRemoveProfile(username, userid)}>
                        <Text style={styles.removeButton}>❌</Text>
                    </TouchableOpacity>
                </>
            )}
        </View>
    );
};

// ListProfiles Component
const ListProfiles = () => {
    const [profiles, setProfiles] = useState([]);

    useEffect(() => { // This fetches profiles from SecureStore and parses them into JSON, then updates the state.
        const getProfiles = async () => {
            const ProfileData = await SecureStore.getItemAsync('profiles');

            if (!ProfileData) return;

            const parsedProfiles = JSON.parse(ProfileData);
            const profileList = Object.entries(parsedProfiles).map(([ProfileID, profile], index) => ({
                id: index + 1,
                username: profile['ProfileName'],
                userid: ProfileID
            }));
            setProfiles(profileList);
        };

        getProfiles();
    }, []);

    return ( // This renders the profiles onto the screen.
        <View style={styles.container}>
            {profiles.length === 0 ? (
                <Text style={styles.noProfiles}>No profiles</Text>
            ) : (
                profiles.map(profile => (
                    <ProfileObject key={profile.id} username={profile.username} userid={profile.userid} />
                ))
            )}
        </View>
    );
}

// Styles
const styles = StyleSheet.create({
    noProfiles: {
        fontSize: 20,
        color: 'darkgrey'
    },
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginTop: 20,
    },
    profileItem: {
        alignItems: 'center',
        margin: 10,
    },
    profileImage: {
        height: 80,
        width: 80,
        borderRadius: 40,
    },
    // This creates a gradient outline for the profile picture.
    gradient: {
        borderRadius: 45,
        padding: 5,
    },
    profileText: {
        marginTop: 8,
        color: '#f5f5f5'
    },
    removeButton: {
        color: 'red',
        marginTop: 5,
    },
});

export default ListProfiles;
