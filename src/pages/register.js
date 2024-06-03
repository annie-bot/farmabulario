import React from 'react'
import { Image, StyleSheet, View, Text, Button } from 'react-native'
import { Icon, Input } from 'react-native-elements'

export default function Register() {
    return(
        <View style={[styles.container]}>
      <View style={[styles.body]}>
        <Text><h1>Inscreva-se agora</h1></Text>
        <Text><span>Por favor preencha os dados e crie uma conta</span></Text>
        <View style={[styles.inputGroup]}>
        <Input
          placeholder='Login'
        />
        <Input
          placeholder='Email'
        />
                <Input
                secureTextEntry={true}
          placeholder='*************'
        />
        <Text style={[styles.fixHintPosition]}><span style={{color: 'red', marginLeft: '15px'}}>Sua senha deve possuir pelo menos 8 caracteres</span></Text>
        <View style={[styles.loginButton]}>        <Button
          title="Cadastrar-se"
          color="#5DB075"
        /></View>
        <View style={[styles.centralizedBox]}>
          <View style={[styles.horizontal]}>
            <Text><span>Já possui uma conta? </span></Text>
              <Text onPress={() => navigation.navigate('login')}><span style={{color: '#5DB075'}}>Faça Login</span></Text>
            </View>
          {/* <Text><span >Ou conecte-se</span></Text> */}
        </View>
        </View>


      </View>
      <View style={[styles.footer, styles.horizontal, styles.centralizedBox]}>
      <Image
        source={require('../../assets/facebook-icon.png')}
        style={styles.socialIcon}
      />
      <Image
        source={require('../../assets/twitter-icon.png')}
        style={styles.socialIcon}
      />
      <Image
        source={require('../../assets/instagram-icon.jpg')}
        style={styles.socialIcon}
      />
        
      </View>
    </View>
    )

}

const styles = StyleSheet.create({
    teste: {
      width: 200,
      height: 200,
      backgroundColor: 'black'
    },
    container: {
      flex: 2,
      justifyContent: 'center'
    },
    horizontal: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: 10,
    },
    header: {
      height:100
  
    },
    body: {
      height: 500,
      display: 'flex',
      justifyContent: 'center', // Alinha verticalmente
      alignItems: 'center', // Alinha horizontalmente
    },
    footer: {
      height: 100
  
    },
    centralizedBox: {
      display: 'flex',
      justifyContent: 'center', // Alinha verticalmente
      alignItems: 'center', // Alinha horizontalmente
    },
    arrow: {
      backgroundColor: 'rgb(128 128 128 / 10%);',
      width: 44,
      height: 44,
      marginTop: 20,
      marginLeft: 10,
      alignItems: 'center',
    },
    inputGroup: {
      marginTop: 30,
      gap: 15,
      width: '100%'
    },
    loginButton: {
      marginLeft: 15,
      marginRight: 15
    },
    socialIcon: {
      height: 44,
      width: 44,
      borderRadius: 100,
      marginRight:15
  
    },
    fixHintPosition: {
        position: 'relative',
        bottom: 15

    }
  });