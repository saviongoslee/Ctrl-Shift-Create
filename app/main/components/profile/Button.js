/* This creates a Button.
    -> 'nav' navigates to CreateProfile.
*/

import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CreateButton = ({title, onButtonPushed}) => {
    const navigation = useNavigation();

    const handleButton = () => {
        if (onButtonPushed == 'nav') {
            navigation.navigate('CreateProfile');
        } else {
            if (typeof(onButtonPushed) == 'function') {
                onButtonPushed();
            }
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <Button
                    title={title}
                    color="blueviolet"
                    onPress={handleButton}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 15,
        top: 100
    },
    buttonContainer: {
        width: 200,
    },
});

export default CreateButton;