import React from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    ScrollView
} from 'react-native';

const SectionHeader = props => {
    const {title}=props
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#dc644b',
        textAlign: 'center'
    },
    title: {
        color: '#fff',
        fontSize: 18
    }
});

export default SectionHeader