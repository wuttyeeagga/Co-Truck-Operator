import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as CotruckApi from '../apis/CotruckApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import {
  AccordionGroup,
  Icon,
  IconButton,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { FlashList } from '@shopify/flash-list';
import {
  ActivityIndicator,
  FlatList,
  ScrollView,
  Text,
  View,
} from 'react-native';
import { Fetch } from 'react-request';

const HomeScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const [checkboxRow2Value, setCheckboxRow2Value] = React.useState('');
  const [checkboxRowValue, setCheckboxRowValue] = React.useState('');
  const [containerWeight, setContainerWeight] = React.useState('');
  const [depotValue, setDepotValue] = React.useState('');
  const [dropOffValue, setDropOffValue] = React.useState('');
  const [isExport, setIsExport] = React.useState(false);
  const [isImport, setIsImport] = React.useState(true);
  const [materialType, setMaterialType] = React.useState('');
  const [notFound, setNotFound] = React.useState('');
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
        <CotruckApi.FetchOperatorUserIdPOST
          handlers={{
            on404: fetchData => {
              try {
                setNotFound('There is not Found');
              } catch (err) {
                console.error(err);
              }
            },
          }}
          user_id={Constants['AUTH_OWNER_ID']}
        >
          {({ loading, error, data, refetchOperatorUserId }) => {
            const fetchData = data?.json;
            if (loading) {
              return (
                <View
                  style={StyleSheet.applyWidth(
                    { alignItems: 'center', flex: 1, justifyContent: 'center' },
                    dimensions.width
                  )}
                >
                  <ActivityIndicator
                    animating={true}
                    color={theme.colors['Primary']}
                    hidesWhenStopped={true}
                    size={'large'}
                    style={StyleSheet.applyWidth(
                      GlobalStyles.ActivityIndicatorStyles(theme)[
                        'Activity Indicator'
                      ],
                      dimensions.width
                    )}
                  />
                </View>
              );
            }

            if (error || data?.status < 200 || data?.status >= 300) {
              return (
                <>
                  {/* View 2 */}
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        alignItems: 'center',
                        flex: 1,
                        justifyContent: 'center',
                      },
                      dimensions.width
                    )}
                  >
                    <Text
                      accessible={true}
                      allowFontScaling={true}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.TextStyles(theme)['Text 2'],
                          { fontSize: 16 }
                        ),
                        dimensions.width
                      )}
                    >
                      {notFound}
                    </Text>
                  </View>
                </>
              );
            }

            return (
              <>
                <FlatList
                  data={fetchData?.data}
                  keyExtractor={listData =>
                    listData?.id || listData?.uuid || JSON.stringify(listData)
                  }
                  listKey={'Or2R6bzt'}
                  numColumns={1}
                  onEndReachedThreshold={0.5}
                  renderItem={({ item }) => {
                    const listData = item;
                    return (
                      <View>
                        {/* 24 Dec 23 */}
                        <AccordionGroup
                          caretSize={24}
                          expanded={true}
                          iconSize={24}
                          label={listData?.pickup_date?.split(' ')[0]}
                          style={StyleSheet.applyWidth(
                            GlobalStyles.AccordionGroupStyles(theme)[
                              'Accordion'
                            ],
                            dimensions.width
                          )}
                        >
                          <Touchable
                            onPress={() => {
                              try {
                                /* 'Navigate' action requires configuration: choose a navigation destination */
                              } catch (err) {
                                console.error(err);
                              }
                            }}
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
                                  {listData?.vehicle_type?.split(' ')[0]}
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
                                  {listData?.load_weight}
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
                                    {listData?.pickup_location}
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
                                    {'Truck ('}
                                    {listData?.no_of_truck}
                                    {')'}
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
                                    {listData?.drop_location}
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
                                    {listData?.owner_book_status}
                                  </Text>
                                </View>
                              </View>
                            </View>
                          </Touchable>
                        </AccordionGroup>
                      </View>
                    );
                  }}
                  showsHorizontalScrollIndicator={true}
                  showsVerticalScrollIndicator={true}
                />
              </>
            );
          }}
        </CotruckApi.FetchOperatorUserIdPOST>
      </ScrollView>
    </ScreenContainer>
  );
};

export default withTheme(HomeScreen);
