import * as React from "react";
import * as Notifications from "expo-notifications";
import * as SplashScreen from "expo-splash-screen";
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from "react-native-safe-area-context";
import {
  View,
  Text,
  ActivityIndicator,
  AppState,
  PermissionsAndroid,
  Alert,
} from "react-native";
import { Provider as ThemeProvider } from "@draftbit/ui";
import { QueryClient, QueryClientProvider } from "react-query";
import messaging from "@react-native-firebase/messaging";
import NetInfo from "@react-native-community/netinfo";

import AppNavigator from "./AppNavigator";
import Draftbit from "./themes/Draftbit.js";
import cacheAssetsAsync from "./config/cacheAssetsAsync";
import { GlobalVariableProvider } from "./config/GlobalVariableContext";
import { useFonts } from "expo-font";
import Fonts from "./config/Fonts.js";

SplashScreen.preventAutoHideAsync();
PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);

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
  const [connected, setConnected] = React.useState(false);

  const NotificationListener = () => {
    // Assume a message-notification contains a "type" property in the data payload of the screen to open
    messaging().onNotificationOpenedApp((remoteMessage) => {
      console.log(
        "Notification caused app to open from background state:",
        remoteMessage.notification
      );
    });

    // Check whether an initial notification is available
    messaging()
      .getInitialNotification()
      .then((remoteMessage) => {
        if (remoteMessage) {
          console.log(
            "Notification caused app to open from quit state:",
            remoteMessage.notification
          );
        }
      });

    // Register background handler
    messaging().setBackgroundMessageHandler(async (remoteMessage) => {
      console.log(
        "Message handled in the background!",
        remoteMessage.notification.title
      );
      Alert.alert(
        remoteMessage.notification.title,
        remoteMessage.notification.body
      );
    });

    messaging().onMessage(async (remoteMessage) => {
      Alert.alert(
        remoteMessage.notification.title,
        remoteMessage.notification.body
      );
    });
  };

  React.useEffect(() => {
    NotificationListener();
  }, []);

  React.useEffect(() => {
    const removeNetInfoSubscription = NetInfo.addEventListener((state) => {
      const conn = state.isConnected; //boolean value whether internet connected or not
      console.log("Connection type", state.isConnected); //gives the connection type
      setConnected(conn);
      !conn ? alert("No Internet Connection!") : null; //alert if internet not connected
    });

    return () => removeNetInfoSubscription();
  });

  const [fontsLoaded] = useFonts({
    Inter_500Medium: Fonts.Inter_500Medium,
    Inter_400Regular: Fonts.Inter_400Regular,
    Inter_600SemiBold: Fonts.Inter_600SemiBold,
    Inter_300Light: Fonts.Inter_300Light,
    Poppins_400Regular: Fonts.Poppins_400Regular,
    Poppins_500Medium: Fonts.Poppins_500Medium,
    Poppins_700Bold: Fonts.Poppins_700Bold,
  });

  const appState = React.useRef(AppState.currentState);

  const handleAppStateChange = (nextAppState) => {
    if (
      appState?.current?.match(/inactive|background/) &&
      nextAppState === "active"
    ) {
      // reset any badges once the user re-enters the app
      Notifications.setBadgeCountAsync(0);
    }
    // always update the current app state
    appState.current = nextAppState;
  };

  React.useEffect(() => {
    const appStateSubscription = AppState.addEventListener(
      "change",
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

  if (!connected) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#fff",
        }}
      >
        <Text>There is no internet connections !!!</Text>
      </View>
    );
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
