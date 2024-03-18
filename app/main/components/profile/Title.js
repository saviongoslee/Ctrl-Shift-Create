// This creates a title element for the profile selection menu.

import { Text, StyleSheet } from 'react-native';

export default Title = ({children}) => {
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
