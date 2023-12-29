import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import {
  Divider,
  Icon,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Text, View } from 'react-native';

const SettingsScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();

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
            marginTop: 20,
            padding: 20,
          },
          dimensions.width
        )}
      >
        <View
          style={StyleSheet.applyWidth(
            { alignItems: 'center', flexDirection: 'row' },
            dimensions.width
          )}
        >
          <View
            style={StyleSheet.applyWidth({ marginLeft: 10 }, dimensions.width)}
          >
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
          <Icon
            name={'Ionicons/ios-notifications-outline'}
            size={24}
            style={StyleSheet.applyWidth({ opacity: 0.5 }, dimensions.width)}
          />
        </Touchable>
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
              <Icon
                color={theme.colors.strong}
                name={'FontAwesome/user-circle'}
                size={24}
              />
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
              navigation.navigate('BottomTabNavigator', {
                screen: 'ActivityScreen',
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
              <Icon
                color={theme.colors.strong}
                name={'FontAwesome/calendar'}
                size={24}
              />
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
              navigation.navigate('BottomTabNavigator', {
                screen: 'FAQsScreen',
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
              <Icon
                color={theme.colors.strong}
                name={'MaterialIcons/chat-bubble'}
                size={24}
              />
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
              <Icon
                color={theme.colors.strong}
                name={'FontAwesome/send'}
                size={24}
              />
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
              <Icon name={'Foundation/map'} size={24} />
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
        {/* Manage Driver */}
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
              <Icon name={'Foundation/dollar'} size={24} />
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
              StyleSheet.compose(GlobalStyles.DividerStyles(theme)['Divider'], {
                height: 2,
              }),
              dimensions.width
            )}
          />
        </View>
        {/* Language */}
        <Touchable
          onPress={() => {
            try {
              navigation.navigate('StackNavigator', {
                screen: 'AboutUsScreen',
              });
              navigation.navigate('StackNavigator', {
                screen: 'ChooseLanguageScreen',
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
              <Icon
                color={theme.colors.strong}
                name={'Entypo/language'}
                size={24}
              />
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
                {'Language'}
              </Text>
            </View>
            {/* Right Aligned */}
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
                  GlobalStyles.TextStyles(theme)['Text'],
                  dimensions.width
                )}
              >
                {'English'}
              </Text>
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
              <Icon
                color={theme.colors.strong}
                name={'AntDesign/infocirlce'}
                size={24}
              />
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
        <Touchable
          onPress={() => {
            try {
              navigation.navigate('StackNavigator', { screen: 'LoginScreen' });
            } catch (err) {
              console.error(err);
            }
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
