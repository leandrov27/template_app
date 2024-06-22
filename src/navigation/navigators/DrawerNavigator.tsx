//~ react-navigation
import { createDrawerNavigator } from '@react-navigation/drawer';

//~ react-native
import { Text, View } from 'react-native';

//~ navigators
import BottomTabNavigator from './BottomTabNavigator';

//* ////////////////////////////////////////////////////////////////////////////

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator drawerContent={props => <DrawerView {...props} />} screenOptions={{headerShown: false}}>
      <Drawer.Screen name='BottomTabNavigator' component={BottomTabNavigator} />
    </Drawer.Navigator>
  );
}

function DrawerView() {
  return (
      <View>
          <Text>
              Drawer View
          </Text>
      </View>
  )
}

export default DrawerNavigator;