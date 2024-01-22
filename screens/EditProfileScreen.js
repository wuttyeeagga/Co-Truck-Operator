import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import openImagePickerUtil from '../utils/openImagePicker';
import useWindowDimensions from '../utils/useWindowDimensions';
import {
  Button,
  Icon,
  MultiSelectPicker,
  NumberInput,
  PickerItem,
  ScreenContainer,
  TextInput,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Image, Text, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const EditProfileScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const [agentLicense, setAgentLicense] = React.useState('wee112');
  const [companyName, setCompanyName] = React.useState('BAN NA BAN WA');
  const [companyPhone, setCompanyPhone] = React.useState('09782100468');
  const [contactPersonEmail, setContactPersonEmail] =
    React.useState('wee@gmail.com');
  const [contactPersonName, setContactPersonName] = React.useState('wee');
  const [contactPersonPhoneNumber, setContactPersonPhoneNumber] =
    React.useState('097882100468');
  const [datePickerValue, setDatePickerValue] = React.useState(new Date());
  const [isShown, setIsShown] = React.useState(false);
  const [multiSelectPickerValue, setMultiSelectPickerValue] = React.useState(
    []
  );
  const [numberInputValue, setNumberInputValue] = React.useState('');
  const [registerNumber, setRegisterNumber] = React.useState(872100);
  const [textAreaValue, setTextAreaValue] = React.useState('');
  const [textAreaValue2, setTextAreaValue2] = React.useState('');
  const [textInputValue, setTextInputValue] = React.useState('');
  const [textInputValue2, setTextInputValue2] = React.useState('');
  const [textInputValue3, setTextInputValue3] = React.useState('');
  const [pickerValue, setPickerValue] = React.useState(undefined);

  return (
    <ScreenContainer
      hasBottomSafeArea={true}
      hasSafeArea={true}
      scrollable={true}
    >
      {/* My Header */}
      <View
        style={StyleSheet.applyWidth(
          { alignItems: 'center', flexDirection: 'row', margin: 20 },
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
        {/* Title */}
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
          {'Edit Profile'}
        </Text>
      </View>

      <KeyboardAwareScrollView
        contentContainerStyle={StyleSheet.applyWidth(
          {
            flex: 1,
            justifyContent: 'space-between',
            paddingBottom: 20,
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 10,
          },
          dimensions.width
        )}
        keyboardShouldPersistTaps={'never'}
        showsVerticalScrollIndicator={true}
      >
        {/* Company Container */}
        <View
          style={StyleSheet.applyWidth(
            { marginBottom: 10, marginTop: 10 },
            dimensions.width
          )}
        >
          {/* Profile Pic */}
          <View style={StyleSheet.applyWidth({ margin: 10 }, dimensions.width)}>
            <View
              style={StyleSheet.applyWidth(
                { alignItems: 'center' },
                dimensions.width
              )}
            >
              <Image
                resizeMode={'cover'}
                source={Images.Ellipse21}
                style={StyleSheet.applyWidth(
                  {
                    borderRadius: 55,
                    height: 110,
                    position: 'absolute',
                    top: 5,
                    width: 110,
                  },
                  dimensions.width
                )}
              />
              <Touchable
                activeOpacity={0.8}
                disabledOpacity={0.8}
                onPress={() => {
                  const handler = async () => {
                    try {
                      await openImagePickerUtil({
                        mediaTypes: 'All',
                        allowsEditing: false,
                        quality: 0.2,
                      });
                    } catch (err) {
                      console.error(err);
                    }
                  };
                  handler();
                }}
              >
                <Image
                  resizeMode={'cover'}
                  source={Images.EditProfile}
                  style={StyleSheet.applyWidth(
                    { height: 137, width: 120 },
                    dimensions.width
                  )}
                />
              </Touchable>
            </View>
          </View>
          {/* Company Name View */}
          <View>
            {/* Company Name */}
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
              style={StyleSheet.applyWidth(
                {
                  borderBottomWidth: 1,
                  borderColor: theme.colors['Light'],
                  borderLeftWidth: 1,
                  borderRadius: 12,
                  borderRightWidth: 1,
                  borderTopWidth: 1,
                  fontFamily: 'Inter_400Regular',
                  height: 48,
                  margin: 10,
                  paddingBottom: 8,
                  paddingLeft: 12,
                  paddingRight: 20,
                  paddingTop: 8,
                },
                dimensions.width
              )}
              value={companyName}
            />
          </View>
          {/* Company Phone View */}
          <View>
            {/* Company Phone */}
            <TextInput
              autoCapitalize={'none'}
              onChangeText={newCompanyPhoneValue => {
                try {
                  setCompanyPhone(newCompanyPhoneValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              placeholder={'Company Phone Number'}
              style={StyleSheet.applyWidth(
                {
                  borderBottomWidth: 1,
                  borderColor: theme.colors['Light'],
                  borderLeftWidth: 1,
                  borderRadius: 12,
                  borderRightWidth: 1,
                  borderTopWidth: 1,
                  fontFamily: 'Inter_400Regular',
                  height: 48,
                  margin: 10,
                  marginTop: 8,
                  paddingBottom: 8,
                  paddingLeft: 12,
                  paddingRight: 20,
                  paddingTop: 8,
                },
                dimensions.width
              )}
              value={companyPhone}
            />
          </View>
          {/* Company Registration Number */}
          <View>
            {/* Company Registration Number */}
            <NumberInput
              allowFontScaling={true}
              changeTextDelay={500}
              onChangeText={newCompanyRegistrationNumberValue => {
                try {
                  setRegisterNumber(newCompanyRegistrationNumberValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              placeholder={'Company Registration Number'}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.NumberInputStyles(theme)['Number Input'],
                  {
                    borderColor: theme.colors['Light'],
                    borderRadius: 12,
                    height: 48,
                    margin: 10,
                    paddingLeft: 12,
                  }
                ),
                dimensions.width
              )}
              value={registerNumber}
            />
          </View>
          {/* Certificate View */}
          <View>
            {/* Image Container */}
            <>
              {!isShown ? null : (
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: 10,
                    },
                    dimensions.width
                  )}
                >
                  <Image
                    resizeMode={'cover'}
                    source={{ uri: '' }}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.ImageStyles(theme)['Image 3'],
                        { height: 150, width: 150 }
                      ),
                      dimensions.width
                    )}
                  />
                </View>
              )}
            </>
            {/* Upload Image Button */}
            <Touchable
              onPress={() => {
                const handler = async () => {
                  try {
                    const results = await openImagePickerUtil({
                      mediaTypes: 'All',
                      allowsEditing: false,
                      quality: 0.2,
                    });

                    setIsShown(results);
                  } catch (err) {
                    console.error(err);
                  }
                };
                handler();
              }}
            >
              {/* Upload View */}
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'center',
                    borderRadius: 8,
                    borderStyle: 'dashed',
                    borderWidth: 1,
                    justifyContent: 'center',
                    margin: 20,
                    padding: 20,
                  },
                  dimensions.width
                )}
              >
                <Icon
                  name={'AntDesign/pluscircle'}
                  size={24}
                  style={StyleSheet.applyWidth(
                    {
                      marginBottom: 5,
                      marginLeft: 5,
                      marginRight: 5,
                      marginTop: 5,
                    },
                    dimensions.width
                  )}
                />
                {/* Button Text */}
                <Text
                  accessible={true}
                  allowFontScaling={true}
                  style={StyleSheet.applyWidth(
                    GlobalStyles.TextStyles(theme)['Text 2'],
                    dimensions.width
                  )}
                >
                  {'Upload Certificate'}
                </Text>
              </View>
            </Touchable>
          </View>
          {/* Agent License View */}
          <View>
            {/* Agent License */}
            <TextInput
              allowFontScaling={true}
              autoCapitalize={'none'}
              changeTextDelay={500}
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
                StyleSheet.compose(
                  GlobalStyles.TextInputStyles(theme)['Text Input'],
                  {
                    borderColor: theme.colors['Light'],
                    borderRadius: 12,
                    height: 48,
                    margin: 10,
                    paddingLeft: 12,
                  }
                ),
                dimensions.width
              )}
              value={agentLicense}
            />
          </View>
          {/* Select Paths View */}
          <View>
            {/* Choose Preferred Paths */}
            <MultiSelectPicker
              autoDismissKeyboard={true}
              dropDownBackgroundColor={theme.colors.background}
              dropDownBorderColor={theme.colors.divider}
              dropDownBorderRadius={8}
              dropDownBorderWidth={1}
              dropDownTextColor={theme.colors.strong}
              iconSize={24}
              leftIconMode={'inset'}
              onValueChange={newChoosePreferredPathsValue => {
                const pickerValue = newChoosePreferredPathsValue;
                try {
                  setMultiSelectPickerValue(newChoosePreferredPathsValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              placeholder={'Choose preferred paths'}
              selectedIconColor={theme.colors.strong}
              selectedIconName={'Feather/check'}
              selectedIconSize={20}
              style={StyleSheet.applyWidth(
                {
                  borderColor: theme.colors['Light'],
                  borderRadius: 12,
                  margin: 10,
                  paddingBottom: 8,
                  paddingLeft: 8,
                  paddingRight: 8,
                  paddingTop: 8,
                },
                dimensions.width
              )}
              type={'solid'}
              value={multiSelectPickerValue}
            ></MultiSelectPicker>
          </View>
        </View>
        {/* Contact Person Container */}
        <View
          style={StyleSheet.applyWidth(
            { marginBottom: 10, marginTop: 10 },
            dimensions.width
          )}
        >
          {/* Sub Titl3 */}
          <Text
            accessible={true}
            allowFontScaling={true}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                fontFamily: 'System',
                fontSize: 16,
                fontWeight: '600',
                margin: 10,
              }),
              dimensions.width
            )}
          >
            {'Contact Person Details'}
          </Text>
          {/* Contact Person Name */}
          <View>
            {/* Contact Person Name */}
            <TextInput
              allowFontScaling={true}
              autoCapitalize={'none'}
              changeTextDelay={500}
              onChangeText={newContactPersonNameValue => {
                try {
                  setContactPersonName(newContactPersonNameValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              placeholder={'Enter a value...'}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextInputStyles(theme)['Text Input'],
                  {
                    borderColor: theme.colors['Light'],
                    borderRadius: 12,
                    height: 48,
                    margin: 10,
                    paddingLeft: 12,
                  }
                ),
                dimensions.width
              )}
              value={contactPersonName}
            />
          </View>
          {/* Contact Person Email */}
          <View>
            {/* Contact Person Email */}
            <TextInput
              allowFontScaling={true}
              autoCapitalize={'none'}
              changeTextDelay={500}
              onChangeText={newContactPersonEmailValue => {
                try {
                  setContactPersonEmail(newContactPersonEmailValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              placeholder={'Enter a value...'}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextInputStyles(theme)['Text Input'],
                  {
                    borderColor: theme.colors['Light'],
                    borderRadius: 12,
                    height: 48,
                    margin: 12,
                    paddingLeft: 12,
                  }
                ),
                dimensions.width
              )}
              value={contactPersonEmail}
            />
          </View>
          {/* Contact Person Phone Number */}
          <View>
            {/* Contact Person Phone */}
            <TextInput
              allowFontScaling={true}
              autoCapitalize={'none'}
              changeTextDelay={500}
              onChangeText={newContactPersonPhoneValue => {
                try {
                  setContactPersonPhoneNumber(newContactPersonPhoneValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              placeholder={'Enter a value...'}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextInputStyles(theme)['Text Input'],
                  {
                    borderColor: theme.colors['Light'],
                    borderRadius: 12,
                    height: 48,
                    margin: 10,
                    paddingLeft: 12,
                  }
                ),
                dimensions.width
              )}
              value={contactPersonPhoneNumber}
            />
          </View>
        </View>
        <Button
          onPress={() => {
            try {
              navigation.navigate('CompanyInformationScreen');
            } catch (err) {
              console.error(err);
            }
          }}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.ButtonStyles(theme)['Button'], {
              borderRadius: 12,
              height: 48,
              margin: 10,
            }),
            dimensions.width
          )}
          title={'Update Profile'}
        />
      </KeyboardAwareScrollView>
    </ScreenContainer>
  );
};

export default withTheme(EditProfileScreen);
