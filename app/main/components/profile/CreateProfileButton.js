import { Text, StyleSheet, Button } from 'react-native';

export default CreateProfileButton = ({children}) => {
    return (
        <Text style={styles.title}>{children}</Text>
    )
}

const styles = StyleSheet.create({
    title: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        bottom: 90
    },
});
