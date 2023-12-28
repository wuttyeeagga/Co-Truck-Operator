import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  Button,
  Divider,
  Icon,
  IconButton,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { Image, Text, View, useWindowDimensions } from 'react-native';

const BookingDetailsOnConfirmedScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
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

      <View
        style={StyleSheet.applyWidth(
          { marginLeft: 20, marginRight: 20 },
          dimensions.width
        )}
      >
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 10,
              marginLeft: 20,
              marginRight: 20,
              marginTop: 10,
            },
            dimensions.width
          )}
        >
          <Text
            accessible={true}
            allowFontScaling={true}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text 3'], {
                color: theme.colors['Custom Color_9'],
              }),
              dimensions.width
            )}
          >
            {'Booking ID : 29'}
          </Text>
          {/* Text 2 */}
          <Text
            accessible={true}
            allowFontScaling={true}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text 3'], {
                color: theme.colors['Success'],
              }),
              dimensions.width
            )}
          >
            {'Status : CONFIRMED'}
          </Text>
        </View>
        <Divider
          color={theme.colors.divider}
          style={StyleSheet.applyWidth(
            GlobalStyles.DividerStyles(theme)['Divider'],
            dimensions.width
          )}
        />
        {/* Operator Info Row */}
        <View
          style={StyleSheet.applyWidth(
            { flexDirection: 'row', justifyContent: 'space-between' },
            dimensions.width
          )}
        >
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
              },
              dimensions.width
            )}
          >
            <View>
              <Image
                resizeMode={'cover'}
                source={Images.Icon}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ImageStyles(theme)['Image 3'],
                    { height: 60, width: 60 }
                  ),
                  dimensions.width
                )}
              />
            </View>
            {/* View 2 */}
            <View
              style={StyleSheet.applyWidth(
                { justifyContent: 'space-between', marginLeft: 5 },
                dimensions.width
              )}
            >
              <Text
                accessible={true}
                allowFontScaling={true}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text 3'], {
                    marginBottom: 5,
                  }),
                  dimensions.width
                )}
              >
                {'Operator comp 1'}
              </Text>
              {/* Text 2 */}
              <Text
                accessible={true}
                allowFontScaling={true}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text 3'], {
                    fontSize: 12,
                    marginTop: 5,
                  }),
                  dimensions.width
                )}
              >
                {'Chennai, Tamil Nadu'}
              </Text>
            </View>
          </View>
          {/* View 2 */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
              },
              dimensions.width
            )}
          >
            <View
              style={StyleSheet.applyWidth(
                { marginLeft: 5, marginRight: 5 },
                dimensions.width
              )}
            >
              <IconButton icon={'Feather/phone'} size={25} />
            </View>
            {/* View 2 */}
            <View
              style={StyleSheet.applyWidth(
                { marginLeft: 5, marginRight: 5 },
                dimensions.width
              )}
            >
              {/* Icon Button 2 */}
              <IconButton
                icon={'MaterialCommunityIcons/checkbox-marked-circle-outline'}
                size={25}
              />
            </View>
          </View>
        </View>
        {/* Divider 2 */}
        <Divider
          color={theme.colors.divider}
          style={StyleSheet.applyWidth(
            GlobalStyles.DividerStyles(theme)['Divider'],
            dimensions.width
          )}
        />
        {/* Operator Info Row 3 */}
        <View
          style={StyleSheet.applyWidth(
            { flexDirection: 'row', justifyContent: 'space-between' },
            dimensions.width
          )}
        >
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
              },
              dimensions.width
            )}
          >
            <View>
              <Image
                resizeMode={'cover'}
                source={Images.Icon}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ImageStyles(theme)['Image 3'],
                    { height: 60, width: 60 }
                  ),
                  dimensions.width
                )}
              />
            </View>
            {/* View 2 */}
            <View
              style={StyleSheet.applyWidth(
                { justifyContent: 'space-between', marginLeft: 5 },
                dimensions.width
              )}
            >
              <Text
                accessible={true}
                allowFontScaling={true}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text 3'], {
                    marginBottom: 5,
                  }),
                  dimensions.width
                )}
              >
                {'Testing Driver'}
              </Text>
              {/* Text 2 */}
              <Text
                accessible={true}
                allowFontScaling={true}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text 3'], {
                    color: theme.colors['Success'],
                    fontSize: 12,
                    marginLeft: 5,
                    marginTop: 5,
                  }),
                  dimensions.width
                )}
              >
                {'Assigned'}
              </Text>
            </View>
          </View>
          {/* View 2 */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
              },
              dimensions.width
            )}
          >
            <View
              style={StyleSheet.applyWidth(
                { marginLeft: 5, marginRight: 5 },
                dimensions.width
              )}
            >
              <IconButton icon={'Feather/phone'} size={25} />
            </View>
            {/* View 2 */}
            <View
              style={StyleSheet.applyWidth(
                { marginLeft: 5, marginRight: 5 },
                dimensions.width
              )}
            >
              {/* Icon Button 2 */}
              <IconButton
                icon={'MaterialCommunityIcons/checkbox-marked-circle-outline'}
                size={25}
              />
            </View>
          </View>
        </View>
        {/* Divider 3 */}
        <Divider
          color={theme.colors.divider}
          style={StyleSheet.applyWidth(
            GlobalStyles.DividerStyles(theme)['Divider'],
            dimensions.width
          )}
        />
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
        </View>
        {/* Invoice Total Container */}
        <View
          style={StyleSheet.applyWidth({ marginTop: 30 }, dimensions.width)}
        >
          {/* View 9 */}
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
                style={StyleSheet.applyWidth(
                  { width: '45%' },
                  dimensions.width
                )}
              >
                <Text
                  accessible={true}
                  allowFontScaling={true}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.TextStyles(theme)['Text 3'],
                      { color: theme.colors['TextPlaceholder'], fontSize: 16 }
                    ),
                    dimensions.width
                  )}
                >
                  {'Sub Total'}
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
                style={StyleSheet.applyWidth(
                  { width: '45%' },
                  dimensions.width
                )}
              >
                {/* Text 2 */}
                <Text
                  accessible={true}
                  allowFontScaling={true}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.TextStyles(theme)['Text 3'],
                      { fontSize: 16 }
                    ),
                    dimensions.width
                  )}
                >
                  {'MMK 2500'}
                </Text>
              </View>
            </View>
          </View>
          {/* View 10 */}
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
                style={StyleSheet.applyWidth(
                  { width: '45%' },
                  dimensions.width
                )}
              >
                <Text
                  accessible={true}
                  allowFontScaling={true}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.TextStyles(theme)['Text 3'],
                      { color: theme.colors['TextPlaceholder'], fontSize: 16 }
                    ),
                    dimensions.width
                  )}
                >
                  {'Extra Charges'}
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
                style={StyleSheet.applyWidth(
                  { width: '45%' },
                  dimensions.width
                )}
              >
                {/* Text 2 */}
                <Text
                  accessible={true}
                  allowFontScaling={true}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.TextStyles(theme)['Text 3'],
                      { fontSize: 16 }
                    ),
                    dimensions.width
                  )}
                >
                  {'MMK 0'}
                </Text>
              </View>
            </View>
          </View>
          {/* View 11 */}
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
                style={StyleSheet.applyWidth(
                  { width: '45%' },
                  dimensions.width
                )}
              >
                <Text
                  accessible={true}
                  allowFontScaling={true}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.TextStyles(theme)['Text 3'],
                      { color: theme.colors['TextPlaceholder'], fontSize: 16 }
                    ),
                    dimensions.width
                  )}
                >
                  {'Total Price'}
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
                style={StyleSheet.applyWidth(
                  { width: '45%' },
                  dimensions.width
                )}
              >
                {/* Text 2 */}
                <Text
                  accessible={true}
                  allowFontScaling={true}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.TextStyles(theme)['Text 3'],
                      { fontSize: 16 }
                    ),
                    dimensions.width
                  )}
                >
                  {'MMK 2500'}
                </Text>
              </View>
            </View>
          </View>
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

export default withTheme(BookingDetailsOnConfirmedScreen);
