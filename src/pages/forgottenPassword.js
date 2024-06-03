import React from 'react'
import {  Modal, StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native'
import { Icon, Input } from 'react-native-elements'
import { useState } from 'react';

export default function ForgottenPassword({navigation}) {

  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleConfirm = () => {
    // Ação a ser executada ao confirmar
    closeModal();
    navigation.navigate('login')
  };

  const handleCancel = () => {
    // Ação a ser executada ao cancelar
    closeModal();
  };

    return(
      <View style={[styles.container]}>
      <View style={[styles.body]}>
        <Text><h1>Esqueci a senha</h1></Text>
        <Text><span>Digite sua conta de e-mail para redefinir sua senha</span></Text>
        <View style={[styles.inputGroup]}>
          <Input
            placeholder='E-mail'
          />
          {/* <Text onPress={() => navigation.navigate('')}><span style={{color: '#5DB075', marginLeft: '15px'}}>Esqueceu a senha?</span></Text> */}
          <View style={[styles.loginButton]}>        <Button onPress={openModal}
            title="Resetar Senha"
            color="#5DB075"
          />
          <Modal
        transparent={true}
        visible={modalVisible}
        animationType="slide"
        onRequestClose={closeModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Verifique seu e-mail</Text>
            <Text style={styles.modalMessage}>Enviamos instruções de recuperação de senha para seu e-mail</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button} onPress={handleConfirm}>
              <Button color="#5DB075" title='Confirmar' onPress={handleConfirm} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
          </View>
        </View>


      </View>
      {/* <View style={[styles.footer, styles.horizontal, styles.centralizedBox]}>
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
        
      </View> */}
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
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  modalContainer: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 30,
    alignItems: 'center',

  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalMessage: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    flex: 1,
    padding: 10,
    margin: 5,
    backgroundColor: '#5DB075',
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});
