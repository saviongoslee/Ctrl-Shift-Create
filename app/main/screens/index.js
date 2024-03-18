// This is the profile selection menu, and is also the default app page.

import { View, Text, StyleSheet, Button, ImageBackground } from 'react-native';
import { Link } from 'expo-router';
import '../components/profile/Title';
import ListProfiles from '../components/profile/ListProfiles';
import Title from '../components/profile/Title';

// Profile Selection

export default function Profiles() {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/wallpaper.png')} style={styles.wallpaper}>
                <Title>Select a Profile</Title>
                <ListProfiles profiles={[
                    { id: '1', username: 'John' },
                    { id: '2', username: 'Jane' },
                ]}/>
            </ImageBackground>
        </View>
    )
}

// Styling

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    wallpaper: {
        width: "100%",
        height: "100%",
        justifyContent: 'center',
        alignItems: 'center',
        resizeMode: 'cover',
    },
    profile: {

    }
});
