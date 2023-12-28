import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { Icon, withTheme } from '@draftbit/ui';
import { Text, View, useWindowDimensions } from 'react-native';

const BookingCarfdBlock = props => {
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
          {'10'}
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
            backgroundColor: 'rgba(0, 0, 0, 0)',
            margin: 5,
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
            {'Asia \nWorld \nPort \nTerminal \n(AWPT)'}
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
      <View style={StyleSheet.applyWidth({ margin: 3 }, dimensions.width)}>
        <Icon
          color={theme.colors['Custom Color_18']}
          name={'AntDesign/swap'}
          size={28}
        />
      </View>
      {/* Ended Place */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0)',
            justifyContent: 'center',
            margin: 5,
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
            {'Myanmar \nIndustrial \nPort \n(MIP)'}
          </Text>
        </View>
        {/* View 2 */}
        <View style={StyleSheet.applyWidth({ margin: 5 }, dimensions.width)}>
          <Text
            accessible={true}
            allowFontScaling={true}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                color: theme.colors['GetFit Orange'],
              }),
              dimensions.width
            )}
          >
            {'Pending'}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default withTheme(BookingCarfdBlock);
