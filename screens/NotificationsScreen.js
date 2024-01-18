import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { Icon, ScreenContainer, Touchable, withTheme } from '@draftbit/ui';
import { Text, View } from 'react-native';

const NotificationsScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();

  return (
    <ScreenContainer
      hasBottomSafeArea={true}
      hasSafeArea={true}
      scrollable={true}
    >
      {/* Header */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            flexDirection: 'row',
            marginLeft: 20,
            marginTop: 20,
          },
          dimensions.width
        )}
      >
        {/* Icon Button */}
        <View
          style={StyleSheet.applyWidth({ marginLeft: 10 }, dimensions.width)}
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
            {'Notifications'}
          </Text>
        </View>
      </View>
      {/* Noti Card */}
      <View
        style={StyleSheet.applyWidth(
          {
            borderColor: theme.colors['Custom Color_6'],
            borderRadius: 12,
            borderWidth: 1,
            margin: 10,
            marginBottom: 20,
            marginTop: 20,
            padding: 10,
          },
          dimensions.width
        )}
      >
        <View>
          <Text
            accessible={true}
            allowFontScaling={true}
            style={StyleSheet.applyWidth(
              GlobalStyles.TextStyles(theme)['Text'],
              dimensions.width
            )}
          >
            {'Driver Aung Ko Oo has started the ride.Booking ID is 304456.'}
          </Text>
        </View>
        {/* View 2 */}
        <View
          style={StyleSheet.applyWidth(
            { alignItems: 'flex-end', justifyContent: 'flex-start' },
            dimensions.width
          )}
        >
          <Text
            accessible={true}
            allowFontScaling={true}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                color: theme.colors['Custom #5f5a53'],
              }),
              dimensions.width
            )}
          >
            {'2023-12-07 03:21 PM'}
          </Text>
        </View>
      </View>
      {/* Noti Card 2 */}
      <View
        style={StyleSheet.applyWidth(
          {
            borderColor: theme.colors['Custom Color_6'],
            borderRadius: 12,
            borderWidth: 1,
            margin: 10,
            marginBottom: 20,
            marginTop: 20,
            padding: 10,
          },
          dimensions.width
        )}
      >
        <View>
          <Text
            accessible={true}
            allowFontScaling={true}
            style={StyleSheet.applyWidth(
              GlobalStyles.TextStyles(theme)['Text'],
              dimensions.width
            )}
          >
            {'Your booking is accepted.'}
          </Text>
        </View>
        {/* View 2 */}
        <View
          style={StyleSheet.applyWidth(
            { alignItems: 'flex-end', justifyContent: 'flex-start' },
            dimensions.width
          )}
        >
          <Text
            accessible={true}
            allowFontScaling={true}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                color: theme.colors['Custom #5f5a53'],
              }),
              dimensions.width
            )}
          >
            {'2023-12-07 03:00 PM'}
          </Text>
        </View>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(NotificationsScreen);
