// This is the lesson selection menu.

import { Text, View, StyleSheet } from 'react-native';
import { LessonObject } from '../components/menu/ListLessons'

export default Menu = () => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                <Text style={styles.title}>Your Lessons</Text>
                <LessonObject name={"Introduction To Signs"}/>
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
        zIndex: 1,
        bottom: 50
    },
    container: {
        backgroundColor: 'black',
        borderRadius: 10,
        padding: 20,
        marginBottom: 20,
        width: 300,
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    title: {
        color: 'rgba(255, 255, 255, 0.8)',
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    lessonContainer: {
        zIndex: 0,
        backgroundColor: 'rgba(211, 211, 211, 0.3)',
        borderRadius: 10,
        width: 350,
        height: 500,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
