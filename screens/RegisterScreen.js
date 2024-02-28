import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as CotruckApi from '../apis/CotruckApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import selectFileUtil from '../utils/selectFile';
import useWindowDimensions from '../utils/useWindowDimensions';
import {
  Button,
  Divider,
  Icon,
  MultiSelectPicker,
  PickerItem,
  Pressable,
  ScreenContainer,
  TextInput,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { Text, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const RegisterScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const [agentLicense, setAgentLicense] = React.useState('');
  const [agentLicenseFile, setAgentLicenseFile] = React.useState([]);
  const [agentName, setAgentName] = React.useState('');
  const [companyName, setCompanyName] = React.useState('');
  const [companyPhone, setCompanyPhone] = React.useState('');
  const [companyRegNo, setCompanyRegNo] = React.useState('');
  const [companyRegisterFile, setCompanyRegisterFile] = React.useState([]);
  const [contactPersonEmail, setContactPersonEmail] = React.useState('');
  const [contactPersonName, setContactPersonName] = React.useState('');
  const [contactPersonPassword, setContactPersonPassword] = React.useState('');
  const [contactPersonPhone, setContactPersonPhone] = React.useState('');
  const [emailInput, setEmailInput] = React.useState('');
  const [isAgentFile, setIsAgentFile] = React.useState(false);
  const [isCompanyFile, setIsCompanyFile] = React.useState(false);
  const [isPhotoUploaded, setIsPhotoUploaded] = React.useState(false);
  const [multiSelectPickerValue, setMultiSelectPickerValue] = React.useState(
    []
  );
  const [multiSelectPickerValue2, setMultiSelectPickerValue2] = React.useState(
    []
  );
  const [numberInputValue, setNumberInputValue] = React.useState('');
  const [pathsOptions, setPathsOptions] = React.useState([]);
  const [referCode, setReferCode] = React.useState('');
  const [pickerValue, setPickerValue] = React.useState(undefined);
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
            placeholderTextColor={theme.colors['TextPlaceholder']}
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
            maxLength={11}
            onChangeText={newCompanyPhoneValue => {
              try {
                setCompanyPhone(newCompanyPhoneValue);
              } catch (err) {
                console.error(err);
              }
            }}
            placeholder={'+95 Company Phone'}
            placeholderTextColor={theme.colors['TextPlaceholder']}
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
            maxLength={9}
            onChangeText={newCompanyRegistrationNumberValue => {
              try {
                setCompanyRegNo(newCompanyRegistrationNumberValue);
              } catch (err) {
                console.error(err);
              }
            }}
            placeholder={'Company Registration Number'}
            placeholderTextColor={theme.colors['TextPlaceholder']}
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
            value={companyRegNo}
          />
          {/* Company Registration Document */}
          <View>
            {/* Sub Title View */}
            <View>
              {/* Sub Title */}
              <Text
                accessible={true}
                allowFontScaling={true}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text 2'], {
                    margin: 10,
                  }),
                  dimensions.width
                )}
              >
                {'Company Registration Document'}
              </Text>
            </View>
            {/* Upload Registration File */}
            <>
              {isCompanyFile ? null : (
                <Pressable
                  onPress={() => {
                    const handler = async () => {
                      console.log('Upload Registration File ON_PRESS Start');
                      let error = null;
                      try {
                        console.log('Start ON_PRESS:0 SELECT_FILE');
                        const fileResults = await selectFileUtil({
                          returnNameAndValue: true,
                        });
                        console.log('Complete ON_PRESS:0 SELECT_FILE', {
                          fileResults,
                        });
                        console.log('Start ON_PRESS:1 SET_VARIABLE');
                        setCompanyRegisterFile(fileResults);
                        console.log('Complete ON_PRESS:1 SET_VARIABLE');
                        console.log('Start ON_PRESS:2 SET_VARIABLE');
                        setIsCompanyFile(true);
                        console.log('Complete ON_PRESS:2 SET_VARIABLE');
                        console.log('Start ON_PRESS:3 CONSOLE_LOG');
                        console.log(fileResults);
                        console.log('Complete ON_PRESS:3 CONSOLE_LOG');
                      } catch (err) {
                        console.error(err);
                        error = err.message ?? err;
                      }
                      console.log(
                        'Upload Registration File ON_PRESS Complete',
                        error ? { error } : 'no error'
                      );
                    };
                    handler();
                  }}
                >
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        alignItems: 'center',
                        borderColor: theme.colors['Light'],
                        borderRadius: 12,
                        borderStyle: 'dashed',
                        borderWidth: 1,
                        justifyContent: 'center',
                        margin: 20,
                        padding: 20,
                      },
                      dimensions.width
                    )}
                  >
                    {/* Plus Icon */}
                    <Icon
                      color={theme.colors['CoTruckBlack']}
                      name={'AntDesign/pluscircle'}
                      size={24}
                    />
                    {/* Upload */}
                    <Text
                      accessible={true}
                      allowFontScaling={true}
                      style={StyleSheet.applyWidth(
                        GlobalStyles.TextStyles(theme)['Text 2'],
                        dimensions.width
                      )}
                    >
                      {'Upload'}
                    </Text>
                  </View>
                </Pressable>
              )}
            </>
            {/* Registration File Value */}
            <>
              {!isCompanyFile ? null : (
                <Pressable
                  onPress={() => {
                    console.log('Registration File Value ON_PRESS Start');
                    let error = null;
                    try {
                      console.log('Start ON_PRESS:0 SET_VARIABLE');
                      setIsCompanyFile(false);
                      console.log('Complete ON_PRESS:0 SET_VARIABLE');
                      console.log('Start ON_PRESS:1 CONSOLE_LOG');
                      console.log();
                      console.log('Complete ON_PRESS:1 CONSOLE_LOG');
                    } catch (err) {
                      console.error(err);
                      error = err.message ?? err;
                    }
                    console.log(
                      'Registration File Value ON_PRESS Complete',
                      error ? { error } : 'no error'
                    );
                  }}
                >
                  {/* Value View */}
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        alignItems: 'center',
                        borderColor: theme.colors['Light'],
                        borderRadius: 12,
                        borderStyle: 'dashed',
                        borderWidth: 1,
                        justifyContent: 'center',
                        margin: 20,
                        padding: 20,
                      },
                      dimensions.width
                    )}
                  >
                    {/* Company File Name */}
                    <Text
                      accessible={true}
                      allowFontScaling={true}
                      style={StyleSheet.applyWidth(
                        GlobalStyles.TextStyles(theme)['Text 2'],
                        dimensions.width
                      )}
                    >
                      {companyRegisterFile?.name}
                    </Text>
                  </View>
                </Pressable>
              )}
            </>
          </View>
          {/* Divider 2 */}
          <Divider
            color={theme.colors['Error']}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.DividerStyles(theme)['Divider'], {
                marginBottom: 10,
                marginTop: 10,
              }),
              dimensions.width
            )}
          />
          {/* Agent License Document */}
          <View>
            {/* Sub Title View */}
            <View>
              {/* Sub Title */}
              <Text
                accessible={true}
                allowFontScaling={true}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text 2'], {
                    margin: 10,
                  }),
                  dimensions.width
                )}
              >
                {'Agent License Document'}
              </Text>
            </View>
            {/* Upload Agent License */}
            <>
              {isAgentFile ? null : (
                <Pressable
                  onPress={() => {
                    const handler = async () => {
                      console.log('Upload Agent License ON_PRESS Start');
                      let error = null;
                      try {
                        console.log('Start ON_PRESS:0 SELECT_FILE');
                        const fileResults = await selectFileUtil({
                          returnNameAndValue: true,
                        });
                        console.log('Complete ON_PRESS:0 SELECT_FILE', {
                          fileResults,
                        });
                        console.log('Start ON_PRESS:1 SET_VARIABLE');
                        setAgentLicenseFile(fileResults);
                        console.log('Complete ON_PRESS:1 SET_VARIABLE');
                        console.log('Start ON_PRESS:2 CONSOLE_LOG');
                        console.log(fileResults);
                        console.log('Complete ON_PRESS:2 CONSOLE_LOG');
                        console.log('Start ON_PRESS:3 SET_VARIABLE');
                        setIsAgentFile(true);
                        console.log('Complete ON_PRESS:3 SET_VARIABLE');
                      } catch (err) {
                        console.error(err);
                        error = err.message ?? err;
                      }
                      console.log(
                        'Upload Agent License ON_PRESS Complete',
                        error ? { error } : 'no error'
                      );
                    };
                    handler();
                  }}
                >
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        alignItems: 'center',
                        borderColor: theme.colors['Light'],
                        borderRadius: 12,
                        borderStyle: 'dashed',
                        borderWidth: 1,
                        justifyContent: 'center',
                        margin: 20,
                        padding: 20,
                      },
                      dimensions.width
                    )}
                  >
                    {/* Plus Icon */}
                    <Icon
                      color={theme.colors['CoTruckBlack']}
                      name={'AntDesign/pluscircle'}
                      size={24}
                    />
                    {/* Upload */}
                    <Text
                      accessible={true}
                      allowFontScaling={true}
                      style={StyleSheet.applyWidth(
                        GlobalStyles.TextStyles(theme)['Text 2'],
                        dimensions.width
                      )}
                    >
                      {'Upload'}
                    </Text>
                  </View>
                </Pressable>
              )}
            </>
            {/* License View */}
            <>
              {!isAgentFile ? null : (
                <Pressable
                  onPress={() => {
                    console.log('License View ON_PRESS Start');
                    let error = null;
                    try {
                      console.log('Start ON_PRESS:0 SET_VARIABLE');
                      setIsAgentFile(false);
                      console.log('Complete ON_PRESS:0 SET_VARIABLE');
                    } catch (err) {
                      console.error(err);
                      error = err.message ?? err;
                    }
                    console.log(
                      'License View ON_PRESS Complete',
                      error ? { error } : 'no error'
                    );
                  }}
                >
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        alignItems: 'center',
                        borderColor: theme.colors['Light'],
                        borderRadius: 12,
                        borderStyle: 'dashed',
                        borderWidth: 1,
                        justifyContent: 'center',
                        margin: 20,
                        padding: 20,
                      },
                      dimensions.width
                    )}
                  >
                    {/* Agent File Name */}
                    <Text
                      accessible={true}
                      allowFontScaling={true}
                      style={StyleSheet.applyWidth(
                        GlobalStyles.TextStyles(theme)['Text 2'],
                        dimensions.width
                      )}
                    >
                      {agentLicenseFile?.name}
                    </Text>
                  </View>
                </Pressable>
              )}
            </>
          </View>
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
            <PickerItem
              style={StyleSheet.applyWidth({ margin: 5 }, dimensions.width)}
            />
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
            placeholder={'+95 Mobile Number'}
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
                  comp_regi: companyRegNo,
                  agent_license: agentLicense,
                  agent_name: agentName,
                  prefer_paths: multiSelectPickerValue2,
                  email: contactPersonEmail,
                  mobile: contactPersonPhone,
                  password: contactPersonPassword,
                  refer_code: referCode,
                  name: contactPersonName,
                });
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
