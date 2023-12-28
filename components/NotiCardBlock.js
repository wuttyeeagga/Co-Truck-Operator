import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { withTheme } from '@draftbit/ui';
import { Text, View, useWindowDimensions } from 'react-native';

const NotiCardBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <View
      style={StyleSheet.applyWidth(
        {
          borderColor: theme.colors['Custom Color_6'],
          borderRadius: 12,
          borderWidth: 1,
          margin: 10,
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
  );
};

export default withTheme(NotiCardBlock);
