import {React, useCallback, useState} from 'react'
import { StyleSheet, View ,Button, FlatList, Text, ActivityIndicator, useWindowDimensions } from 'react-native'
import { TextInput, IconButton,  Avatar, Card } from 'react-native-paper'
import { medicines } from './db/medicines'
import YoutubeIframe from 'react-native-youtube-iframe'
import * as ScreenOrientation from 'expo-screen-orientation'

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />


export default function MedicineVideo({navigation, route}) {
    const [search, setSearch] = useState('');
    const [medsAux] = useState(medicines);
    const [videoReady, setVideoReady] = useState(false);
    const {width} = useWindowDimensions();
    const {medicine} = route.params;
    const handleSearch = (e, search) => {
        e.preventDefault();
        setSearch(search)
    } 

    const handleFilter = (e) => {
        e.preventDefault();

        if (search) {

            const filteredMeds = medsAux.filter(med => med.name.toLowerCase().includes(search.toLowerCase()));
        }
    }

    const handleVideoReady = () => {
        if(videoReady) {
            setVideoReady(false)
        } else {
            setVideoReady(true)
        }
    }

    const onFullScreenChange = useCallback((isFullScreen) => {
        if(isFullScreen) {
            ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
        } else {
            ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
        }

    }, [])

    return(
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
                <View styles={[styles.containerCentralized]}>
                 <Text  variant="headlineLarge" style={{textAlign: 'center'}} ><h1>{medicine.name}</h1></Text>
                 
                </View>
                <View style={{    
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'left',
    paddingLeft: 15,
    paddingRight: 15}}>

                    <YoutubeIframe  
                        videoId={medicine.videoId}
                        height={180}
                        onReady={handleVideoReady}
                        onFullScreenChange={onFullScreenChange}
                    />
                    <View style={{textAlign: 'left'}}>
                    </View>
                        <Text style={{    fontFamily: 'roboto', fontSize: 20, fontWeight: 'bold', marginBottom: 5}}>{medicine.name}</Text>
                        <Text style={{    fontFamily: 'roboto', color: '#888', // Cor cinza
        fontWeight: '300', // Peso da fonte mais leve
        fontSize: 14, // Tamanho da fonte menor
        opacity: 0.7}} >{medicine.description}</Text>

                    {/* {!videoReady && <ActivityIndicator color='red' />} */}
                </View>
                


            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'left'
    },
    containerCentralized: {
        justifyContent: 'center', // Centraliza o conteúdo verticalmente na view
        alignItems: 'center', // Centraliza o conteúdo horizontalmente na view
        textAlign: 'left'
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
    },
    video: {
        width: '100%',
        height: 300,
    },
    backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  player: {
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 48,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 15
  },
  textFormat: {
    fontFamily: 'Roboto',
    fontSize: 12
  },
  textBox: {
    marginLeft: 15
  }
})