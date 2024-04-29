import {useState} from'react'
import { ScrollView, View, Text, Image, TouchableOpacity, TextInput } from 'react-native'
import{ styles} from './styles'

export default function App() {
  const [emailField, setEmailField] = useState<string>('')
  const [passwordField, setPasswordField] = useState<string>('')
  const [forgotButton, setForgotButton] = useState<string>('')
  const [signUpButton, setSignUpButton] = useState<string>('')
  const [birthField, setBirthField] = useState<string>('')
 
  //Função de esqueci minha senha
  const handleForgoButton = () => {
    setForgotButton('esqueci')  
    alert(passwordField)
  }
  
  //Função do Botão Entrar
  const handleLoginButton = () => {
    alert(emailField)
    
  }

  // Função do cadastre-se
  const handleSignUpButton = () => {
    setSignUpButton('cadastre')
    alert(birthField)
  }

  return (
    <ScrollView style={styles.scrollview}>
     {forgotButton != 'esqueci' &&
        <>
     {signUpButton != 'cadastre' &&
        <>
      <View style={styles.container}>
        <Image style={styles.logo} source={require('./assets/snack-icon.png')}/>
        <Text style={styles.h1}>Sistema de Login</Text>
        <Text style={styles.h2}>Bem vindo(a)! Digite seus dados abaixo.</Text>
        <View style={styles.inputArea}>
          <Text style={styles.inputLabel}>Email</Text>
          <TextInput 
          style={styles.inputField}
          placeholder='Digite seu email'
          placeholderTextColor='#d1d1d1'
          value={emailField}
          onChangeText={t => setEmailField(t)}
          autoCapitalize='none'
          keyboardType='email-address'
          />
        </View>

        <View style={styles.inputArea}>
          <Text style={styles.inputLabel}>Senha</Text>
          <TextInput
           style={styles.inputField}
           placeholder='**********' 
           placeholderTextColor='#d1d1d1'
           value={passwordField}
           onChangeText={t => setPasswordField(t)}
           autoCapitalize='none'
           secureTextEntry
           />
        </View>

        <View style={styles.aditionals}>
          <TouchableOpacity style={styles.forgotBtnArea} onPress={handleForgoButton}>
            <Text style={styles.forgoBtnText}>Esqueci minha senha</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleLoginButton}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      
        <View style={styles.signUpArea}>
          <Text style={styles.signUpText}>Não tem conta?</Text>
          <TouchableOpacity onPress={handleSignUpButton}>
            <Text style={styles.signUpBtnText}>Cadastre-se</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.footerArea}>
          <Text style={styles.footerText}>Criado por Maria</Text>
        </View>
      </View>
      </>
     }
     </>
     }
    
     {forgotButton == 'esqueci' &&
        <>
    <View style={styles.container}>
        <Image style={styles.logo} source={require('./assets/snack-icon.png')}/>
        <Text style={styles.h1}>Sistema de
Recuperação de Senha</Text>
        <Text style={styles.h2}>Bem vindo(a)! Crie uma nova senha abaixo.</Text>
        <Text style={styles.h3}>Pra recuperar sua senha,informe seu enderenço de email que nós enviaremos um link para a alteração da senha</Text>
         <View style={styles.inputArea}>
          <Text style={styles.inputLabel}>E-mail</Text>
          <TextInput 
          style={styles.inputField}
          placeholder='Digite seu email'
          placeholderTextColor='#d1d1d1'
          value={emailField}
          onChangeText={t => setEmailField(t)}
          autoCapitalize='none'
          keyboardType='email-address'
          />
        </View>

        <TouchableOpacity style={styles.forgotButton} onPress={handleLoginButton}>
          <Text style={styles.buttonText}>Enviar</Text>
        </TouchableOpacity>

        <View style={styles.footerArea}>
          <Text style={styles.footerText}>Criado por Maria </Text>
        </View>
      </View>
      </>
     }
     
     {signUpButton == 'cadastre' &&
        <>
    <View style={styles.container}>
        <Image style={styles.logo} source={require('./assets/snack-icon.png')}/>
        <Text style={styles.h1}> Sistema de cadastro</Text>
        <Text style={styles.h2}>Bem vindo(a)! </Text>

         <View style={styles.inputArea}>
          <Text style={styles.inputLabel}>E-mail</Text>
          <TextInput 
          style={styles.inputField}
          placeholder='Digite seu email'
          placeholderTextColor='#d1d1d1'
          value={emailField}
          onChangeText={t => setEmailField(t)}
          autoCapitalize='none'
          keyboardType='email-address'
          />
        </View>

        <View style={styles.inputArea}>
          <Text style={styles.inputLabel}>Senha</Text>
          <TextInput
          style={styles.inputField}
          placeholder='*********'
          placeholderTextColor='#d1d1d1'
          value={passwordField}
          onChangeText={t => setPasswordField(t) }
          autoCapitalize='none'
          secureTextEntry
        />
        </View>
        <View style={styles.inputArea}>
        <Text style={styles.inputLabel}>Data de nascimento</Text>
        <TextInput
        style={styles.inputField}
        placeholder='dd/mm/aaaa'
        placeholderTextColor='#d1d1d1'
        value={birthField}
        onChangeText={t => setBirthField(t) }
        autoCapitalize='none'
        secureTextEntry
        
        />
        </View>

        <TouchableOpacity style={styles.forgotButton} onPress={handleLoginButton}>
          <Text style={styles.buttonText}>Continuar</Text> 
        </TouchableOpacity>
        <View style={styles.footerArea}>
          <Text style={styles.footerText}>Criado por Maria</Text>
        </View>
      </View>
      </>
     } 
    </ScrollView>
  )
}
   