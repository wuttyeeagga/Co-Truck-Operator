import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as CotruckApi from '../apis/CotruckApi.js';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import {
  Button,
  Divider,
  Icon,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { ActivityIndicator, Image, Text, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Fetch } from 'react-request';

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
        <CotruckApi.FetchCompanyInformationPOST id={120}>
          {({ loading, error, data, refetchCompanyInformation }) => {
            const fetchData = data?.json;
            if (loading) {
              return (
                <>
                  {/* loading */}
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        alignItems: 'center',
                        flex: 1,
                        justifyContent: 'center',
                      },
                      dimensions.width
                    )}
                  >
                    <ActivityIndicator
                      animating={true}
                      color={'rgba(0, 0, 0, 0)'}
                      hidesWhenStopped={true}
                      size={'large'}
                      style={StyleSheet.applyWidth(
                        GlobalStyles.ActivityIndicatorStyles(theme)[
                          'Activity Indicator'
                        ],
                        dimensions.width
                      )}
                    />
                  </View>
                </>
              );
            }

            if (error || data?.status < 200 || data?.status >= 300) {
              return <ActivityIndicator />;
            }

            return (
              <>
                {/* Company Info View */}
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
                        source={{ uri: `${fetchData?.data?.user_image}` }}
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
                      <Image
                        resizeMode={'cover'}
                        source={Images.EditProfile}
                        style={StyleSheet.applyWidth(
                          { height: 137, width: 120 },
                          dimensions.width
                        )}
                      />
                    </View>
                  </View>
                  {/* Name Row */}
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        alignItems: 'center',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        margin: 10,
                        marginTop: 20,
                      },
                      dimensions.width
                    )}
                  >
                    {/* Name View */}
                    <View
                      style={StyleSheet.applyWidth(
                        { width: '45%' },
                        dimensions.width
                      )}
                    >
                      {/* Name */}
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
                    </View>
                    {/* Icon View */}
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '5%',
                        },
                        dimensions.width
                      )}
                    >
                      <Icon name={'Entypo/dots-two-vertical'} size={20} />
                    </View>
                    {/* Name View */}
                    <View
                      style={StyleSheet.applyWidth(
                        { alignItems: 'flex-start', width: '45%' },
                        dimensions.width
                      )}
                    >
                      {/* Company Name */}
                      <Text
                        accessible={true}
                        allowFontScaling={true}
                        style={StyleSheet.applyWidth(
                          GlobalStyles.TextStyles(theme)['Text 2'],
                          dimensions.width
                        )}
                      >
                        {fetchData?.data?.comp_name}
                      </Text>
                    </View>
                  </View>
                  <Divider
                    color={theme.colors['CoTruckGrey']}
                    style={StyleSheet.applyWidth(
                      GlobalStyles.DividerStyles(theme)['Divider'],
                      dimensions.width
                    )}
                  />
                  {/* Mobile Row */}
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
                    {/* Mobile View */}
                    <View
                      style={StyleSheet.applyWidth(
                        { width: '45%' },
                        dimensions.width
                      )}
                    >
                      {/* Mobile Number */}
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
                    </View>
                    {/* Icon View */}
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '5%',
                        },
                        dimensions.width
                      )}
                    >
                      <Icon name={'Entypo/dots-two-vertical'} size={20} />
                    </View>
                    {/* Mobile View */}
                    <View
                      style={StyleSheet.applyWidth(
                        { alignItems: 'flex-start', width: '45%' },
                        dimensions.width
                      )}
                    >
                      {/* Company Mobile */}
                      <Text
                        accessible={true}
                        allowFontScaling={true}
                        style={StyleSheet.applyWidth(
                          GlobalStyles.TextStyles(theme)['Text 2'],
                          dimensions.width
                        )}
                      >
                        {fetchData?.data?.comp_number}
                      </Text>
                    </View>
                  </View>
                  {/* Divider 3 */}
                  <Divider
                    color={theme.colors['CoTruckGrey']}
                    style={StyleSheet.applyWidth(
                      GlobalStyles.DividerStyles(theme)['Divider'],
                      dimensions.width
                    )}
                  />
                  {/* Registration Row */}
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
                    {/* Regi View */}
                    <View
                      style={StyleSheet.applyWidth(
                        { width: '45%' },
                        dimensions.width
                      )}
                    >
                      {/* Regi Number */}
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
                    </View>
                    {/* Icon View */}
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '5%',
                        },
                        dimensions.width
                      )}
                    >
                      <Icon name={'Entypo/dots-two-vertical'} size={20} />
                    </View>
                    {/* Regi View */}
                    <View
                      style={StyleSheet.applyWidth(
                        { alignItems: 'flex-start', width: '45%' },
                        dimensions.width
                      )}
                    >
                      {/* Regi Number */}
                      <Text
                        accessible={true}
                        allowFontScaling={true}
                        style={StyleSheet.applyWidth(
                          GlobalStyles.TextStyles(theme)['Text 2'],
                          dimensions.width
                        )}
                      >
                        {fetchData?.data?.reg_no}
                      </Text>
                    </View>
                  </View>
                  {/* Divider 4 */}
                  <Divider
                    color={theme.colors['CoTruckGrey']}
                    style={StyleSheet.applyWidth(
                      GlobalStyles.DividerStyles(theme)['Divider'],
                      dimensions.width
                    )}
                  />
                  {/* Agent License Row */}
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
                    {/* License View */}
                    <View
                      style={StyleSheet.applyWidth(
                        { width: '45%' },
                        dimensions.width
                      )}
                    >
                      {/* Agent License */}
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
                    </View>
                    {/* Icon View */}
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '5%',
                        },
                        dimensions.width
                      )}
                    >
                      <Icon name={'Entypo/dots-two-vertical'} size={20} />
                    </View>
                    {/* License View */}
                    <View
                      style={StyleSheet.applyWidth(
                        { alignItems: 'flex-start', width: '45%' },
                        dimensions.width
                      )}
                    >
                      {/* Agent License */}
                      <Text
                        accessible={true}
                        allowFontScaling={true}
                        style={StyleSheet.applyWidth(
                          GlobalStyles.TextStyles(theme)['Text 2'],
                          dimensions.width
                        )}
                      >
                        {fetchData?.data?.agent_license}
                      </Text>
                    </View>
                  </View>
                  {/* Divider 5 */}
                  <Divider
                    color={theme.colors['CoTruckGrey']}
                    style={StyleSheet.applyWidth(
                      GlobalStyles.DividerStyles(theme)['Divider'],
                      dimensions.width
                    )}
                  />
                  {/* Certificate Row */}
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
                    {/* Certificate View */}
                    <View
                      style={StyleSheet.applyWidth(
                        { width: '45%' },
                        dimensions.width
                      )}
                    >
                      {/* Certificate */}
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
                    </View>
                    {/* Icon View */}
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '5%',
                        },
                        dimensions.width
                      )}
                    >
                      <Icon name={'Entypo/dots-two-vertical'} size={20} />
                    </View>
                    {/* Certificate View */}
                    <View
                      style={StyleSheet.applyWidth(
                        { alignItems: 'flex-start', width: '45%' },
                        dimensions.width
                      )}
                    >
                      <Image
                        resizeMode={'cover'}
                        source={{ uri: `${fetchData?.data?.certificate}` }}
                        style={StyleSheet.applyWidth(
                          StyleSheet.compose(
                            GlobalStyles.ImageStyles(theme)['Image 3'],
                            { height: 50, width: 50 }
                          ),
                          dimensions.width
                        )}
                      />
                    </View>
                  </View>
                  {/* Divider 6 */}
                  <Divider
                    color={theme.colors['CoTruckGrey']}
                    style={StyleSheet.applyWidth(
                      GlobalStyles.DividerStyles(theme)['Divider'],
                      dimensions.width
                    )}
                  />
                  {/* Path Row */}
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
                    {/* Path View */}
                    <View
                      style={StyleSheet.applyWidth(
                        { width: '45%' },
                        dimensions.width
                      )}
                    >
                      {/* Path */}
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
                    </View>
                    {/* Icon View */}
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '5%',
                        },
                        dimensions.width
                      )}
                    >
                      <Icon name={'Entypo/dots-two-vertical'} size={20} />
                    </View>
                    {/* Path View */}
                    <View
                      style={StyleSheet.applyWidth(
                        { alignItems: 'flex-start', width: '45%' },
                        dimensions.width
                      )}
                    >
                      {/* Path */}
                      <Text
                        accessible={true}
                        allowFontScaling={true}
                        style={StyleSheet.applyWidth(
                          GlobalStyles.TextStyles(theme)['Text 2'],
                          dimensions.width
                        )}
                      >
                        {fetchData?.data?.is_preferred_paths}
                      </Text>
                    </View>
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
                {/* Contact Person Info View */}
                <View>
                  {/* SubTitle */}
                  <Text
                    accessible={true}
                    allowFontScaling={true}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.TextStyles(theme)['Text'],
                        {
                          fontFamily: 'System',
                          fontSize: 16,
                          fontWeight: '600',
                          marginBottom: 20,
                          marginTop: 20,
                        }
                      ),
                      dimensions.width
                    )}
                  >
                    {'Contact Person Details'}
                  </Text>
                  {/* Contact Name Row */}
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
                    {/* Contact Name View */}
                    <View
                      style={StyleSheet.applyWidth(
                        { width: '45%' },
                        dimensions.width
                      )}
                    >
                      {/* Contact Name */}
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
                    </View>
                    {/* Icon View */}
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '5%',
                        },
                        dimensions.width
                      )}
                    >
                      <Icon name={'Entypo/dots-two-vertical'} size={20} />
                    </View>
                    {/* Contact Name View */}
                    <View
                      style={StyleSheet.applyWidth(
                        { alignItems: 'flex-start', width: '45%' },
                        dimensions.width
                      )}
                    >
                      {/* Contact Name */}
                      <Text
                        accessible={true}
                        allowFontScaling={true}
                        style={StyleSheet.applyWidth(
                          GlobalStyles.TextStyles(theme)['Text 2'],
                          dimensions.width
                        )}
                      >
                        {fetchData?.data?.name}
                      </Text>
                    </View>
                  </View>
                  <Divider
                    color={theme.colors.divider}
                    style={StyleSheet.applyWidth(
                      GlobalStyles.DividerStyles(theme)['Divider'],
                      dimensions.width
                    )}
                  />
                  {/* Mobile Number Row */}
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
                    {/* Mobile Number View */}
                    <View
                      style={StyleSheet.applyWidth(
                        { width: '45%' },
                        dimensions.width
                      )}
                    >
                      {/* Mobile Number */}
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
                    </View>
                    {/* Icon View */}
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '5%',
                        },
                        dimensions.width
                      )}
                    >
                      <Icon name={'Entypo/dots-two-vertical'} size={20} />
                    </View>
                    {/* Mobile Number View */}
                    <View
                      style={StyleSheet.applyWidth(
                        { alignItems: 'flex-start', width: '45%' },
                        dimensions.width
                      )}
                    >
                      {/* Mobile Number */}
                      <Text
                        accessible={true}
                        allowFontScaling={true}
                        style={StyleSheet.applyWidth(
                          GlobalStyles.TextStyles(theme)['Text 2'],
                          dimensions.width
                        )}
                      >
                        {fetchData?.data?.mobile}
                      </Text>
                    </View>
                  </View>
                  {/* Divider 2 */}
                  <Divider
                    color={theme.colors.divider}
                    style={StyleSheet.applyWidth(
                      GlobalStyles.DividerStyles(theme)['Divider'],
                      dimensions.width
                    )}
                  />
                  {/* Email Row */}
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
                    {/* Email View */}
                    <View
                      style={StyleSheet.applyWidth(
                        { width: '45%' },
                        dimensions.width
                      )}
                    >
                      {/* Email */}
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
                    </View>
                    {/* Icon View */}
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '5%',
                        },
                        dimensions.width
                      )}
                    >
                      <Icon name={'Entypo/dots-two-vertical'} size={20} />
                    </View>
                    {/* Email View */}
                    <View
                      style={StyleSheet.applyWidth(
                        { alignItems: 'flex-start', width: '45%' },
                        dimensions.width
                      )}
                    >
                      {/* Email */}
                      <Text
                        accessible={true}
                        allowFontScaling={true}
                        style={StyleSheet.applyWidth(
                          GlobalStyles.TextStyles(theme)['Text 2'],
                          dimensions.width
                        )}
                      >
                        {fetchData?.data?.email}
                      </Text>
                    </View>
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
              </>
            );
          }}
        </CotruckApi.FetchCompanyInformationPOST>
      </KeyboardAwareScrollView>
    </ScreenContainer>
  );
};

export default withTheme(CompanyInformationScreen);
