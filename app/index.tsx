import React, { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";


function App(){
    
    const city = 'Presidente Epitácio';
    const condition = 'Ensolarado';
    const rainProbability = '30';
    const feelsLike = '45';
    const temperature = '39';
    
    const [night, setNight] = useState(false); //servirá para dizer se é dia ou noite
//set serve para atribuir o valor e o useState faz a alteração de estado dinâmico

    return (
        <View style={[styles.container, night ? styles.containerBgNight : styles.containerBgDay]}>
            <View style={styles.header}>
                <Text style={styles.city}>Presidente Epitácio</Text>
            </View>
            <View style={styles.detailsContainer}>
                <Text style={styles.temperature}>39 °C</Text>
                <Image source={ night ? require('../assets/images/noite.png') : 
                require('../assets/images/sol.png')} style={styles.weatherIcon} 
                //o '?' é como um if: se for noite, mudar para tal cor, se nao for, mudar para tal cor 
                /> 
                
            </View>
            <View>
                <Text style={styles.weatherCondition}>Ensolarado</Text>
                <Text style={styles.text}>Sensação Térmica: 45 °C</Text>
                <Text style={styles.text}>Probabilidade de Chuva: 30%</Text>
            </View>
            <Image source={ require('../assets/images/cidade.png')} style={styles.bottomImage}/>
        </View>      
    );
}

const styles = StyleSheet.create({
    bottomImage: {
        width: '115%',
        height: '57%',
        position: 'absolute',
        bottom: 0,
        resizeMode: 'cover'
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
    },

    city:{
            fontWeight:'bold',
            fontSize: 25,
            color: '#fff'
    },

    weatherIcon: {
        width: 100,
        height: 100,
        alignSelf: 'flex-end'
    },

    detailsContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    weatherCondition: {
        fontSize: 18,
        fontWeight: 'bold',
        alignSelf: 'flex-end',
        marginBottom: 20,
        color: '#fff'
    },

    temperature:{
    fontSize: 55,
    marginBottom: 20,
    color: '#fff'
    },

    container: {
        flex:1, // total da tela
        padding:20 // tudo que fica em volta do componente(por dentro)

    },

    containerBgDay:{
        backgroundColor: '#09d3f3'

    },

    containerBgNight: {
        backgroundColor: '#333'
    },

    text:{
        fontSize: 22,
        color: '#fff',
        marginBottom: 10,
        fontStyle: 'italic'
    }

});

export default App; //torna a tela acessível dentro do aplicativo