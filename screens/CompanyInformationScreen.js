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
  NumberInput,
  ScreenContainer,
  TextInput,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Image, Text, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const CompanyInformationScreen = props => {
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
  const [numberInputValue, setNumberInputValue] = React.useState('');
  const [registerNumber, setRegisterNumber] = React.useState(872100);
  const [textAreaValue, setTextAreaValue] = React.useState('');
  const [textAreaValue2, setTextAreaValue2] = React.useState('');
  const [textInputValue, setTextInputValue] = React.useState('');
  const [textInputValue2, setTextInputValue2] = React.useState('');
  const [textInputValue3, setTextInputValue3] = React.useState('');

  return (
    <ScreenContainer
      hasBottomSafeArea={true}
      hasSafeArea={true}
      scrollable={true}
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
              navigation.navigate('BottomTabNavigator', {
                screen: 'SettingsScreen',
              });
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
          {'Company Information'}
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
            paddingTop: 20,
          },
          dimensions.width
        )}
        keyboardShouldPersistTaps={'never'}
        showsVerticalScrollIndicator={true}
      >
        <View>
          {/* Profile Pic */}
          <View>
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
          {/* Full name */}
          <View>
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontFamily: 'Inter_400Regular',
                  opacity: 0.85,
                },
                dimensions.width
              )}
            >
              {'Company Details'}
            </Text>
            <TextInput
              autoCapitalize={'none'}
              onChangeText={newTextInputValue => {
                try {
                  setCompanyName(newTextInputValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              placeholder={'Enter a value...'}
              style={StyleSheet.applyWidth(
                {
                  borderBottomWidth: 1,
                  borderColor: theme.colors['Light'],
                  borderLeftWidth: 1,
                  borderRadius: 8,
                  borderRightWidth: 1,
                  borderTopWidth: 1,
                  fontFamily: 'Inter_400Regular',
                  height: 48,
                  marginTop: 8,
                  paddingBottom: 8,
                  paddingLeft: 20,
                  paddingRight: 20,
                  paddingTop: 8,
                },
                dimensions.width
              )}
              value={companyName}
            />
          </View>
          {/* Phone Number */}
          <View
            style={StyleSheet.applyWidth({ marginTop: 20 }, dimensions.width)}
          >
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontFamily: 'Inter_400Regular',
                  opacity: 0.85,
                },
                dimensions.width
              )}
            >
              {'Phone Number'}
            </Text>
            <TextInput
              autoCapitalize={'none'}
              onChangeText={newTextInputValue => {
                try {
                  setCompanyPhone(newTextInputValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              placeholder={'Enter a value...'}
              style={StyleSheet.applyWidth(
                {
                  borderBottomWidth: 1,
                  borderColor: theme.colors['Light'],
                  borderLeftWidth: 1,
                  borderRadius: 8,
                  borderRightWidth: 1,
                  borderTopWidth: 1,
                  fontFamily: 'Inter_400Regular',
                  height: 48,
                  marginTop: 8,
                  paddingBottom: 8,
                  paddingLeft: 20,
                  paddingRight: 20,
                  paddingTop: 8,
                },
                dimensions.width
              )}
              value={companyPhone}
            />
          </View>
          {/* Company Registration Number */}
          <View
            style={StyleSheet.applyWidth({ marginTop: 20 }, dimensions.width)}
          >
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontFamily: 'Inter_400Regular',
                  opacity: 0.85,
                },
                dimensions.width
              )}
            >
              {'Company Registration Number'}
            </Text>
            <NumberInput
              allowFontScaling={true}
              changeTextDelay={500}
              onChangeText={newNumberInputValue => {
                try {
                  setRegisterNumber(newNumberInputValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              placeholder={'Enter a number...'}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.NumberInputStyles(theme)['Number Input'],
                  { marginBottom: 10, marginTop: 10 }
                ),
                dimensions.width
              )}
              value={registerNumber}
            />
          </View>
          {/* Agent License */}
          <View
            style={StyleSheet.applyWidth({ marginTop: 20 }, dimensions.width)}
          >
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontFamily: 'Inter_400Regular',
                  opacity: 0.85,
                },
                dimensions.width
              )}
            >
              {'Agent License'}
            </Text>
            <TextInput
              allowFontScaling={true}
              autoCapitalize={'none'}
              changeTextDelay={500}
              onChangeText={newTextInputValue => {
                try {
                  setAgentLicense(newTextInputValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              placeholder={'Enter a value...'}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextInputStyles(theme)['Text Input'],
                  { marginBottom: 10, marginTop: 10 }
                ),
                dimensions.width
              )}
              value={agentLicense}
            />
          </View>
        </View>
        {/* View 2 */}
        <View>
          <Text
            accessible={true}
            allowFontScaling={true}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                fontFamily: 'System',
                fontSize: 16,
                fontWeight: '600',
                marginBottom: 20,
                marginTop: 20,
              }),
              dimensions.width
            )}
          >
            {'Contact Person Details'}
          </Text>
          {/* Contact Person Name */}
          <View
            style={StyleSheet.applyWidth(
              { marginBottom: 10, marginTop: 10 },
              dimensions.width
            )}
          >
            <TextInput
              allowFontScaling={true}
              autoCapitalize={'none'}
              changeTextDelay={500}
              onChangeText={newTextInputValue => {
                try {
                  setContactPersonName(newTextInputValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              placeholder={'Enter a value...'}
              style={StyleSheet.applyWidth(
                GlobalStyles.TextInputStyles(theme)['Text Input'],
                dimensions.width
              )}
              value={contactPersonName}
            />
          </View>
          {/* Contact Person Email */}
          <View
            style={StyleSheet.applyWidth(
              { marginBottom: 10, marginTop: 10 },
              dimensions.width
            )}
          >
            <TextInput
              allowFontScaling={true}
              autoCapitalize={'none'}
              changeTextDelay={500}
              onChangeText={newTextInputValue => {
                try {
                  setContactPersonEmail(newTextInputValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              placeholder={'Enter a value...'}
              style={StyleSheet.applyWidth(
                GlobalStyles.TextInputStyles(theme)['Text Input'],
                dimensions.width
              )}
              value={contactPersonEmail}
            />
          </View>
          {/* Contact Person Phone Number */}
          <View
            style={StyleSheet.applyWidth(
              { marginBottom: 10, marginTop: 10 },
              dimensions.width
            )}
          >
            <TextInput
              allowFontScaling={true}
              autoCapitalize={'none'}
              changeTextDelay={500}
              onChangeText={newTextInputValue => {
                try {
                  setContactPersonPhoneNumber(newTextInputValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              placeholder={'Enter a value...'}
              style={StyleSheet.applyWidth(
                GlobalStyles.TextInputStyles(theme)['Text Input'],
                dimensions.width
              )}
              value={contactPersonPhoneNumber}
            />
          </View>
        </View>
        {/* Edit Profile */}
        <Button
          activeOpacity={0.8}
          disabledOpacity={0.8}
          onPress={() => {
            try {
              navigation.navigate('EditProfileScreen');
            } catch (err) {
              console.error(err);
            }
          }}
          style={StyleSheet.applyWidth(
            {
              backgroundColor: theme.colors.primary,
              borderRadius: 12,
              fontFamily: 'System',
              fontWeight: '700',
              height: 52,
              marginTop: 20,
              textAlign: 'center',
            },
            dimensions.width
          )}
          title={'Edit Profile'}
        />
      </KeyboardAwareScrollView>
    </ScreenContainer>
  );
};

export default withTheme(CompanyInformationScreen);
