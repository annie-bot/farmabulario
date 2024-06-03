import React from 'react'
import { Image, StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native'
import { Icon, Input } from 'react-native-elements'

export default function Login({navigation}) {
    return(
      <View style={[styles.container]}>
      <View style={[styles.body]}>
        <Text style={{display: 'block',
                      fontSize: '2em',
                      marginBlockStart: '0.67em',
                      margiBlockEnd: '0.67em',
                      marginInlineStart: 0,
                      marginInlineEnd: 0,
                      fontWeight: 'bold',
                      unicodeBidi: 'isolate'}}>Faça seu Login</Text>
        <Text>Faça login para continuar nosso aplicativo</Text>
        <View style={[styles.inputGroup]}>
        <Input
          placeholder='Login'
        />
        <Input
        secureTextEntry={true}
          placeholder='*************'
        />
        <Text onPress={() => navigation.navigate('forgottenPassword')} style={{color: '#5DB075', marginLeft: '15px'}}>Esqueceu a senha?</Text>
        <View style={[styles.loginButton]}>        <Button
          title="Login"
          color="#5DB075"
          onPress={() => navigation.navigate('search')}
        /></View>
        <View style={[styles.centralizedBox]}>
          <View style={[styles.horizontal]}>
            <Text>Não possui uma conta? </Text>
              <Text onPress={() => navigation.navigate('register')} style={{color: '#5DB075'}}>Cadastre-se</Text>
            </View>
          <Text>Ou conecte-se</Text>
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
  h1Style: {
    
  }
});
