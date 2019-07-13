import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {
    const { buttonStyle, textStyle } = styles;

    return (
        <TouchableOpacity 
            style={buttonStyle}
            onPress={onPress}
        >
            <Text style={textStyle}>
                {children}
            </Text>
        </TouchableOpacity>
    );
};

const styles = {
    textStyle: {
        alignSelf: 'center',
        color: '#FFF',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    },
    buttonStyle: {
        width: 200,
        alignSelf: 'center',
        backgroundColor: '#248F24',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#248F24',
        margin: 5,
        paddingLeft: 10,
        paddingRight: 10
    }
};

export { Button };
