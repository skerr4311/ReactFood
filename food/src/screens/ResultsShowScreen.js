import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const ResultsShowScreen = () => {

    return (
        <View style={styles.background}>
            <Text>Results Show</Text>
        </View>
    );
};

const styles = StyleSheet.create({
});

export default ResultsShowScreen;
