import { I18nManager, Platform, StyleSheet, Text, View } from 'react-native';
import { systemWeights } from 'react-native-typography';
import { Icon, Touchable } from '@draftbit/ui';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
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
import ChangeForgotPasswordScreen from './screens/ChangeForgotPasswordScreen';
import ChangePasswordScreen from './screens/ChangePasswordScreen';
import ChooseLanguageScreen from './screens/ChooseLanguageScreen';
import CompanyInformationScreen from './screens/CompanyInformationScreen';
import DriverDetailsScreen from './screens/DriverDetailsScreen';
import EditDriverScreen from './screens/EditDriverScreen';
import EditProfileScreen from './screens/EditProfileScreen';
import EditVehicleScreen from './screens/EditVehicleScreen';
import ExportActivityScreen from './screens/ExportActivityScreen';
import ExportBookingDetailsOnCompletedScreen from './screens/ExportBookingDetailsOnCompletedScreen';
import ExportBookingDetailsOnConfirmedScreen from './screens/ExportBookingDetailsOnConfirmedScreen';
import ExportBookingDetailsOnGoingScreen from './screens/ExportBookingDetailsOnGoingScreen';
import ExportBookingDetailsOnPendingScreen from './screens/ExportBookingDetailsOnPendingScreen';
import ExportLiveTrackScreen from './screens/ExportLiveTrackScreen';
import ExportNewTripAcceptedScreen from './screens/ExportNewTripAcceptedScreen';
import ExportNewTripPendingScreen from './screens/ExportNewTripPendingScreen';
import ExportReasonForCancelScreen from './screens/ExportReasonForCancelScreen';
import FAQsScreen from './screens/FAQsScreen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';
import HomeScreen from './screens/HomeScreen';
import IdentityProofEditScreen from './screens/IdentityProofEditScreen';
import IdentityProofViewScreen from './screens/IdentityProofViewScreen';
import ImportActivityScreen from './screens/ImportActivityScreen';
import ImportBookingDetailsOnCompletedScreen from './screens/ImportBookingDetailsOnCompletedScreen';
import ImportBookingDetailsOnConfirmedScreen from './screens/ImportBookingDetailsOnConfirmedScreen';
import ImportBookingDetailsOnGoingScreen from './screens/ImportBookingDetailsOnGoingScreen';
import ImportBookingDetailsOnPendingScreen from './screens/ImportBookingDetailsOnPendingScreen';
import ImportLiveTrackScreen from './screens/ImportLiveTrackScreen';
import ImportNewTripAcceptedScreen from './screens/ImportNewTripAcceptedScreen';
import ImportNewTripPendingScreen from './screens/ImportNewTripPendingScreen';
import ImportReasonForCancelScreen from './screens/ImportReasonForCancelScreen';
import InvoiceGenerateIndexScreen from './screens/InvoiceGenerateIndexScreen';
import InvoiceScreen from './screens/InvoiceScreen';
import LoginScreen from './screens/LoginScreen';
import ManageDriverScreen from './screens/ManageDriverScreen';
import ManageVehicleScreen from './screens/ManageVehicleScreen';
import NewTripCancelledScreen from './screens/NewTripCancelledScreen';
import NotificationsScreen from './screens/NotificationsScreen';
import OTPVerificationScreen from './screens/OTPVerificationScreen';
import OldExportConfirmedDetailsScreen from './screens/OldExportConfirmedDetailsScreen';
import PaidScreen from './screens/PaidScreen';
import PaymentScreen from './screens/PaymentScreen';
import PickUpDropDetailsScreen from './screens/PickUpDropDetailsScreen';
import ReferAFriendScreen from './screens/ReferAFriendScreen';
import RegisterScreen from './screens/RegisterScreen';
import SettingsScreen from './screens/SettingsScreen';
import SignUpIdentityProofScreen from './screens/SignUpIdentityProofScreen';
import SystemChargesScreen from './screens/SystemChargesScreen';
import SystemInvoicesViewScreen from './screens/SystemInvoicesViewScreen';
import TermsInRegisterScreen from './screens/TermsInRegisterScreen';
import VehicleDetailsScreen from './screens/VehicleDetailsScreen';
import VehicleProofScreen from './screens/VehicleProofScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function AuthNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="LoginScreen"
      presentation="transparentModal"
      screenOptions={({ navigation }) => ({ headerShown: false })}
    >
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={({ navigation }) => ({
          title: 'Login',
        })}
      />
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={({ navigation }) => ({
          title: 'Register',
        })}
      />
    </Stack.Navigator>
  );
}

