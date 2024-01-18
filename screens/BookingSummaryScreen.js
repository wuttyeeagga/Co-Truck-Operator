import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import {
  Button,
  Divider,
  Icon,
  IconButton,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Modal, Text, View } from 'react-native';

const BookingSummaryScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();

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
          {'Booking Summary'}
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
                {'Q5M8+8QF, Bo Min Yaung St, Yangon, Myanmar (Burma)'}
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
          title={'Request Booking'}
        />
      </View>

      <Modal animationType={'none'} transparent={false}>
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'stretch',
              alignSelf: 'center',
              backgroundColor: theme.colors['Background'],
              flex: 1,
              justifyContent: 'center',
              marginLeft: 30,
              marginRight: 30,
            },
            dimensions.width
          )}
        >
          <View
            style={StyleSheet.applyWidth(
              { alignItems: 'center', justifyContent: 'center', margin: 10 },
              dimensions.width
            )}
          >
            <IconButton
              color={theme.colors['Success']}
              icon={'AntDesign/checkcircleo'}
              size={100}
              style={StyleSheet.applyWidth(
                { marginBottom: 10, marginTop: 10 },
                dimensions.width
              )}
            />
            <Text
              accessible={true}
              allowFontScaling={true}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text 3'], {
                  color: theme.colors['Success'],
                  fontFamily: 'System',
                  fontSize: 20,
                  fontWeight: '400',
                  marginBottom: 10,
                  marginTop: 10,
                }),
                dimensions.width
              )}
            >
              {'Request Accepted'}
            </Text>
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
                  color: theme.colors['TextPlaceholder'],
                  fontSize: 16,
                }),
                dimensions.width
              )}
            >
              {
                'Thanks for choosing our service. You will assign with a fleet operator soon.'
              }
            </Text>
          </View>
          {/* View 3 */}
          <View
            style={StyleSheet.applyWidth(
              { marginBottom: 10, marginTop: 10 },
              dimensions.width
            )}
          >
            <Button
              onPress={() => {
                try {
                  navigation.navigate('RootNavigator');
                } catch (err) {
                  console.error(err);
                }
              }}
              style={StyleSheet.applyWidth(
                GlobalStyles.ButtonStyles(theme)['Button'],
                dimensions.width
              )}
              title={'View Booking'}
            />
          </View>
        </View>
      </Modal>
    </ScreenContainer>
  );
};

export default withTheme(BookingSummaryScreen);
