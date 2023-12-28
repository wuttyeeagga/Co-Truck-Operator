import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { Icon, withTheme } from '@draftbit/ui';
import { Text, View, useWindowDimensions } from 'react-native';

const ResponsiveBookingCardBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <View
      style={StyleSheet.applyWidth(
        {
          alignItems: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0)',
          flexDirection: 'row',
          justifyContent: 'flex-start',
          margin: 10,
        },
        dimensions.width
      )}
    >
      {/* Date Container */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            borderRadius: 7,
            borderWidth: 1,
            justifyContent: 'center',
            paddingLeft: 5,
            paddingRight: 5,
            width: '15%',
          },
          dimensions.width
        )}
      >
        <Text
          accessible={true}
          allowFontScaling={true}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
              fontSize: 14,
              margin: 5,
              marginLeft: 5,
              marginRight: 5,
            }),
            dimensions.width
          )}
        >
          {'Dec'}
        </Text>
        {/* Text 2 */}
        <Text
          accessible={true}
          allowFontScaling={true}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
              fontSize: 18,
              margin: 5,
              marginLeft: 5,
              marginRight: 5,
            }),
            dimensions.width
          )}
        >
          {'6\n'}
        </Text>
        {/* Text 3 */}
        <Text
          accessible={true}
          allowFontScaling={true}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
              fontSize: 12,
              margin: 5,
              marginLeft: 5,
              marginRight: 5,
            }),
            dimensions.width
          )}
        >
          {'Sunday'}
        </Text>
      </View>
      {/* Started Place */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            backgroundColor: [
              { minWidth: Breakpoints.Mobile, value: 'rgba(0, 0, 0, 0)' },
              { minWidth: Breakpoints.Tablet, value: 'rgba(0, 0, 0, 0)' },
            ],
            margin: 5,
            width: '40%',
          },
          dimensions.width
        )}
      >
        <View style={StyleSheet.applyWidth({ margin: 5 }, dimensions.width)}>
          <Text
            accessible={true}
            allowFontScaling={true}
            style={StyleSheet.applyWidth(
              GlobalStyles.TextStyles(theme)['Text'],
              dimensions.width
            )}
          >
            {'Asia World Port Terminal (AWPT)'}
          </Text>
        </View>

        <View style={StyleSheet.applyWidth({ margin: 5 }, dimensions.width)}>
          {/* Text 2 */}
          <Text
            accessible={true}
            allowFontScaling={true}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                color: theme.colors['Custom #acacac'],
                fontSize: 12,
              }),
              dimensions.width
            )}
          >
            {'20ft Container Truck'}
          </Text>
        </View>
        {/* View 2 */}
        <View />
      </View>
      {/* View 3 */}
      <View
        style={StyleSheet.applyWidth(
          {
            backgroundColor: [
              { minWidth: Breakpoints.Mobile, value: 'rgba(0, 0, 0, 0)' },
              { minWidth: Breakpoints.Tablet, value: 'rgba(0, 0, 0, 0)' },
            ],
            margin: 3,
            width: '5%',
          },
          dimensions.width
        )}
      >
        <Icon
          color={theme.colors['Custom Color_18']}
          name={'AntDesign/swap'}
          size={24}
        />
      </View>
      {/* Ended Place */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            backgroundColor: [
              { minWidth: Breakpoints.Mobile, value: 'rgba(0, 0, 0, 0)' },
              { minWidth: Breakpoints.Tablet, value: 'rgba(0, 0, 0, 0)' },
            ],
            justifyContent: 'flex-start',
            margin: 5,
            width: '40%',
          },
          dimensions.width
        )}
      >
        <View style={StyleSheet.applyWidth({ margin: 5 }, dimensions.width)}>
          <Text
            accessible={true}
            allowFontScaling={true}
            style={StyleSheet.applyWidth(
              GlobalStyles.TextStyles(theme)['Text'],
              dimensions.width
            )}
          >
            {'Myanmar Industrial Port (MIP)'}
          </Text>
        </View>
        {/* View 2 */}
        <View style={StyleSheet.applyWidth({ margin: 5 }, dimensions.width)}>
          <Text
            accessible={true}
            allowFontScaling={true}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                color: theme.colors['Custom Color_11'],
              }),
              dimensions.width
            )}
          >
            {'On Going'}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default withTheme(ResponsiveBookingCardBlock);
