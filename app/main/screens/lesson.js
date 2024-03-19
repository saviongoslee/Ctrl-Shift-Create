// Primary lesson screen.

import React, { useRef, useState, useEffect } from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import { Camera } from 'expo-camera';

export default Lesson = () => {
    return (
        <View style={styles.mainContainer}>
            <Text style={styles.lessonName}>Use the correct hand gesture.</Text>
            <View style={styles.container}>
                <Camera style={styles.camera} type={Camera.Constants.Type.front} />
                <View style={styles.handEmojiContainer}>
                    <Text style={styles.handEmoji}>✋</Text>
                </View>
            </View>
        </View>
    )
}

// Styling

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        width: "100%",
        height: "100%",
        justifyContent: 'center',
        alignItems: 'center',
        resizeMode: 'cover',
    },
    lessonName: {
        textAlign: 'center',
        color: 'rgba(255, 255, 255, 0.8)',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    container: {
        backgroundColor: 'black',
        borderRadius: 10,
        padding: 20,
        marginBottom: 20,
        width: 300,
        height: 300,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    camera: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    handEmojiContainer: {
        position: 'absolute',
        top: 10,
        left: 10,
    },
    handEmoji: {
        fontSize: 100,
    },
});
