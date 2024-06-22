//~ react-navigation
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//~ navigators
import DrawerNavigator from './DrawerNavigator';

//* ////////////////////////////////////////////////////////////////////////////

const Stack = createNativeStackNavigator();

//* ////////////////////////////////////////////////////////////////////////////

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='DrawerNavigator' component={DrawerNavigator} />
    </Stack.Navigator>
  );
};

export default StackNavigator;