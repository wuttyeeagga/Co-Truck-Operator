import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Header2Block from '../components/Header2Block';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { Divider, ScreenContainer, TextInput, withTheme } from '@draftbit/ui';
import { ScrollView, Text, View } from 'react-native';

const NewTripAcceptedScreen = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();
  const [availabilityTruck, setAvailabilityTruck] = React.useState(1);
  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer
      hasBottomSafeArea={true}
      hasSafeArea={true}
      scrollable={false}
      style={StyleSheet.applyWidth(
        { backgroundColor: theme.colors['Surface'] },
        dimensions.width
      )}
    >
      {/* Header */}
      <Header2Block title={'New Trip Accepted'} />
      <ScrollView
        bounces={true}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
      >
        <View
          style={StyleSheet.applyWidth(
            { margin: 20, marginBottom: 10, marginTop: 0 },
            dimensions.width
          )}
        >
          {/* New Trip */}
          <Text
            accessible={true}
            allowFontScaling={true}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text 2'], {
                color: theme.colors['CoTruckBlack'],
                fontSize: 20,
                margin: 20,
                marginTop: 10,
              }),
              dimensions.width
            )}
          >
            {'New Trip'}
          </Text>
          {/* Ride Zone */}
          <Text
            accessible={true}
            allowFontScaling={true}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text 2'], {
                color: theme.colors['CoTruckGrey'],
                fontSize: 16,
                margin: 20,
                marginBottom: 5,
                marginTop: 10,
              }),
              dimensions.width
            )}
          >
            {'Ride Zone'}
          </Text>
          {/* Ride Zone Value */}
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
          {/* Divider 2 */}
          <Divider
            color={theme.colors['Light']}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.DividerStyles(theme)['Divider'], {
                marginBottom: 10,
                marginTop: 10,
              }),
              dimensions.width
            )}
          />
          {/* Pickup Address */}
          <Text
            accessible={true}
            allowFontScaling={true}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text 2'], {
                color: theme.colors['CoTruckGrey'],
                fontSize: 16,
                margin: 20,
                marginBottom: 5,
                marginTop: 5,
              }),
              dimensions.width
            )}
          >
            {'Pickup address'}
          </Text>
          {/* Pickup Address Value */}
          <Text
            accessible={true}
            allowFontScaling={true}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text 2'], {
                fontSize: 16,
                margin: 20,
                marginBottom: 5,
                marginTop: 5,
              }),
              dimensions.width
            )}
          >
            {'Pickup address value'}
          </Text>
          {/* Divider 3 */}
          <Divider
            color={theme.colors['Light']}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.DividerStyles(theme)['Divider'], {
                marginBottom: 10,
                marginTop: 10,
              }),
              dimensions.width
            )}
          />
          {/* Drop Address */}
          <Text
            accessible={true}
            allowFontScaling={true}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text 2'], {
                color: theme.colors['CoTruckGrey'],
                fontSize: 16,
                margin: 20,
                marginBottom: 5,
                marginTop: 5,
              }),
              dimensions.width
            )}
          >
            {'Drop Address'}
          </Text>
          {/* Drop Address Value */}
          <Text
            accessible={true}
            allowFontScaling={true}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text 2'], {
                fontSize: 16,
                margin: 20,
                marginBottom: 5,
                marginTop: 5,
              }),
              dimensions.width
            )}
          >
            {'Drop Address value'}
          </Text>
          {/* Divider 4 */}
          <Divider
            color={theme.colors['Light']}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.DividerStyles(theme)['Divider'], {
                marginBottom: 10,
                marginTop: 10,
              }),
              dimensions.width
            )}
          />
          {/* Type of Material */}
          <Text
            accessible={true}
            allowFontScaling={true}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text 2'], {
                color: theme.colors['CoTruckGrey'],
                fontSize: 16,
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
                color: theme.colors['CoTruckBlack'],
                fontSize: 16,
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
                marginTop: 10,
              }),
              dimensions.width
            )}
          />
        </View>
        {/* Date Price Row */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              flexDirection: 'row',
              margin: 20,
              marginBottom: 10,
              marginTop: 10,
            },
            dimensions.width
          )}
        >
          <View
            style={StyleSheet.applyWidth(
              { alignItems: 'center', width: '35%' },
              dimensions.width
            )}
          >
            {/* Date */}
            <Text
              accessible={true}
              allowFontScaling={true}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text 2'], {
                  color: theme.colors['CoTruckGrey'],
                  margin: 5,
                }),
                dimensions.width
              )}
            >
              {'Date'}
            </Text>
            {/* Date Value */}
            <Text
              accessible={true}
              allowFontScaling={true}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text 2'], {
                  color: theme.colors['CoTruckBlack'],
                  margin: 5,
                }),
                dimensions.width
              )}
            >
              {'2023-12-12'}
            </Text>
          </View>
          {/* View 2 */}
          <View
            style={StyleSheet.applyWidth(
              { alignItems: 'center', width: '35%' },
              dimensions.width
            )}
          >
            {/* Timeslot */}
            <Text
              accessible={true}
              allowFontScaling={true}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text 2'], {
                  color: theme.colors['CoTruckGrey'],
                  margin: 5,
                }),
                dimensions.width
              )}
            >
              {'Timeslot'}
            </Text>
            {/* Time Value */}
            <Text
              accessible={true}
              allowFontScaling={true}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text 2'], {
                  color: theme.colors['CoTruckBlack'],
                  margin: 5,
                }),
                dimensions.width
              )}
            >
              {'00:00:00'}
            </Text>
          </View>
          {/* View 3 */}
          <View
            style={StyleSheet.applyWidth(
              { alignItems: 'center', width: '35%' },
              dimensions.width
            )}
          >
            {/* Price */}
            <Text
              accessible={true}
              allowFontScaling={true}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text 2'], {
                  color: theme.colors['CoTruckGrey'],
                  margin: 5,
                }),
                dimensions.width
              )}
            >
              {'Date'}
            </Text>
            {/* Price Value */}
            <Text
              accessible={true}
              allowFontScaling={true}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text 2'], {
                  color: theme.colors['CoTruckBlack'],
                  margin: 5,
                }),
                dimensions.width
              )}
            >
              {'MMK 450'}
            </Text>
          </View>
        </View>
        {/* Divider 2 */}
        <Divider
          color={theme.colors['Light']}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.DividerStyles(theme)['Divider'], {
              marginLeft: 20,
              marginRight: 20,
              marginTop: 10,
            }),
            dimensions.width
          )}
        />
        {/* Truck Info Row */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              flexDirection: 'row',
              margin: 20,
              marginBottom: 10,
              marginTop: 10,
            },
            dimensions.width
          )}
        >
          {/* Type View */}
          <View
            style={StyleSheet.applyWidth(
              { alignItems: 'center', width: '35%' },
              dimensions.width
            )}
          >
            {/* Type */}
            <Text
              accessible={true}
              allowFontScaling={true}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text 2'], {
                  margin: 5,
                }),
                dimensions.width
              )}
            >
              {'Type'}
            </Text>
            {/* Vehicle type */}
            <Text
              accessible={true}
              allowFontScaling={true}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text 2'], {
                  margin: 5,
                }),
                dimensions.width
              )}
            >
              {'20ft Container'}
            </Text>
          </View>
          {/* No of Truck View */}
          <View
            style={StyleSheet.applyWidth(
              { alignItems: 'center', width: '35%' },
              dimensions.width
            )}
          >
            {/* No of truck */}
            <Text
              accessible={true}
              allowFontScaling={true}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text 2'], {
                  margin: 5,
                }),
                dimensions.width
              )}
            >
              {'No of Truck'}
            </Text>
            {/* No of Truck */}
            <Text
              accessible={true}
              allowFontScaling={true}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text 2'], {
                  margin: 5,
                }),
                dimensions.width
              )}
            >
              {'1'}
            </Text>
          </View>
          {/* Availability View */}
          <View
            style={StyleSheet.applyWidth(
              { alignItems: 'center', width: '40%' },
              dimensions.width
            )}
          >
            {/* Text View */}
            <View>
              <Text
                accessible={true}
                allowFontScaling={true}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text 2'], {
                    margin: 5,
                  }),
                  dimensions.width
                )}
              >
                {'Availability'}
              </Text>
            </View>
            {/* Availability Input */}
            <TextInput
              allowFontScaling={true}
              autoCapitalize={'none'}
              changeTextDelay={500}
              onChangeText={newAvailabilityInputValue => {
                try {
                  setAvailabilityTruck(newAvailabilityInputValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              placeholder={'enter number'}
              placeholderTextColor={theme.colors['TextPlaceholder']}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextInputStyles(theme)['Text Input 3'],
                  {
                    borderColor: theme.colors['Light'],
                    margin: 10,
                    paddingLeft: 20,
                    width: '50%',
                  }
                ),
                dimensions.width
              )}
              value={availabilityTruck}
            />
          </View>
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
      </ScrollView>
    </ScreenContainer>
  );
};

export default withTheme(NewTripAcceptedScreen);
