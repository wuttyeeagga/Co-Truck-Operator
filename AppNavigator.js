import * as React from 'react';
import { I18nManager, Platform, StyleSheet, Text, View } from 'react-native';
import { systemWeights } from 'react-native-typography';
import { Icon, Touchable } from '@draftbit/ui';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import theme from './themes/Draftbit.js';
import LinkingConfiguration from './LinkingConfiguration.js';

import AboutUsScreen from './screens/AboutUsScreen';
import ActivityScreen from './screens/ActivityScreen';
import BookingDetailsOnCompletedScreen from './screens/BookingDetailsOnCompletedScreen';
import BookingDetailsOnConfirmedScreen from './screens/BookingDetailsOnConfirmedScreen';
import BookingDetailsOnGoingScreen from './screens/BookingDetailsOnGoingScreen';
import BookingDetailsOnPendingScreen from './screens/BookingDetailsOnPendingScreen';
import BookingSummaryScreen from './screens/BookingSummaryScreen';
import ChooseLanguageScreen from './screens/ChooseLanguageScreen';
import ChooseLocationZoneScreen from './screens/ChooseLocationZoneScreen';
import FAQsScreen from './screens/FAQsScreen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';
import HomeScreen from './screens/HomeScreen';
import HospitalOnMapScreen from './screens/HospitalOnMapScreen';
import IdentityProofScreen from './screens/IdentityProofScreen';
import ImportBookingScreen from './screens/ImportBookingScreen';
import InvoiceScreen from './screens/InvoiceScreen';
import LoginScreen from './screens/LoginScreen';
import NotificationsScreen from './screens/NotificationsScreen';
import PaymentScreen from './screens/PaymentScreen';
import PickUpDropDetailsScreen from './screens/PickUpDropDetailsScreen';
import ProfileScreen from './screens/ProfileScreen';
import ReasonForCancelScreen from './screens/ReasonForCancelScreen';
import RecipientAddressScreen from './screens/RecipientAddressScreen';
import ReferAFriendScreen from './screens/ReferAFriendScreen';
import RegisterScreen from './screens/RegisterScreen';
import SettingsScreen from './screens/SettingsScreen';
import Test1Screen from './screens/Test1Screen';
import TestForMapScreen from './screens/TestForMapScreen';
import VerificationScreen from './screens/VerificationScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerRight: ({ tintColor }) => (
          <View style={[styles.headerContainer, styles.headerContainerRight]}>
            <Icon
              name="MaterialCommunityIcons/bell-ring-outline"
              size={Platform.OS === 'ios' ? 21 : 24}
              color={tintColor}
              style={[styles.headerIcon, styles.headerIconRight]}
            />
          </View>
        ),
        headerShown: false,
        tabBarActiveTintColor: theme.colors['Primary'],
        tabBarLabelPosition: 'below-icon',
        tabBarStyle: { borderTopColor: 'transparent' },
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="Entypo/home"
              size={25}
              color={focused ? theme.colors['Primary'] : color}
            />
          ),
          tabBarLabel: 'Home',
          title: 'Home',
        }}
      />
      <Tab.Screen
        name="ActivityScreen"
        component={ActivityScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="MaterialCommunityIcons/calendar-clock"
              size={25}
              color={focused ? theme.colors['Primary'] : color}
            />
          ),
          tabBarLabel: 'Activity',
          title: 'Activity',
        }}
      />
      <Tab.Screen
        name="NotificationsScreen"
        component={NotificationsScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="Ionicons/notifications-outline"
              size={25}
              color={focused ? theme.colors['Primary'] : color}
            />
          ),
          tabBarLabel: 'Notifications',
          title: 'Notifications',
        }}
      />
      <Tab.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="Feather/settings"
              size={25}
              color={focused ? theme.colors['Primary'] : color}
            />
          ),
          tabBarLabel: 'Settings',
          title: 'Settings',
        }}
      />
    </Tab.Navigator>
  );
}

function StackNavigator() {
  return (
    <Stack.Navigator
      presentation="transparentModal"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{
          title: 'Register',
        }}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{
          title: 'Login',
        }}
      />
      <Stack.Screen
        name="ChooseLanguageScreen"
        component={ChooseLanguageScreen}
        options={{
          title: 'Choose Language',
        }}
      />
      <Stack.Screen
        name="AboutUsScreen"
        component={AboutUsScreen}
        options={{
          title: 'About Us',
        }}
      />
      <Stack.Screen
        name="ForgotPasswordScreen"
        component={ForgotPasswordScreen}
        options={{
          title: 'Forgot Password',
        }}
      />
    </Stack.Navigator>
  );
}

