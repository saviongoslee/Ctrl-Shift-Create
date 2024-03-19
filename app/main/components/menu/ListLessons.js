import React from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const LessonObject = ({name}) => {
    nav = useNavigation();
    
    const handleIntroductionLesson = () => {
        nav.navigate('Lesson');
    }

    return (
        <View style={styles.lessonContainer}>
            <Text style={styles.lessonName}>{name}</Text>
            <TouchableOpacity onPress={handleIntroductionLesson}>
                <Image source={require('../../assets/playbutton.png')} style={styles.imageButton} />
            </TouchableOpacity>
        </View>
    )
}

// Styling

const styles = StyleSheet.create({
    imageButtonContainer: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20 // Adjusted margin
    },
    imageButton: {
        width: 50,
        height: 50,
        bottom: 20
    },
    textContainer: {
        textAlign: 'center',
        color: 'rgba(255, 255, 255, 0.8)',
        fontSize: 24,
        fontWeight: 'bold',
        zIndex: 1,
        bottom: 70
    },
    lessonName: {
        textAlign: 'center',
        color: 'rgba(255, 255, 255, 0.8)',
        fontSize: 24,
        fontWeight: 'bold',
        zIndex: 1,
        bottom: 50
    },
    lessonContainer: {
        zIndex: 0,
        backgroundColor: 'rgba(211, 211, 211, 0.3)',
        borderRadius: 10,
        width: 350,
        height: 500,
        marginTop: 10, // Adjusted margin
        justifyContent: 'center',
        alignItems: 'center',
    },
});