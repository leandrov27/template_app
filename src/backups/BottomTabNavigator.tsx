//~ react-navigation
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//~ expo-icons
import Ionicons from '@expo/vector-icons/Ionicons';

//~ react-wave-bar
import { BottomFabBar } from 'rn-wave-bottom-bar';

//~ constants
import { COLORS } from '@/constants';

//~ routes
import { BottomTabNavKeys, BottomTabNavRoutes } from '@/routes/paths';

//~ config
import { isIOS } from '@/config/viewport';

//* ////////////////////////////////////////////////////////////////////////////

const Tab = createBottomTabNavigator();

//* ////////////////////////////////////////////////////////////////////////////

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: COLORS.primary,
        tabBarActiveBackgroundColor: COLORS.white,
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarStyle: {
          height: isIOS ? 90 : 55,
        },
        tabBarLabelStyle: {
          fontFamily: 'bold',
          fontSize: 12,
          color: COLORS.grayscale700,
          textAlign: 'center',
          justifyContent: 'center',
          alignItems: 'center',
        }
      }}

      tabBar={props => (
        <BottomFabBar
          mode={'default'}
          isRtl={false}
          focusedButtonStyle={{
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 7,
            },
            shadowOpacity: 0.41,
            shadowRadius: 9.11,
            elevation: 14,
          }}
          bottomBarContainerStyle={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
          }}
          {...props}
        />
      )}
    >
      <Tab.Screen 
        name={BottomTabNavKeys.AboutScreen}
        component={BottomTabNavRoutes.AboutScreen} 
        options={{
          tabBarIcon: ({focused}) => (
            <Ionicons 
              name={focused ? 'balloon-sharp' : 'balloon-outline'} 
              color={focused ? COLORS.white : COLORS.grayscale700}
              size={focused ? 30 : 26} 
            />
          ),
          tabBarLabel: 'Inicio'
        }}
      />
      <Tab.Screen 
          name={BottomTabNavKeys.TestScreen} 
          component={BottomTabNavRoutes.TestScreen} 
          options={{
            tabBarIcon: ({focused}) => (
              <Ionicons 
                name={focused ? 'american-football-sharp' : 'american-football-outline'} 
                color={focused ? COLORS.white : COLORS.grayscale700}
                size={focused ? 35 : 30} 
              />
            ),
            tabBarLabel: 'Football'
          }}        
        />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;
