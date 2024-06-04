import { createNativeStackNavigator } from '@react-navigation/native-stack';

import home from '../pages/home';

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
    return (

<Stack.Navigator initialRouteName='Splash'>
    <Stack.Screen
        name= 'home'
        component={home}
        options={{
            title: 'home',
            headerStyle: { backgroundColor: 'white' },
            headerTintColor: 'white',
            headerShown: false,
          }}
    />
</Stack.Navigator>);}