import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as CotruckApi from '../apis/CotruckApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import showAlertUtil from '../utils/showAlert';
import {
  Button,
  CheckboxRow,
  ScreenContainer,
  TextInput,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Image, Text, View, useWindowDimensions } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const LoginScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();
  const [checkboxRowValue, setCheckboxRowValue] = React.useState('');
  const [condi, setCondi] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [msg, setMsg] = React.useState('Message');
  const [password, setPassword] = React.useState('');
  const [successMsg, setSuccessMsg] = React.useState('Success');
  const [userEmail, setUserEmail] = React.useState('');
  const [userPassword, setUserPassword] = React.useState('');
  const cotruckLoginPOST = CotruckApi.useLoginPOST();

  return (
    <ScreenContainer
      hasBottomSafeArea={true}
      hasSafeArea={true}
      hasTopSafeArea={false}
      scrollable={false}
      style={StyleSheet.applyWidth(
        { backgroundColor: theme.colors['Surface'], flex: 1 },
        dimensions.width
      )}
    >
      <KeyboardAwareScrollView
        enableAutomaticScroll={true}
        keyboardShouldPersistTaps={'never'}
        showsVerticalScrollIndicator={true}
      >
        {/* LogoContainer */}
        <View
          style={StyleSheet.applyWidth(
            { alignItems: 'center', justifyContent: 'center', margin: 20 },
            dimensions.width
          )}
        >
          <Image
            resizeMode={'cover'}
            source={Images.Icon}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.ImageStyles(theme)['Image'], {
                height: 150,
                marginBottom: 10,
                marginTop: 10,
                width: 150,
              }),
              dimensions.width
            )}
          />
        </View>
        {/* Text Container */}
        <View
          style={StyleSheet.applyWidth(
            { marginLeft: 20, marginRight: 20 },
            dimensions.width
          )}
        >
          <Text
            accessible={true}
            allowFontScaling={true}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                color: theme.colors['Primary'],
                fontSize: 24,
                marginBottom: 10,
                marginTop: 10,
              }),
              dimensions.width
            )}
          >
            {'Login'}
          </Text>
          {/* Text 2 */}
          <Text
            accessible={true}
            allowFontScaling={true}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                color: theme.colors['Medium'],
                fontSize: 16,
                marginBottom: 10,
                marginTop: 10,
              }),
              dimensions.width
            )}
          >
            {'Please sign in to continue\n'}
          </Text>
        </View>
        {/* Input Container */}
        <View
          style={StyleSheet.applyWidth(
            { marginLeft: 10, marginRight: 10 },
            dimensions.width
          )}
        >
          {/* EmailInputBox */}
          <TextInput
            allowFontScaling={true}
            autoCapitalize={'none'}
            autoCorrect={false}
            blurOnSubmit={true}
            changeTextDelay={500}
            enablesReturnKeyAutomatically={true}
            keyboardType={'default'}
            onChangeText={newEmailInputBoxValue => {
              try {
                setUserEmail(newEmailInputBoxValue);
              } catch (err) {
                console.error(err);
              }
            }}
            placeholder={'Email'}
            placeholderTextColor={theme.colors['Light']}
            returnKeyType={'next'}
            secureTextEntry={false}
            spellcheck={true}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.TextInputStyles(theme)['Text Input'],
                {
                  borderColor: theme.colors['Light'],
                  borderRadius: 12,
                  height: 48,
                  marginBottom: 20,
                  marginLeft: 20,
                  marginRight: 20,
                  marginTop: 20,
                  paddingLeft: 12,
                }
              ),
              dimensions.width
            )}
            value={userEmail}
          />
          {/* PasswordInputBox */}
          <TextInput
            allowFontScaling={true}
            autoCapitalize={'none'}
            autoCorrect={false}
            blurOnSubmit={true}
            changeTextDelay={500}
            enablesReturnKeyAutomatically={true}
            keyboardType={'default'}
            onChangeText={newPasswordInputBoxValue => {
              try {
                const valueKwJ1pKnX = newPasswordInputBoxValue;
                setUserPassword(valueKwJ1pKnX);
                const password = valueKwJ1pKnX;
              } catch (err) {
                console.error(err);
              }
            }}
            placeholder={'Password'}
            placeholderTextColor={theme.colors['Light']}
            returnKeyType={'next'}
            secureTextEntry={true}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.TextInputStyles(theme)['Text Input'],
                {
                  borderColor: theme.colors['Light'],
                  borderRadius: 12,
                  height: 48,
                  marginBottom: 20,
                  marginLeft: 20,
                  marginRight: 20,
                  marginTop: 20,
                  paddingLeft: 12,
                }
              ),
              dimensions.width
            )}
            value={userPassword}
          />
        </View>
        {/* ForgetPasswordContainer */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignContent: 'flex-end',
              alignItems: 'center',
              backgroundColor: 'rgba(0, 0, 0, 0)',
              flexDirection: 'row',
              flexWrap: 'nowrap',
              justifyContent: 'flex-end',
              margin: 10,
            },
            dimensions.width
          )}
        >
          {/* Forgot Password Button */}
          <Touchable
            onPress={() => {
              try {
                navigation.navigate('StackNavigator', {
                  screen: 'ForgotPasswordScreen',
                });
              } catch (err) {
                console.error(err);
              }
            }}
            style={StyleSheet.applyWidth(
              { borderColor: theme.colors['Error'], marginRight: 10 },
              dimensions.width
            )}
          >
            {/* Forgot Password */}
            <Text
              accessible={true}
              allowFontScaling={true}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                  marginRight: 10,
                  textAlign: 'right',
                }),
                dimensions.width
              )}
            >
              {'Forgot Password ?'}
            </Text>
          </Touchable>
        </View>
        {/* CheckboxRowContainer */}
        <View style={StyleSheet.applyWidth({ margin: 10 }, dimensions.width)}>
          <CheckboxRow
            color={theme.colors['Custom Color']}
            direction={'row-reverse'}
            label={'Remember Me'}
            onPress={newCheckboxRowValue => {
              const checkboxRowValue = newCheckboxRowValue;
              try {
                setCheckboxRowValue(newCheckboxRowValue);
              } catch (err) {
                console.error(err);
              }
            }}
            status={checkboxRowValue}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.CheckboxRowStyles(theme)['Checkbox Row'],
                { fontSize: 16 }
              ),
              dimensions.width
            )}
            uncheckedColor={theme.colors['Custom Color_18']}
          />
        </View>
        {/* ButtonContainer */}
        <View style={StyleSheet.applyWidth({ margin: 25 }, dimensions.width)}>
          {/* Login */}
          <Button
            onPress={() => {
              const handler = async () => {
                console.log('Login ON_PRESS Start');
                let error = null;
                try {
                  console.log('Start ON_PRESS:0 FETCH_REQUEST');
                  const loginResponse = (
                    await cotruckLoginPOST.mutateAsync({
                      email: userEmail,
                      fcm_token:
                        'chZPojdxBEU:APA91bE8OtOLFVfCOCYjxj-ItsD89X4Mn98530lUdsph57ssipgi0uZ5ZS1aUfLGL9z1R09N4y7Q2j-IwuTq4e3tOXIEX6hz5x_sygZawRLt1g-bGTJaXuvKsyB4LmhmVNylLpAL81Jv',
                      password: userPassword,
                      user_type: 'OWNER',
                    })
                  )?.json;
                  console.log('Complete ON_PRESS:0 FETCH_REQUEST', {
                    loginResponse,
                  });
                  console.log('Start ON_PRESS:1 EXTRACT_KEY');
                  const token = loginResponse?.data;
                  console.log('Complete ON_PRESS:1 EXTRACT_KEY', { token });
                  console.log('Start ON_PRESS:2 EXTRACT_KEY');
                  const message = loginResponse?.message;
                  console.log('Complete ON_PRESS:2 EXTRACT_KEY', { message });
                  console.log('Start ON_PRESS:3 CONSOLE_LOG');
                  console.log(loginResponse, token);
                  console.log('Complete ON_PRESS:3 CONSOLE_LOG');
                  console.log('Start ON_PRESS:4 SET_VARIABLE');
                  const Token = undefined;
                  console.log('Complete ON_PRESS:4 SET_VARIABLE', { Token });
                  console.log('Start ON_PRESS:5 SHOW_ALERT');
                  showAlertUtil({
                    title: msg,
                    message: message,
                    buttonText: undefined,
                  });
                  console.log('Complete ON_PRESS:5 SHOW_ALERT');
                  console.log('Start ON_PRESS:6 CONDITIONAL_STOP');
                  if (!token) {
                    return;
                  }
                  console.log('Complete ON_PRESS:6 CONDITIONAL_STOP');
                  console.log('Start ON_PRESS:7 NAVIGATE');
                  navigation.navigate('BottomTabNavigator');
                  console.log('Complete ON_PRESS:7 NAVIGATE');
                } catch (err) {
                  console.error(err);
                  error = err.message ?? err;
                }
                console.log(
                  'Login ON_PRESS Complete',
                  error ? { error } : 'no error'
                );
              };
              handler();
            }}
            style={StyleSheet.applyWidth(
              GlobalStyles.ButtonStyles(theme)['Button'],
              dimensions.width
            )}
            title={'Log In'}
          />
        </View>
        {/* Sign Up View */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'center',
              margin: 10,
            },
            dimensions.width
          )}
        >
          {/* Don't have an account */}
          <Text
            accessible={true}
            allowFontScaling={true}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                fontSize: 16,
              }),
              dimensions.width
            )}
          >
            {"Don't have an account?"}
          </Text>
          {/* Sign Up Button */}
          <Touchable
            onPress={() => {
              try {
                navigation.navigate('StackNavigator', {
                  screen: 'RegisterScreen',
                });
              } catch (err) {
                console.error(err);
              }
            }}
            style={StyleSheet.applyWidth({ marginLeft: 10 }, dimensions.width)}
          >
            {/* Sign Up */}
            <Text
              accessible={true}
              allowFontScaling={true}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                  color: theme.colors['Primary'],
                  fontSize: 16,
                }),
                dimensions.width
              )}
            >
              {'Sign Up'}
            </Text>
          </Touchable>
        </View>
        {/* Change Language Row */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'center',
              margin: 10,
            },
            dimensions.width
          )}
        >
          <View style={StyleSheet.applyWidth({ margin: 5 }, dimensions.width)}>
            <Text
              accessible={true}
              allowFontScaling={true}
              style={StyleSheet.applyWidth(
                GlobalStyles.TextStyles(theme)['Text 3'],
                dimensions.width
              )}
            >
              {'English'}
            </Text>
          </View>
          {/* Onpress Conatiner */}
          <View style={StyleSheet.applyWidth({ margin: 5 }, dimensions.width)}>
            {/* Change Language Button */}
            <Touchable
              onPress={() => {
                try {
                  navigation.navigate('StackNavigator', {
                    screen: 'ChooseLanguageScreen',
                  });
                } catch (err) {
                  console.error(err);
                }
              }}
            >
              {/* Change Language */}
              <Text
                accessible={true}
                allowFontScaling={true}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text 3'], {
                    color: theme.colors['Primary'],
                  }),
                  dimensions.width
                )}
              >
                {'Change Language'}
              </Text>
            </Touchable>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </ScreenContainer>
  );
};

export default withTheme(LoginScreen);
