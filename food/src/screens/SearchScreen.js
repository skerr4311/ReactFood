import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async (serachTerm) => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: serachTerm,
                    location: 'san jose'
                }
            });
            setResults(response.data.businesses);
        }catch (err) {
            setErrorMessage('Something went wrong');
        }
    }

    useEffect(() => {searchApi('pasta')}, [])

    return (
        <View style={styles.background}>
            <SearchBar 
                term={term} 
                onTermChange={setTerm}
                onTermSubmitted={() => searchApi(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <Text>We have found {results.length} results</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    background: {
        backgroundColor: 'white'
    }
});

export default SearchScreen;
