import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import {
  Button,
  IconButton,
  ScreenContainer,
  TextInput,
  withTheme,
} from '@draftbit/ui';
import { Text, View } from 'react-native';

const ChangePasswordScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [newPassword, setNewPassword] = React.useState('');
  const [oldPassword, setOldPassword] = React.useState('');

  return (
    <ScreenContainer
      hasBottomSafeArea={true}
      hasSafeArea={true}
      scrollable={false}
    >
      {/* Header 2 */}
      <View
        style={StyleSheet.applyWidth(
          { alignItems: 'center', flexDirection: 'row' },
          dimensions.width
        )}
      >
        {/* Back Button */}
        <IconButton
          color={theme.colors['CoTruckBlack']}
          icon={'MaterialIcons/arrow-back-ios'}
          onPress={() => {
            try {
              navigation.goBack();
            } catch (err) {
              console.error(err);
            }
          }}
          size={32}
          style={StyleSheet.applyWidth({ marginLeft: 30 }, dimensions.width)}
        />
        {/* Title */}
        <Text
          accessible={true}
          allowFontScaling={true}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text 2'], {
              color: theme.colors['CoTruckBlack'],
              fontFamily: 'System',
              fontSize: 20,
              fontWeight: '400',
              marginLeft: 10,
            }),
            dimensions.width
          )}
        >
          {'Change Password'}
        </Text>
        <View />
      </View>
      {/* Old Password View */}
      <View>
        {/* Old Password Input */}
        <>
          {!Constants['oldPwdShown'] ? null : (
            <TextInput
              allowFontScaling={true}
              autoCapitalize={'none'}
              changeTextDelay={500}
              onChangeText={newOldPasswordInputValue => {
                try {
                  setOldPassword(newOldPasswordInputValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              placeholder={'password'}
              placeholderTextColor={theme.colors['TextPlaceholder']}
              secureTextEntry={true}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextInputStyles(theme)['Text Input 3'],
                  {
                    borderColor: theme.colors['Light'],
                    borderRadius: 12,
                    height: 48,
                    margin: 20,
                    paddingLeft: 12,
                  }
                ),
                dimensions.width
              )}
              value={oldPassword}
            />
          )}
        </>
        {/* Old Password Input */}
        <>
          {Constants['oldPwdShown'] ? null : (
            <TextInput
              allowFontScaling={true}
              autoCapitalize={'none'}
              changeTextDelay={500}
              onChangeText={newOldPasswordInputValue => {
                try {
                  setOldPassword(newOldPasswordInputValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              placeholder={'shown password'}
              placeholderTextColor={theme.colors['TextPlaceholder']}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextInputStyles(theme)['Text Input 3'],
                  {
                    borderColor: theme.colors['Light'],
                    borderRadius: 12,
                    height: 48,
                    margin: 20,
                    paddingLeft: 12,
                  }
                ),
                dimensions.width
              )}
              value={oldPassword}
            />
          )}
        </>
        <>
          {!Constants['oldPwdShown'] ? null : (
            <IconButton
              icon={'Ionicons/eye-off-sharp'}
              onPress={() => {
                try {
                  setGlobalVariableValue({
                    key: 'oldPwdShown',
                    value: !Constants['oldPwdShown'],
                  });
                } catch (err) {
                  console.error(err);
                }
              }}
              size={32}
              style={StyleSheet.applyWidth(
                { bottom: 30, position: 'absolute', right: 30 },
                dimensions.width
              )}
            />
          )}
        </>
        {/* Icon Button 2 */}
        <>
          {Constants['oldPwdShown'] ? null : (
            <IconButton
              icon={'Ionicons/eye-outline'}
              onPress={() => {
                try {
                  setGlobalVariableValue({
                    key: 'oldPwdShown',
                    value: !Constants['oldPwdShown'],
                  });
                } catch (err) {
                  console.error(err);
                }
              }}
              size={32}
              style={StyleSheet.applyWidth(
                { bottom: 30, position: 'absolute', right: 30 },
                dimensions.width
              )}
            />
          )}
        </>
      </View>
      {/* New Password View */}
      <View>
        {/* New Password Input */}
        <>
          {!Constants['newPwdShown'] ? null : (
            <TextInput
              allowFontScaling={true}
              autoCapitalize={'none'}
              changeTextDelay={500}
              onChangeText={newNewPasswordInputValue => {
                try {
                  setNewPassword(newNewPasswordInputValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              placeholder={'New Password'}
              placeholderTextColor={theme.colors['TextPlaceholder']}
              secureTextEntry={true}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextInputStyles(theme)['Text Input 3'],
                  {
                    borderColor: theme.colors['Light'],
                    borderRadius: 12,
                    height: 48,
                    margin: 20,
                    paddingLeft: 12,
                  }
                ),
                dimensions.width
              )}
              value={newPassword}
            />
          )}
        </>
        {/* New Password Input */}
        <>
          {Constants['newPwdShown'] ? null : (
            <TextInput
              allowFontScaling={true}
              autoCapitalize={'none'}
              changeTextDelay={500}
              onChangeText={newNewPasswordInputValue => {
                try {
                  setNewPassword(newNewPasswordInputValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              placeholder={'New Password'}
              placeholderTextColor={theme.colors['TextPlaceholder']}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextInputStyles(theme)['Text Input 3'],
                  {
                    borderColor: theme.colors['Light'],
                    borderRadius: 12,
                    height: 48,
                    margin: 20,
                    paddingLeft: 12,
                  }
                ),
                dimensions.width
              )}
              value={newPassword}
            />
          )}
        </>
        <>
          {!Constants['newPwdShown'] ? null : (
            <IconButton
              icon={'Ionicons/eye-off-sharp'}
              onPress={() => {
                try {
                  setGlobalVariableValue({
                    key: 'newPwdShown',
                    value: !Constants['newPwdShown'],
                  });
                } catch (err) {
                  console.error(err);
                }
              }}
              size={32}
              style={StyleSheet.applyWidth(
                { bottom: 30, position: 'absolute', right: 30 },
                dimensions.width
              )}
            />
          )}
        </>
        {/* Icon Button 2 */}
        <>
          {Constants['newPwdShown'] ? null : (
            <IconButton
              icon={'Ionicons/eye-outline'}
              onPress={() => {
                try {
                  setGlobalVariableValue({
                    key: 'newPwdShown',
                    value: !Constants['newPwdShown'],
                  });
                } catch (err) {
                  console.error(err);
                }
              }}
              size={32}
              style={StyleSheet.applyWidth(
                { bottom: 30, position: 'absolute', right: 30 },
                dimensions.width
              )}
            />
          )}
        </>
      </View>
      {/* Confirm Password View */}
      <View>
        {/* Confirm Password Input */}
        <>
          {!Constants['confirmPwdShown'] ? null : (
            <TextInput
              allowFontScaling={true}
              autoCapitalize={'none'}
              changeTextDelay={500}
              onChangeText={newConfirmPasswordInputValue => {
                try {
                  setConfirmPassword(newConfirmPasswordInputValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              placeholder={'Confirm Password'}
              placeholderTextColor={theme.colors['TextPlaceholder']}
              secureTextEntry={true}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextInputStyles(theme)['Text Input 3'],
                  {
                    borderColor: theme.colors['Light'],
                    borderRadius: 12,
                    height: 48,
                    margin: 20,
                    paddingLeft: 12,
                  }
                ),
                dimensions.width
              )}
              value={confirmPassword}
            />
          )}
        </>
        {/* Confirm Password Input */}
        <>
          {Constants['confirmPwdShown'] ? null : (
            <TextInput
              allowFontScaling={true}
              autoCapitalize={'none'}
              changeTextDelay={500}
              onChangeText={newConfirmPasswordInputValue => {
                try {
                  setConfirmPassword(newConfirmPasswordInputValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              placeholder={'Confirm Password'}
              placeholderTextColor={theme.colors['TextPlaceholder']}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextInputStyles(theme)['Text Input 3'],
                  {
                    borderColor: theme.colors['Light'],
                    borderRadius: 12,
                    height: 48,
                    margin: 20,
                    paddingLeft: 12,
                  }
                ),
                dimensions.width
              )}
              value={confirmPassword}
            />
          )}
        </>
        <>
          {!Constants['confirmPwdShown'] ? null : (
            <IconButton
              icon={'Ionicons/eye-off-sharp'}
              onPress={() => {
                try {
                  setGlobalVariableValue({
                    key: 'confirmPwdShown',
                    value: !Constants['confirmPwdShown'],
                  });
                } catch (err) {
                  console.error(err);
                }
              }}
              size={32}
              style={StyleSheet.applyWidth(
                { bottom: 30, position: 'absolute', right: 30 },
                dimensions.width
              )}
            />
          )}
        </>
        {/* Icon Button 2 */}
        <>
          {Constants['confirmPwdShown'] ? null : (
            <IconButton
              icon={'Ionicons/eye-outline'}
              onPress={() => {
                try {
                  setGlobalVariableValue({
                    key: 'confirmPwdShown',
                    value: !Constants['confirmPwdShown'],
                  });
                } catch (err) {
                  console.error(err);
                }
              }}
              size={32}
              style={StyleSheet.applyWidth(
                { bottom: 30, position: 'absolute', right: 30 },
                dimensions.width
              )}
            />
          )}
        </>
      </View>
      {/* Reset */}
      <Button
        onPress={() => {
          try {
            navigation.navigate('StackNavigator', { screen: 'LoginScreen' });
          } catch (err) {
            console.error(err);
          }
        }}
        style={StyleSheet.applyWidth(
          StyleSheet.compose(GlobalStyles.ButtonStyles(theme)['Button'], {
            margin: 30,
          }),
          dimensions.width
        )}
        title={'Reset'}
      />
    </ScreenContainer>
  );
};

export default withTheme(ChangePasswordScreen);
