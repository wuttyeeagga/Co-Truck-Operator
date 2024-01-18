import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Header2Block from '../components/Header2Block';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { Divider, ScreenContainer, withTheme } from '@draftbit/ui';
import { Text, View } from 'react-native';

const NewTripScreen = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <ScreenContainer
      hasSafeArea={false}
      scrollable={false}
      style={StyleSheet.applyWidth(
        { backgroundColor: theme.colors['Surface'] },
        dimensions.width
      )}
    >
      {/* Header */}
      <Header2Block title={'New Trip'} />
      <View style={StyleSheet.applyWidth({ margin: 20 }, dimensions.width)}>
        {/* New Trip */}
        <Text
          accessible={true}
          allowFontScaling={true}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text 2'], {
              color: theme.colors['CoTruckBlack'],
              fontSize: 20,
              margin: 20,
              marginBottom: 5,
              marginTop: 5,
            }),
            dimensions.width
          )}
        >
          {'New Trip'}
        </Text>
        {/* Red Zone */}
        <Text
          accessible={true}
          allowFontScaling={true}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text 2'], {
              color: theme.colors['CoTruckGrey'],
              fontSize: 20,
              margin: 20,
              marginBottom: 5,
              marginTop: 5,
            }),
            dimensions.width
          )}
        >
          {'Ride Zone'}
        </Text>
        {/* Text 2 */}
        <Text
          accessible={true}
          allowFontScaling={true}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text 2'], {
              color: theme.colors['CoTruckBlack'],
              fontSize: 16,
              margin: 20,
              marginBottom: 5,
              marginTop: 5,
            }),
            dimensions.width
          )}
        >
          {'Asia World Port Terminal (AWPT) to Myanmar Industrial Port (MIP)'}
        </Text>
        {/* Type of Material */}
        <Text
          accessible={true}
          allowFontScaling={true}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text 2'], {
              color: theme.colors['CoTruckGrey'],
              fontSize: 20,
              margin: 20,
              marginBottom: 5,
              marginTop: 5,
            }),
            dimensions.width
          )}
        >
          {'Type of Material'}
        </Text>
        {/* Coal */}
        <Text
          accessible={true}
          allowFontScaling={true}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text 2'], {
              color: theme.colors['CoTruckGrey'],
              fontSize: 20,
              margin: 20,
              marginBottom: 5,
              marginTop: 5,
            }),
            dimensions.width
          )}
        >
          {'Coal'}
        </Text>
        <Divider
          color={theme.colors['Light']}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.DividerStyles(theme)['Divider'], {
              marginBottom: 10,
              marginLeft: 20,
              marginRight: 20,
              marginTop: 10,
            }),
            dimensions.width
          )}
        />
      </View>
      {/* View 2 */}
      <View style={StyleSheet.applyWidth({ margin: 20 }, dimensions.width)}>
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-around',
            },
            dimensions.width
          )}
        >
          {/* Date */}
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
            {'Date'}
          </Text>
          {/* Timeslot */}
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
            {'Timeslot\n'}
          </Text>
          {/* Price */}
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
            {'Price'}
          </Text>
        </View>
        {/* View 2 */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-around',
            },
            dimensions.width
          )}
        >
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
            {'2023-12-22'}
          </Text>
          {/* Text 2 */}
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
            {'12:51:53'}
          </Text>
          {/* Text 3 */}
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
            {'MMK 600'}
          </Text>
        </View>
        {/* Divider 2 */}
        <Divider
          color={theme.colors['Light']}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.DividerStyles(theme)['Divider'], {
              marginBottom: 10,
              marginLeft: 20,
              marginRight: 20,
              marginTop: 10,
            }),
            dimensions.width
          )}
        />
      </View>
      {/* View 3 */}
      <View>
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-around',
            },
            dimensions.width
          )}
        >
          {/* Type */}
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
            {'Type'}
          </Text>
          {/* No of Truck */}
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
            {'No of Truck'}
          </Text>
        </View>
        {/* View 2 */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-around',
            },
            dimensions.width
          )}
        >
          {/* Type */}
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
            {'20ft Container Truck'}
          </Text>
          {/* No of Truck */}
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
            {'2'}
          </Text>
        </View>
        {/* Divider 3 */}
        <Divider
          color={theme.colors['Light']}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.DividerStyles(theme)['Divider'], {
              marginBottom: 10,
              marginLeft: 20,
              marginRight: 20,
              marginTop: 10,
            }),
            dimensions.width
          )}
        />
      </View>
      {/* View 4 */}
      <View
        style={StyleSheet.applyWidth(
          { alignItems: 'center', justifyContent: 'center', margin: 20 },
          dimensions.width
        )}
      >
        {/* Cancelled */}
        <Text
          accessible={true}
          allowFontScaling={true}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text 2'], {
              fontSize: 20,
              margin: 20,
            }),
            dimensions.width
          )}
        >
          {'Booking is cancelled by Shipper'}
        </Text>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(NewTripScreen);
