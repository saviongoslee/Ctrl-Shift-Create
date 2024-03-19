// This is the profile selection menu, and is also the default app page.
import { View, StyleSheet } from 'react-native';
import '../components/profile/Title';
import ListProfiles from '../components/profile/ListProfiles';
import Button from '../components/profile/Button';
import Title from '../components/profile/Title';

// Profile Selection

export default function Profiles() {
    return (
        <View style={styles.container}>
                <Title>Select a Profile</Title>
                <ListProfiles />
                <Button title='Add Profile' onButtonPushed={'nav'} />
        </View>
    )
}

// Styling

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
