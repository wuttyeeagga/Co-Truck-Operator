import { I18nManager, Platform, StyleSheet, Text, View } from 'react-native';
import { systemWeights } from 'react-native-typography';
import { Icon, Touchable } from '@draftbit/ui';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import theme from './themes/Draftbit.js';
import LinkingConfiguration from './LinkingConfiguration.js';
import React from 'react';
import * as GlobalVariables from './config/GlobalVariableContext';
import Breakpoints from './utils/Breakpoints';
import useWindowDimensions from './utils/useWindowDimensions';

import AboutUsScreen from './screens/AboutUsScreen';
import AddNewDriverScreen from './screens/AddNewDriverScreen';
import AddNewVehicleScreen from './screens/AddNewVehicleScreen';
import BookingDetailsOnCompletedScreen from './screens/BookingDetailsOnCompletedScreen';
import BookingDetailsOnConfirmedScreen from './screens/BookingDetailsOnConfirmedScreen';
import BookingDetailsOnGoingScreen from './screens/BookingDetailsOnGoingScreen';
import BookingDetailsOnPendingScreen from './screens/BookingDetailsOnPendingScreen';
import BookingSummaryScreen from './screens/BookingSummaryScreen';
import ChangePasswordScreen from './screens/ChangePasswordScreen';
import ChooseLanguageScreen from './screens/ChooseLanguageScreen';
import ChooseLocationZoneScreen from './screens/ChooseLocationZoneScreen';
import CompanyInformationScreen from './screens/CompanyInformationScreen';
import DriverDetailsScreen from './screens/DriverDetailsScreen';
import EditProfileScreen from './screens/EditProfileScreen';
import EditVehicleScreen from './screens/EditVehicleScreen';
import ExportActivityScreen from './screens/ExportActivityScreen';
import FAQsScreen from './screens/FAQsScreen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';
import HomeScreen from './screens/HomeScreen';
import HospitalOnMapScreen from './screens/HospitalOnMapScreen';
import IdentityProofEditScreen from './screens/IdentityProofEditScreen';
import IdentityProofViewScreen from './screens/IdentityProofViewScreen';
import ImportActivityScreen from './screens/ImportActivityScreen';
import ImportBookingScreen from './screens/ImportBookingScreen';
import InvoiceScreen from './screens/InvoiceScreen';
import LoginScreen from './screens/LoginScreen';
import ManageDriverScreen from './screens/ManageDriverScreen';
import ManageVehicleScreen from './screens/ManageVehicleScreen';
import NewTripAcceptedScreen from './screens/NewTripAcceptedScreen';
import NewTripCancelledScreen from './screens/NewTripCancelledScreen';
import NewTripPendingScreen from './screens/NewTripPendingScreen';
import NotificationsScreen from './screens/NotificationsScreen';
import OTPVerificationScreen from './screens/OTPVerificationScreen';
import PaymentScreen from './screens/PaymentScreen';
import PickUpDropDetailsScreen from './screens/PickUpDropDetailsScreen';
import ReasonForCancelScreen from './screens/ReasonForCancelScreen';
import RecipientAddressScreen from './screens/RecipientAddressScreen';
import ReferAFriendScreen from './screens/ReferAFriendScreen';
import RegisterScreen from './screens/RegisterScreen';
import SettingsScreen from './screens/SettingsScreen';
import SignUpIdentityProofScreen from './screens/SignUpIdentityProofScreen';
import TermsInRegisterScreen from './screens/TermsInRegisterScreen';
import Test1Screen from './screens/Test1Screen';
import TestForMapScreen from './screens/TestForMapScreen';
import VehicleDetailsScreen from './screens/VehicleDetailsScreen';
import VehicleProofScreen from './screens/VehicleProofScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  const Constants = GlobalVariables.useValues();

  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={({ navigation }) => ({
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
      })}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={({ navigation }) => ({
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="Ionicons/ios-home-outline"
              size={25}
              color={focused ? theme.colors['Primary'] : color}
            />
          ),
          tabBarLabel: 'Home',
          title: 'Home',
        })}
      />
      <Tab.Screen
        name="ImportActivityScreen"
        component={ImportActivityScreen}
        options={({ navigation }) => ({
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="MaterialCommunityIcons/calendar-clock"
              size={25}
              color={focused ? theme.colors['Primary'] : color}
            />
          ),
          tabBarLabel: 'Import Activity',
          title: 'Import Activity',
        })}
      />
      <Tab.Screen
        name="ExportActivityScreen"
        component={ExportActivityScreen}
        options={({ navigation }) => ({
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="MaterialCommunityIcons/calendar-clock"
              size={25}
              color={focused ? theme.colors['Primary'] : color}
            />
          ),
          tabBarLabel: 'Export Activity',
          title: 'Export Activity',
        })}
      />
      <Tab.Screen
        name="NotificationsScreen"
        component={NotificationsScreen}
        options={({ navigation }) => ({
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="Ionicons/ios-notifications-outline"
              size={25}
              color={focused ? theme.colors['Primary'] : color}
            />
          ),
          tabBarLabel: 'Notifications',
          title: 'Notifications',
        })}
      />
      <Tab.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={({ navigation }) => ({
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="Ionicons/settings-outline"
              size={25}
              color={focused ? theme.colors['Primary'] : color}
            />
          ),
          tabBarLabel: 'Settings',
          title: 'Settings',
        })}
      />
    </Tab.Navigator>
  );
}

