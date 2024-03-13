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
import Fonts from './config/Fonts.js';
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
    Inter_500Medium: Fonts.Inter_500Medium,
    Inter_400Regular: Fonts.Inter_400Regular,
    Inter_300Light: Fonts.Inter_300Light,
    Inter_600SemiBold: Fonts.Inter_600SemiBold,
    Poppins_400Regular: Fonts.Poppins_400Regular,
    Poppins_500Medium: Fonts.Poppins_500Medium,
    Poppins_700Bold: Fonts.Poppins_700Bold,
  });

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

  const isReady = areAssetsCached && fontsLoaded;
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
