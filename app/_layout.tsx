import 'react-native-reanimated';
import 'react-native-url-polyfill/auto';

import '../assets/css/global.css';

import { useEffect } from 'react';

import { Appearance } from 'react-native';

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { enableFreeze } from 'react-native-screens';

import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';

import {
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
} from '@expo-google-fonts/inter';
import { useColorScheme, vars } from 'nativewind';

import { Screen } from '~/components/ui/Box';
import { CurrencyProvider } from '~/providers/Currency';
import { COLORS } from '~/theme';
import { cn } from '~/utilities/cn';

enableFreeze();

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const { colorScheme, setColorScheme } = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  const scheme = colorScheme as keyof typeof COLORS;

  useEffect(() => {
    const listener = Appearance.addChangeListener((scheme) => {
      setColorScheme(scheme.colorScheme || 'light');
    });

    return () => {
      listener.remove();
    };
  }, [setColorScheme]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <GestureHandlerRootView
        className={cn('flex-1')}
        style={vars(COLORS[scheme])}
      >
        <CurrencyProvider>
          <Screen>
            <Stack
              screenOptions={{
                headerShown: false,
              }}
              initialRouteName='add'
            >
              <Stack.Screen
                name='(tabs)'
                options={{
                  headerBackVisible: false,
                }}
              />
              <Stack.Screen
                name='add'
                options={{
                  presentation: 'modal',
                  title: 'Add expense',
                }}
              />
              <Stack.Screen name='+not-found' />
            </Stack>
          </Screen>
        </CurrencyProvider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}
