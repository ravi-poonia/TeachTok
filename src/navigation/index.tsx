import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeTabs from './HomeTabs';

const Stack = createNativeStackNavigator();

export default function NavContainer() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen component={HomeTabs} name="HomeTabs" />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
