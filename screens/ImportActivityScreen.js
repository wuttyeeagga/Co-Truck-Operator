import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as CotruckApi from '../apis/CotruckApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import {
  AccordionGroup,
  Divider,
  Icon,
  ScreenContainer,
  TabView,
  TabViewItem,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import {
  ActivityIndicator,
  FlatList,
  ScrollView,
  Text,
  View,
} from 'react-native';
import { Fetch } from 'react-request';

const ImportActivityScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

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
            margin: 20,
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
              {'Import Activity'}
            </Text>
          </View>
        </View>

        <Touchable
          onPress={() => {
            try {
              navigation.navigate('BottomTabNavigator', {
                screen: 'NotificationsScreen',
              });
            } catch (err) {
              console.error(err);
            }
          }}
        >
          <Icon
            color={theme.colors['CoTruckGrey']}
            name={'Ionicons/ios-notifications-outline'}
            size={30}
            style={StyleSheet.applyWidth({ opacity: 1 }, dimensions.width)}
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
        {/* Pending Tab View */}
        <>
          {!'Pending' ? null : (
            <TabViewItem
              style={StyleSheet.applyWidth(
                GlobalStyles.TabViewItemStyles(theme)['Tab View Item'],
                dimensions.width
              )}
              title={'Pending'}
            >
              <ScrollView
                bounces={true}
                showsHorizontalScrollIndicator={true}
                showsVerticalScrollIndicator={true}
              >
                <CotruckApi.FetchBookingListPOST
                  booking_status={'PENDING'}
                  booking_type={'Import'}
                  operator={Constants['AUTH_OWNER_ID']}
                >
                  {({ loading, error, data, refetchBookingList }) => {
                    const fetchData = data?.json;
                    if (loading) {
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
                        </>
                      );
                    }

                    if (error || data?.status < 200 || data?.status >= 300) {
                      return (
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
                            {fetchData?.message}
                          </Text>
                        </View>
                      );
                    }

                    return (
                      <FlatList
                        contentContainerStyle={StyleSheet.applyWidth(
                          { flexDirection: 'column-reverse' },
                          dimensions.width
                        )}
                        data={fetchData?.data}
                        keyExtractor={listData =>
                          listData?.id ||
                          listData?.uuid ||
                          JSON.stringify(listData)
                        }
                        listKey={'YRhqroU2'}
                        numColumns={1}
                        onEndReachedThreshold={0.5}
                        renderItem={({ item, index }) => {
                          const listData = item;
                          return (
                            <>
                              {/* 21 Dec 25 */}
                              <AccordionGroup
                                caretSize={24}
                                expanded={true}
                                iconSize={24}
                                label={listData?.pickup_date?.split(' ')[0]}
                                style={StyleSheet.applyWidth(
                                  StyleSheet.compose(
                                    GlobalStyles.AccordionGroupStyles(theme)[
                                      'Accordion'
                                    ],
                                    { margin: 10 }
                                  ),
                                  dimensions.width
                                )}
                              >
                                <Touchable
                                  onPress={() => {
                                    try {
                                      navigation.navigate(
                                        'ImportBookingDetailsOnPendingScreen',
                                        {
                                          booking_type: listData?.booking_type,
                                          booking_status: listData?.status,
                                          book_truck_id:
                                            listData?.book_truck_id,
                                        }
                                      );
                                    } catch (err) {
                                      console.error(err);
                                    }
                                  }}
                                >
                                  <View
                                    style={StyleSheet.applyWidth(
                                      {
                                        borderColor: theme.colors['Light'],
                                        borderRadius: 12,
                                        borderWidth: 1,
                                        margin: 10,
                                      },
                                      dimensions.width
                                    )}
                                  >
                                    {/* Booking Component */}
                                    <View
                                      style={StyleSheet.applyWidth(
                                        {
                                          backgroundColor: 'rgba(0, 0, 0, 0)',
                                          margin: 10,
                                        },
                                        dimensions.width
                                      )}
                                    >
                                      {/* Location Row Wrapper */}
                                      <View
                                        style={StyleSheet.applyWidth(
                                          {
                                            alignItems: 'center',
                                            flexDirection: 'row',
                                          },
                                          dimensions.width
                                        )}
                                      >
                                        {/* Pickup View */}
                                        <View
                                          style={StyleSheet.applyWidth(
                                            {
                                              alignItems: 'center',
                                              justifyContent: 'center',
                                              width: '30%',
                                            },
                                            dimensions.width
                                          )}
                                        >
                                          {/* Pickup */}
                                          <Text
                                            accessible={true}
                                            allowFontScaling={true}
                                            style={StyleSheet.applyWidth(
                                              StyleSheet.compose(
                                                GlobalStyles.TextStyles(theme)[
                                                  'Text 2'
                                                ],
                                                {
                                                  alignSelf: 'center',
                                                  fontSize: 12,
                                                  margin: 5,
                                                }
                                              ),
                                              dimensions.width
                                            )}
                                          >
                                            {listData?.pickup_location}
                                          </Text>
                                        </View>
                                        {/* Icon View */}
                                        <View
                                          style={StyleSheet.applyWidth(
                                            {
                                              alignItems: 'center',
                                              justifyContent: 'center',
                                              width: '4%',
                                            },
                                            dimensions.width
                                          )}
                                        >
                                          <Icon
                                            color={theme.colors['CoTruckBlack']}
                                            name={'AntDesign/swap'}
                                            size={20}
                                          />
                                        </View>
                                        {/* Drop View */}
                                        <View
                                          style={StyleSheet.applyWidth(
                                            {
                                              alignItems: 'center',
                                              justifyContent: 'center',
                                              width: '30%',
                                            },
                                            dimensions.width
                                          )}
                                        >
                                          {/* Drop */}
                                          <Text
                                            accessible={true}
                                            allowFontScaling={true}
                                            style={StyleSheet.applyWidth(
                                              StyleSheet.compose(
                                                GlobalStyles.TextStyles(theme)[
                                                  'Text 2'
                                                ],
                                                {
                                                  alignSelf: 'center',
                                                  fontSize: 12,
                                                  margin: 5,
                                                }
                                              ),
                                              dimensions.width
                                            )}
                                          >
                                            {listData?.drop_location}
                                          </Text>
                                        </View>
                                        {/* Icon View 2 */}
                                        <View
                                          style={StyleSheet.applyWidth(
                                            {
                                              alignItems: 'center',
                                              justifyContent: 'center',
                                              width: '4%',
                                            },
                                            dimensions.width
                                          )}
                                        >
                                          <Icon
                                            color={theme.colors['CoTruckBlack']}
                                            name={'AntDesign/swap'}
                                            size={20}
                                          />
                                        </View>
                                        {/* Depot View */}
                                        <View
                                          style={StyleSheet.applyWidth(
                                            {
                                              alignItems: 'center',
                                              justifyContent: 'center',
                                              width: '30%',
                                            },
                                            dimensions.width
                                          )}
                                        >
                                          {/* Depot */}
                                          <Text
                                            accessible={true}
                                            allowFontScaling={true}
                                            style={StyleSheet.applyWidth(
                                              StyleSheet.compose(
                                                GlobalStyles.TextStyles(theme)[
                                                  'Text 2'
                                                ],
                                                {
                                                  alignSelf: 'center',
                                                  fontSize: 12,
                                                  margin: 5,
                                                }
                                              ),
                                              dimensions.width
                                            )}
                                          >
                                            {listData?.depot_location}
                                          </Text>
                                        </View>
                                      </View>
                                      <Divider
                                        color={theme.colors['Light']}
                                        style={StyleSheet.applyWidth(
                                          StyleSheet.compose(
                                            GlobalStyles.DividerStyles(theme)[
                                              'Divider'
                                            ],
                                            { marginBottom: 5, marginTop: 5 }
                                          ),
                                          dimensions.width
                                        )}
                                      />
                                      {/* Info Row */}
                                      <View
                                        style={StyleSheet.applyWidth(
                                          {
                                            alignItems: 'center',
                                            flexDirection: 'row',
                                          },
                                          dimensions.width
                                        )}
                                      >
                                        {/* Vehicle Type View */}
                                        <View
                                          style={StyleSheet.applyWidth(
                                            {
                                              alignItems: 'center',
                                              justifyContent: 'center',
                                              width: '35%',
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
                                                GlobalStyles.TextStyles(theme)[
                                                  'Text 2'
                                                ],
                                                {
                                                  alignSelf: 'center',
                                                  margin: 10,
                                                }
                                              ),
                                              dimensions.width
                                            )}
                                          >
                                            {
                                              listData?.vehicle_type?.split(
                                                ' '
                                              )[0]
                                            }
                                          </Text>
                                        </View>
                                        {/* Weight View */}
                                        <View
                                          style={StyleSheet.applyWidth(
                                            { width: '35%' },
                                            dimensions.width
                                          )}
                                        >
                                          {/* Weight */}
                                          <Text
                                            accessible={true}
                                            allowFontScaling={true}
                                            style={StyleSheet.applyWidth(
                                              StyleSheet.compose(
                                                GlobalStyles.TextStyles(theme)[
                                                  'Text 2'
                                                ],
                                                {
                                                  alignSelf: 'center',
                                                  margin: 10,
                                                }
                                              ),
                                              dimensions.width
                                            )}
                                          >
                                            {listData?.load_weight}
                                          </Text>
                                        </View>
                                        {/* Status View */}
                                        <View
                                          style={StyleSheet.applyWidth(
                                            {
                                              alignItems: 'center',
                                              justifyContent: 'center',
                                              width: '35%',
                                            },
                                            dimensions.width
                                          )}
                                        >
                                          {/* Status */}
                                          <Text
                                            accessible={true}
                                            allowFontScaling={true}
                                            style={StyleSheet.applyWidth(
                                              StyleSheet.compose(
                                                GlobalStyles.TextStyles(theme)[
                                                  'Text 2'
                                                ],
                                                {
                                                  alignSelf: 'center',
                                                  color:
                                                    theme.colors['Success'],
                                                  margin: 10,
                                                }
                                              ),
                                              dimensions.width
                                            )}
                                          >
                                            {listData?.status}
                                          </Text>
                                        </View>
                                      </View>
                                    </View>
                                  </View>
                                </Touchable>
                              </AccordionGroup>
                            </>
                          );
                        }}
                        showsHorizontalScrollIndicator={true}
                        showsVerticalScrollIndicator={true}
                      />
                    );
                  }}
                </CotruckApi.FetchBookingListPOST>
              </ScrollView>
            </TabViewItem>
          )}
        </>
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
                <CotruckApi.FetchBookingListPOST
                  booking_status={'ON GOING'}
                  booking_type={'Import'}
                  operator={Constants['AUTH_OWNER_ID']}
                >
                  {({ loading, error, data, refetchBookingList }) => {
                    const fetchData = data?.json;
                    if (loading) {
                      return (
                        <>
                          {/* Loading */}
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
                            {/* loading */}
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
                        </>
                      );
                    }

                    if (error || data?.status < 200 || data?.status >= 300) {
                      return (
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
                          {/* Error */}
                          <Text
                            accessible={true}
                            allowFontScaling={true}
                            style={StyleSheet.applyWidth(
                              StyleSheet.compose(
                                GlobalStyles.TextStyles(theme)['Text 2'],
                                { fontSize: 16, margin: 20 }
                              ),
                              dimensions.width
                            )}
                          >
                            {fetchData?.message}
                          </Text>
                        </View>
                      );
                    }

                    return (
                      <FlatList
                        contentContainerStyle={StyleSheet.applyWidth(
                          { flexDirection: 'column-reverse' },
                          dimensions.width
                        )}
                        data={fetchData?.data}
                        keyExtractor={listData =>
                          listData?.id ||
                          listData?.uuid ||
                          JSON.stringify(listData)
                        }
                        listKey={'UPIoiSOn'}
                        numColumns={1}
                        onEndReachedThreshold={0.5}
                        renderItem={({ item, index }) => {
                          const listData = item;
                          return (
                            <>
                              {/* 21 Dec 23 */}
                              <AccordionGroup
                                caretSize={24}
                                expanded={true}
                                iconSize={24}
                                label={listData?.pickup_date?.split(' ')[0]}
                                style={StyleSheet.applyWidth(
                                  StyleSheet.compose(
                                    GlobalStyles.AccordionGroupStyles(theme)[
                                      'Accordion'
                                    ],
                                    { margin: 10 }
                                  ),
                                  dimensions.width
                                )}
                              >
                                <Touchable
                                  onPress={() => {
                                    try {
                                      navigation.navigate(
                                        'ImportBookingDetailsOnGoingScreen',
                                        {
                                          booking_status: listData?.status,
                                          booking_type: listData?.booking_type,
                                          book_truck_id:
                                            listData?.book_truck_id,
                                        }
                                      );
                                    } catch (err) {
                                      console.error(err);
                                    }
                                  }}
                                >
                                  <View
                                    style={StyleSheet.applyWidth(
                                      {
                                        borderColor: theme.colors['Light'],
                                        borderRadius: 12,
                                        borderWidth: 1,
                                        margin: 10,
                                      },
                                      dimensions.width
                                    )}
                                  >
                                    {/* Booking Component */}
                                    <View
                                      style={StyleSheet.applyWidth(
                                        {
                                          backgroundColor: 'rgba(0, 0, 0, 0)',
                                          margin: 10,
                                        },
                                        dimensions.width
                                      )}
                                    >
                                      {/* Location Row Wrapper */}
                                      <View
                                        style={StyleSheet.applyWidth(
                                          {
                                            alignItems: 'center',
                                            flexDirection: 'row',
                                          },
                                          dimensions.width
                                        )}
                                      >
                                        {/* Pickup View */}
                                        <View
                                          style={StyleSheet.applyWidth(
                                            {
                                              alignItems: 'center',
                                              justifyContent: 'center',
                                              width: '30%',
                                            },
                                            dimensions.width
                                          )}
                                        >
                                          {/* Pickup */}
                                          <Text
                                            accessible={true}
                                            allowFontScaling={true}
                                            style={StyleSheet.applyWidth(
                                              StyleSheet.compose(
                                                GlobalStyles.TextStyles(theme)[
                                                  'Text 2'
                                                ],
                                                {
                                                  alignSelf: 'center',
                                                  fontSize: 12,
                                                  margin: 5,
                                                }
                                              ),
                                              dimensions.width
                                            )}
                                          >
                                            {listData?.pickup_location}
                                          </Text>
                                        </View>
                                        {/* Icon View */}
                                        <View
                                          style={StyleSheet.applyWidth(
                                            {
                                              alignItems: 'center',
                                              justifyContent: 'center',
                                              width: '4%',
                                            },
                                            dimensions.width
                                          )}
                                        >
                                          <Icon
                                            color={theme.colors['CoTruckBlack']}
                                            name={'AntDesign/swap'}
                                            size={20}
                                          />
                                        </View>
                                        {/* Drop View */}
                                        <View
                                          style={StyleSheet.applyWidth(
                                            {
                                              alignItems: 'center',
                                              justifyContent: 'center',
                                              width: '30%',
                                            },
                                            dimensions.width
                                          )}
                                        >
                                          {/* Drop */}
                                          <Text
                                            accessible={true}
                                            allowFontScaling={true}
                                            style={StyleSheet.applyWidth(
                                              StyleSheet.compose(
                                                GlobalStyles.TextStyles(theme)[
                                                  'Text 2'
                                                ],
                                                {
                                                  alignSelf: 'center',
                                                  fontSize: 12,
                                                  margin: 5,
                                                }
                                              ),
                                              dimensions.width
                                            )}
                                          >
                                            {listData?.drop_location}
                                          </Text>
                                        </View>
                                        {/* Icon View 2 */}
                                        <View
                                          style={StyleSheet.applyWidth(
                                            {
                                              alignItems: 'center',
                                              justifyContent: 'center',
                                              width: '4%',
                                            },
                                            dimensions.width
                                          )}
                                        >
                                          <Icon
                                            color={theme.colors['CoTruckBlack']}
                                            name={'AntDesign/swap'}
                                            size={20}
                                          />
                                        </View>
                                        {/* Depot View */}
                                        <View
                                          style={StyleSheet.applyWidth(
                                            {
                                              alignItems: 'center',
                                              justifyContent: 'center',
                                              width: '30%',
                                            },
                                            dimensions.width
                                          )}
                                        >
                                          {/* Depot */}
                                          <Text
                                            accessible={true}
                                            allowFontScaling={true}
                                            style={StyleSheet.applyWidth(
                                              StyleSheet.compose(
                                                GlobalStyles.TextStyles(theme)[
                                                  'Text 2'
                                                ],
                                                {
                                                  alignSelf: 'center',
                                                  fontSize: 12,
                                                  margin: 5,
                                                }
                                              ),
                                              dimensions.width
                                            )}
                                          >
                                            {listData?.depot_location}
                                          </Text>
                                        </View>
                                      </View>
                                      <Divider
                                        color={theme.colors['Light']}
                                        style={StyleSheet.applyWidth(
                                          StyleSheet.compose(
                                            GlobalStyles.DividerStyles(theme)[
                                              'Divider'
                                            ],
                                            { marginBottom: 5, marginTop: 5 }
                                          ),
                                          dimensions.width
                                        )}
                                      />
                                      {/* Info Row */}
                                      <View
                                        style={StyleSheet.applyWidth(
                                          {
                                            alignItems: 'center',
                                            flexDirection: 'row',
                                          },
                                          dimensions.width
                                        )}
                                      >
                                        {/* Vehicle Type View */}
                                        <View
                                          style={StyleSheet.applyWidth(
                                            {
                                              alignItems: 'center',
                                              justifyContent: 'center',
                                              width: '35%',
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
                                                GlobalStyles.TextStyles(theme)[
                                                  'Text 2'
                                                ],
                                                {
                                                  alignSelf: 'center',
                                                  margin: 10,
                                                }
                                              ),
                                              dimensions.width
                                            )}
                                          >
                                            {
                                              listData?.vehicle_type?.split(
                                                ' '
                                              )[0]
                                            }
                                          </Text>
                                        </View>
                                        {/* Weight View */}
                                        <View
                                          style={StyleSheet.applyWidth(
                                            { width: '35%' },
                                            dimensions.width
                                          )}
                                        >
                                          {/* Weight */}
                                          <Text
                                            accessible={true}
                                            allowFontScaling={true}
                                            style={StyleSheet.applyWidth(
                                              StyleSheet.compose(
                                                GlobalStyles.TextStyles(theme)[
                                                  'Text 2'
                                                ],
                                                {
                                                  alignSelf: 'center',
                                                  margin: 10,
                                                }
                                              ),
                                              dimensions.width
                                            )}
                                          >
                                            {listData?.load_weight}
                                          </Text>
                                        </View>
                                        {/* Status View */}
                                        <View
                                          style={StyleSheet.applyWidth(
                                            {
                                              alignItems: 'center',
                                              justifyContent: 'center',
                                              width: '35%',
                                            },
                                            dimensions.width
                                          )}
                                        >
                                          {/* Status */}
                                          <Text
                                            accessible={true}
                                            allowFontScaling={true}
                                            style={StyleSheet.applyWidth(
                                              StyleSheet.compose(
                                                GlobalStyles.TextStyles(theme)[
                                                  'Text 2'
                                                ],
                                                {
                                                  alignSelf: 'center',
                                                  color:
                                                    theme.colors['Success'],
                                                  margin: 10,
                                                }
                                              ),
                                              dimensions.width
                                            )}
                                          >
                                            {null}
                                          </Text>
                                        </View>
                                      </View>
                                    </View>
                                  </View>
                                </Touchable>
                              </AccordionGroup>
                            </>
                          );
                        }}
                        showsHorizontalScrollIndicator={true}
                        showsVerticalScrollIndicator={true}
                      />
                    );
                  }}
                </CotruckApi.FetchBookingListPOST>
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
              <ScrollView
                bounces={true}
                showsHorizontalScrollIndicator={true}
                showsVerticalScrollIndicator={true}
              >
                <CotruckApi.FetchBookingListPOST
                  booking_status={'COMPLETED'}
                  booking_type={'Import'}
                  operator={Constants['AUTH_OWNER_ID']}
                >
                  {({ loading, error, data, refetchBookingList }) => {
                    const fetchData = data?.json;
                    if (loading) {
                      return (
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
                              {fetchData?.message}
                            </Text>
                          </View>
                        </>
                      );
                    }

                    return (
                      <FlatList
                        contentContainerStyle={StyleSheet.applyWidth(
                          { flexDirection: 'column-reverse' },
                          dimensions.width
                        )}
                        data={fetchData?.data}
                        keyExtractor={listData =>
                          listData?.id ||
                          listData?.uuid ||
                          JSON.stringify(listData)
                        }
                        listKey={'bPIPLeay'}
                        numColumns={1}
                        onEndReachedThreshold={0.5}
                        renderItem={({ item, index }) => {
                          const listData = item;
                          return (
                            <>
                              {/* 21 Dec 24 */}
                              <AccordionGroup
                                caretSize={24}
                                expanded={true}
                                iconSize={24}
                                label={listData?.pickup_date?.split(' ')[0]}
                                style={StyleSheet.applyWidth(
                                  StyleSheet.compose(
                                    GlobalStyles.AccordionGroupStyles(theme)[
                                      'Accordion'
                                    ],
                                    { margin: 10 }
                                  ),
                                  dimensions.width
                                )}
                              >
                                <Touchable
                                  onPress={() => {
                                    try {
                                      navigation.navigate(
                                        'ImportBookingDetailsOnCompletedScreen',
                                        {
                                          booking_status: listData?.status,
                                          booking_type: listData?.booking_type,
                                          book_truck_id:
                                            listData?.book_truck_id,
                                        }
                                      );
                                    } catch (err) {
                                      console.error(err);
                                    }
                                  }}
                                >
                                  <View
                                    style={StyleSheet.applyWidth(
                                      {
                                        borderColor: theme.colors['Light'],
                                        borderRadius: 12,
                                        borderWidth: 1,
                                        margin: 10,
                                      },
                                      dimensions.width
                                    )}
                                  >
                                    {/* Booking Component */}
                                    <View
                                      style={StyleSheet.applyWidth(
                                        {
                                          backgroundColor: 'rgba(0, 0, 0, 0)',
                                          margin: 10,
                                        },
                                        dimensions.width
                                      )}
                                    >
                                      {/* Location Row Wrapper */}
                                      <View
                                        style={StyleSheet.applyWidth(
                                          {
                                            alignItems: 'center',
                                            flexDirection: 'row',
                                          },
                                          dimensions.width
                                        )}
                                      >
                                        {/* Pickup View */}
                                        <View
                                          style={StyleSheet.applyWidth(
                                            {
                                              alignItems: 'center',
                                              justifyContent: 'center',
                                              width: '30%',
                                            },
                                            dimensions.width
                                          )}
                                        >
                                          {/* Pickup */}
                                          <Text
                                            accessible={true}
                                            allowFontScaling={true}
                                            style={StyleSheet.applyWidth(
                                              StyleSheet.compose(
                                                GlobalStyles.TextStyles(theme)[
                                                  'Text 2'
                                                ],
                                                {
                                                  alignSelf: 'center',
                                                  fontSize: 12,
                                                  margin: 5,
                                                }
                                              ),
                                              dimensions.width
                                            )}
                                          >
                                            {listData?.pickup_location}
                                          </Text>
                                        </View>
                                        {/* Icon View */}
                                        <View
                                          style={StyleSheet.applyWidth(
                                            {
                                              alignItems: 'center',
                                              justifyContent: 'center',
                                              width: '4%',
                                            },
                                            dimensions.width
                                          )}
                                        >
                                          <Icon
                                            color={theme.colors['CoTruckBlack']}
                                            name={'AntDesign/swap'}
                                            size={20}
                                          />
                                        </View>
                                        {/* Drop View */}
                                        <View
                                          style={StyleSheet.applyWidth(
                                            {
                                              alignItems: 'center',
                                              justifyContent: 'center',
                                              width: '30%',
                                            },
                                            dimensions.width
                                          )}
                                        >
                                          {/* Drop */}
                                          <Text
                                            accessible={true}
                                            allowFontScaling={true}
                                            style={StyleSheet.applyWidth(
                                              StyleSheet.compose(
                                                GlobalStyles.TextStyles(theme)[
                                                  'Text 2'
                                                ],
                                                {
                                                  alignSelf: 'center',
                                                  fontSize: 12,
                                                  margin: 5,
                                                }
                                              ),
                                              dimensions.width
                                            )}
                                          >
                                            {listData?.drop_location}
                                          </Text>
                                        </View>
                                        {/* Icon View 2 */}
                                        <View
                                          style={StyleSheet.applyWidth(
                                            {
                                              alignItems: 'center',
                                              justifyContent: 'center',
                                              width: '4%',
                                            },
                                            dimensions.width
                                          )}
                                        >
                                          <Icon
                                            color={theme.colors['CoTruckBlack']}
                                            name={'AntDesign/swap'}
                                            size={20}
                                          />
                                        </View>
                                        {/* Depot View */}
                                        <View
                                          style={StyleSheet.applyWidth(
                                            {
                                              alignItems: 'center',
                                              justifyContent: 'center',
                                              width: '30%',
                                            },
                                            dimensions.width
                                          )}
                                        >
                                          {/* Depot */}
                                          <Text
                                            accessible={true}
                                            allowFontScaling={true}
                                            style={StyleSheet.applyWidth(
                                              StyleSheet.compose(
                                                GlobalStyles.TextStyles(theme)[
                                                  'Text 2'
                                                ],
                                                {
                                                  alignSelf: 'center',
                                                  fontSize: 12,
                                                  margin: 5,
                                                }
                                              ),
                                              dimensions.width
                                            )}
                                          >
                                            {listData?.depot_location}
                                          </Text>
                                        </View>
                                      </View>
                                      <Divider
                                        color={theme.colors['Light']}
                                        style={StyleSheet.applyWidth(
                                          StyleSheet.compose(
                                            GlobalStyles.DividerStyles(theme)[
                                              'Divider'
                                            ],
                                            { marginBottom: 5, marginTop: 5 }
                                          ),
                                          dimensions.width
                                        )}
                                      />
                                      {/* Info Row */}
                                      <View
                                        style={StyleSheet.applyWidth(
                                          {
                                            alignItems: 'center',
                                            flexDirection: 'row',
                                          },
                                          dimensions.width
                                        )}
                                      >
                                        {/* Vehicle Type View */}
                                        <View
                                          style={StyleSheet.applyWidth(
                                            {
                                              alignItems: 'center',
                                              justifyContent: 'center',
                                              width: '35%',
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
                                                GlobalStyles.TextStyles(theme)[
                                                  'Text 2'
                                                ],
                                                {
                                                  alignSelf: 'center',
                                                  margin: 10,
                                                }
                                              ),
                                              dimensions.width
                                            )}
                                          >
                                            {
                                              listData?.vehicle_type?.split(
                                                ' '
                                              )[0]
                                            }
                                          </Text>
                                        </View>
                                        {/* Weight View */}
                                        <View
                                          style={StyleSheet.applyWidth(
                                            { width: '35%' },
                                            dimensions.width
                                          )}
                                        >
                                          {/* Weight */}
                                          <Text
                                            accessible={true}
                                            allowFontScaling={true}
                                            style={StyleSheet.applyWidth(
                                              StyleSheet.compose(
                                                GlobalStyles.TextStyles(theme)[
                                                  'Text 2'
                                                ],
                                                {
                                                  alignSelf: 'center',
                                                  margin: 10,
                                                }
                                              ),
                                              dimensions.width
                                            )}
                                          >
                                            {listData?.load_weight}
                                          </Text>
                                        </View>
                                        {/* Status View */}
                                        <View
                                          style={StyleSheet.applyWidth(
                                            {
                                              alignItems: 'center',
                                              justifyContent: 'center',
                                              width: '35%',
                                            },
                                            dimensions.width
                                          )}
                                        >
                                          {/* Status */}
                                          <Text
                                            accessible={true}
                                            allowFontScaling={true}
                                            style={StyleSheet.applyWidth(
                                              StyleSheet.compose(
                                                GlobalStyles.TextStyles(theme)[
                                                  'Text 2'
                                                ],
                                                {
                                                  alignSelf: 'center',
                                                  color:
                                                    theme.colors['Success'],
                                                  margin: 10,
                                                }
                                              ),
                                              dimensions.width
                                            )}
                                          >
                                            {listData?.status}
                                          </Text>
                                        </View>
                                      </View>
                                    </View>
                                    {/* Payment Status */}
                                    <View>
                                      {/* Payment Status */}
                                      <Text
                                        accessible={true}
                                        allowFontScaling={true}
                                        style={StyleSheet.applyWidth(
                                          StyleSheet.compose(
                                            GlobalStyles.TextStyles(theme)[
                                              'Text 2'
                                            ],
                                            {
                                              color: theme.colors['Primary'],
                                              margin: 20,
                                              textAlign: 'right',
                                            }
                                          ),
                                          dimensions.width
                                        )}
                                      >
                                        {'Payment Status - Pending'}
                                      </Text>
                                    </View>
                                  </View>
                                </Touchable>
                              </AccordionGroup>
                            </>
                          );
                        }}
                        showsHorizontalScrollIndicator={true}
                        showsVerticalScrollIndicator={true}
                      />
                    );
                  }}
                </CotruckApi.FetchBookingListPOST>
              </ScrollView>
            </TabViewItem>
          )}
        </>
      </TabView>
    </ScreenContainer>
  );
};

export default withTheme(ImportActivityScreen);
