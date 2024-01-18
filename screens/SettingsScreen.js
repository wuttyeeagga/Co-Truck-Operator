import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as CotruckApi from '../apis/CotruckApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import showAlertUtil from '../utils/showAlert';
import useWindowDimensions from '../utils/useWindowDimensions';
import {
  Divider,
  Icon,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Image, Text, View } from 'react-native';

const SettingsScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const cotruckLogOutPOST = CotruckApi.useLogOutPOST();

  return (
    <ScreenContainer hasSafeArea={true} scrollable={true}>
      {/* Tab Header */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0)',
            flexDirection: 'row',
            justifyContent: 'space-between',
          },
          dimensions.width
        )}
      >
        {/* Title Container */}
        <View
          style={StyleSheet.applyWidth(
            { alignItems: 'center', flexDirection: 'row' },
            dimensions.width
          )}
        >
          {/* Title View */}
          <View
            style={StyleSheet.applyWidth({ marginLeft: 10 }, dimensions.width)}
          >
            {/* Title */}
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontFamily: 'Inter_500Medium',
                  fontSize: 17,
                },
                dimensions.width
              )}
            >
              {'Settings'}
            </Text>
          </View>
        </View>

        <Touchable
          onPress={() => {
            try {
              navigation.navigate('BottomTabNavigator');
            } catch (err) {
              console.error(err);
            }
          }}
        >
          {/* Bell */}
          <Icon
            name={'Ionicons/ios-notifications-outline'}
            size={24}
            style={StyleSheet.applyWidth({ opacity: 0.5 }, dimensions.width)}
          />
        </Touchable>
      </View>
      {/* Info View */}
      <View
        style={StyleSheet.applyWidth(
          { alignItems: 'center', justifyContent: 'center' },
          dimensions.width
        )}
      >
        {/* Image View */}
        <View style={StyleSheet.applyWidth({ margin: 10 }, dimensions.width)}>
          {/* Profile Image */}
          <Image
            resizeMode={'cover'}
            source={{ uri: `${Constants['OWNER_INFO']?.certificate}` }}
            style={StyleSheet.applyWidth(
              GlobalStyles.ImageStyles(theme)['Image 3'],
              dimensions.width
            )}
          />
        </View>
        {/* View  */}
        <View style={StyleSheet.applyWidth({ margin: 10 }, dimensions.width)}>
          {/* Operator Name */}
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
            {Constants['OWNER_INFO']?.comp_name}
          </Text>
          {/* Operator Phone Number */}
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
            {Constants['OWNER_INFO']?.comp_number}
          </Text>
        </View>
      </View>
      {/* Content Wrapper */}
      <View
        style={StyleSheet.applyWidth(
          { flexGrow: 1, flexShrink: 0, marginLeft: 24, marginRight: 24 },
          dimensions.width
        )}
      >
        {/* Company Information */}
        <Touchable
          onPress={() => {
            try {
              navigation.navigate('CompanyInformationScreen');
            } catch (err) {
              console.error(err);
            }
          }}
        >
          {/* Row Wrapper */}
          <View
            style={StyleSheet.applyWidth(
              {
                flexDirection: 'row',
                height: 60,
                justifyContent: 'space-between',
              },
              dimensions.width
            )}
          >
            {/* Left Aligned */}
            <View
              style={StyleSheet.applyWidth(
                { alignItems: 'center', flex: 1, flexDirection: 'row' },
                dimensions.width
              )}
            >
              <Text
                allowFontScaling={true}
                ellipsizeMode={'tail'}
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors.strong,
                    fontFamily: 'System',
                    fontWeight: '600',
                    marginLeft: 12,
                  },
                  dimensions.width
                )}
                textBreakStrategy={'highQuality'}
              >
                {'Company Information'}
              </Text>
            </View>
            {/* Right Aligned */}
            <View
              style={StyleSheet.applyWidth(
                { alignItems: 'center', flexDirection: 'row' },
                dimensions.width
              )}
            >
              <Icon
                color={theme.colors.strong}
                name={'MaterialIcons/chevron-right'}
                size={24}
              />
            </View>
          </View>
          <Divider
            color={theme.colors.divider}
            height={1}
            style={StyleSheet.applyWidth({ height: 1 }, dimensions.width)}
          />
        </Touchable>
        {/* Identification Proof */}
        <Touchable
          onPress={() => {
            try {
              navigation.navigate('IdentityProofViewScreen');
            } catch (err) {
              console.error(err);
            }
          }}
        >
          {/* Row Wrapper */}
          <View
            style={StyleSheet.applyWidth(
              {
                flexDirection: 'row',
                height: 60,
                justifyContent: 'space-between',
              },
              dimensions.width
            )}
          >
            {/* Left Aligned */}
            <View
              style={StyleSheet.applyWidth(
                { alignItems: 'center', flex: 1, flexDirection: 'row' },
                dimensions.width
              )}
            >
              <Text
                allowFontScaling={true}
                ellipsizeMode={'tail'}
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors.strong,
                    fontFamily: 'System',
                    fontWeight: '600',
                    marginLeft: 12,
                  },
                  dimensions.width
                )}
                textBreakStrategy={'highQuality'}
              >
                {'Identification Proof'}
              </Text>
            </View>
            {/* Right Aligned */}
            <View
              style={StyleSheet.applyWidth(
                { alignItems: 'center', flexDirection: 'row' },
                dimensions.width
              )}
            >
              <Icon
                color={theme.colors.strong}
                name={'MaterialIcons/chevron-right'}
                size={24}
              />
            </View>
          </View>
          <Divider
            color={theme.colors.divider}
            height={1}
            style={StyleSheet.applyWidth({ height: 1 }, dimensions.width)}
          />
        </Touchable>
        {/* Manage Vehicle */}
        <Touchable
          onPress={() => {
            try {
              navigation.navigate('ManageVehicleScreen');
            } catch (err) {
              console.error(err);
            }
          }}
        >
          {/* Row Wrapper */}
          <View
            style={StyleSheet.applyWidth(
              {
                flexDirection: 'row',
                height: 60,
                justifyContent: 'space-between',
              },
              dimensions.width
            )}
          >
            {/* Left Aligned */}
            <View
              style={StyleSheet.applyWidth(
                { alignItems: 'center', flex: 1, flexDirection: 'row' },
                dimensions.width
              )}
            >
              <Text
                allowFontScaling={true}
                ellipsizeMode={'tail'}
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors.strong,
                    fontFamily: 'System',
                    fontSize: 14,
                    fontWeight: '600',
                    marginLeft: 12,
                  },
                  dimensions.width
                )}
                textBreakStrategy={'highQuality'}
              >
                {'Manage Vehicle'}
              </Text>
            </View>
            {/* Right Aligned */}
            <View
              style={StyleSheet.applyWidth(
                { alignItems: 'center', flexDirection: 'row' },
                dimensions.width
              )}
            >
              <Icon
                color={theme.colors.strong}
                name={'MaterialIcons/chevron-right'}
                size={24}
              />
            </View>
          </View>
          <Divider
            color={theme.colors.divider}
            height={1}
            style={StyleSheet.applyWidth({ height: 1 }, dimensions.width)}
          />
        </Touchable>
        {/* Manage Driver */}
        <Touchable
          onPress={() => {
            try {
              navigation.navigate('ManageDriverScreen');
            } catch (err) {
              console.error(err);
            }
          }}
        >
          {/* Row Wrapper */}
          <View
            style={StyleSheet.applyWidth(
              { flexDirection: 'column' },
              dimensions.width
            )}
          >
            {/* Row Container */}
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  flexDirection: 'row',
                  height: 60,
                  justifyContent: 'space-between',
                },
                dimensions.width
              )}
            >
              {/* Left Aligned */}
              <View
                style={StyleSheet.applyWidth(
                  { alignItems: 'center', flexDirection: 'row' },
                  dimensions.width
                )}
              >
                <Text
                  accessible={true}
                  allowFontScaling={true}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                      fontFamily: 'System',
                      fontWeight: '600',
                      marginLeft: 12,
                    }),
                    dimensions.width
                  )}
                >
                  {'Manage Driver'}
                </Text>
              </View>
              {/* Right Aligned */}
              <View
                style={StyleSheet.applyWidth(
                  { alignItems: 'center', flexDirection: 'row' },
                  dimensions.width
                )}
              >
                <Icon name={'Entypo/chevron-right'} size={24} />
              </View>
            </View>
            <Divider
              color={theme.colors.divider}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.DividerStyles(theme)['Divider'],
                  { height: 2 }
                ),
                dimensions.width
              )}
            />
          </View>
        </Touchable>
        {/* Refer */}
        <Touchable
          onPress={() => {
            try {
              navigation.navigate('ReferAFriendScreen');
            } catch (err) {
              console.error(err);
            }
          }}
        >
          {/* Row Wrapper */}
          <View
            style={StyleSheet.applyWidth(
              {
                flexDirection: 'row',
                height: 60,
                justifyContent: 'space-between',
              },
              dimensions.width
            )}
          >
            {/* Left Aligned */}
            <View
              style={StyleSheet.applyWidth(
                { alignItems: 'center', flex: 1, flexDirection: 'row' },
                dimensions.width
              )}
            >
              <Text
                allowFontScaling={true}
                ellipsizeMode={'tail'}
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors.strong,
                    fontFamily: 'System',
                    fontWeight: '600',
                    marginLeft: 12,
                  },
                  dimensions.width
                )}
                textBreakStrategy={'highQuality'}
              >
                {'Refer a friend'}
              </Text>
            </View>
            {/* Row Aligned */}
            <View
              style={StyleSheet.applyWidth(
                { alignItems: 'center', flexDirection: 'row' },
                dimensions.width
              )}
            >
              <Icon
                color={theme.colors.strong}
                name={'MaterialIcons/chevron-right'}
                size={24}
              />
            </View>
          </View>
          <Divider
            color={theme.colors.divider}
            height={1}
            style={StyleSheet.applyWidth({ height: 1 }, dimensions.width)}
          />
        </Touchable>
        {/* Change Password */}
        <Touchable
          onPress={() => {
            try {
              navigation.navigate('ChangePasswordScreen');
            } catch (err) {
              console.error(err);
            }
          }}
        >
          {/* Change Password */}
          <View
            style={StyleSheet.applyWidth(
              { flexDirection: 'column' },
              dimensions.width
            )}
          >
            {/* Row Container */}
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  flexDirection: 'row',
                  height: 60,
                  justifyContent: 'space-between',
                },
                dimensions.width
              )}
            >
              {/* Left Aligned */}
              <View
                style={StyleSheet.applyWidth(
                  { alignItems: 'center', flexDirection: 'row' },
                  dimensions.width
                )}
              >
                <Text
                  accessible={true}
                  allowFontScaling={true}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                      fontFamily: 'System',
                      fontWeight: '600',
                      marginLeft: 12,
                    }),
                    dimensions.width
                  )}
                >
                  {'Change Password'}
                </Text>
              </View>
              {/* Right Aligned */}
              <View
                style={StyleSheet.applyWidth(
                  { alignItems: 'center', flexDirection: 'row' },
                  dimensions.width
                )}
              >
                <Icon name={'Entypo/chevron-right'} size={24} />
              </View>
            </View>
            <Divider
              color={theme.colors.divider}
              style={StyleSheet.applyWidth(
                GlobalStyles.DividerStyles(theme)['Divider'],
                dimensions.width
              )}
            />
          </View>
        </Touchable>
        {/* About  */}
        <Touchable
          onPress={() => {
            try {
              navigation.navigate('StackNavigator', {
                screen: 'AboutUsScreen',
              });
            } catch (err) {
              console.error(err);
            }
          }}
        >
          {/* Row Wrapper */}
          <View
            style={StyleSheet.applyWidth(
              {
                flexDirection: 'row',
                height: 60,
                justifyContent: 'space-between',
              },
              dimensions.width
            )}
          >
            {/* Left Aligned */}
            <View
              style={StyleSheet.applyWidth(
                { alignItems: 'center', flex: 1, flexDirection: 'row' },
                dimensions.width
              )}
            >
              <Text
                allowFontScaling={true}
                ellipsizeMode={'tail'}
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors.strong,
                    fontFamily: 'System',
                    fontWeight: '600',
                    marginLeft: 12,
                  },
                  dimensions.width
                )}
                textBreakStrategy={'highQuality'}
              >
                {'About'}
              </Text>
            </View>
            {/* Right Aligned */}
            <View
              style={StyleSheet.applyWidth(
                { alignItems: 'center', flexDirection: 'row' },
                dimensions.width
              )}
            >
              <Icon
                color={theme.colors.strong}
                name={'MaterialIcons/chevron-right'}
                size={24}
              />
            </View>
          </View>
          <Divider
            color={theme.colors.divider}
            height={1}
            style={StyleSheet.applyWidth({ height: 1 }, dimensions.width)}
          />
        </Touchable>
      </View>
      {/* Footer Wrapper */}
      <View
        style={StyleSheet.applyWidth(
          { flexGrow: 1, flexShrink: 0 },
          dimensions.width
        )}
      >
        {/* Sign Out */}
        <Touchable
          onPress={() => {
            const handler = async () => {
              try {
                const Response = (
                  await cotruckLogOutPOST.mutateAsync({ id: 120 })
                )?.json;
                const msg = Response?.message;

                showAlertUtil({
                  title: 'Message',
                  message: msg,
                  buttonText: undefined,
                });

                navigation.navigate('StackNavigator', {
                  screen: 'LoginScreen',
                });
              } catch (err) {
                console.error(err);
              }
            };
            handler();
          }}
        >
          {/* Button Wrapper */}
          <View
            style={StyleSheet.applyWidth(
              {
                flexGrow: 1,
                flexShrink: 0,
                justifyContent: 'center',
                minHeight: 54,
              },
              dimensions.width
            )}
          >
            {/* Sign Out Text */}
            <Text
              style={StyleSheet.applyWidth(
                { color: theme.colors.primary, textAlign: 'center' },
                dimensions.width
              )}
            >
              {'Sign Out'}
            </Text>
          </View>
        </Touchable>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(SettingsScreen);
