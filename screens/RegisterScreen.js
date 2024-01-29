import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as CotruckApi from '../apis/CotruckApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import openImagePickerUtil from '../utils/openImagePicker';
import useWindowDimensions from '../utils/useWindowDimensions';
import {
  Button,
  Divider,
  Icon,
  MultiSelectPicker,
  PickerItem,
  ScreenContainer,
  TextInput,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { Image, Text, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const RegisterScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const [agentLicense, setAgentLicense] = React.useState('');
  const [agentName, setAgentName] = React.useState('');
  const [companyName, setCompanyName] = React.useState('');
  const [companyPhone, setCompanyPhone] = React.useState('');
  const [companyiRegisterNumber, setCompanyiRegisterNumber] =
    React.useState('');
  const [contactPersonEmail, setContactPersonEmail] = React.useState('');
  const [contactPersonName, setContactPersonName] = React.useState('');
  const [contactPersonPassword, setContactPersonPassword] = React.useState('');
  const [contactPersonPhone, setContactPersonPhone] = React.useState('');
  const [datePickerValue, setDatePickerValue] = React.useState(new Date());
  const [emailInput, setEmailInput] = React.useState('');
  const [isPhotoUploaded, setIsPhotoUploaded] = React.useState(false);
  const [multiSelectPickerValue, setMultiSelectPickerValue] = React.useState(
    []
  );
  const [multiSelectPickerValue2, setMultiSelectPickerValue2] = React.useState(
    []
  );
  const [numberInputValue, setNumberInputValue] = React.useState('');
  const [pathsOptions, setPathsOptions] = React.useState([]);
  const [photoUploaded, setPhotoUploaded] = React.useState('');
  const [pickerValue, setPickerValue] = React.useState('');
  const [referCode, setReferCode] = React.useState('');
  const [textAreaValue, setTextAreaValue] = React.useState('');
  const [textInputValue, setTextInputValue] = React.useState('');
  const cotruckPreferredPathsPOST = CotruckApi.usePreferredPathsPOST();
  const isFocused = useIsFocused();
  React.useEffect(() => {
    const handler = async () => {
      try {
        if (!isFocused) {
          return;
        }
        const results = (await cotruckPreferredPathsPOST.mutateAsync())?.json;
        const asdf = results?.data;
        setPathsOptions(asdf);
        console.log(asdf);
      } catch (err) {
        console.error(err);
      }
    };
    handler();
  }, [isFocused]);

  return (
    <ScreenContainer
      hasBottomSafeArea={true}
      hasSafeArea={true}
      hasTopSafeArea={false}
      scrollable={false}
      style={StyleSheet.applyWidth(
        { backgroundColor: theme.colors['Surface'] },
        dimensions.width
      )}
    >
      {/* Header */}
      <View
        style={StyleSheet.applyWidth(
          { alignItems: 'center', flexDirection: 'row', margin: 20 },
          dimensions.width
        )}
      >
        {/* Icon Button */}
        <View
          style={StyleSheet.applyWidth({ marginLeft: 20 }, dimensions.width)}
        >
          <Touchable
            onPress={() => {
              try {
                navigation.goBack();
              } catch (err) {
                console.error(err);
              }
            }}
          >
            <Icon name={'MaterialIcons/arrow-back-ios'} size={30} />
          </Touchable>
        </View>
        {/* Title View */}
        <View
          style={StyleSheet.applyWidth({ marginLeft: 10 }, dimensions.width)}
        >
          {/* Title */}
          <Text
            accessible={true}
            allowFontScaling={true}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text 3'], {
                color: theme.colors['CoTruckBlack'],
                fontFamily: 'System',
                fontSize: 20,
                fontWeight: '400',
              }),
              dimensions.width
            )}
          >
            {'Create an account'}
          </Text>
        </View>
      </View>

      <KeyboardAwareScrollView
        keyboardShouldPersistTaps={'never'}
        showsVerticalScrollIndicator={true}
      >
        {/* Company Details */}
        <View
          style={StyleSheet.applyWidth(
            {
              backgroundColor: 'rgba(0, 0, 0, 0)',
              margin: 10,
              paddingBottom: 20,
            },
            dimensions.width
          )}
        >
          {/* title */}
          <Text
            style={StyleSheet.applyWidth(
              {
                color: theme.colors['CoTruckBlack'],
                fontFamily: 'Inter_600SemiBold',
                fontSize: 16,
                marginLeft: 20,
                opacity: 1,
              },
              dimensions.width
            )}
          >
            {'Step 1 of 4 - Company Information'}
          </Text>
          {/* Company Name  */}
          <TextInput
            autoCapitalize={'none'}
            onChangeText={newCompanyNameValue => {
              try {
                setCompanyName(newCompanyNameValue);
              } catch (err) {
                console.error(err);
              }
            }}
            placeholder={'Company Name'}
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
                fontFamily: 'Inter_400Regular',
                height: 48,
                margin: 20,
                paddingBottom: 8,
                paddingLeft: 12,
                paddingRight: 8,
                paddingTop: 8,
              },
              dimensions.width
            )}
            value={companyName}
          />
          {/* Company Phone */}
          <TextInput
            autoCapitalize={'none'}
            keyboardType={'phone-pad'}
            onChangeText={newCompanyPhoneValue => {
              try {
                setCompanyPhone(newCompanyPhoneValue);
              } catch (err) {
                console.error(err);
              }
            }}
            placeholder={'Company Phone Number'}
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
                fontFamily: 'Inter_400Regular',
                height: 48,
                margin: 20,
                paddingBottom: 8,
                paddingLeft: 12,
                paddingRight: 8,
                paddingTop: 8,
              },
              dimensions.width
            )}
            value={companyPhone}
          />
          {/* Company Registration Number */}
          <TextInput
            autoCapitalize={'none'}
            onChangeText={newCompanyRegistrationNumberValue => {
              try {
                setCompanyiRegisterNumber(newCompanyRegistrationNumberValue);
              } catch (err) {
                console.error(err);
              }
            }}
            placeholder={'Company Registration Number'}
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
                fontFamily: 'Inter_400Regular',
                height: 48,
                margin: 20,
                paddingBottom: 8,
                paddingLeft: 12,
                paddingRight: 8,
                paddingTop: 8,
              },
              dimensions.width
            )}
            value={companyiRegisterNumber}
          />
          {/* Upload Certificate */}
          <Button
            icon={'AntDesign/pluscircle'}
            onPress={() => {
              const handler = async () => {
                console.log('Upload Certificate ON_PRESS Start');
                let error = null;
                try {
                  console.log('Start ON_PRESS:0 OPEN_IMAGE_PICKER');
                  const result = await openImagePickerUtil({
                    mediaTypes: 'All',
                    allowsEditing: false,
                    quality: 0.2,
                  });
                  console.log('Complete ON_PRESS:0 OPEN_IMAGE_PICKER', {
                    result,
                  });
                  console.log('Start ON_PRESS:1 SET_VARIABLE');
                  setPhotoUploaded(result);
                  console.log('Complete ON_PRESS:1 SET_VARIABLE');
                  console.log('Start ON_PRESS:2 SET_VARIABLE');
                  const valuegkXwmERR = true;
                  setIsPhotoUploaded(valuegkXwmERR);
                  const condition = valuegkXwmERR;
                  console.log('Complete ON_PRESS:2 SET_VARIABLE');
                  console.log('Start ON_PRESS:3 CONSOLE_LOG');
                  console.log(result, 'conditon');
                  console.log('Complete ON_PRESS:3 CONSOLE_LOG');
                } catch (err) {
                  console.error(err);
                  error = err.message ?? err;
                }
                console.log(
                  'Upload Certificate ON_PRESS Complete',
                  error ? { error } : 'no error'
                );
              };
              handler();
            }}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.ButtonStyles(theme)['Button'], {
                backgroundColor: theme.colors['CoTruckGrey'],
                borderRadius: 12,
                height: 48,
                margin: 20,
              }),
              dimensions.width
            )}
            title={'Upload Certificate'}
          />
          {/* Certificate View */}
          <>
            {!isPhotoUploaded ? null : (
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'center',
                    backgroundColor: 'rgba(0, 0, 0, 0)',
                    justifyContent: 'center',
                  },
                  dimensions.width
                )}
              >
                {/* Certificat Image */}
                <Image
                  resizeMode={'cover'}
                  source={{ uri: `${photoUploaded}` }}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.ImageStyles(theme)['Image 2'],
                      {
                        borderBottomLeftRadius: 2,
                        borderBottomRightRadius: 2,
                        borderTopLeftRadius: 2,
                        borderTopRightRadius: 2,
                        height: [
                          { minWidth: Breakpoints.Mobile, value: 160 },
                          { minWidth: Breakpoints.Tablet, value: 150 },
                        ],
                        marginBottom: 10,
                        marginTop: 10,
                        width: [
                          { minWidth: Breakpoints.Mobile, value: 160 },
                          { minWidth: Breakpoints.Tablet, value: 150 },
                        ],
                      }
                    ),
                    dimensions.width
                  )}
                />
              </View>
            )}
          </>
          {/* Agent License */}
          <TextInput
            autoCapitalize={'none'}
            onChangeText={newAgentLicenseValue => {
              try {
                setAgentLicense(newAgentLicenseValue);
              } catch (err) {
                console.error(err);
              }
            }}
            placeholder={'Agent License'}
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
                fontFamily: 'Inter_400Regular',
                height: 48,
                margin: 20,
                paddingBottom: 8,
                paddingLeft: 12,
                paddingRight: 8,
                paddingTop: 8,
              },
              dimensions.width
            )}
            value={agentLicense}
          />
          {/* Agent Name */}
          <TextInput
            autoCapitalize={'none'}
            onChangeText={newAgentNameValue => {
              try {
                setAgentName(newAgentNameValue);
              } catch (err) {
                console.error(err);
              }
            }}
            placeholder={'Agent Name'}
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
                fontFamily: 'Inter_400Regular',
                height: 48,
                margin: 20,
                paddingBottom: 8,
                paddingLeft: 12,
                paddingRight: 8,
                paddingTop: 8,
              },
              dimensions.width
            )}
            value={agentName}
          />
          <MultiSelectPicker
            autoDismissKeyboard={true}
            dropDownBackgroundColor={theme.colors['Surface']}
            dropDownBorderColor={theme.colors.divider}
            dropDownBorderRadius={8}
            dropDownBorderWidth={1}
            dropDownTextColor={theme.colors.strong}
            iconSize={24}
            leftIconMode={'inset'}
            onValueChange={newMultiSelectPickerValue => {
              const pickerValue = newMultiSelectPickerValue;
              try {
                setMultiSelectPickerValue2(newMultiSelectPickerValue);
              } catch (err) {
                console.error(err);
              }
            }}
            options={pathsOptions}
            placeholder={'Choose preferred paths'}
            selectedIconColor={theme.colors.strong}
            selectedIconName={'Feather/check'}
            selectedIconSize={20}
            style={StyleSheet.applyWidth(
              {
                borderRadius: 12,
                height: 48,
                margin: 20,
                paddingBottom: 8,
                paddingLeft: 12,
                paddingRight: 8,
                paddingTop: 8,
              },
              dimensions.width
            )}
            type={'solid'}
            value={multiSelectPickerValue2}
          >
            <PickerItem />
          </MultiSelectPicker>
          <Divider
            color={theme.colors.divider}
            style={StyleSheet.applyWidth(
              GlobalStyles.DividerStyles(theme)['Divider'],
              dimensions.width
            )}
          />
          {/* title */}
          <Text
            accessible={true}
            allowFontScaling={true}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text 2'], {
                fontFamily: 'Inter_600SemiBold',
                fontSize: 16,
                marginBottom: 10,
                marginLeft: 20,
                marginTop: 10,
              }),
              dimensions.width
            )}
          >
            {'Contact Person Details'}
          </Text>
          {/* Contact Person Name */}
          <TextInput
            autoCapitalize={'none'}
            onChangeText={newContactPersonNameValue => {
              try {
                setContactPersonName(newContactPersonNameValue);
              } catch (err) {
                console.error(err);
              }
            }}
            placeholder={'Name'}
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
                fontFamily: 'Inter_400Regular',
                height: 48,
                margin: 20,
                paddingBottom: 8,
                paddingLeft: 12,
                paddingRight: 8,
                paddingTop: 8,
              },
              dimensions.width
            )}
            value={contactPersonName}
          />
          {/* Contact Person Email */}
          <TextInput
            autoCapitalize={'none'}
            onChangeText={newContactPersonEmailValue => {
              try {
                setContactPersonEmail(newContactPersonEmailValue);
              } catch (err) {
                console.error(err);
              }
            }}
            placeholder={'Email'}
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
                fontFamily: 'Inter_400Regular',
                height: 48,
                margin: 20,
                paddingBottom: 8,
                paddingLeft: 12,
                paddingRight: 8,
                paddingTop: 8,
              },
              dimensions.width
            )}
            value={contactPersonEmail}
          />
          {/* Contact Person Phone */}
          <TextInput
            autoCapitalize={'none'}
            onChangeText={newContactPersonPhoneValue => {
              try {
                setContactPersonPhone(newContactPersonPhoneValue);
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
                fontFamily: 'Inter_400Regular',
                height: 48,
                margin: 20,
                paddingBottom: 8,
                paddingLeft: 12,
                paddingRight: 8,
                paddingTop: 8,
              },
              dimensions.width
            )}
            value={contactPersonPhone}
          />
          {/* Contact Person Password */}
          <TextInput
            autoCapitalize={'none'}
            onChangeText={newContactPersonPasswordValue => {
              try {
                setContactPersonPassword(newContactPersonPasswordValue);
              } catch (err) {
                console.error(err);
              }
            }}
            placeholder={'Password'}
            placeholderTextColor={theme.colors['Light']}
            secureTextEntry={true}
            style={StyleSheet.applyWidth(
              {
                backgroundColor: 'rgba(0, 0, 0, 0)',
                borderBottomWidth: 1,
                borderColor: theme.colors['Light'],
                borderLeftWidth: 1,
                borderRadius: 12,
                borderRightWidth: 1,
                borderTopWidth: 1,
                fontFamily: 'Inter_400Regular',
                height: 48,
                margin: 20,
                paddingBottom: 8,
                paddingLeft: 12,
                paddingRight: 8,
                paddingTop: 8,
              },
              dimensions.width
            )}
            value={contactPersonPassword}
          />
          {/* Referral Code */}
          <TextInput
            autoCapitalize={'none'}
            onChangeText={newReferralCodeValue => {
              try {
                setReferCode(newReferralCodeValue);
              } catch (err) {
                console.error(err);
              }
            }}
            placeholder={'Enter Referral Code (Optional)'}
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
                fontFamily: 'Inter_400Regular',
                height: 48,
                margin: 20,
                paddingBottom: 8,
                paddingLeft: 12,
                paddingRight: 8,
                paddingTop: 8,
              },
              dimensions.width
            )}
            value={referCode}
          />
          {/* Next */}
          <Button
            onPress={() => {
              try {
                navigation.navigate('SignUpIdentityProofScreen', {
                  comp_name: companyName,
                  comp_phone: companyPhone,
                  comp_regi: companyiRegisterNumber,
                  certificate: photoUploaded,
                  agent_license: agentLicense,
                  agent_name: agentName,
                  prefer_paths: multiSelectPickerValue2,
                  email: contactPersonEmail,
                  mobile: contactPersonPhone,
                  password: contactPersonPassword,
                  refer_code: referCode,
                  name: contactPersonName,
                });
                console.log(multiSelectPickerValue2);
              } catch (err) {
                console.error(err);
              }
            }}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.ButtonStyles(theme)['Button'], {
                borderRadius: 12,
                height: 48,
                margin: 20,
              }),
              dimensions.width
            )}
            title={'Next'}
          />
        </View>
      </KeyboardAwareScrollView>
    </ScreenContainer>
  );
};

export default withTheme(RegisterScreen);
