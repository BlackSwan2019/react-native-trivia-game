import React from 'react';
import { View, TouchableOpacity } from 'react-native';

const Card = ({ onPress, children, style }) => {
    return (
        <TouchableOpacity 
            onPress={onPress}
            style={[styles.containerStyle, style]} 
        >
            <View>
                {children}
            </View>
        </TouchableOpacity>
    );
};

const styles = {
    containerStyle: {
        width: 200,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#DDD',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
        padding: 10
    }
};

export { Card };
