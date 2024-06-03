import {React, useState} from 'react'
import { StyleSheet, View ,Button, FlatList, Text, TouchableOpacity, Image } from 'react-native'
import { TextInput, IconButton,  Avatar, Card  } from 'react-native-paper'
import { medicines } from './db/medicines'
import { ScrollView } from 'react-native'

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />




export default function Search({navigation}) {

    const [search, setSearch] = useState('')
    const [medsAux, setMedsAux] = useState(medicines)
    const [isSaveAux, setIsSaveAux] = useState(true)

    const handleSearch = (e, search) => {
        e.preventDefault();
        setSearch(search)
    } 

    const handleFilter = (e) => {
        e.preventDefault();

        if (search) {
            const filteredMeds = medsAux.filter(med => med.name.toLowerCase().includes(search.toLowerCase()));
            setMedsAux(filteredMeds)
        } else {
            setMedsAux(medicines)
        }
    }

    const handleIsSaved = (key) => {
        setIsSaveAux(true)
    }

    const redirectToVideo = (medicine) => {
        navigation.navigate('video', {medicine})
    }

    return(
        <ScrollView>
        <View style={[styles.container]}> 
            <View style={[styles.searchContainer]}>
            
                <Button
                    type="elevated"
                    onPress={(e) => handleFilter(e, search)}
                    title="Pesquisar"
                    accessibilityLabel="Learn more about this purple button"
                    color='#C49dd2d6'
                    />
                <TextInput styles={[styles.searchInput]} label="Pesquisar" value={search} onChange={(e) => handleSearch(e, e.target.value)}></TextInput>
                
            </View>
            <View>
                <View style={{        display: 'flex',
        justifyContent: 'center', // Centraliza o conteúdo verticalmente na view
        alignItems: 'center', // Centraliza o conteúdo horizontalmente na view
        textAlign: 'center'}}>
                 <Text  variant="headlineLarge" style={{textAlign: 'center'}} ><h1>Medicamentos</h1></Text>
                 <Text style={{fontWeight: 'bold', fontSize: 16, marginBottom: 10}}>Medicamentos salvos</Text>
                 <TouchableOpacity onPress={() => navigation.navigate('medsSave')}>
                    <Image source={require('../../assets/savesMeds.png')} style={{width: 50, height: 50, marginLeft: 15, marginRight: 15, marginBottom: 15}}></Image>
                 </TouchableOpacity>
                 
                </View>
                <View  style={{display: 'flex', flexDirection: 'column'}}>

                        {medsAux && medsAux.map((item, key) => (

                            <Card key={key} style={{width: '80%', minHeight: 100, marginBottom: 10, marginLeft: 35}} onPress={() => redirectToVideo(item)}>
                                                            
                                <Card.Cover style={{borderRadius: 15}} source={{ uri: item?.photo }}  />
                                <Card.Content>
                                <Text variant="titleLarge" style={[styles.fontName]} >{item?.name}</Text>
                                <Text variant="bodyMedium" style={{fontFamily: 'roboto', fontWeight: 400, fontSize: 16, lineHeight: 16, margin: 5}}>{item?.description}</Text>
                                <Text variant="labelLarge" style={{fontFamily: 'roboto', fontWeight: 500, fontSize: 16, lineHeight: 16, letterSpacing: 0.3, margin: 5, color: '#0D6EFD'}}>R${item?.price}</Text>
                                </Card.Content>
                                {isSaveAux && <Button
                                                    type="elevated"
                                                    onPress={() => handleIsSaved(key)}
                                                    title="Salvar"
                                                    accessibilityLabel="Learn more about this purple button"
                                                    color='#C49dd2d6'
                                    />}

                            </Card>
                            ))}
                         
                        
                </View>
                


            </View>
        </View>
        </ScrollView>
    )

}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        height: 1000
        
    },
    containerCentralized: {
        display: 'flex',
        justifyContent: 'center', // Centraliza o conteúdo verticalmente na view
        alignItems: 'center', // Centraliza o conteúdo horizontalmente na view
        textAlign: 'center'
    },
    searchContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        height: 45,
        marginTop: 15
        
    },
    searchInput: {
        width: '100%',
        borderRadius: 16
    },
    fontName: {
        margin: 5,
        fontFamily: 'roboto',
        fontWeight: 600,
        fontSize: 18,
        letterSpacing: 0.5

    },
    teste: {
        display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between'
    }
})