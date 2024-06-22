//~ react-navigation
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//~ react-native
import { Platform } from 'react-native';

//~ expo-icons
import Ionicons from '@expo/vector-icons/Ionicons';

//~ react-wave-bar
import { BottomFabBar } from 'rn-wave-bottom-bar';

//~ theme
import { useTheme } from '@/theme/ThemeProvider';

//~ constants
import { COLORS } from '@/constants';

//~ routes
import { BottomTabNavKeys, BottomTabNavRoutes } from '@/routes/paths';

//* ////////////////////////////////////////////////////////////////////////////

const Tab = createBottomTabNavigator();

//* ////////////////////////////////////////////////////////////////////////////

function BottomTabNavigator() {

  //^ use hooks
  const { dark, colors } = useTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: dark ? colors.primary : colors.background,
        tabBarActiveBackgroundColor: colors.primary,
        headerShown: false,
        tabBarStyle: {
          height: Platform.OS === 'ios' ? 90 : 60,
          shadowColor: dark ? '#000' : colors.primary,
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        },
        tabBarLabelStyle: {
          fontFamily: 'bold',
          fontSize: 12,
          color: COLORS.white,
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
            shadowColor: dark ? '#000' : colors.primary,
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.27,
            shadowRadius: 4.65,
            
            elevation: 6,
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
          tabBarIcon: ({ focused }) => {
            if (focused) {
              if (dark) {
                return <Ionicons name='rocket-sharp' color={colors.text} size={35} />;
              } else {
                return <Ionicons name='rocket-sharp' color={colors.primary} size={35} />;
              }
            } else {
              return <Ionicons name='rocket-outline' color={COLORS.white} size={28} />;
            }
          },
          tabBarLabel: 'Test'
        }}
      />

      <Tab.Screen 
        name={BottomTabNavKeys.TestScreen} 
        component={BottomTabNavRoutes.TestScreen} 
        options={{
          tabBarIcon: ({ focused }) => {
            if (focused) {
              if (dark) {
                return <Ionicons name='american-football-sharp' color={colors.text} size={35} />;
              } else {
                return <Ionicons name='american-football-sharp' color={colors.primary} size={35} />;
              }
            } else {
              return <Ionicons name='american-football-outline' color={COLORS.white} size={28} />;
            }
          },
          tabBarLabel: 'About'
        }}        
      />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;
