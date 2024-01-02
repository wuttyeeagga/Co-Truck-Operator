import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import {
  AccordionGroup,
  Icon,
  IconButton,
  ScreenContainer,
  Switch,
  withTheme,
} from '@draftbit/ui';
import { ScrollView, Text, View } from 'react-native';

const HomeScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const [checkboxRow2Value, setCheckboxRow2Value] = React.useState('');
  const [checkboxRowValue, setCheckboxRowValue] = React.useState('');
  const [containerWeight, setContainerWeight] = React.useState('');
  const [depotValue, setDepotValue] = React.useState('');
  const [dropOffValue, setDropOffValue] = React.useState('');
  const [isExport, setIsExport] = React.useState(false);
  const [isImport, setIsImport] = React.useState(true);
  const [materialType, setMaterialType] = React.useState('');
  const [numberOfTruck, setNumberOfTruck] = React.useState('');
  const [pickerValue, setPickerValue] = React.useState('');
  const [pickerValue2, setPickerValue2] = React.useState('');
  const [pickupValue, setPickupValue] = React.useState('');
  const [productType, setProductType] = React.useState('');
  const [showappointment, setShowappointment] = React.useState(false);
  const [switchRow2Value, setSwitchRow2Value] = React.useState(false);
  const [switchRowValue, setSwitchRowValue] = React.useState(false);
  const [switchRowValue2, setSwitchRowValue2] = React.useState(false);
  const [switchValue, setSwitchValue] = React.useState(false);
  const [switchValue2, setSwitchValue2] = React.useState(false);
  const [switchValue3, setSwitchValue3] = React.useState(false);
  const [switchValue4, setSwitchValue4] = React.useState(false);
  const [textInputValue, setTextInputValue] = React.useState('');
  const [textInputValue2, setTextInputValue2] = React.useState('');

  return (
    <ScreenContainer
      hasBottomSafeArea={true}
      hasSafeArea={true}
      hasTopSafeArea={true}
      scrollable={false}
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
              {'New Leads'}
            </Text>
          </View>
        </View>
        {/* View 2 */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'flex-start',
            },
            dimensions.width
          )}
        >
          <Switch
            onValueChange={newSwitchValue => {
              const switchValue = newSwitchValue;
              try {
                setSwitchValue4(newSwitchValue);
              } catch (err) {
                console.error(err);
              }
            }}
            style={StyleSheet.applyWidth(
              { marginLeft: 10, marginRight: 10 },
              dimensions.width
            )}
            value={switchValue4}
          />
          <IconButton
            color={theme.colors['CoTruckGrey']}
            icon={'Ionicons/ios-notifications-outline'}
            onPress={() => {
              try {
                navigation.navigate('BottomTabNavigator', {
                  screen: 'NotificationsScreen',
                });
              } catch (err) {
                console.error(err);
              }
            }}
            size={32}
            style={StyleSheet.applyWidth(
              { marginLeft: 10, marginRight: 10 },
              dimensions.width
            )}
          />
        </View>
      </View>

      <ScrollView
        bounces={true}
        contentContainerStyle={StyleSheet.applyWidth(
          { paddingBottom: 20 },
          dimensions.width
        )}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        {/* scrollAcordian */}
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
                  {/* Vehicle Type */}
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
                  {/* Weight */}
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
                    {/* Started Text */}
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
                  {/* Truck No View */}
                  <View
                    style={StyleSheet.applyWidth(
                      { margin: 5 },
                      dimensions.width
                    )}
                  >
                    {/* Truck Number */}
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
                      {'Truck(0)'}
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
                          { color: theme.colors['Success'] }
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
                      {'Truck(1)'}
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
                          { color: theme.colors['Success'] }
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
                      {'Truck(0)'}
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
                      {'Truck(4)'}
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
                    {'150'}
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
                      {'Truck(4)'}
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
          </View>
        </ScrollView>
      </ScrollView>
    </ScreenContainer>
  );
};

export default withTheme(HomeScreen);
