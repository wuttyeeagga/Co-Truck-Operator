import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  Button,
  Divider,
  Icon,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { Text, View, useWindowDimensions } from 'react-native';

const BookingDetailsOnPendingScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const [checkboxRow2Value, setCheckboxRow2Value] = React.useState('');
  const [checkboxRow3Value, setCheckboxRow3Value] = React.useState('');
  const [checkboxRow4Value, setCheckboxRow4Value] = React.useState('');
  const [checkboxRow5Value, setCheckboxRow5Value] = React.useState('');
  const [checkboxRowValue, setCheckboxRowValue] = React.useState('');
  const [styledTextAreaValue, setStyledTextAreaValue] = React.useState('');
  const [textInputValue, setTextInputValue] = React.useState('');
  const isFocused = useIsFocused();
  React.useEffect(() => {
    try {
      if (!isFocused) {
        return;
      }
      /* 'Conditional Stop' action requires configuration: select Check Value */
    } catch (err) {
      console.error(err);
    }
  }, [isFocused]);

  return (
    <ScreenContainer
      hasBottomSafeArea={true}
      hasSafeArea={true}
      scrollable={true}
      style={StyleSheet.applyWidth(
        { backgroundColor: 'rgba(0, 0, 0, 0)' },
        dimensions.width
      )}
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
              navigation.goBack();
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
          {'Booking Details'}
        </Text>
      </View>
      {/* View 2 */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'center',
            marginLeft: 20,
            marginRight: 20,
          },
          dimensions.width
        )}
      >
        <Icon
          color={theme.colors['GetFit Orange']}
          name={'MaterialCommunityIcons/timer-sand'}
          size={24}
        />
        <Text
          accessible={true}
          allowFontScaling={true}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text 3'], {
              color: theme.colors['GetFit Orange'],
            }),
            dimensions.width
          )}
        >
          {'Fleet Operator to be assigned soon'}
        </Text>
      </View>
      {/* Location Container */}
      <View
        style={StyleSheet.applyWidth(
          { marginBottom: 10, marginLeft: 20, marginRight: 20, marginTop: 10 },
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
            <View
              style={StyleSheet.applyWidth({ margin: 5 }, dimensions.width)}
            >
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
            <View
              style={StyleSheet.applyWidth({ margin: 5 }, dimensions.width)}
            >
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
                {'Q5M8+8QF, Bo Min Yaung St, Yangon, Myanmar (Burma)'}
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
            <View
              style={StyleSheet.applyWidth({ margin: 5 }, dimensions.width)}
            >
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
            <View
              style={StyleSheet.applyWidth({ margin: 5 }, dimensions.width)}
            >
              <Text
                accessible={true}
                allowFontScaling={true}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                    color: theme.colors['TextPlaceholder'],
                    fontSize: 12,
                  }),
                  dimensions.width
                )}
              >
                {'Q4FM+MFG, Yangon, Myanmar (Burma)'}
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
            <View
              style={StyleSheet.applyWidth({ margin: 5 }, dimensions.width)}
            >
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
            <View
              style={StyleSheet.applyWidth({ margin: 5 }, dimensions.width)}
            >
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
                {'Q4FM+MFG, Yangon, Myanmar (Burma)'}
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
            <View
              style={StyleSheet.applyWidth({ margin: 5 }, dimensions.width)}
            >
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
            <View
              style={StyleSheet.applyWidth({ margin: 5 }, dimensions.width)}
            >
              <Text
                accessible={true}
                allowFontScaling={true}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                    color: theme.colors['TextPlaceholder'],
                    fontSize: 12,
                  }),
                  dimensions.width
                )}
              >
                {'Q4F5GM+OXB,Ko Kan Yar Street, Yangon, Myanmar (Burma)'}
              </Text>
            </View>
          </View>
        </View>
      </View>
      {/* Invoice */}
      <View
        style={StyleSheet.applyWidth(
          {
            backgroundColor: theme.colors['Surface'],
            marginBottom: 10,
            marginLeft: 20,
            marginRight: 20,
            marginTop: 10,
          },
          dimensions.width
        )}
      >
        <View>
          {/* Row View */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                flexDirection: 'row',
                marginBottom: 10,
                marginTop: 10,
              },
              dimensions.width
            )}
          >
            <View
              style={StyleSheet.applyWidth({ width: '45%' }, dimensions.width)}
            >
              <Text
                accessible={true}
                allowFontScaling={true}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text 3'], {
                    color: theme.colors['TextPlaceholder'],
                    fontSize: 16,
                  }),
                  dimensions.width
                )}
              >
                {'Truck Type'}
              </Text>
            </View>
            {/* View 2 */}
            <View
              style={StyleSheet.applyWidth({ width: '5%' }, dimensions.width)}
            >
              <Icon
                color={theme.colors['Light']}
                name={'Entypo/dots-two-vertical'}
                size={16}
              />
            </View>
            {/* View 3 */}
            <View
              style={StyleSheet.applyWidth({ width: '45%' }, dimensions.width)}
            >
              {/* Text 2 */}
              <Text
                accessible={true}
                allowFontScaling={true}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text 3'], {
                    fontSize: 16,
                  }),
                  dimensions.width
                )}
              >
                {'20ft Container Truck'}
              </Text>
            </View>
          </View>
          <Divider
            color={theme.colors['Tab_Divider']}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.DividerStyles(theme)['Divider'], {
                height: 2,
                marginTop: 5,
              }),
              dimensions.width
            )}
          />
        </View>
        {/* View 2 */}
        <View>
          {/* Row View */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                flexDirection: 'row',
                marginBottom: 10,
                marginTop: 10,
              },
              dimensions.width
            )}
          >
            <View
              style={StyleSheet.applyWidth({ width: '45%' }, dimensions.width)}
            >
              <Text
                accessible={true}
                allowFontScaling={true}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text 3'], {
                    color: theme.colors['TextPlaceholder'],
                    fontSize: 16,
                  }),
                  dimensions.width
                )}
              >
                {'Type of material'}
              </Text>
            </View>
            {/* View 2 */}
            <View
              style={StyleSheet.applyWidth({ width: '5%' }, dimensions.width)}
            >
              <Icon
                color={theme.colors['Light']}
                name={'Entypo/dots-two-vertical'}
                size={16}
              />
            </View>
            {/* View 3 */}
            <View
              style={StyleSheet.applyWidth({ width: '45%' }, dimensions.width)}
            >
              {/* Text 2 */}
              <Text
                accessible={true}
                allowFontScaling={true}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text 3'], {
                    fontSize: 16,
                  }),
                  dimensions.width
                )}
              >
                {'Chemicals'}
              </Text>
            </View>
          </View>
          <Divider
            color={theme.colors['Tab_Divider']}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.DividerStyles(theme)['Divider'], {
                height: 2,
                marginTop: 5,
              }),
              dimensions.width
            )}
          />
        </View>
        {/* View 3 */}
        <View>
          {/* Row View */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                flexDirection: 'row',
                marginBottom: 10,
                marginTop: 10,
              },
              dimensions.width
            )}
          >
            <View
              style={StyleSheet.applyWidth({ width: '45%' }, dimensions.width)}
            >
              <Text
                accessible={true}
                allowFontScaling={true}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text 3'], {
                    color: theme.colors['TextPlaceholder'],
                    fontSize: 16,
                  }),
                  dimensions.width
                )}
              >
                {'Per Container Weight (Ton)'}
              </Text>
            </View>
            {/* View 2 */}
            <View
              style={StyleSheet.applyWidth({ width: '5%' }, dimensions.width)}
            >
              <Icon
                color={theme.colors['Light']}
                name={'Entypo/dots-two-vertical'}
                size={16}
              />
            </View>
            {/* View 3 */}
            <View
              style={StyleSheet.applyWidth({ width: '45%' }, dimensions.width)}
            >
              {/* Text 2 */}
              <Text
                accessible={true}
                allowFontScaling={true}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text 3'], {
                    fontSize: 16,
                  }),
                  dimensions.width
                )}
              >
                {'23'}
              </Text>
            </View>
          </View>
          <Divider
            color={theme.colors['Tab_Divider']}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.DividerStyles(theme)['Divider'], {
                height: 2,
                marginTop: 5,
              }),
              dimensions.width
            )}
          />
        </View>
        {/* View 4 */}
        <View>
          {/* Row View */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                flexDirection: 'row',
                marginBottom: 10,
                marginTop: 10,
              },
              dimensions.width
            )}
          >
            <View
              style={StyleSheet.applyWidth({ width: '45%' }, dimensions.width)}
            >
              <Text
                accessible={true}
                allowFontScaling={true}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text 3'], {
                    color: theme.colors['TextPlaceholder'],
                    fontSize: 16,
                  }),
                  dimensions.width
                )}
              >
                {'No of container'}
              </Text>
            </View>
            {/* View 2 */}
            <View
              style={StyleSheet.applyWidth({ width: '5%' }, dimensions.width)}
            >
              <Icon
                color={theme.colors['Light']}
                name={'Entypo/dots-two-vertical'}
                size={16}
              />
            </View>
            {/* View 3 */}
            <View
              style={StyleSheet.applyWidth({ width: '45%' }, dimensions.width)}
            >
              {/* Text 2 */}
              <Text
                accessible={true}
                allowFontScaling={true}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text 3'], {
                    fontSize: 16,
                  }),
                  dimensions.width
                )}
              >
                {'1'}
              </Text>
            </View>
          </View>
          <Divider
            color={theme.colors['Tab_Divider']}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.DividerStyles(theme)['Divider'], {
                height: 2,
                marginTop: 5,
              }),
              dimensions.width
            )}
          />
        </View>
        {/* View 5 */}
        <View>
          {/* Row View */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                flexDirection: 'row',
                marginBottom: 10,
                marginTop: 10,
              },
              dimensions.width
            )}
          >
            <View
              style={StyleSheet.applyWidth({ width: '45%' }, dimensions.width)}
            >
              <Text
                accessible={true}
                allowFontScaling={true}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text 3'], {
                    color: theme.colors['TextPlaceholder'],
                    fontSize: 16,
                  }),
                  dimensions.width
                )}
              >
                {'Product type'}
              </Text>
            </View>
            {/* View 2 */}
            <View
              style={StyleSheet.applyWidth({ width: '5%' }, dimensions.width)}
            >
              <Icon
                color={theme.colors['Light']}
                name={'Entypo/dots-two-vertical'}
                size={16}
              />
            </View>
            {/* View 3 */}
            <View
              style={StyleSheet.applyWidth({ width: '45%' }, dimensions.width)}
            >
              {/* Text 2 */}
              <Text
                accessible={true}
                allowFontScaling={true}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text 3'], {
                    fontSize: 16,
                  }),
                  dimensions.width
                )}
              >
                {'Yellow'}
              </Text>
            </View>
          </View>
          <Divider
            color={theme.colors['Tab_Divider']}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.DividerStyles(theme)['Divider'], {
                height: 2,
                marginTop: 5,
              }),
              dimensions.width
            )}
          />
        </View>
        {/* View 6 */}
        <View>
          {/* Row View */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                flexDirection: 'row',
                marginBottom: 10,
                marginTop: 10,
              },
              dimensions.width
            )}
          >
            <View
              style={StyleSheet.applyWidth({ width: '45%' }, dimensions.width)}
            >
              <Text
                accessible={true}
                allowFontScaling={true}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text 3'], {
                    color: theme.colors['TextPlaceholder'],
                    fontSize: 16,
                  }),
                  dimensions.width
                )}
              >
                {'Pickup Date'}
              </Text>
            </View>
            {/* View 2 */}
            <View
              style={StyleSheet.applyWidth({ width: '5%' }, dimensions.width)}
            >
              <Icon
                color={theme.colors['Light']}
                name={'Entypo/dots-two-vertical'}
                size={16}
              />
            </View>
            {/* View 3 */}
            <View
              style={StyleSheet.applyWidth({ width: '45%' }, dimensions.width)}
            >
              {/* Text 2 */}
              <Text
                accessible={true}
                allowFontScaling={true}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text 3'], {
                    fontSize: 16,
                  }),
                  dimensions.width
                )}
              >
                {'2023-12-14 133:31:08'}
              </Text>
            </View>
          </View>
          <Divider
            color={theme.colors['Tab_Divider']}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.DividerStyles(theme)['Divider'], {
                height: 2,
                marginTop: 5,
              }),
              dimensions.width
            )}
          />
        </View>
        {/* View 7 */}
        <View>
          {/* Row View */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                flexDirection: 'row',
                marginBottom: 10,
                marginTop: 10,
              },
              dimensions.width
            )}
          >
            <View
              style={StyleSheet.applyWidth({ width: '45%' }, dimensions.width)}
            >
              <Text
                accessible={true}
                allowFontScaling={true}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text 3'], {
                    color: theme.colors['TextPlaceholder'],
                    fontSize: 16,
                  }),
                  dimensions.width
                )}
              >
                {'Per truck price'}
              </Text>
            </View>
            {/* View 2 */}
            <View
              style={StyleSheet.applyWidth({ width: '5%' }, dimensions.width)}
            >
              <Icon
                color={theme.colors['Light']}
                name={'Entypo/dots-two-vertical'}
                size={16}
              />
            </View>
            {/* View 3 */}
            <View
              style={StyleSheet.applyWidth({ width: '45%' }, dimensions.width)}
            >
              {/* Text 2 */}
              <Text
                accessible={true}
                allowFontScaling={true}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text 3'], {
                    fontSize: 16,
                  }),
                  dimensions.width
                )}
              >
                {'MMK 500'}
              </Text>
            </View>
          </View>
          <Divider
            color={theme.colors['Tab_Divider']}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.DividerStyles(theme)['Divider'], {
                height: 2,
                marginTop: 5,
              }),
              dimensions.width
            )}
          />
        </View>
      </View>
      {/* Button Container */}
      <View
        style={StyleSheet.applyWidth(
          { marginBottom: 10, marginLeft: 20, marginRight: 20, marginTop: 10 },
          dimensions.width
        )}
      >
        <Button
          onPress={() => {
            try {
              navigation.navigate('ReasonForCancelScreen');
            } catch (err) {
              console.error(err);
            }
          }}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.ButtonStyles(theme)['Button'], {
              marginTop: 20,
            }),
            dimensions.width
          )}
          title={'Cancel'}
        />
      </View>
    </ScreenContainer>
  );
};

export default withTheme(BookingDetailsOnPendingScreen);
