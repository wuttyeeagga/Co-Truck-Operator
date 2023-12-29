import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import openImagePickerUtil from '../utils/openImagePicker';
import useWindowDimensions from '../utils/useWindowDimensions';
import {
  Button,
  Divider,
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
          {/* Row */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
                margin: 10,
              },
              dimensions.width
            )}
          >
            <Text
              accessible={true}
              allowFontScaling={true}
              style={StyleSheet.applyWidth(
                GlobalStyles.TextStyles(theme)['Text 2'],
                dimensions.width
              )}
            >
              {'Name'}
            </Text>
            <Icon name={'Entypo/dots-two-vertical'} size={20} />
            {/* Text 2 */}
            <Text
              accessible={true}
              allowFontScaling={true}
              style={StyleSheet.applyWidth(
                GlobalStyles.TextStyles(theme)['Text 2'],
                dimensions.width
              )}
            >
              {'Toperator comp 1'}
            </Text>
          </View>
          <Divider
            color={theme.colors['CoTruckGrey']}
            style={StyleSheet.applyWidth(
              GlobalStyles.DividerStyles(theme)['Divider'],
              dimensions.width
            )}
          />
          {/* Row 2 */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
                margin: 10,
              },
              dimensions.width
            )}
          >
            <Text
              accessible={true}
              allowFontScaling={true}
              style={StyleSheet.applyWidth(
                GlobalStyles.TextStyles(theme)['Text 2'],
                dimensions.width
              )}
            >
              {'Mobile Number'}
            </Text>
            <Icon name={'Entypo/dots-two-vertical'} size={20} />
            {/* Text 2 */}
            <Text
              accessible={true}
              allowFontScaling={true}
              style={StyleSheet.applyWidth(
                GlobalStyles.TextStyles(theme)['Text 2'],
                dimensions.width
              )}
            >
              {'128641111'}
            </Text>
          </View>
          {/* Divider 3 */}
          <Divider
            color={theme.colors['CoTruckGrey']}
            style={StyleSheet.applyWidth(
              GlobalStyles.DividerStyles(theme)['Divider'],
              dimensions.width
            )}
          />
          {/* Row 3 */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
                margin: 10,
              },
              dimensions.width
            )}
          >
            <Text
              accessible={true}
              allowFontScaling={true}
              style={StyleSheet.applyWidth(
                GlobalStyles.TextStyles(theme)['Text 2'],
                dimensions.width
              )}
            >
              {'Registration No.'}
            </Text>
            <Icon name={'Entypo/dots-two-vertical'} size={20} />
            {/* Text 2 */}
            <Text
              accessible={true}
              allowFontScaling={true}
              style={StyleSheet.applyWidth(
                GlobalStyles.TextStyles(theme)['Text 2'],
                dimensions.width
              )}
            >
              {'111111'}
            </Text>
          </View>
          {/* Divider 4 */}
          <Divider
            color={theme.colors['CoTruckGrey']}
            style={StyleSheet.applyWidth(
              GlobalStyles.DividerStyles(theme)['Divider'],
              dimensions.width
            )}
          />
          {/* Row 4 */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
                margin: 10,
              },
              dimensions.width
            )}
          >
            <Text
              accessible={true}
              allowFontScaling={true}
              style={StyleSheet.applyWidth(
                GlobalStyles.TextStyles(theme)['Text 2'],
                dimensions.width
              )}
            >
              {'Agent License'}
            </Text>
            <Icon name={'Entypo/dots-two-vertical'} size={20} />
            {/* Text 2 */}
            <Text
              accessible={true}
              allowFontScaling={true}
              style={StyleSheet.applyWidth(
                GlobalStyles.TextStyles(theme)['Text 2'],
                dimensions.width
              )}
            >
              {'1111'}
            </Text>
          </View>
          {/* Divider 5 */}
          <Divider
            color={theme.colors['CoTruckGrey']}
            style={StyleSheet.applyWidth(
              GlobalStyles.DividerStyles(theme)['Divider'],
              dimensions.width
            )}
          />
          {/* Row 5 */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
                margin: 10,
              },
              dimensions.width
            )}
          >
            <Text
              accessible={true}
              allowFontScaling={true}
              style={StyleSheet.applyWidth(
                GlobalStyles.TextStyles(theme)['Text 2'],
                dimensions.width
              )}
            >
              {'Certificate'}
            </Text>
            <Icon name={'Entypo/dots-two-vertical'} size={20} />
            {/* Text 2 */}
            <Text
              accessible={true}
              allowFontScaling={true}
              style={StyleSheet.applyWidth(
                GlobalStyles.TextStyles(theme)['Text 2'],
                dimensions.width
              )}
            >
              {'uploads/users/11600864312.jpg'}
            </Text>
          </View>
          {/* Divider 6 */}
          <Divider
            color={theme.colors['CoTruckGrey']}
            style={StyleSheet.applyWidth(
              GlobalStyles.DividerStyles(theme)['Divider'],
              dimensions.width
            )}
          />
          {/* Row 6 */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
                margin: 10,
              },
              dimensions.width
            )}
          >
            <Text
              accessible={true}
              allowFontScaling={true}
              style={StyleSheet.applyWidth(
                GlobalStyles.TextStyles(theme)['Text 2'],
                dimensions.width
              )}
            >
              {'Path selected'}
            </Text>
            <Icon name={'Entypo/dots-two-vertical'} size={20} />
            {/* Text 2 */}
            <Text
              accessible={true}
              allowFontScaling={true}
              style={StyleSheet.applyWidth(
                GlobalStyles.TextStyles(theme)['Text 2'],
                dimensions.width
              )}
            >
              {
                'Asia World Port Terminal (AWPT), Myanmar Industrial Port (MIP), Myanmar International Terminal Thilawa (MITT), Shwe Phi Thar, Hlaing Thar Yar, Mingalar Don, East Dagon, South Dagon, North Dagon, အနောက်ဒဂုံ'
              }
            </Text>
          </View>
          {/* Divider 2 */}
          <Divider
            color={theme.colors['CoTruckGrey']}
            style={StyleSheet.applyWidth(
              GlobalStyles.DividerStyles(theme)['Divider'],
              dimensions.width
            )}
          />
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
          {/* sampleRow */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
                margin: 10,
              },
              dimensions.width
            )}
          >
            <Text
              accessible={true}
              allowFontScaling={true}
              style={StyleSheet.applyWidth(
                GlobalStyles.TextStyles(theme)['Text 2'],
                dimensions.width
              )}
            >
              {'Name'}
            </Text>
            <Icon name={'Entypo/dots-two-vertical'} size={20} />
            {/* Text 2 */}
            <Text
              accessible={true}
              allowFontScaling={true}
              style={StyleSheet.applyWidth(
                GlobalStyles.TextStyles(theme)['Text 2'],
                dimensions.width
              )}
            >
              {'Toperator one'}
            </Text>
          </View>
          <Divider
            color={theme.colors.divider}
            style={StyleSheet.applyWidth(
              GlobalStyles.DividerStyles(theme)['Divider'],
              dimensions.width
            )}
          />
          {/* sampleRow 2 */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
                margin: 10,
              },
              dimensions.width
            )}
          >
            <Text
              accessible={true}
              allowFontScaling={true}
              style={StyleSheet.applyWidth(
                GlobalStyles.TextStyles(theme)['Text 2'],
                dimensions.width
              )}
            >
              {'Mobile Number'}
            </Text>
            <Icon name={'Entypo/dots-two-vertical'} size={20} />
            {/* Text 2 */}
            <Text
              accessible={true}
              allowFontScaling={true}
              style={StyleSheet.applyWidth(
                GlobalStyles.TextStyles(theme)['Text 2'],
                dimensions.width
              )}
            >
              {'09776001177'}
            </Text>
          </View>
          {/* Divider 2 */}
          <Divider
            color={theme.colors.divider}
            style={StyleSheet.applyWidth(
              GlobalStyles.DividerStyles(theme)['Divider'],
              dimensions.width
            )}
          />
          {/* sampleRow 3 */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
                margin: 10,
              },
              dimensions.width
            )}
          >
            <Text
              accessible={true}
              allowFontScaling={true}
              style={StyleSheet.applyWidth(
                GlobalStyles.TextStyles(theme)['Text 2'],
                dimensions.width
              )}
            >
              {'Email'}
            </Text>
            <Icon name={'Entypo/dots-two-vertical'} size={20} />
            {/* Text 2 */}
            <Text
              accessible={true}
              allowFontScaling={true}
              style={StyleSheet.applyWidth(
                GlobalStyles.TextStyles(theme)['Text 2'],
                dimensions.width
              )}
            >
              {'mayur@innogyasia.com'}
            </Text>
          </View>
          {/* Divider 3 */}
          <Divider
            color={theme.colors.divider}
            style={StyleSheet.applyWidth(
              GlobalStyles.DividerStyles(theme)['Divider'],
              dimensions.width
            )}
          />
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
