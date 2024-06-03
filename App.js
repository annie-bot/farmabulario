import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

import Register from "./src/pages/register";
import Login from "./src/pages/login";
import ForgottenPassword from "./src/pages/forgottenPassword";
import Search from "./src/pages/search";
import MedsSave from "./src/pages/medsSave";
import MedicineVideo from "./src/pages/video";

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="register" component={Register} options={{ title: 'Registro' }} />
        <Stack.Screen name="forgottenPassword" component={ForgottenPassword} options={{ title: 'Esqueci a senha' }}/>
        <Stack.Screen name="search" component={Search} options={{ title: 'Busca' }}/>
        <Stack.Screen name="medsSave" component={MedsSave} options={{ title: 'Medicamentos Salvos' }}/>
        <Stack.Screen name="video" component={MedicineVideo} options={{ title: 'Busca' }}/>
      </Stack.Navigator>

    </NavigationContainer>
  );
}
