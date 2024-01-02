import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import {
  AccordionGroup,
  Icon,
  ScreenContainer,
  TabView,
  TabViewItem,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { ScrollView, Text, View } from 'react-native';

const ActivityScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();

  return (
    <ScreenContainer
      hasBottomSafeArea={true}
      hasSafeArea={true}
      scrollable={false}
    >
      {/* Header */}
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
              {'Activity'}
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
            style={StyleSheet.applyWidth({ opacity: 0.5 }, dimensions.width)}
          />
        </Touchable>
      </View>

      <TabView
        activeColor={theme.colors.primary}
        indicatorColor={theme.colors.primary}
        keyboardDismissMode={'auto'}
        pressColor={theme.colors.primary}
        swipeEnabled={true}
        tabBarPosition={'top'}
        tabsBackgroundColor={theme.colors.background}
      >
        {/* Ongoing Tab View */}
        <>
          {!'OnGoing' ? null : (
            <TabViewItem
              style={StyleSheet.applyWidth(
                GlobalStyles.TabViewItemStyles(theme)['Tab View Item'],
                dimensions.width
              )}
              title={'Ongoing'}
            >
              <ScrollView
                bounces={true}
                showsHorizontalScrollIndicator={true}
                showsVerticalScrollIndicator={true}
              >
                {/* tripList */}
                <View
                  style={StyleSheet.applyWidth(
                    { margin: 10 },
                    dimensions.width
                  )}
                >
                  {/* 24 Dec 23 */}
                  <AccordionGroup
                    caretSize={24}
                    expanded={true}
                    iconSize={24}
                    label={'24 Dec 23'}
                    style={StyleSheet.applyWidth(
                      GlobalStyles.AccordionGroupStyles(theme)['Accordion'],
                      dimensions.width
                    )}
                  >
                    {/* Booking Component 3 */}
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          alignItems: 'center',
                          backgroundColor: 'rgba(0, 0, 0, 0)',
                          flexDirection: 'row',
                          justifyContent: 'flex-start',
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
                            width: '12%',
                          },
                          dimensions.width
                        )}
                      >
                        <Text
                          accessible={true}
                          allowFontScaling={true}
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.TextStyles(theme)['Text'],
                              {
                                fontSize: 14,
                                margin: 5,
                                marginLeft: 5,
                                marginRight: 5,
                              }
                            ),
                            dimensions.width
                          )}
                        >
                          {'20ft'}
                        </Text>
                        {/* Text 2 */}
                        <Text
                          accessible={true}
                          allowFontScaling={true}
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.TextStyles(theme)['Text'],
                              {
                                fontSize: 18,
                                margin: 5,
                                marginLeft: 5,
                                marginRight: 5,
                              }
                            ),
                            dimensions.width
                          )}
                        >
                          {'3'}
                        </Text>
                      </View>
                      {/* Started Place */}
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            alignItems: 'center',
                            backgroundColor: [
                              {
                                minWidth: Breakpoints.Mobile,
                                value: 'rgba(0, 0, 0, 0)',
                              },
                              {
                                minWidth: Breakpoints.Tablet,
                                value: 'rgba(0, 0, 0, 0)',
                              },
                            ],
                            margin: 5,
                            width: '35%',
                          },
                          dimensions.width
                        )}
                      >
                        <View
                          style={StyleSheet.applyWidth(
                            { margin: 5 },
                            dimensions.width
                          )}
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

                        <View
                          style={StyleSheet.applyWidth(
                            { margin: 5 },
                            dimensions.width
                          )}
                        >
                          {/* Text 2 */}
                          <Text
                            accessible={true}
                            allowFontScaling={true}
                            style={StyleSheet.applyWidth(
                              StyleSheet.compose(
                                GlobalStyles.TextStyles(theme)['Text'],
                                {
                                  color: theme.colors['Custom #acacac'],
                                  fontSize: 12,
                                }
                              ),
                              dimensions.width
                            )}
                          >
                            {'Operator Name'}
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
                              {
                                minWidth: Breakpoints.Mobile,
                                value: 'rgba(0, 0, 0, 0)',
                              },
                              {
                                minWidth: Breakpoints.Tablet,
                                value: 'rgba(0, 0, 0, 0)',
                              },
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
                              {
                                minWidth: Breakpoints.Mobile,
                                value: 'rgba(0, 0, 0, 0)',
                              },
                              {
                                minWidth: Breakpoints.Tablet,
                                value: 'rgba(0, 0, 0, 0)',
                              },
                            ],
                            justifyContent: 'flex-start',
                            margin: 5,
                            width: '35%',
                          },
                          dimensions.width
                        )}
                      >
                        <View
                          style={StyleSheet.applyWidth(
                            { margin: 5 },
                            dimensions.width
                          )}
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
                        {/* View 2 */}
                        <View
                          style={StyleSheet.applyWidth(
                            { margin: 5 },
                            dimensions.width
                          )}
                        >
                          <Text
                            accessible={true}
                            allowFontScaling={true}
                            style={StyleSheet.applyWidth(
                              StyleSheet.compose(
                                GlobalStyles.TextStyles(theme)['Text'],
                                { color: theme.colors['ShopAppBlue'] }
                              ),
                              dimensions.width
                            )}
                          >
                            {'Accepted'}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </AccordionGroup>
                  {/* 23 Dec 23 */}
                  <AccordionGroup
                    caretSize={24}
                    expanded={true}
                    iconSize={24}
                    label={'23 Dec 23'}
                    style={StyleSheet.applyWidth(
                      GlobalStyles.AccordionGroupStyles(theme)['Accordion'],
                      dimensions.width
                    )}
                  >
                    {/* Booking Component 2 */}
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          alignItems: 'center',
                          backgroundColor: 'rgba(0, 0, 0, 0)',
                          flexDirection: 'row',
                          justifyContent: 'flex-start',
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
                            width: '12%',
                          },
                          dimensions.width
                        )}
                      >
                        <Text
                          accessible={true}
                          allowFontScaling={true}
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.TextStyles(theme)['Text'],
                              {
                                fontSize: 14,
                                margin: 5,
                                marginLeft: 5,
                                marginRight: 5,
                              }
                            ),
                            dimensions.width
                          )}
                        >
                          {'40ft '}
                        </Text>
                        {/* Text 2 */}
                        <Text
                          accessible={true}
                          allowFontScaling={true}
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.TextStyles(theme)['Text'],
                              {
                                fontSize: 18,
                                margin: 5,
                                marginLeft: 5,
                                marginRight: 5,
                              }
                            ),
                            dimensions.width
                          )}
                        >
                          {'6\n'}
                        </Text>
                      </View>
                      {/* Started Place */}
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            alignItems: 'center',
                            backgroundColor: [
                              {
                                minWidth: Breakpoints.Mobile,
                                value: 'rgba(0, 0, 0, 0)',
                              },
                              {
                                minWidth: Breakpoints.Tablet,
                                value: 'rgba(0, 0, 0, 0)',
                              },
                            ],
                            margin: 5,
                            width: '35%',
                          },
                          dimensions.width
                        )}
                      >
                        <View
                          style={StyleSheet.applyWidth(
                            { margin: 5 },
                            dimensions.width
                          )}
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

                        <View
                          style={StyleSheet.applyWidth(
                            { margin: 5 },
                            dimensions.width
                          )}
                        >
                          {/* Text 2 */}
                          <Text
                            accessible={true}
                            allowFontScaling={true}
                            style={StyleSheet.applyWidth(
                              StyleSheet.compose(
                                GlobalStyles.TextStyles(theme)['Text'],
                                {
                                  color: theme.colors['Custom #acacac'],
                                  fontSize: 12,
                                }
                              ),
                              dimensions.width
                            )}
                          >
                            {'Operator Name'}
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
                              {
                                minWidth: Breakpoints.Mobile,
                                value: 'rgba(0, 0, 0, 0)',
                              },
                              {
                                minWidth: Breakpoints.Tablet,
                                value: 'rgba(0, 0, 0, 0)',
                              },
                            ],
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
                              {
                                minWidth: Breakpoints.Mobile,
                                value: 'rgba(0, 0, 0, 0)',
                              },
                              {
                                minWidth: Breakpoints.Tablet,
                                value: 'rgba(0, 0, 0, 0)',
                              },
                            ],
                            justifyContent: 'flex-start',
                            margin: 5,
                            width: '35%',
                          },
                          dimensions.width
                        )}
                      >
                        <View
                          style={StyleSheet.applyWidth(
                            { margin: 5 },
                            dimensions.width
                          )}
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
                        {/* View 2 */}
                        <View
                          style={StyleSheet.applyWidth(
                            { margin: 5 },
                            dimensions.width
                          )}
                        >
                          <Text
                            accessible={true}
                            allowFontScaling={true}
                            style={StyleSheet.applyWidth(
                              StyleSheet.compose(
                                GlobalStyles.TextStyles(theme)['Text'],
                                { color: theme.colors['Custom Color_11'] }
                              ),
                              dimensions.width
                            )}
                          >
                            {'On Going'}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </AccordionGroup>
                  {/* 22 Dec 23 */}
                  <AccordionGroup
                    caretSize={24}
                    expanded={true}
                    iconSize={24}
                    label={'22 Dec 23'}
                    style={StyleSheet.applyWidth(
                      GlobalStyles.AccordionGroupStyles(theme)['Accordion'],
                      dimensions.width
                    )}
                  >
                    {/* Booking Component 4 */}
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          alignItems: 'center',
                          backgroundColor: 'rgba(0, 0, 0, 0)',
                          flexDirection: 'row',
                          justifyContent: 'flex-start',
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
                            width: '12%',
                          },
                          dimensions.width
                        )}
                      >
                        <Text
                          accessible={true}
                          allowFontScaling={true}
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.TextStyles(theme)['Text'],
                              {
                                fontSize: 14,
                                margin: 5,
                                marginLeft: 5,
                                marginRight: 5,
                              }
                            ),
                            dimensions.width
                          )}
                        >
                          {'40ft'}
                        </Text>
                        {/* Text 2 */}
                        <Text
                          accessible={true}
                          allowFontScaling={true}
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.TextStyles(theme)['Text'],
                              {
                                fontSize: 18,
                                margin: 5,
                                marginLeft: 5,
                                marginRight: 5,
                              }
                            ),
                            dimensions.width
                          )}
                        >
                          {'4'}
                        </Text>
                      </View>
                      {/* Started Place */}
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            alignItems: 'center',
                            backgroundColor: [
                              {
                                minWidth: Breakpoints.Mobile,
                                value: 'rgba(0, 0, 0, 0)',
                              },
                              {
                                minWidth: Breakpoints.Tablet,
                                value: 'rgba(0, 0, 0, 0)',
                              },
                            ],
                            margin: 5,
                            width: '35%',
                          },
                          dimensions.width
                        )}
                      >
                        <View
                          style={StyleSheet.applyWidth(
                            { margin: 5 },
                            dimensions.width
                          )}
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

                        <View
                          style={StyleSheet.applyWidth(
                            { margin: 5 },
                            dimensions.width
                          )}
                        >
                          {/* Text 2 */}
                          <Text
                            accessible={true}
                            allowFontScaling={true}
                            style={StyleSheet.applyWidth(
                              StyleSheet.compose(
                                GlobalStyles.TextStyles(theme)['Text'],
                                {
                                  color: theme.colors['Custom #acacac'],
                                  fontSize: 12,
                                }
                              ),
                              dimensions.width
                            )}
                          >
                            {'Operator Name'}
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
                              {
                                minWidth: Breakpoints.Mobile,
                                value: 'rgba(0, 0, 0, 0)',
                              },
                              {
                                minWidth: Breakpoints.Tablet,
                                value: 'rgba(0, 0, 0, 0)',
                              },
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
                              {
                                minWidth: Breakpoints.Mobile,
                                value: 'rgba(0, 0, 0, 0)',
                              },
                              {
                                minWidth: Breakpoints.Tablet,
                                value: 'rgba(0, 0, 0, 0)',
                              },
                            ],
                            justifyContent: 'flex-start',
                            margin: 5,
                            width: '35%',
                          },
                          dimensions.width
                        )}
                      >
                        <View
                          style={StyleSheet.applyWidth(
                            { margin: 5 },
                            dimensions.width
                          )}
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
                        {/* View 2 */}
                        <View
                          style={StyleSheet.applyWidth(
                            { margin: 5 },
                            dimensions.width
                          )}
                        >
                          <Text
                            accessible={true}
                            allowFontScaling={true}
                            style={StyleSheet.applyWidth(
                              StyleSheet.compose(
                                GlobalStyles.TextStyles(theme)['Text'],
                                { color: theme.colors['Error'] }
                              ),
                              dimensions.width
                            )}
                          >
                            {'Canceled'}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </AccordionGroup>
                  {/* 21 Dec 23 */}
                  <AccordionGroup
                    caretSize={24}
                    expanded={true}
                    iconSize={24}
                    label={'21 Dec 23'}
                    style={StyleSheet.applyWidth(
                      GlobalStyles.AccordionGroupStyles(theme)['Accordion'],
                      dimensions.width
                    )}
                  >
                    {/* Booking Component */}
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          alignItems: 'center',
                          backgroundColor: 'rgba(0, 0, 0, 0)',
                          flexDirection: 'row',
                          justifyContent: 'flex-start',
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
                            width: '12%',
                          },
                          dimensions.width
                        )}
                      >
                        <Text
                          accessible={true}
                          allowFontScaling={true}
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.TextStyles(theme)['Text'],
                              {
                                fontSize: 14,
                                margin: 5,
                                marginLeft: 5,
                                marginRight: 5,
                              }
                            ),
                            dimensions.width
                          )}
                        >
                          {'20ft'}
                        </Text>
                        {/* Text 2 */}
                        <Text
                          accessible={true}
                          allowFontScaling={true}
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.TextStyles(theme)['Text'],
                              {
                                fontSize: 18,
                                margin: 5,
                                marginLeft: 5,
                                marginRight: 5,
                              }
                            ),
                            dimensions.width
                          )}
                        >
                          {'6\n'}
                        </Text>
                      </View>
                      {/* Started Place */}
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            alignItems: 'center',
                            backgroundColor: [
                              {
                                minWidth: Breakpoints.Mobile,
                                value: 'rgba(0, 0, 0, 0)',
                              },
                              {
                                minWidth: Breakpoints.Tablet,
                                value: 'rgba(0, 0, 0, 0)',
                              },
                            ],
                            margin: 5,
                            width: '35%',
                          },
                          dimensions.width
                        )}
                      >
                        <View
                          style={StyleSheet.applyWidth(
                            { margin: 5 },
                            dimensions.width
                          )}
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

                        <View
                          style={StyleSheet.applyWidth(
                            { margin: 5 },
                            dimensions.width
                          )}
                        >
                          {/* Text 2 */}
                          <Text
                            accessible={true}
                            allowFontScaling={true}
                            style={StyleSheet.applyWidth(
                              StyleSheet.compose(
                                GlobalStyles.TextStyles(theme)['Text'],
                                {
                                  color: theme.colors['Custom #acacac'],
                                  fontSize: 12,
                                }
                              ),
                              dimensions.width
                            )}
                          >
                            {'Operator Name'}
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
                              {
                                minWidth: Breakpoints.Mobile,
                                value: 'rgba(0, 0, 0, 0)',
                              },
                              {
                                minWidth: Breakpoints.Tablet,
                                value: 'rgba(0, 0, 0, 0)',
                              },
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
                              {
                                minWidth: Breakpoints.Mobile,
                                value: 'rgba(0, 0, 0, 0)',
                              },
                              {
                                minWidth: Breakpoints.Tablet,
                                value: 'rgba(0, 0, 0, 0)',
                              },
                            ],
                            justifyContent: 'flex-start',
                            margin: 5,
                            width: '35%',
                          },
                          dimensions.width
                        )}
                      >
                        <View
                          style={StyleSheet.applyWidth(
                            { margin: 5 },
                            dimensions.width
                          )}
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
                        {/* Status Container */}
                        <View
                          style={StyleSheet.applyWidth(
                            { margin: 5 },
                            dimensions.width
                          )}
                        >
                          <Text
                            accessible={true}
                            allowFontScaling={true}
                            style={StyleSheet.applyWidth(
                              StyleSheet.compose(
                                GlobalStyles.TextStyles(theme)['Text'],
                                { color: theme.colors['GetFit Orange'] }
                              ),
                              dimensions.width
                            )}
                          >
                            {'Pending'}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </AccordionGroup>
                  {/* 20 Dec 23 */}
                  <AccordionGroup
                    caretSize={24}
                    expanded={true}
                    iconSize={24}
                    label={'21 Dec 23'}
                    style={StyleSheet.applyWidth(
                      GlobalStyles.AccordionGroupStyles(theme)['Accordion'],
                      dimensions.width
                    )}
                  >
                    {/* Booking Component */}
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          alignItems: 'center',
                          backgroundColor: 'rgba(0, 0, 0, 0)',
                          flexDirection: 'row',
                          justifyContent: 'flex-start',
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
                            width: '12%',
                          },
                          dimensions.width
                        )}
                      >
                        <Text
                          accessible={true}
                          allowFontScaling={true}
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.TextStyles(theme)['Text'],
                              {
                                fontSize: 14,
                                margin: 5,
                                marginLeft: 5,
                                marginRight: 5,
                              }
                            ),
                            dimensions.width
                          )}
                        >
                          {'20ft'}
                        </Text>
                        {/* Text 2 */}
                        <Text
                          accessible={true}
                          allowFontScaling={true}
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.TextStyles(theme)['Text'],
                              {
                                fontSize: 18,
                                margin: 5,
                                marginLeft: 5,
                                marginRight: 5,
                              }
                            ),
                            dimensions.width
                          )}
                        >
                          {'6\n'}
                        </Text>
                      </View>
                      {/* Started Place */}
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            alignItems: 'center',
                            backgroundColor: [
                              {
                                minWidth: Breakpoints.Mobile,
                                value: 'rgba(0, 0, 0, 0)',
                              },
                              {
                                minWidth: Breakpoints.Tablet,
                                value: 'rgba(0, 0, 0, 0)',
                              },
                            ],
                            margin: 5,
                            width: '35%',
                          },
                          dimensions.width
                        )}
                      >
                        <View
                          style={StyleSheet.applyWidth(
                            { margin: 5 },
                            dimensions.width
                          )}
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

                        <View
                          style={StyleSheet.applyWidth(
                            { margin: 5 },
                            dimensions.width
                          )}
                        >
                          {/* Text 2 */}
                          <Text
                            accessible={true}
                            allowFontScaling={true}
                            style={StyleSheet.applyWidth(
                              StyleSheet.compose(
                                GlobalStyles.TextStyles(theme)['Text'],
                                {
                                  color: theme.colors['Custom #acacac'],
                                  fontSize: 12,
                                }
                              ),
                              dimensions.width
                            )}
                          >
                            {'Operator Name'}
                          </Text>
                        </View>
                        {/* View 2 */}
                        <View />
                      </View>
                      {/* Icon View */}
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            backgroundColor: [
                              {
                                minWidth: Breakpoints.Mobile,
                                value: 'rgba(0, 0, 0, 0)',
                              },
                              {
                                minWidth: Breakpoints.Tablet,
                                value: 'rgba(0, 0, 0, 0)',
                              },
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
                              {
                                minWidth: Breakpoints.Mobile,
                                value: 'rgba(0, 0, 0, 0)',
                              },
                              {
                                minWidth: Breakpoints.Tablet,
                                value: 'rgba(0, 0, 0, 0)',
                              },
                            ],
                            justifyContent: 'flex-start',
                            margin: 5,
                            width: '35%',
                          },
                          dimensions.width
                        )}
                      >
                        <View
                          style={StyleSheet.applyWidth(
                            { margin: 5 },
                            dimensions.width
                          )}
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
                        {/* Status Container */}
                        <View
                          style={StyleSheet.applyWidth(
                            { margin: 5 },
                            dimensions.width
                          )}
                        >
                          <Text
                            accessible={true}
                            allowFontScaling={true}
                            style={StyleSheet.applyWidth(
                              StyleSheet.compose(
                                GlobalStyles.TextStyles(theme)['Text'],
                                { color: theme.colors['GetFit Orange'] }
                              ),
                              dimensions.width
                            )}
                          >
                            {'Pending'}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </AccordionGroup>
                </View>
              </ScrollView>
            </TabViewItem>
          )}
        </>
        {/* Completed */}
        <>
          {!'Completed' ? null : (
            <TabViewItem
              style={StyleSheet.applyWidth(
                GlobalStyles.TabViewItemStyles(theme)['Tab View Item'],
                dimensions.width
              )}
              title={'Completed'}
            >
              {/* scrollAcordian */}
              <ScrollView
                bounces={true}
                showsHorizontalScrollIndicator={true}
                showsVerticalScrollIndicator={true}
              >
                {/* tripList */}
                <View
                  style={StyleSheet.applyWidth(
                    { margin: 10 },
                    dimensions.width
                  )}
                >
                  {/* 24 Dec 23 */}
                  <AccordionGroup
                    caretSize={24}
                    expanded={true}
                    iconSize={24}
                    label={'24 Dec 23'}
                    style={StyleSheet.applyWidth(
                      GlobalStyles.AccordionGroupStyles(theme)['Accordion'],
                      dimensions.width
                    )}
                  >
                    {/* Booking Component 3 */}
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          alignItems: 'center',
                          backgroundColor: 'rgba(0, 0, 0, 0)',
                          flexDirection: 'row',
                          justifyContent: 'flex-start',
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
                            width: '12%',
                          },
                          dimensions.width
                        )}
                      >
                        <Text
                          accessible={true}
                          allowFontScaling={true}
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.TextStyles(theme)['Text'],
                              {
                                fontSize: 14,
                                margin: 5,
                                marginLeft: 5,
                                marginRight: 5,
                              }
                            ),
                            dimensions.width
                          )}
                        >
                          {'20ft'}
                        </Text>
                        {/* Text 2 */}
                        <Text
                          accessible={true}
                          allowFontScaling={true}
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.TextStyles(theme)['Text'],
                              {
                                fontSize: 18,
                                margin: 5,
                                marginLeft: 5,
                                marginRight: 5,
                              }
                            ),
                            dimensions.width
                          )}
                        >
                          {'3'}
                        </Text>
                      </View>
                      {/* Started Place */}
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            alignItems: 'center',
                            backgroundColor: [
                              {
                                minWidth: Breakpoints.Mobile,
                                value: 'rgba(0, 0, 0, 0)',
                              },
                              {
                                minWidth: Breakpoints.Tablet,
                                value: 'rgba(0, 0, 0, 0)',
                              },
                            ],
                            margin: 5,
                            width: '35%',
                          },
                          dimensions.width
                        )}
                      >
                        <View
                          style={StyleSheet.applyWidth(
                            { margin: 5 },
                            dimensions.width
                          )}
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

                        <View
                          style={StyleSheet.applyWidth(
                            { margin: 5 },
                            dimensions.width
                          )}
                        >
                          {/* Text 2 */}
                          <Text
                            accessible={true}
                            allowFontScaling={true}
                            style={StyleSheet.applyWidth(
                              StyleSheet.compose(
                                GlobalStyles.TextStyles(theme)['Text'],
                                {
                                  color: theme.colors['Custom #acacac'],
                                  fontSize: 12,
                                }
                              ),
                              dimensions.width
                            )}
                          >
                            {'Operator Name'}
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
                              {
                                minWidth: Breakpoints.Mobile,
                                value: 'rgba(0, 0, 0, 0)',
                              },
                              {
                                minWidth: Breakpoints.Tablet,
                                value: 'rgba(0, 0, 0, 0)',
                              },
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
                              {
                                minWidth: Breakpoints.Mobile,
                                value: 'rgba(0, 0, 0, 0)',
                              },
                              {
                                minWidth: Breakpoints.Tablet,
                                value: 'rgba(0, 0, 0, 0)',
                              },
                            ],
                            justifyContent: 'flex-start',
                            margin: 5,
                            width: '35%',
                          },
                          dimensions.width
                        )}
                      >
                        <View
                          style={StyleSheet.applyWidth(
                            { margin: 5 },
                            dimensions.width
                          )}
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
                        {/* Status View */}
                        <View
                          style={StyleSheet.applyWidth(
                            { margin: 5 },
                            dimensions.width
                          )}
                        >
                          {/* Status Text */}
                          <Text
                            accessible={true}
                            allowFontScaling={true}
                            style={StyleSheet.applyWidth(
                              StyleSheet.compose(
                                GlobalStyles.TextStyles(theme)['Text'],
                                { color: theme.colors['Success'] }
                              ),
                              dimensions.width
                            )}
                          >
                            {'Completed'}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </AccordionGroup>
                  {/* 23 Dec 23 */}
                  <AccordionGroup
                    caretSize={24}
                    expanded={true}
                    iconSize={24}
                    label={'23 Dec 23'}
                    style={StyleSheet.applyWidth(
                      GlobalStyles.AccordionGroupStyles(theme)['Accordion'],
                      dimensions.width
                    )}
                  >
                    {/* Booking Component 2 */}
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          alignItems: 'center',
                          backgroundColor: 'rgba(0, 0, 0, 0)',
                          flexDirection: 'row',
                          justifyContent: 'flex-start',
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
                            width: '12%',
                          },
                          dimensions.width
                        )}
                      >
                        <Text
                          accessible={true}
                          allowFontScaling={true}
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.TextStyles(theme)['Text'],
                              {
                                fontSize: 14,
                                margin: 5,
                                marginLeft: 5,
                                marginRight: 5,
                              }
                            ),
                            dimensions.width
                          )}
                        >
                          {'40ft '}
                        </Text>
                        {/* Text 2 */}
                        <Text
                          accessible={true}
                          allowFontScaling={true}
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.TextStyles(theme)['Text'],
                              {
                                fontSize: 18,
                                margin: 5,
                                marginLeft: 5,
                                marginRight: 5,
                              }
                            ),
                            dimensions.width
                          )}
                        >
                          {'6\n'}
                        </Text>
                      </View>
                      {/* Started Place */}
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            alignItems: 'center',
                            backgroundColor: [
                              {
                                minWidth: Breakpoints.Mobile,
                                value: 'rgba(0, 0, 0, 0)',
                              },
                              {
                                minWidth: Breakpoints.Tablet,
                                value: 'rgba(0, 0, 0, 0)',
                              },
                            ],
                            margin: 5,
                            width: '35%',
                          },
                          dimensions.width
                        )}
                      >
                        <View
                          style={StyleSheet.applyWidth(
                            { margin: 5 },
                            dimensions.width
                          )}
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

                        <View
                          style={StyleSheet.applyWidth(
                            { margin: 5 },
                            dimensions.width
                          )}
                        >
                          {/* Text 2 */}
                          <Text
                            accessible={true}
                            allowFontScaling={true}
                            style={StyleSheet.applyWidth(
                              StyleSheet.compose(
                                GlobalStyles.TextStyles(theme)['Text'],
                                {
                                  color: theme.colors['Custom #acacac'],
                                  fontSize: 12,
                                }
                              ),
                              dimensions.width
                            )}
                          >
                            {'Operator Name'}
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
                              {
                                minWidth: Breakpoints.Mobile,
                                value: 'rgba(0, 0, 0, 0)',
                              },
                              {
                                minWidth: Breakpoints.Tablet,
                                value: 'rgba(0, 0, 0, 0)',
                              },
                            ],
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
                              {
                                minWidth: Breakpoints.Mobile,
                                value: 'rgba(0, 0, 0, 0)',
                              },
                              {
                                minWidth: Breakpoints.Tablet,
                                value: 'rgba(0, 0, 0, 0)',
                              },
                            ],
                            justifyContent: 'flex-start',
                            margin: 5,
                            width: '35%',
                          },
                          dimensions.width
                        )}
                      >
                        <View
                          style={StyleSheet.applyWidth(
                            { margin: 5 },
                            dimensions.width
                          )}
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
                        {/* Status View */}
                        <View
                          style={StyleSheet.applyWidth(
                            { margin: 5 },
                            dimensions.width
                          )}
                        >
                          {/* Status Text */}
                          <Text
                            accessible={true}
                            allowFontScaling={true}
                            style={StyleSheet.applyWidth(
                              StyleSheet.compose(
                                GlobalStyles.TextStyles(theme)['Text'],
                                { color: theme.colors['Success'] }
                              ),
                              dimensions.width
                            )}
                          >
                            {'Completed'}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </AccordionGroup>
                  {/* 22 Dec 23 */}
                  <AccordionGroup
                    caretSize={24}
                    expanded={true}
                    iconSize={24}
                    label={'22 Dec 23'}
                    style={StyleSheet.applyWidth(
                      GlobalStyles.AccordionGroupStyles(theme)['Accordion'],
                      dimensions.width
                    )}
                  >
                    {/* Booking Component 4 */}
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          alignItems: 'center',
                          backgroundColor: 'rgba(0, 0, 0, 0)',
                          flexDirection: 'row',
                          justifyContent: 'flex-start',
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
                            width: '12%',
                          },
                          dimensions.width
                        )}
                      >
                        <Text
                          accessible={true}
                          allowFontScaling={true}
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.TextStyles(theme)['Text'],
                              {
                                fontSize: 14,
                                margin: 5,
                                marginLeft: 5,
                                marginRight: 5,
                              }
                            ),
                            dimensions.width
                          )}
                        >
                          {'40ft'}
                        </Text>
                        {/* Text 2 */}
                        <Text
                          accessible={true}
                          allowFontScaling={true}
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.TextStyles(theme)['Text'],
                              {
                                fontSize: 18,
                                margin: 5,
                                marginLeft: 5,
                                marginRight: 5,
                              }
                            ),
                            dimensions.width
                          )}
                        >
                          {'4'}
                        </Text>
                      </View>
                      {/* Started Place */}
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            alignItems: 'center',
                            backgroundColor: [
                              {
                                minWidth: Breakpoints.Mobile,
                                value: 'rgba(0, 0, 0, 0)',
                              },
                              {
                                minWidth: Breakpoints.Tablet,
                                value: 'rgba(0, 0, 0, 0)',
                              },
                            ],
                            margin: 5,
                            width: '35%',
                          },
                          dimensions.width
                        )}
                      >
                        <View
                          style={StyleSheet.applyWidth(
                            { margin: 5 },
                            dimensions.width
                          )}
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

                        <View
                          style={StyleSheet.applyWidth(
                            { margin: 5 },
                            dimensions.width
                          )}
                        >
                          {/* Text 2 */}
                          <Text
                            accessible={true}
                            allowFontScaling={true}
                            style={StyleSheet.applyWidth(
                              StyleSheet.compose(
                                GlobalStyles.TextStyles(theme)['Text'],
                                {
                                  color: theme.colors['Custom #acacac'],
                                  fontSize: 12,
                                }
                              ),
                              dimensions.width
                            )}
                          >
                            {'Operator Name'}
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
                              {
                                minWidth: Breakpoints.Mobile,
                                value: 'rgba(0, 0, 0, 0)',
                              },
                              {
                                minWidth: Breakpoints.Tablet,
                                value: 'rgba(0, 0, 0, 0)',
                              },
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
                              {
                                minWidth: Breakpoints.Mobile,
                                value: 'rgba(0, 0, 0, 0)',
                              },
                              {
                                minWidth: Breakpoints.Tablet,
                                value: 'rgba(0, 0, 0, 0)',
                              },
                            ],
                            justifyContent: 'flex-start',
                            margin: 5,
                            width: '35%',
                          },
                          dimensions.width
                        )}
                      >
                        <View
                          style={StyleSheet.applyWidth(
                            { margin: 5 },
                            dimensions.width
                          )}
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
                        {/* Status View */}
                        <View
                          style={StyleSheet.applyWidth(
                            { margin: 5 },
                            dimensions.width
                          )}
                        >
                          {/* Status Text */}
                          <Text
                            accessible={true}
                            allowFontScaling={true}
                            style={StyleSheet.applyWidth(
                              StyleSheet.compose(
                                GlobalStyles.TextStyles(theme)['Text'],
                                { color: theme.colors['Error'] }
                              ),
                              dimensions.width
                            )}
                          >
                            {'Canceled'}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </AccordionGroup>
                  {/* 21 Dec 23 */}
                  <AccordionGroup
                    caretSize={24}
                    expanded={true}
                    iconSize={24}
                    label={'21 Dec 23'}
                    style={StyleSheet.applyWidth(
                      GlobalStyles.AccordionGroupStyles(theme)['Accordion'],
                      dimensions.width
                    )}
                  >
                    {/* Booking Component */}
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          alignItems: 'center',
                          backgroundColor: 'rgba(0, 0, 0, 0)',
                          flexDirection: 'row',
                          justifyContent: 'flex-start',
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
                            width: '12%',
                          },
                          dimensions.width
                        )}
                      >
                        <Text
                          accessible={true}
                          allowFontScaling={true}
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.TextStyles(theme)['Text'],
                              {
                                fontSize: 14,
                                margin: 5,
                                marginLeft: 5,
                                marginRight: 5,
                              }
                            ),
                            dimensions.width
                          )}
                        >
                          {'20ft'}
                        </Text>
                        {/* Text 2 */}
                        <Text
                          accessible={true}
                          allowFontScaling={true}
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.TextStyles(theme)['Text'],
                              {
                                fontSize: 18,
                                margin: 5,
                                marginLeft: 5,
                                marginRight: 5,
                              }
                            ),
                            dimensions.width
                          )}
                        >
                          {'6\n'}
                        </Text>
                      </View>
                      {/* Started Place */}
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            alignItems: 'center',
                            backgroundColor: [
                              {
                                minWidth: Breakpoints.Mobile,
                                value: 'rgba(0, 0, 0, 0)',
                              },
                              {
                                minWidth: Breakpoints.Tablet,
                                value: 'rgba(0, 0, 0, 0)',
                              },
                            ],
                            margin: 5,
                            width: '35%',
                          },
                          dimensions.width
                        )}
                      >
                        <View
                          style={StyleSheet.applyWidth(
                            { margin: 5 },
                            dimensions.width
                          )}
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

                        <View
                          style={StyleSheet.applyWidth(
                            { margin: 5 },
                            dimensions.width
                          )}
                        >
                          {/* Text 2 */}
                          <Text
                            accessible={true}
                            allowFontScaling={true}
                            style={StyleSheet.applyWidth(
                              StyleSheet.compose(
                                GlobalStyles.TextStyles(theme)['Text'],
                                {
                                  color: theme.colors['Custom #acacac'],
                                  fontSize: 12,
                                }
                              ),
                              dimensions.width
                            )}
                          >
                            {'Operator Name'}
                          </Text>
                        </View>
                        {/* View 2 */}
                        <View />
                      </View>
                      {/* Icon View */}
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            backgroundColor: [
                              {
                                minWidth: Breakpoints.Mobile,
                                value: 'rgba(0, 0, 0, 0)',
                              },
                              {
                                minWidth: Breakpoints.Tablet,
                                value: 'rgba(0, 0, 0, 0)',
                              },
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
                              {
                                minWidth: Breakpoints.Mobile,
                                value: 'rgba(0, 0, 0, 0)',
                              },
                              {
                                minWidth: Breakpoints.Tablet,
                                value: 'rgba(0, 0, 0, 0)',
                              },
                            ],
                            justifyContent: 'flex-start',
                            margin: 5,
                            width: '35%',
                          },
                          dimensions.width
                        )}
                      >
                        <View
                          style={StyleSheet.applyWidth(
                            { margin: 5 },
                            dimensions.width
                          )}
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
                        {/* Status View */}
                        <View
                          style={StyleSheet.applyWidth(
                            { margin: 5 },
                            dimensions.width
                          )}
                        >
                          {/* Status Text */}
                          <Text
                            accessible={true}
                            allowFontScaling={true}
                            style={StyleSheet.applyWidth(
                              StyleSheet.compose(
                                GlobalStyles.TextStyles(theme)['Text'],
                                { color: theme.colors['Error'] }
                              ),
                              dimensions.width
                            )}
                          >
                            {'Canceled'}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </AccordionGroup>
                </View>
              </ScrollView>
            </TabViewItem>
          )}
        </>
        {/* Paid Tab View */}
        <>
          {!'Completed' ? null : (
            <TabViewItem
              style={StyleSheet.applyWidth(
                GlobalStyles.TabViewItemStyles(theme)['Tab View Item'],
                dimensions.width
              )}
              title={'Paid'}
            >
              {/* Scroll View 3 */}
              <ScrollView
                bounces={true}
                showsHorizontalScrollIndicator={true}
                showsVerticalScrollIndicator={true}
              >
                {/* tripList */}
                <View>
                  {/* Booking Component */}
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
                          StyleSheet.compose(
                            GlobalStyles.TextStyles(theme)['Text'],
                            {
                              fontSize: 14,
                              margin: 5,
                              marginLeft: 5,
                              marginRight: 5,
                            }
                          ),
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
                          StyleSheet.compose(
                            GlobalStyles.TextStyles(theme)['Text'],
                            {
                              fontSize: 18,
                              margin: 5,
                              marginLeft: 5,
                              marginRight: 5,
                            }
                          ),
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
                          StyleSheet.compose(
                            GlobalStyles.TextStyles(theme)['Text'],
                            {
                              fontSize: 12,
                              margin: 5,
                              marginLeft: 5,
                              marginRight: 5,
                            }
                          ),
                          dimensions.width
                        )}
                      >
                        {'Mon'}
                      </Text>
                    </View>
                    {/* Started Place */}
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          alignItems: 'center',
                          backgroundColor: [
                            {
                              minWidth: Breakpoints.Mobile,
                              value: 'rgba(0, 0, 0, 0)',
                            },
                            {
                              minWidth: Breakpoints.Tablet,
                              value: 'rgba(0, 0, 0, 0)',
                            },
                          ],
                          margin: 5,
                          width: '40%',
                        },
                        dimensions.width
                      )}
                    >
                      <View
                        style={StyleSheet.applyWidth(
                          { margin: 5 },
                          dimensions.width
                        )}
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

                      <View
                        style={StyleSheet.applyWidth(
                          { margin: 5 },
                          dimensions.width
                        )}
                      >
                        {/* Text 2 */}
                        <Text
                          accessible={true}
                          allowFontScaling={true}
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.TextStyles(theme)['Text'],
                              {
                                color: theme.colors['Custom #acacac'],
                                fontSize: 12,
                              }
                            ),
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
                            {
                              minWidth: Breakpoints.Mobile,
                              value: 'rgba(0, 0, 0, 0)',
                            },
                            {
                              minWidth: Breakpoints.Tablet,
                              value: 'rgba(0, 0, 0, 0)',
                            },
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
                            {
                              minWidth: Breakpoints.Mobile,
                              value: 'rgba(0, 0, 0, 0)',
                            },
                            {
                              minWidth: Breakpoints.Tablet,
                              value: 'rgba(0, 0, 0, 0)',
                            },
                          ],
                          justifyContent: 'flex-start',
                          margin: 5,
                          width: '40%',
                        },
                        dimensions.width
                      )}
                    >
                      <View
                        style={StyleSheet.applyWidth(
                          { margin: 5 },
                          dimensions.width
                        )}
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
                    </View>
                  </View>
                  {/* Booking Component 3 */}
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
                          StyleSheet.compose(
                            GlobalStyles.TextStyles(theme)['Text'],
                            {
                              fontSize: 14,
                              margin: 5,
                              marginLeft: 5,
                              marginRight: 5,
                            }
                          ),
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
                          StyleSheet.compose(
                            GlobalStyles.TextStyles(theme)['Text'],
                            {
                              fontSize: 18,
                              margin: 5,
                              marginLeft: 5,
                              marginRight: 5,
                            }
                          ),
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
                          StyleSheet.compose(
                            GlobalStyles.TextStyles(theme)['Text'],
                            {
                              fontSize: 12,
                              margin: 5,
                              marginLeft: 5,
                              marginRight: 5,
                            }
                          ),
                          dimensions.width
                        )}
                      >
                        {'Sun'}
                      </Text>
                    </View>
                    {/* Started Place */}
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          alignItems: 'center',
                          backgroundColor: [
                            {
                              minWidth: Breakpoints.Mobile,
                              value: 'rgba(0, 0, 0, 0)',
                            },
                            {
                              minWidth: Breakpoints.Tablet,
                              value: 'rgba(0, 0, 0, 0)',
                            },
                          ],
                          margin: 5,
                          width: '40%',
                        },
                        dimensions.width
                      )}
                    >
                      <View
                        style={StyleSheet.applyWidth(
                          { margin: 5 },
                          dimensions.width
                        )}
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

                      <View
                        style={StyleSheet.applyWidth(
                          { margin: 5 },
                          dimensions.width
                        )}
                      >
                        {/* Text 2 */}
                        <Text
                          accessible={true}
                          allowFontScaling={true}
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.TextStyles(theme)['Text'],
                              {
                                color: theme.colors['Custom #acacac'],
                                fontSize: 12,
                              }
                            ),
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
                            {
                              minWidth: Breakpoints.Mobile,
                              value: 'rgba(0, 0, 0, 0)',
                            },
                            {
                              minWidth: Breakpoints.Tablet,
                              value: 'rgba(0, 0, 0, 0)',
                            },
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
                            {
                              minWidth: Breakpoints.Mobile,
                              value: 'rgba(0, 0, 0, 0)',
                            },
                            {
                              minWidth: Breakpoints.Tablet,
                              value: 'rgba(0, 0, 0, 0)',
                            },
                          ],
                          justifyContent: 'flex-start',
                          margin: 5,
                          width: '40%',
                        },
                        dimensions.width
                      )}
                    >
                      <View
                        style={StyleSheet.applyWidth(
                          { margin: 5 },
                          dimensions.width
                        )}
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
                    </View>
                  </View>
                  {/* Booking Component 2 */}
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
                          StyleSheet.compose(
                            GlobalStyles.TextStyles(theme)['Text'],
                            {
                              fontSize: 14,
                              margin: 5,
                              marginLeft: 5,
                              marginRight: 5,
                            }
                          ),
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
                          StyleSheet.compose(
                            GlobalStyles.TextStyles(theme)['Text'],
                            {
                              fontSize: 18,
                              margin: 5,
                              marginLeft: 5,
                              marginRight: 5,
                            }
                          ),
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
                          StyleSheet.compose(
                            GlobalStyles.TextStyles(theme)['Text'],
                            {
                              fontSize: 12,
                              margin: 5,
                              marginLeft: 5,
                              marginRight: 5,
                            }
                          ),
                          dimensions.width
                        )}
                      >
                        {'Sun'}
                      </Text>
                    </View>
                    {/* Started Place */}
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          alignItems: 'center',
                          backgroundColor: [
                            {
                              minWidth: Breakpoints.Mobile,
                              value: 'rgba(0, 0, 0, 0)',
                            },
                            {
                              minWidth: Breakpoints.Tablet,
                              value: 'rgba(0, 0, 0, 0)',
                            },
                          ],
                          margin: 5,
                          width: '40%',
                        },
                        dimensions.width
                      )}
                    >
                      <View
                        style={StyleSheet.applyWidth(
                          { margin: 5 },
                          dimensions.width
                        )}
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

                      <View
                        style={StyleSheet.applyWidth(
                          { margin: 5 },
                          dimensions.width
                        )}
                      >
                        {/* Text 2 */}
                        <Text
                          accessible={true}
                          allowFontScaling={true}
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.TextStyles(theme)['Text'],
                              {
                                color: theme.colors['Custom #acacac'],
                                fontSize: 12,
                              }
                            ),
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
                            {
                              minWidth: Breakpoints.Mobile,
                              value: 'rgba(0, 0, 0, 0)',
                            },
                            {
                              minWidth: Breakpoints.Tablet,
                              value: 'rgba(0, 0, 0, 0)',
                            },
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
                            {
                              minWidth: Breakpoints.Mobile,
                              value: 'rgba(0, 0, 0, 0)',
                            },
                            {
                              minWidth: Breakpoints.Tablet,
                              value: 'rgba(0, 0, 0, 0)',
                            },
                          ],
                          justifyContent: 'flex-start',
                          margin: 5,
                          width: '40%',
                        },
                        dimensions.width
                      )}
                    >
                      <View
                        style={StyleSheet.applyWidth(
                          { margin: 5 },
                          dimensions.width
                        )}
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
                    </View>
                  </View>
                  {/* Booking Component 4 */}
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
                          StyleSheet.compose(
                            GlobalStyles.TextStyles(theme)['Text'],
                            {
                              fontSize: 14,
                              margin: 5,
                              marginLeft: 5,
                              marginRight: 5,
                            }
                          ),
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
                          StyleSheet.compose(
                            GlobalStyles.TextStyles(theme)['Text'],
                            {
                              fontSize: 18,
                              margin: 5,
                              marginLeft: 5,
                              marginRight: 5,
                            }
                          ),
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
                          StyleSheet.compose(
                            GlobalStyles.TextStyles(theme)['Text'],
                            {
                              fontSize: 12,
                              margin: 5,
                              marginLeft: 5,
                              marginRight: 5,
                            }
                          ),
                          dimensions.width
                        )}
                      >
                        {'Sun'}
                      </Text>
                    </View>
                    {/* Started Place */}
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          alignItems: 'center',
                          backgroundColor: [
                            {
                              minWidth: Breakpoints.Mobile,
                              value: 'rgba(0, 0, 0, 0)',
                            },
                            {
                              minWidth: Breakpoints.Tablet,
                              value: 'rgba(0, 0, 0, 0)',
                            },
                          ],
                          margin: 5,
                          width: '40%',
                        },
                        dimensions.width
                      )}
                    >
                      <View
                        style={StyleSheet.applyWidth(
                          { margin: 5 },
                          dimensions.width
                        )}
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

                      <View
                        style={StyleSheet.applyWidth(
                          { margin: 5 },
                          dimensions.width
                        )}
                      >
                        {/* Text 2 */}
                        <Text
                          accessible={true}
                          allowFontScaling={true}
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.TextStyles(theme)['Text'],
                              {
                                color: theme.colors['Custom #acacac'],
                                fontSize: 12,
                              }
                            ),
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
                            {
                              minWidth: Breakpoints.Mobile,
                              value: 'rgba(0, 0, 0, 0)',
                            },
                            {
                              minWidth: Breakpoints.Tablet,
                              value: 'rgba(0, 0, 0, 0)',
                            },
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
                            {
                              minWidth: Breakpoints.Mobile,
                              value: 'rgba(0, 0, 0, 0)',
                            },
                            {
                              minWidth: Breakpoints.Tablet,
                              value: 'rgba(0, 0, 0, 0)',
                            },
                          ],
                          justifyContent: 'flex-start',
                          margin: 5,
                          width: '40%',
                        },
                        dimensions.width
                      )}
                    >
                      <View
                        style={StyleSheet.applyWidth(
                          { margin: 5 },
                          dimensions.width
                        )}
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
                    </View>
                  </View>
                </View>
              </ScrollView>
            </TabViewItem>
          )}
        </>
      </TabView>
    </ScreenContainer>
  );
};

export default withTheme(ActivityScreen);