function BottomTabNavigator() {
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
          tabBarLabel: 'Import',
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
          tabBarLabel: 'Export',
          title: 'Export Activity',
        })}
      />
      <Tab.Screen
        name="PaidScreen"
        component={PaidScreen}
        options={({ navigation }) => ({
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="Foundation/dollar-bill"
              size={25}
              color={focused ? theme.colors['Primary'] : color}
            />
          ),
          tabBarLabel: 'Paid',
          title: 'Paid',
        })}
      />
      <Tab.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={({ navigation }) => ({
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="Ionicons/ios-settings-outline"
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

export default function RootAppNavigator() {
  const Constants = GlobalVariables.useValues();

  return (
    <NavigationContainer
      theme={{
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          background: '#FBFCFD',
        },
      }}
      linking={LinkingConfiguration}
    >
      <Stack.Navigator
        initialRouteName="AuthNavigator"
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
          name="ImportLiveTrackScreen"
          component={ImportLiveTrackScreen}
          options={({ navigation }) => ({
            title: 'Import Live Track',
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
          name="ImportBookingDetailsOnGoingScreen"
          component={ImportBookingDetailsOnGoingScreen}
          options={({ navigation }) => ({
            title: 'Import Booking Details on Going',
          })}
        />
        <Stack.Screen
          name="ImportBookingDetailsOnConfirmedScreen"
          component={ImportBookingDetailsOnConfirmedScreen}
          options={({ navigation }) => ({
            title: 'Import Booking Details on  Confirmed',
          })}
        />
        <Stack.Screen
          name="ImportBookingDetailsOnCompletedScreen"
          component={ImportBookingDetailsOnCompletedScreen}
          options={({ navigation }) => ({
            title: 'Import Booking Details on Completed',
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
          name="PaymentScreen"
          component={PaymentScreen}
          options={({ navigation }) => ({
            title: 'Payment',
          })}
        />
        <Stack.Screen
          name="ForgotPasswordScreen"
          component={ForgotPasswordScreen}
          options={({ navigation }) => ({
            title: 'Forgot Password',
          })}
        />
        <Stack.Screen
          name="ImportReasonForCancelScreen"
          component={ImportReasonForCancelScreen}
          options={({ navigation }) => ({
            title: 'Import Reason for cancel',
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
          name="FAQsScreen"
          component={FAQsScreen}
          options={({ navigation }) => ({
            title: 'FAQs',
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
          name="PickUpDropDetailsScreen"
          component={PickUpDropDetailsScreen}
          options={({ navigation }) => ({
            title: 'PickUpDropDetails',
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
          name="NotificationsScreen"
          component={NotificationsScreen}
          options={({ navigation }) => ({
            title: 'Notifications',
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
          name="OTPVerificationScreen"
          component={OTPVerificationScreen}
          options={({ navigation }) => ({
            title: 'OTP Verification',
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
          name="ImportNewTripAcceptedScreen"
          component={ImportNewTripAcceptedScreen}
          options={({ navigation }) => ({
            title: 'Import New Trip Accepted',
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
          name="ImportNewTripPendingScreen"
          component={ImportNewTripPendingScreen}
          options={({ navigation }) => ({
            title: 'Import New Trip Pending',
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
          name="EditDriverScreen"
          component={EditDriverScreen}
          options={({ navigation }) => ({
            title: 'Edit Driver',
          })}
        />
        <Stack.Screen
          name="OldExportConfirmedDetailsScreen"
          component={OldExportConfirmedDetailsScreen}
          options={({ navigation }) => ({
            title: 'Old Export Confirmed Details',
          })}
        />
        <Stack.Screen
          name="ExportBookingDetailsOnGoingScreen"
          component={ExportBookingDetailsOnGoingScreen}
          options={({ navigation }) => ({
            title: 'Export Booking Details on Going',
          })}
        />
        <Stack.Screen
          name="ExportBookingDetailsOnPendingScreen"
          component={ExportBookingDetailsOnPendingScreen}
          options={({ navigation }) => ({
            title: 'Export Booking Details on Pending',
          })}
        />
        <Stack.Screen
          name="ExportNewTripAcceptedScreen"
          component={ExportNewTripAcceptedScreen}
          options={({ navigation }) => ({
            title: 'Export New Trip Accepted ',
          })}
        />
        <Stack.Screen
          name="ExportNewTripPendingScreen"
          component={ExportNewTripPendingScreen}
          options={({ navigation }) => ({
            title: 'Export New Trip Pending ',
          })}
        />
        <Stack.Screen
          name="ExportReasonForCancelScreen"
          component={ExportReasonForCancelScreen}
          options={({ navigation }) => ({
            title: 'Export Reason for cancel',
          })}
        />
        <Stack.Screen
          name="ExportBookingDetailsOnCompletedScreen"
          component={ExportBookingDetailsOnCompletedScreen}
          options={({ navigation }) => ({
            title: 'Export Booking Details on Completed',
          })}
        />
        <Stack.Screen
          name="ImportBookingDetailsOnPendingScreen"
          component={ImportBookingDetailsOnPendingScreen}
          options={({ navigation }) => ({
            title: 'Import Booking Details on Pending',
          })}
        />
        <Stack.Screen
          name="SystemInvoicesViewScreen"
          component={SystemInvoicesViewScreen}
          options={({ navigation }) => ({
            title: 'System Invoices View',
          })}
        />
        <Stack.Screen
          name="ChangeForgotPasswordScreen"
          component={ChangeForgotPasswordScreen}
          options={({ navigation }) => ({
            title: 'Change Forgot Password',
          })}
        />
        <Stack.Screen
          name="SystemChargesScreen"
          component={SystemChargesScreen}
          options={({ navigation }) => ({
            title: 'System Charges',
          })}
        />
        <Stack.Screen
          name="InvoiceGenerateIndexScreen"
          component={InvoiceGenerateIndexScreen}
          options={({ navigation }) => ({
            title: 'Invoice Generate Index',
          })}
        />
        <Stack.Screen
          name="ExportBookingDetailsOnConfirmedScreen"
          component={ExportBookingDetailsOnConfirmedScreen}
          options={({ navigation }) => ({
            title: 'Export Booking Details on  Confirmed',
          })}
        />
        <Stack.Screen
          name="ExportLiveTrackScreen"
          component={ExportLiveTrackScreen}
          options={({ navigation }) => ({
            title: 'Export Live Track ',
          })}
        />
        <Stack.Screen name="AuthNavigator" component={AuthNavigator} />
        <Stack.Screen
          name="BottomTabNavigator"
          component={BottomTabNavigator}
        />
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
