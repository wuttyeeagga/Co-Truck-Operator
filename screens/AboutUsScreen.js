import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { Icon, ScreenContainer, Touchable, withTheme } from '@draftbit/ui';
import { Text, View } from 'react-native';

const AboutUsScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();

  return (
    <ScreenContainer
      hasBottomSafeArea={true}
      hasSafeArea={true}
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
          {'About us'}
        </Text>
      </View>

      <View
        style={StyleSheet.applyWidth(
          { alignItems: 'flex-start', margin: 20, marginTop: 20 },
          dimensions.width
        )}
      >
        <Text
          accessible={true}
          allowFontScaling={true}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
              color: theme.colors['Custom Color_18'],
              fontSize: 24,
            }),
            dimensions.width
          )}
        >
          {'About us'}
        </Text>
      </View>
      {/* View 2 */}
      <View style={StyleSheet.applyWidth({ margin: 20 }, dimensions.width)}>
        <Text
          accessible={true}
          allowFontScaling={true}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
              fontSize: 16,
            }),
            dimensions.width
          )}
        >
          {
            'CoTruck is an intra-city on-demand last mile technology platform that connects customers (individuals) with trucks (logistics service providers) to efficiently move goods.\n\nDownload our app from Playstore or Appstore to book a truck. We will match and send the nearest truck driver available within 45 minutes prior to the pickup time. Track your goods while our trucks complete the trip and pay the suggested fare. For any support/ queries, you can contact our hotline by calling 1800-258-2424.\n\nWe accept all goods that are not under our list of prohibited items and are suitable to be transported in our trucks based on payload and capacity requirements. To better match your requirements with the right trunk, we classify goods under the following categories. We categorize goods under the following to better match your requirement with the right truck.'
          }
        </Text>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(AboutUsScreen);
