import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { AccordionGroup, Icon, withTheme } from '@draftbit/ui';
import { ScrollView, Text, View, useWindowDimensions } from 'react-native';

const ScrollAcordianBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <ScrollView
      bounces={true}
      showsHorizontalScrollIndicator={true}
      showsVerticalScrollIndicator={true}
    >
      {/* tripList */}
      <View style={StyleSheet.applyWidth({ margin: 10 }, dimensions.width)}>
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
                  StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                    fontSize: 14,
                    margin: 5,
                    marginLeft: 5,
                    marginRight: 5,
                  }),
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
                  StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                    fontSize: 18,
                    margin: 5,
                    marginLeft: 5,
                    marginRight: 5,
                  }),
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
                    { minWidth: Breakpoints.Mobile, value: 'rgba(0, 0, 0, 0)' },
                    { minWidth: Breakpoints.Tablet, value: 'rgba(0, 0, 0, 0)' },
                  ],
                  margin: 5,
                  width: '35%',
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
                    { minWidth: Breakpoints.Mobile, value: 'rgba(0, 0, 0, 0)' },
                    { minWidth: Breakpoints.Tablet, value: 'rgba(0, 0, 0, 0)' },
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
                    { minWidth: Breakpoints.Mobile, value: 'rgba(0, 0, 0, 0)' },
                    { minWidth: Breakpoints.Tablet, value: 'rgba(0, 0, 0, 0)' },
                  ],
                  justifyContent: 'flex-start',
                  margin: 5,
                  width: '35%',
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
              {/* View 2 */}
              <View
                style={StyleSheet.applyWidth({ margin: 5 }, dimensions.width)}
              >
                <Text
                  accessible={true}
                  allowFontScaling={true}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                      color: theme.colors['ShopAppBlue'],
                    }),
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
                  StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                    fontSize: 14,
                    margin: 5,
                    marginLeft: 5,
                    marginRight: 5,
                  }),
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
                  StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                    fontSize: 18,
                    margin: 5,
                    marginLeft: 5,
                    marginRight: 5,
                  }),
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
                    { minWidth: Breakpoints.Mobile, value: 'rgba(0, 0, 0, 0)' },
                    { minWidth: Breakpoints.Tablet, value: 'rgba(0, 0, 0, 0)' },
                  ],
                  margin: 5,
                  width: '35%',
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
                    { minWidth: Breakpoints.Mobile, value: 'rgba(0, 0, 0, 0)' },
                    { minWidth: Breakpoints.Tablet, value: 'rgba(0, 0, 0, 0)' },
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
                    { minWidth: Breakpoints.Mobile, value: 'rgba(0, 0, 0, 0)' },
                    { minWidth: Breakpoints.Tablet, value: 'rgba(0, 0, 0, 0)' },
                  ],
                  justifyContent: 'flex-start',
                  margin: 5,
                  width: '35%',
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
              {/* View 2 */}
              <View
                style={StyleSheet.applyWidth({ margin: 5 }, dimensions.width)}
              >
                <Text
                  accessible={true}
                  allowFontScaling={true}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                      color: theme.colors['Custom Color_11'],
                    }),
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
                  StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                    fontSize: 14,
                    margin: 5,
                    marginLeft: 5,
                    marginRight: 5,
                  }),
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
                  StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                    fontSize: 18,
                    margin: 5,
                    marginLeft: 5,
                    marginRight: 5,
                  }),
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
                    { minWidth: Breakpoints.Mobile, value: 'rgba(0, 0, 0, 0)' },
                    { minWidth: Breakpoints.Tablet, value: 'rgba(0, 0, 0, 0)' },
                  ],
                  margin: 5,
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
                    { minWidth: Breakpoints.Mobile, value: 'rgba(0, 0, 0, 0)' },
                    { minWidth: Breakpoints.Tablet, value: 'rgba(0, 0, 0, 0)' },
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
                    { minWidth: Breakpoints.Mobile, value: 'rgba(0, 0, 0, 0)' },
                    { minWidth: Breakpoints.Tablet, value: 'rgba(0, 0, 0, 0)' },
                  ],
                  justifyContent: 'flex-start',
                  margin: 5,
                  width: '35%',
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
              {/* View 2 */}
              <View
                style={StyleSheet.applyWidth({ margin: 5 }, dimensions.width)}
              >
                <Text
                  accessible={true}
                  allowFontScaling={true}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                      color: theme.colors['Error'],
                    }),
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
                  width: '15%',
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
                {'20ft'}
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
                {'6\n'}
              </Text>
            </View>
            {/* Started Place */}
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  backgroundColor: [
                    { minWidth: Breakpoints.Mobile, value: 'rgba(0, 0, 0, 0)' },
                    { minWidth: Breakpoints.Tablet, value: 'rgba(0, 0, 0, 0)' },
                  ],
                  margin: 5,
                  width: '35%',
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
                    { minWidth: Breakpoints.Mobile, value: 'rgba(0, 0, 0, 0)' },
                    { minWidth: Breakpoints.Tablet, value: 'rgba(0, 0, 0, 0)' },
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
                    { minWidth: Breakpoints.Mobile, value: 'rgba(0, 0, 0, 0)' },
                    { minWidth: Breakpoints.Tablet, value: 'rgba(0, 0, 0, 0)' },
                  ],
                  justifyContent: 'flex-start',
                  margin: 5,
                  width: '35%',
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
              {/* Status Container */}
              <View
                style={StyleSheet.applyWidth({ margin: 5 }, dimensions.width)}
              >
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
        </AccordionGroup>
      </View>
    </ScrollView>
  );
};

export default withTheme(ScrollAcordianBlock);
