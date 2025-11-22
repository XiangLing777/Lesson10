import React from 'react';
import { View, Text, StyleSheet, SectionList, Image, TouchableOpacity } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const foodData = [
    {
        title: 'Hawker Center Classics',
        bgcolor: '#FF6B6B',
        icon: 'local-dining',
        data: [
            {
                id: '1',
                name: 'Hainanese Chicken Rice',
                description: 'Hainanese chicken rice, featuring steamed chicken served with chicken broth-infused rice, is a beloved dish and an absolutely quick and satisfying lunch choice! For this dish, the quality of the chicken broth is paramount, evident in the flavor and aroma permeating the steamed rice. Drizzle some dipping sauce over the chicken and savor it carefully!',
                price: 'S$4-10',
                image: 'https://cdn.sanity.io/images/nxpteyfv/goguides/ce219072bb8051a07897cdfb210c2042c516d3a7-1600x1066.jpg?fp-x=0.5&fp-y=0.5&w=1351&fit=max&auto=format'
            },
            {
                id: '2',
                name: 'Char Kway Teow',
                description: 'Kway teow is a type of white, flat noodle stir-fried with dark soy sauce, bean sprouts, fish cakes, clams, and Chinese sausage to create a dish bursting with wok hei. It\'s available at hawker centers and restaurants alike. Skilled chefs cook the noodles in steamy kitchens, imparting a smoky aroma to this dish.',
                price: 'S$3-7',
                image: 'https://cdn.sanity.io/images/nxpteyfv/goguides/dfefba0cc241940fcba2682914dd2257f94bb577-1600x1066.jpg?fp-x=0.5&fp-y=0.5&w=1351&fit=max&auto=format'
            }
        ]
    },
    {
        title: 'Local Delights',
        bgcolor: '#4ECDC4',
        icon: 'restaurant',
        data: [
            {
                id: '3',
                name: 'Chilly Crab',
                description: 'This dish features hard-shelled crabs cooked in a semi-thick gravy and tomato chili sauce paste. After steaming, the crab\'s hard shell cracks slightly. The chef then slowly stir-fries the crab in a thick sauce made from chili paste, tomato sauce, and eggs before serving! Despite the "spicy" in its name, this dish isn\'t overly hot. It\'s typically enjoyed with bread—dip a piece into the savory sauce, take a bite, and savor the flavor!',
                price: 'S$50-200',
                image: 'https://cdn.sanity.io/images/nxpteyfv/goguides/fc1830f4b6c86754fcae59644b2e6f609b13b129-1600x1066.jpg?fp-x=0.5&fp-y=0.5&w=1351&fit=max&auto=format'
            },
            {
                id: '4',
                name: 'Bak Kut Teh',
                description: 'Add Chinese herbs and spices to the pork rib broth, season with light soy sauce and dark soy sauce, then simmer for several hours to create Bak Kut Teh! Bak Kut Teh is typically served with steamed rice for breakfast and has spawned numerous variations, including a low-fat version made with chicken and a halal version specifically for Muslim consumers.',
                price: 'S$10-20',
                image: 'https://cdn.sanity.io/images/nxpteyfv/goguides/8d3e64bfe9e299f270ffe3a14db189aa7068ed51-1600x1066.jpg?fp-x=0.5&fp-y=0.5&w=1351&fit=max&auto=format'
            }
        ]
    }
];

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7F9FC',
        paddingTop: 50,
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderBottomWidth: 2,
        borderBottomColor: '#fff',
    },
    headerText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#fff',
        marginLeft: 10,
    },
    foodItem: {
        backgroundColor: '#fff',
        marginVertical: 6,
        marginHorizontal: 10,
    },
    itemContent: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    foodImage: {
        width: 420,
        height: 230,
        marginRight: 15,
    },
    textContainer: {
        backgroundColor: 'lightyellow',
        flex: 1,
        flexDirection: 'column',
    },
    foodName: {
        fontSize: 19,
        fontWeight: 'bold',
        color: 'black',
    },
    foodDescription: {
        fontSize: 16,
        color: '#636E72',
        marginBottom: 4,
    },
    foodPrice: {
        fontSize: 16,
        fontWeight: '600',
        color: '#E17055',
    },
    sectionHeader: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#2D3436',
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 10,
    }
});

const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.foodItem}>
        <View style={styles.itemContent}>
            <Image
                source={{ uri: item.image }}
                style={styles.foodImage}
            />
            <View style={styles.textContainer}>
                <Text style={styles.foodName}>{item.name}</Text>
                <Text style={styles.foodDescription}>{item.description}</Text>
                <Text style={styles.foodPrice}>{item.price}</Text>
            </View>
        </View>
    </TouchableOpacity>
);

const MyApp = () => {
    const renderSectionHeader = ({ section: { title, bgcolor, icon } }) => (
        <View style={[styles.headerContainer, { backgroundColor: bgcolor }]}>
            <MaterialIcons name={icon} size={28} color="#fff" />
            <Text style={styles.headerText}>{title}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.sectionHeader}>Singapore Food Guide</Text>

            <SectionList
                sections={foodData}
                renderSectionHeader={renderSectionHeader}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

export default MyApp;