function StackNavigator() {
  return (
    <Stack.Navigator
      presentation="transparentModal"
      screenOptions={({ navigation }) => ({ headerShown: false })}
    >
      <Stack.Screen
        name="ForgotPasswordScreen"
        component={ForgotPasswordScreen}
        options={({ navigation }) => ({
          title: 'Forgot Password',
        })}
      />
      <Stack.Screen
        name="ChooseLanguageScreen"
        component={ChooseLanguageScreen}
        options={({ navigation }) => ({
          title: 'Choose Language',
        })}
      />
      <Stack.Screen
        name="AboutUsScreen"
        component={AboutUsScreen}
        options={({ navigation }) => ({
          title: 'About Us',
        })}
      />
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={({ navigation }) => ({
          title: 'Register',
        })}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={({ navigation }) => ({
          title: 'Login',
        })}
      />
    </Stack.Navigator>
  );
}

export default function RootAppNavigator() {
  const setGlobalVariableValue = GlobalVariables.useSetValue();

  return (
    <NavigationContainer linking={LinkingConfiguration}>
      <Stack.Navigator
        initialRouteName="StackNavigator"
        screenOptions={({ navigation }) => ({
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
        })}
      >
        <Stack.Screen
          name="PaymentScreen"
          component={PaymentScreen}
          options={({ navigation }) => ({
            title: 'Payment',
          })}
        />
        <Stack.Screen
          name="BookingDetailsOnPendingScreen"
          component={BookingDetailsOnPendingScreen}
          options={({ navigation }) => ({
            title: 'Booking Details on Pending',
          })}
        />
        <Stack.Screen
          name="BookingDetailsOnGoingScreen"
          component={BookingDetailsOnGoingScreen}
          options={({ navigation }) => ({
            title: 'Booking Details on Going',
          })}
        />
        <Stack.Screen
          name="CompanyInformationScreen"
          component={CompanyInformationScreen}
          options={({ navigation }) => ({
            title: 'Company Information',
          })}
        />
        <Stack.Screen
          name="ChooseLocationZoneScreen"
          component={ChooseLocationZoneScreen}
          options={({ navigation }) => ({
            title: 'Choose Location Zone',
          })}
        />
        <Stack.Screen
          name="BookingSummaryScreen"
          component={BookingSummaryScreen}
          options={({ navigation }) => ({
            title: 'Booking Summary',
          })}
        />
        <Stack.Screen
          name="BookingDetailsOnConfirmedScreen"
          component={BookingDetailsOnConfirmedScreen}
          options={({ navigation }) => ({
            title: 'Booking Details on  Confirmed',
          })}
        />
        <Stack.Screen
          name="BookingDetailsOnCompletedScreen"
          component={BookingDetailsOnCompletedScreen}
          options={({ navigation }) => ({
            title: 'Booking Details on Completed',
          })}
        />
        <Stack.Screen
          name="SignUpIdentityProofScreen"
          component={SignUpIdentityProofScreen}
          options={({ navigation }) => ({
            title: 'Sign Up Identity Proof',
          })}
        />
        <Stack.Screen
          name="TestForMapScreen"
          component={TestForMapScreen}
          options={({ navigation }) => ({
            title: 'Test For Map',
          })}
        />
        <Stack.Screen
          name="Test1Screen"
          component={Test1Screen}
          options={({ navigation }) => ({
            title: 'Test1',
          })}
        />
        <Stack.Screen
          name="ReferAFriendScreen"
          component={ReferAFriendScreen}
          options={({ navigation }) => ({
            title: 'Refer a friend',
          })}
        />
        <Stack.Screen
          name="RecipientAddressScreen"
          component={RecipientAddressScreen}
          options={({ navigation }) => ({
            title: 'Recipient Address',
          })}
        />
        <Stack.Screen
          name="ReasonForCancelScreen"
          component={ReasonForCancelScreen}
          options={({ navigation }) => ({
            title: 'Reason for cancel',
          })}
        />
        <Stack.Screen
          name="PickUpDropDetailsScreen"
          component={PickUpDropDetailsScreen}
          options={({ navigation }) => ({
            title: 'PickUpDropDetails',
          })}
        />
        <Stack.Screen
          name="OTPVerificationScreen"
          component={OTPVerificationScreen}
          options={({ navigation }) => ({
            title: 'OTP Verification',
          })}
        />
        <Stack.Screen
          name="InvoiceScreen"
          component={InvoiceScreen}
          options={({ navigation }) => ({
            title: 'Invoice',
          })}
        />
        <Stack.Screen
          name="ImportBookingScreen"
          component={ImportBookingScreen}
          options={({ navigation }) => ({
            title: 'Import Booking',
          })}
        />
        <Stack.Screen
          name="HospitalOnMapScreen"
          component={HospitalOnMapScreen}
          options={({ navigation }) => ({
            title: 'Hospital on Map',
          })}
        />
        <Stack.Screen
          name="VehicleProofScreen"
          component={VehicleProofScreen}
          options={({ navigation }) => ({
            title: 'Vehicle Proof',
          })}
        />
        <Stack.Screen
          name="TermsInRegisterScreen"
          component={TermsInRegisterScreen}
          options={({ navigation }) => ({
            title: 'Terms in Register',
          })}
        />
        <Stack.Screen
          name="EditProfileScreen"
          component={EditProfileScreen}
          options={({ navigation }) => ({
            title: 'Edit Profile',
          })}
        />
        <Stack.Screen
          name="IdentityProofViewScreen"
          component={IdentityProofViewScreen}
          options={({ navigation }) => ({
            title: 'Identity Proof View',
          })}
        />
        <Stack.Screen
          name="IdentityProofEditScreen"
          component={IdentityProofEditScreen}
          options={({ navigation }) => ({
            title: 'Identity Proof Edit',
          })}
        />
        <Stack.Screen
          name="VehicleDetailsScreen"
          component={VehicleDetailsScreen}
          options={({ navigation }) => ({
            title: 'Vehicle Details',
          })}
        />
        <Stack.Screen
          name="ManageVehicleScreen"
          component={ManageVehicleScreen}
          options={({ navigation }) => ({
            title: 'Manage Vehicle',
          })}
        />
        <Stack.Screen
          name="AddNewVehicleScreen"
          component={AddNewVehicleScreen}
          options={({ navigation }) => ({
            title: 'Add New Vehicle',
          })}
        />
        <Stack.Screen
          name="ManageDriverScreen"
          component={ManageDriverScreen}
          options={({ navigation }) => ({
            title: 'Manage Driver',
          })}
        />
        <Stack.Screen
          name="AddNewDriverScreen"
          component={AddNewDriverScreen}
          options={({ navigation }) => ({
            title: 'Add New Driver',
          })}
        />
        <Stack.Screen
          name="DriverDetailsScreen"
          component={DriverDetailsScreen}
          options={({ navigation }) => ({
            title: 'Driver Details',
          })}
        />
        <Stack.Screen
          name="ChangePasswordScreen"
          component={ChangePasswordScreen}
          options={({ navigation }) => ({
            title: 'Change Password',
          })}
        />
        <Stack.Screen
          name="NewTripAcceptedScreen"
          component={NewTripAcceptedScreen}
          options={({ navigation }) => ({
            title: 'New Trip Accepted',
          })}
        />
        <Stack.Screen
          name="NewTripCancelledScreen"
          component={NewTripCancelledScreen}
          options={({ navigation }) => ({
            title: 'New Trip Cancelled',
          })}
        />
        <Stack.Screen
          name="NewTripPendingScreen"
          component={NewTripPendingScreen}
          options={({ navigation }) => ({
            title: 'New Trip Pending',
          })}
        />
        <Stack.Screen
          name="EditVehicleScreen"
          component={EditVehicleScreen}
          options={({ navigation }) => ({
            title: 'Edit Vehicle',
          })}
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
