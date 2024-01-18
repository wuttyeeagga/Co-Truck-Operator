import * as React from 'react';
import * as Notifications from 'expo-notifications';
import * as SplashScreen from 'expo-splash-screen';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import { View, Text, ActivityIndicator, AppState } from 'react-native';
import { Provider as ThemeProvider } from '@draftbit/ui';
import { QueryClient, QueryClientProvider } from 'react-query';

import AppNavigator from './AppNavigator';
import Draftbit from './themes/Draftbit.js';
import cacheAssetsAsync from './config/cacheAssetsAsync';
import { GlobalVariableProvider } from './config/GlobalVariableContext';
import { useFonts } from 'expo-font';
SplashScreen.preventAutoHideAsync();

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

const queryClient = new QueryClient();

const App = () => {
  const [areAssetsCached, setAreAssetsCached] = React.useState(false);

  const [fontsLoaded] = useFonts({
    Inter_300Light:
      'https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuOKfMZhrib2Bg-4.ttf',
    Inter_400Regular:
      'https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfMZhrib2Bg-4.ttf',
    Inter_500Medium:
      'https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuI6fMZhrib2Bg-4.ttf',
    Inter_600SemiBold:
      'https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuGKYMZhrib2Bg-4.ttf',
    Poppins_400Regular:
      'https://fonts.gstatic.com/s/poppins/v20/pxiEyp8kv8JHgFVrFJDUc1NECPY.ttf',
    Poppins_500Medium:
      'https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLGT9V1tvFP-KUEg.ttf',
    Poppins_700Bold:
      'https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLCz7V1tvFP-KUEg.ttf',
  });
  const [fontsTimedOut, setFontsTimedOut] = React.useState(false);
  const [fontTimer, setFontTimer] = React.useState(null);
  React.useEffect(() => {
    if (fontsLoaded && fontTimer) {
      clearTimeout(fontTimer);
      setFontsTimedOut(false);
    }
    if (!fontsLoaded && !fontTimer) {
      const timer = setTimeout(() => {
        console.warn('Timed out waiting for fonts to load');
        setFontsTimedOut(true);
      }, 10000);
      setFontTimer(timer);
      return () => clearTimeout(timer);
    }
  }, [fontsLoaded, fontTimer]);

  const appState = React.useRef(AppState.currentState);

  const handleAppStateChange = nextAppState => {
    if (
      appState?.current?.match(/inactive|background/) &&
      nextAppState === 'active'
    ) {
      // reset any badges once the user re-enters the app
      Notifications.setBadgeCountAsync(0);
    }
    // always update the current app state
    appState.current = nextAppState;
  };

  React.useEffect(() => {
    const appStateSubscription = AppState.addEventListener(
      'change',
      handleAppStateChange
    );

    return () => {
      appStateSubscription.remove();
    };
  }, []);

  React.useEffect(() => {
    async function prepare() {
      try {
        await cacheAssetsAsync();
      } catch (e) {
        console.warn(e);
      } finally {
        setAreAssetsCached(true);
      }
    }

    prepare();
  }, []);

  const isReady = areAssetsCached && (fontsLoaded || fontsTimedOut);
  const onLayoutRootView = React.useCallback(async () => {
    if (isReady) {
      await SplashScreen.hideAsync();
    }
  }, [isReady]);

  if (!isReady) {
    return null;
  }

  return (
    <SafeAreaProvider
      initialMetrics={initialWindowMetrics}
      onLayout={onLayoutRootView}
    >
      <GlobalVariableProvider>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={Draftbit}>
            <AppNavigator />
          </ThemeProvider>
        </QueryClientProvider>
      </GlobalVariableProvider>
    </SafeAreaProvider>
  );
};

export default App;
