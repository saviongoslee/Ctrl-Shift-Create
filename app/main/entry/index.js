import { ImageBackground, StyleSheet } from 'react-native';
import { registerRootComponent } from 'expo';
import { ExpoRoot } from 'expo-router';

// App

export function App() {
    const ctx = require.context("../screens");
    return (
        
    <ImageBackground source={require('../assets/wallpaper.png')} style={styles.wallpaper}>
        <ExpoRoot context={ctx} />
    </ImageBackground>
    );
}

// Global Styling

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
});


registerRootComponent(App);