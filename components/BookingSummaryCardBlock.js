import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { Icon, withTheme } from '@draftbit/ui';
import { Text, View, useWindowDimensions } from 'react-native';

const BookingSummaryCardBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <View
      style={StyleSheet.applyWidth(
        { marginBottom: 20, marginLeft: 20, marginRight: 20, marginTop: 20 },
        dimensions.width
      )}
    >
      <View
        style={StyleSheet.applyWidth(
          { marginBottom: 10, marginTop: 10 },
          dimensions.width
        )}
      >
        <Text
          accessible={true}
          allowFontScaling={true}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text 3'], {
              color: theme.colors['SummaryText'],
              fontFamily: 'System',
              fontSize: 16,
              fontWeight: '400',
            }),
            dimensions.width
          )}
        >
          {'Pick up to drop location'}
        </Text>
      </View>
      {/* Booking Card */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0)',
            flexDirection: 'row',
            justifyContent: 'space-around',
          },
          dimensions.width
        )}
      >
        {/* Pickup Place */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              backgroundColor: 'rgba(0, 0, 0, 0)',
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
          {/* Pickup Location */}
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
        </View>
        {/* View 3 */}
        <View>
          <Icon
            color={theme.colors['Custom Color_18']}
            name={'AntDesign/swap'}
            size={28}
          />
        </View>
        {/* Drop Place */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              backgroundColor: 'rgba(0, 0, 0, 0)',
              justifyContent: 'center',
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
          {/* Drop Location */}
          <View style={StyleSheet.applyWidth({ margin: 5 }, dimensions.width)}>
            <Text
              accessible={true}
              allowFontScaling={true}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                  color: theme.colors['GetFit Orange'],
                  fontSize: 12,
                }),
                dimensions.width
              )}
            >
              {'Pending'}
            </Text>
          </View>
        </View>
      </View>
      {/* View 2 */}
      <View
        style={StyleSheet.applyWidth(
          { marginBottom: 10, marginTop: 10 },
          dimensions.width
        )}
      >
        <Text
          accessible={true}
          allowFontScaling={true}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text 3'], {
              color: theme.colors['SummaryText'],
              fontFamily: 'System',
              fontSize: 16,
              fontWeight: '400',
            }),
            dimensions.width
          )}
        >
          {'Drop to depot location'}
        </Text>
      </View>
      {/* Booking Card View Text */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0)',
            flexDirection: 'row',
            justifyContent: 'space-around',
          },
          dimensions.width
        )}
      >
        {/* Pickup Place */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              backgroundColor: 'rgba(0, 0, 0, 0)',
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
          {/* Pickup Location */}
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
        </View>
        {/* View 3 */}
        <View>
          <Icon
            color={theme.colors['Custom Color_18']}
            name={'AntDesign/swap'}
            size={28}
          />
        </View>
        {/* Drop Place */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              backgroundColor: 'rgba(0, 0, 0, 0)',
              justifyContent: 'center',
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
              {'Depot  Myanmar Industrial Port'}
            </Text>
          </View>
          {/* Drop Location */}
          <View style={StyleSheet.applyWidth({ margin: 5 }, dimensions.width)}>
            <Text
              accessible={true}
              allowFontScaling={true}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                  color: theme.colors['GetFit Orange'],
                  fontSize: 12,
                }),
                dimensions.width
              )}
            >
              {'Pending'}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default withTheme(BookingSummaryCardBlock);
