//~ import
import 'react-native-gesture-handler';

//~ react
import { useCallback } from 'react';

//~ react-native
import { SafeAreaProvider } from 'react-native-safe-area-context';

//~ expo
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

//~ theme
import { ThemeProvider } from '@/theme/ThemeProvider';

//~ constants
import { FONTS } from '@/constants/fonts';

//~ navigation
import AppNavigation from '@/navigation/AppNavigation';


//* ////////////////////////////////////////////////////////////////////////////

SplashScreen.preventAutoHideAsync();

//* ////////////////////////////////////////////////////////////////////////////

export default function App() {
  const [fontsLoaded, fontError] = useFonts(FONTS);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <ThemeProvider>
      <SafeAreaProvider onLayout={onLayoutRootView}>
        <AppNavigation /> 
      </SafeAreaProvider>
    </ThemeProvider>
  );
}