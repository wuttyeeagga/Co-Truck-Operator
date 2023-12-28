import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  AccordionGroup,
  Icon,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { ScrollView, Text, View, useWindowDimensions } from 'react-native';

const FAQsScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const [switchValue, setSwitchValue] = React.useState(false);
  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer
      hasBottomSafeArea={true}
      hasSafeArea={true}
      hasTopSafeArea={true}
      scrollable={false}
      style={StyleSheet.applyWidth(
        { backgroundColor: theme.colors['Surface'], height: '100%' },
        dimensions.width
      )}
    >
      {/* Tab Header */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0)',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 20,
            padding: 20,
          },
          dimensions.width
        )}
      >
        <View
          style={StyleSheet.applyWidth(
            { alignItems: 'center', flexDirection: 'row' },
            dimensions.width
          )}
        >
          <View
            style={StyleSheet.applyWidth({ marginLeft: 10 }, dimensions.width)}
          >
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontFamily: 'Inter_500Medium',
                  fontSize: 17,
                },
                dimensions.width
              )}
            >
              {'Help & Support'}
            </Text>
          </View>
        </View>

        <Touchable
          onPress={() => {
            try {
              navigation.navigate('BottomTabNavigator');
            } catch (err) {
              console.error(err);
            }
          }}
        >
          <Icon
            name={'Ionicons/ios-notifications-outline'}
            size={24}
            style={StyleSheet.applyWidth(
              { backgroundColor: 'rgba(0, 0, 0, 0)', opacity: 0.5 },
              dimensions.width
            )}
          />
        </Touchable>
      </View>

      <View style={StyleSheet.applyWidth({ margin: 20 }, dimensions.width)}>
        <Text
          accessible={true}
          allowFontScaling={true}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
              fontFamily: 'System',
              fontSize: 16,
              fontWeight: '400',
            }),
            dimensions.width
          )}
        >
          {'Call our customer care number for support'}
        </Text>
      </View>
      {/* View 2 */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'stretch',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            marginLeft: 20,
          },
          dimensions.width
        )}
      >
        <Touchable>
          <View
            style={StyleSheet.applyWidth(
              { alignItems: 'center', flexDirection: 'row' },
              dimensions.width
            )}
          >
            <Icon name={'Ionicons/call'} size={24} />
            <Text
              accessible={true}
              allowFontScaling={true}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                  marginLeft: 20,
                }),
                dimensions.width
              )}
            >
              {'1800-089-0987-099\n'}
            </Text>
          </View>
        </Touchable>
      </View>
      {/* Scroll View 2 */}
      <ScrollView
        bounces={true}
        contentContainerStyle={StyleSheet.applyWidth(
          { paddingBottom: 25 },
          dimensions.width
        )}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
      >
        {/* FAQs */}
        <View
          style={StyleSheet.applyWidth(
            { borderRadius: 12, marginLeft: 20, marginRight: 20, marginTop: 8 },
            dimensions.width
          )}
        >
          <View>
            <AccordionGroup
              caretSize={24}
              closedColor={theme.colors['GetFit Orange']}
              iconSize={24}
              label={'How to request a ride?'}
              openColor={theme.colors['App Green']}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.AccordionGroupStyles(theme)['Accordion'],
                  { marginBottom: 10, marginTop: 10 }
                ),
                dimensions.width
              )}
            >
              <Text
                accessible={true}
                allowFontScaling={true}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                    marginBottom: 10,
                    marginLeft: 10,
                    marginRight: 10,
                  }),
                  dimensions.width
                )}
              >
                {
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis  '
                }
              </Text>
            </AccordionGroup>
            {/* Accordion 2 */}
            <AccordionGroup
              caretSize={24}
              iconSize={24}
              label={'Get a estimate price for your ride?'}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.AccordionGroupStyles(theme)['Accordion'],
                  { marginBottom: 10, marginTop: 10 }
                ),
                dimensions.width
              )}
            >
              <Text
                accessible={true}
                allowFontScaling={true}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                    marginBottom: 10,
                    marginLeft: 10,
                    marginRight: 10,
                  }),
                  dimensions.width
                )}
              >
                {
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis  '
                }
              </Text>
            </AccordionGroup>
            {/* Accordion 3 */}
            <AccordionGroup
              caretSize={24}
              iconSize={24}
              label={'Request more than a vehicle?'}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.AccordionGroupStyles(theme)['Accordion'],
                  { marginBottom: 10, marginTop: 10 }
                ),
                dimensions.width
              )}
            >
              <Text
                accessible={true}
                allowFontScaling={true}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                    marginBottom: 10,
                    marginLeft: 10,
                    marginRight: 10,
                  }),
                  dimensions.width
                )}
              >
                {
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis  '
                }
              </Text>
            </AccordionGroup>
            {/* Accordion 4 */}
            <AccordionGroup
              caretSize={24}
              iconSize={24}
              label={'Scheduling a ride advance'}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.AccordionGroupStyles(theme)['Accordion'],
                  { marginBottom: 10, marginTop: 10 }
                ),
                dimensions.width
              )}
            >
              <Text
                accessible={true}
                allowFontScaling={true}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                    marginBottom: 10,
                    marginLeft: 10,
                    marginRight: 10,
                  }),
                  dimensions.width
                )}
              >
                {
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis  '
                }
              </Text>
            </AccordionGroup>
            {/* Accordion 5 */}
            <AccordionGroup
              caretSize={24}
              iconSize={24}
              label={'Check your pickup location'}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.AccordionGroupStyles(theme)['Accordion'],
                  { marginBottom: 10, marginTop: 10 }
                ),
                dimensions.width
              )}
            >
              <Text
                accessible={true}
                allowFontScaling={true}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                    marginBottom: 10,
                    marginLeft: 10,
                    marginRight: 10,
                  }),
                  dimensions.width
                )}
              >
                {
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis  '
                }
              </Text>
            </AccordionGroup>
            {/* Accordion 6 */}
            <AccordionGroup
              caretSize={24}
              iconSize={24}
              label={'Cancelling a ride'}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.AccordionGroupStyles(theme)['Accordion'],
                  { marginBottom: 10, marginTop: 10 }
                ),
                dimensions.width
              )}
            >
              <Text
                accessible={true}
                allowFontScaling={true}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                    marginBottom: 10,
                    marginLeft: 10,
                    marginRight: 10,
                  }),
                  dimensions.width
                )}
              >
                {
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis  '
                }
              </Text>
            </AccordionGroup>
            {/* Accordion 7 */}
            <AccordionGroup
              caretSize={24}
              iconSize={24}
              label={'Selecting a ride profile'}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.AccordionGroupStyles(theme)['Accordion'],
                  { marginBottom: 10, marginTop: 10 }
                ),
                dimensions.width
              )}
            >
              <Text
                accessible={true}
                allowFontScaling={true}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                    marginBottom: 10,
                    marginLeft: 10,
                    marginRight: 10,
                  }),
                  dimensions.width
                )}
              >
                {
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis  '
                }
              </Text>
            </AccordionGroup>
            {/* Accordion 8 */}
            <AccordionGroup
              caretSize={24}
              iconSize={24}
              label={'Sharing your location'}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.AccordionGroupStyles(theme)['Accordion'],
                  { marginBottom: 10, marginTop: 10 }
                ),
                dimensions.width
              )}
            >
              <Text
                accessible={true}
                allowFontScaling={true}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                    marginBottom: 10,
                    marginLeft: 10,
                    marginRight: 10,
                  }),
                  dimensions.width
                )}
              >
                {
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis  '
                }
              </Text>
            </AccordionGroup>
          </View>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
};

export default withTheme(FAQsScreen);
