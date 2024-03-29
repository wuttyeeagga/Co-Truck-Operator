import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as CotruckApi from '../apis/CotruckApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import showAlertUtil from '../utils/showAlert';
import useWindowDimensions from '../utils/useWindowDimensions';
import {
  Button,
  Icon,
  KeyboardAvoidingView,
  ScreenContainer,
  TextInput,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Text, View } from 'react-native';

const ForgotPasswordScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const [mobile, setMobile] = React.useState('');
  const [num, setNum] = React.useState('');
  const [test, setTest] = React.useState(122345);
  const cotruckForgotPwdPOST = CotruckApi.useForgotPwdPOST();

  return (
    <ScreenContainer
      hasSafeArea={true}
      hasTopSafeArea={true}
      scrollable={false}
    >
      {/* My Header */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            flexDirection: 'row',
            margin: 20,
            marginLeft: 20,
            marginTop: 20,
          },
          dimensions.width
        )}
      >
        <Touchable
          onPress={() => {
            try {
              navigation.goBack();
            } catch (err) {
              console.error(err);
            }
          }}
          style={StyleSheet.applyWidth({ marginLeft: 10 }, dimensions.width)}
        >
          <Icon name={'MaterialIcons/arrow-back-ios'} size={30} />
        </Touchable>

        <Text
          accessible={true}
          allowFontScaling={true}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
              fontSize: 20,
              marginLeft: 10,
            }),
            dimensions.width
          )}
        >
          {'Forgot Password'}
        </Text>
      </View>

      <KeyboardAvoidingView behavior={'padding'} enabled={true}>
        <View
          style={StyleSheet.applyWidth(
            {
              justifyContent: 'space-evenly',
              paddingLeft: 30,
              paddingRight: 30,
              paddingTop: 20,
            },
            dimensions.width
          )}
        >
          {/* Heading */}
          <Text
            style={StyleSheet.applyWidth(
              {
                color: theme.colors['Primary'],
                fontFamily: 'Poppins_700Bold',
                fontSize: 35,
                marginBottom: 10,
              },
              dimensions.width
            )}
          >
            {'Forgot\nPassword?'}
          </Text>
          {/* sub heading */}
          <Text
            style={StyleSheet.applyWidth(
              {
                color: theme.colors['Custom #5f5a53'],
                fontFamily: 'Poppins_400Regular',
                fontSize: 15,
                opacity: 0.7,
                paddingBottom: 10,
                textAlign: 'left',
              },
              dimensions.width
            )}
          >
            {
              'Please enter your registered mobile number and we will send you a verification code to your registered mobile number.'
            }
          </Text>
          {/* Mobile Number */}
          <TextInput
            editable={true}
            keyboardType={'phone-pad'}
            maxLength={12}
            onChangeText={newMobileNumberValue => {
              try {
                setMobile(newMobileNumberValue);
              } catch (err) {
                console.error(err);
              }
            }}
            placeholder={'Mobile Number'}
            placeholderTextColor={theme.colors['Light']}
            style={StyleSheet.applyWidth(
              {
                backgroundColor: 'rgba(0, 0, 0, 0)',
                borderBottomWidth: 1,
                borderColor: theme.colors['Light'],
                borderLeftWidth: 1,
                borderRadius: 12,
                borderRightWidth: 1,
                borderTopWidth: 1,
                fontFamily: 'Poppins_400Regular',
                fontSize: 15,
                height: 48,
                margin: 20,
                marginTop: 20,
                paddingBottom: 8,
                paddingLeft: 20,
                paddingRight: 20,
                paddingTop: 8,
              },
              dimensions.width
            )}
            value={mobile}
          />
          {/* Send */}
          <Button
            onPress={() => {
              const handler = async () => {
                console.log('Send ON_PRESS Start');
                let error = null;
                try {
                  console.log('Start ON_PRESS:1 FETCH_REQUEST');
                  const response = (
                    await cotruckForgotPwdPOST.mutateAsync({ mobile: mobile })
                  )?.json;
                  console.log('Complete ON_PRESS:1 FETCH_REQUEST', {
                    response,
                  });
                  console.log('Start ON_PRESS:2 EXTRACT_KEY');
                  const data = response?.data;
                  console.log('Complete ON_PRESS:2 EXTRACT_KEY', { data });
                  console.log('Start ON_PRESS:3 EXTRACT_KEY');
                  const message = response?.message;
                  console.log('Complete ON_PRESS:3 EXTRACT_KEY', { message });
                  console.log('Start ON_PRESS:4 SHOW_ALERT');
                  showAlertUtil({
                    title: 'Message',
                    message: message,
                    buttonText: undefined,
                  });
                  console.log('Complete ON_PRESS:4 SHOW_ALERT');
                  console.log('Start ON_PRESS:5 CONDITIONAL_STOP');
                  if (!data) {
                    return;
                  }
                  console.log('Complete ON_PRESS:5 CONDITIONAL_STOP');
                  console.log('Start ON_PRESS:6 NAVIGATE');
                  navigation.navigate('OTPVerificationScreen', {
                    user_id: data,
                    mobile: mobile,
                    is_forgot: 1,
                    is_regi: 0,
                  });
                  console.log('Complete ON_PRESS:6 NAVIGATE');
                  console.log('Start ON_PRESS:7 CONSOLE_LOG');
                  console.log(response, response);
                  console.log('Complete ON_PRESS:7 CONSOLE_LOG');
                } catch (err) {
                  console.error(err);
                  error = err.message ?? err;
                }
                console.log(
                  'Send ON_PRESS Complete',
                  error ? { error } : 'no error'
                );
              };
              handler();
            }}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.ButtonStyles(theme)['action btn tablet'],
                {
                  backgroundColor: theme.colors['Primary'],
                  borderRadius: 10,
                  color: theme.colors['Custom Color_4'],
                  fontFamily: 'Poppins_500Medium',
                  fontSize: 17,
                  height: 48,
                  margin: 10,
                  marginTop: 40,
                }
              ),
              dimensions.width
            )}
            title={'Send'}
          />
        </View>
      </KeyboardAvoidingView>
    </ScreenContainer>
  );
};

export default withTheme(ForgotPasswordScreen);
