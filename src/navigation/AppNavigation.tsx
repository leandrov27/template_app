//~ react-navigation
import { NavigationContainer } from '@react-navigation/native';

//~ main stack navigator
import StackNavigator from './navigators/StackNavigator';
import { StatusBar } from 'expo-status-bar';

//~ theme
import { useTheme } from '@/theme/ThemeProvider';

//* ////////////////////////////////////////////////////////////////////////////

export default function AppNavigation () {
  //^ use hooks
  const { dark } = useTheme();

  return (
    <NavigationContainer>
      <StatusBar style={dark ? 'light' : 'dark'} />
      <StackNavigator />
    </NavigationContainer>
  );
};