export default function RootAppNavigator() {
  return (
    <NavigationContainer linking={LinkingConfiguration}>
      <Stack.Navigator
        initialRouteName="StackNavigator"
        screenOptions={{
          headerRight: ({ tintColor }) => (
            <View style={[styles.headerContainer, styles.headerContainerRight]}>
              <Icon
                name="Entypo/bell"
                size={Platform.OS === 'ios' ? 21 : 24}
                color={tintColor}
                style={[styles.headerIcon, styles.headerIconRight]}
              />
            </View>
          ),
          headerShown: false,
          headerTitle: 'Co Truck',
        }}
      >
        <Stack.Screen
          name="IdentityProofScreen"
          component={IdentityProofScreen}
          options={{
            title: 'Identity Proof',
          }}
        />
        <Stack.Screen
          name="VerificationScreen"
          component={VerificationScreen}
          options={{
            title: 'Verification',
          }}
        />
        <Stack.Screen
          name="ReasonForCancelScreen"
          component={ReasonForCancelScreen}
          options={{
            title: 'Reason for cancel',
          }}
        />
        <Stack.Screen
          name="PaymentScreen"
          component={PaymentScreen}
          options={{
            title: 'Payment',
          }}
        />
        <Stack.Screen
          name="HospitalOnMapScreen"
          component={HospitalOnMapScreen}
          options={{
            title: 'Hospital on Map',
          }}
        />
        <Stack.Screen
          name="RecipientAddressScreen"
          component={RecipientAddressScreen}
          options={{
            title: 'Recipient Address',
          }}
        />
        <Stack.Screen
          name="BookingDetailsOnConfirmedScreen"
          component={BookingDetailsOnConfirmedScreen}
          options={{
            title: 'Booking Details on  Confirmed',
          }}
        />
        <Stack.Screen
          name="ReferAFriendScreen"
          component={ReferAFriendScreen}
          options={{
            title: 'Refer a friend',
          }}
        />
        <Stack.Screen
          name="InvoiceScreen"
          component={InvoiceScreen}
          options={{
            title: 'Invoice',
          }}
        />
        <Stack.Screen
          name="Test1Screen"
          component={Test1Screen}
          options={{
            title: 'Test1',
          }}
        />
        <Stack.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{
            title: 'Profile',
          }}
        />
        <Stack.Screen
          name="BookingDetailsOnGoingScreen"
          component={BookingDetailsOnGoingScreen}
          options={{
            title: 'Booking Details on Going',
          }}
        />
        <Stack.Screen
          name="PickUpDropDetailsScreen"
          component={PickUpDropDetailsScreen}
          options={{
            title: 'PickUpDropDetails',
          }}
        />
        <Stack.Screen
          name="BookingSummaryScreen"
          component={BookingSummaryScreen}
          options={{
            title: 'Booking Summary',
          }}
        />
        <Stack.Screen
          name="BookingDetailsOnCompletedScreen"
          component={BookingDetailsOnCompletedScreen}
          options={{
            title: 'Booking Details on Completed',
          }}
        />
        <Stack.Screen
          name="TestForMapScreen"
          component={TestForMapScreen}
          options={{
            title: 'Test For Map',
          }}
        />
        <Stack.Screen
          name="BookingDetailsOnPendingScreen"
          component={BookingDetailsOnPendingScreen}
          options={{
            title: 'Booking Details on Pending',
          }}
        />
        <Stack.Screen
          name="ImportBookingScreen"
          component={ImportBookingScreen}
          options={{
            title: 'Import Booking',
          }}
        />
        <Stack.Screen
          name="ChooseLocationZoneScreen"
          component={ChooseLocationZoneScreen}
          options={{
            title: 'Choose Location Zone',
          }}
        />
        <Stack.Screen
          name="BottomTabNavigator"
          component={BottomTabNavigator}
        />
        <Stack.Screen name="StackNavigator" component={StackNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    ...Platform.select({
      ios: null,
      default: {
        marginVertical: 3,
        marginHorizontal: 11,
      },
    }),
  },
  headerContainerRight: Platform.select({ ios: { marginRight: 8 } }),
  headerIcon: Platform.select({
    ios: {
      marginVertical: 12,
      resizeMode: 'contain',
      transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
    },
    default: {
      margin: 3,
      resizeMode: 'contain',
      transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
    },
  }),
  headerIconRight: Platform.select({ ios: { marginLeft: 6 } }),
});
