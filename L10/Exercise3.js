import React from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity, SectionList, Image, Button} from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Entypo from '@expo/vector-icons/Entypo';

// Amend datasource where necessary to include header icon
const datasource = [
    {
        data:[
            {name: 'Pikachu', num: '25'},
            {name: 'Raichu', num: '26'},
        ],
        title: 'Electric',
        bgcolor: 'yellow',
        icon: 'electric-bolt',
    },
    {
        data:[
            {name: 'Squirtle', num: '7'},
            {name: 'Psyduck', num: '54'},
        ],
        title: 'Water',
        bgcolor: 'skyblue',
        icon: 'water',
    },
];

const styles = StyleSheet.create({
    opacityStyle: {
        borderWidth: 1,
        marginVertical: 5,
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: 'lightblue',
    },
    textStyle: {
        fontSize: 25,
        margin: 10,
        textAlign: 'left',
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    headerText: {
        fontSize: 30,
        marginLeft: 10,
        fontWeight: 'bold',
    },
    cardStyle: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
    },
    pokemonImage: {
        width: 250,
        height: 300,
        resizeMode: 'contain',
    },
    addButton: {
        backgroundColor: '#007AFF',
        padding: 15,
        margin: 10,
        borderRadius: 8,
        alignItems: 'center',
    },
    addButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

// Amend code to display pokemon card image
const renderItem = ({ item }) => {
    // insert pokemon card number as part of url
    let url = 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_' + item.num + '.png';

    return (
        <TouchableOpacity style={styles.opacityStyle}>
            <View style={styles.cardStyle}>
                <Text style={styles.textStyle}>{item.name}</Text>
                <Image
                    source={{ uri: url }}
                    style={styles.pokemonImage}
                    onError={(error) => console.log('Image loading error:', error)}
                />
            </View>
        </TouchableOpacity>
    );
};

// Amend code to display header icon etc
const MyApp = () => {
    const renderSectionHeader = ({ section: { title, bgcolor, icon } }) => (
        <View style={[styles.headerContainer, { backgroundColor: bgcolor }]}>
            {icon === 'electric-bolt' ? (
                <MaterialIcons name="electric-bolt" size={24} color="black" />
            ) : (
                <Entypo name="water" size={24} color="black" />
            )}
            <Text style={styles.headerText}>{title}</Text>

        </View>
    );

    return (
        <View style={{marginTop: 30, marginBottom: 50}}>
            <TouchableOpacity style={styles.addButton}>
                <Text style={styles.addButtonText}>Add Pokemon</Text>
            </TouchableOpacity>

            <SectionList
                contentContainerStyle={{padding: 10}}
                sections={datasource}
                renderSectionHeader={renderSectionHeader}
                renderItem={renderItem}  // 添加这行！
                keyExtractor={(item, index) => item.num + index}
            />
        </View>
    );
};

export default MyApp;