// This accepts an array of profiles, and lists them in the profile selection menu.
// {index : number, username : string}

import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

// Functions

const ProfileObject = ({ username }) => {
    return (
        <View style={styles.profileItem}>
            <LinearGradient // This creates a gradient outline for the profile picture.
                colors={['#6A5ACD', '#9370DB']}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 1}}
                style={styles.gradient}
            >
                <Image source={require('../../assets/default_profile.png')} resizeMode='cover' style={styles.profileImage} />
            </LinearGradient>
            <Text style={styles.profileText}>{username}</Text>
        </View>
    );
}

const ListProfiles = ({profiles}) => {
    return (
        <View style={styles.container}>
            {profiles.map(profile => (
                <ProfileObject key={profile.id} username={profile.username} />
            ))}
        </View>
    );
}

// Styles

const styles = StyleSheet.create({
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
    gradient: {
        borderRadius: 45,
        padding: 5,
    },
    profileText: {
        marginTop: 8,
        color: '#f5f5f5'
    },
});

export default ListProfiles;
