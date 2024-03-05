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
              navigation.navigate('NotificationsScreen');
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
        scrollEnabled={true}
        swipeEnabled={true}
        tabBarPosition={'top'}
        tabsBackgroundColor={theme.colors.background}
      >
        {/* Confirmed Tab View */}
        <>
          {!'Accepted' ? null : (
            <TabViewItem
              style={StyleSheet.applyWidth(
                GlobalStyles.TabViewItemStyles(theme)['Tab View Item'],
                dimensions.width
              )}
              title={'Accepted'}
            >
              <ScrollView
                bounces={true}
                contentContainerStyle={StyleSheet.applyWidth(
                  { flex: 1 },
                  dimensions.width
                )}
                showsHorizontalScrollIndicator={true}
                showsVerticalScrollIndicator={true}
              >
                {/* Confirmed Booking List */}
                <CotruckApi.FetchBookingList$Confirmed$POST
                  booking_status={'CONFIRMED'}
                  booking_type={'Import'}
                  operator={Constants['AUTH_OWNER_ID']}
                >
                  {({
                    loading,
                    error,
                    data,
                    refetchBookingList$Confirmed$,
                  }) => {
                    const confirmedBookingListData = data?.json;
                    if (loading) {
                      return (
                        <>
                          {/* loading */}
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
                        <>
                          {/* error */}
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
                                  { fontSize: 16, marginTop: 100 }
                                ),
                                dimensions.width
                              )}
                            >
                              {confirmedBookingListData?.message}
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
                        data={confirmedBookingListData?.data}
                        keyExtractor={(listData, index) =>
                          listData?.id ?? listData?.uuid ?? index.toString()
                        }
                        listKey={'YRhqroU2'}
                        numColumns={1}
                        onEndReachedThreshold={0.5}
                        renderItem={({ item, index }) => {
                          const listData = item;
                          return (
                            <>
                              {/* Date */}
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
                                        'ImportBookingDetailsAcceptedScreen',
                                        {
                                          booking_type: 'Import',
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
                                            marginBottom: 10,
                                            marginTop: 10,
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
                                            color={theme.colors['CoTruckGrey']}
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
                                            color={theme.colors['CoTruckGrey']}
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
                                      {/* Info Row */}
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
                                        {/* Shipper Name View */}
                                        <View
                                          style={StyleSheet.applyWidth(
                                            {
                                              alignItems: 'center',
                                              alignSelf: 'center',
                                              justifyContent: 'center',
                                              width: '25%',
                                            },
                                            dimensions.width
                                          )}
                                        >
                                          {/* Shipper Name */}
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
                                                  fontSize: 14,
                                                  margin: 5,
                                                  textAlign: 'center',
                                                }
                                              ),
                                              dimensions.width
                                            )}
                                          >
                                            {listData?.shipper_name}
                                          </Text>
                                        </View>
                                        {/* Vehicle Type View */}
                                        <View
                                          style={StyleSheet.applyWidth(
                                            {
                                              alignItems: 'center',
                                              alignSelf: 'center',
                                              justifyContent: 'center',
                                              width: '25%',
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
                                                  fontSize: 14,
                                                  margin: 5,
                                                  textAlign: 'center',
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
                                            {
                                              alignItems: 'center',
                                              justifyContent: 'center',
                                              width: '25%',
                                            },
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
                                                  fontSize: 14,
                                                  margin: 5,
                                                  textAlign: 'center',
                                                }
                                              ),
                                              dimensions.width
                                            )}
                                          >
                                            {listData?.load_weight}
                                          </Text>
                                        </View>
                                        {/* No Of Trucks */}
                                        <View
                                          style={StyleSheet.applyWidth(
                                            {
                                              alignItems: 'center',
                                              justifyContent: 'center',
                                              width: '25%',
                                            },
                                            dimensions.width
                                          )}
                                        >
                                          {/* Trucks */}
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
                                                  fontSize: 14,
                                                  margin: 5,
                                                  textAlign: 'center',
                                                }
                                              ),
                                              dimensions.width
                                            )}
                                          >
                                            {'Truck-'}
                                            {listData?.no_of_truck}
                                          </Text>
                                        </View>
                                      </View>
                                    </View>
                                    {/* Status */}
                                    <View>
                                      {/* Row */}
                                      <View
                                        style={StyleSheet.applyWidth(
                                          {
                                            alignItems: 'center',
                                            flexDirection: 'row',
                                            justifyContent: 'flex-end',
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
                                              { margin: 10, marginRight: 0 }
                                            ),
                                            dimensions.width
                                          )}
                                        >
                                          {'Status -'}
                                        </Text>
                                        {/* Status Value */}
                                        <Text
                                          accessible={true}
                                          allowFontScaling={true}
                                          style={StyleSheet.applyWidth(
                                            StyleSheet.compose(
                                              GlobalStyles.TextStyles(theme)[
                                                'Text 2'
                                              ],
                                              {
                                                color: theme.colors['Success'],
                                                margin: 10,
                                                marginLeft: 0,
                                              }
                                            ),
                                            dimensions.width
                                          )}
                                        >
                                          {' Accepted'}
                                        </Text>
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
                </CotruckApi.FetchBookingList$Confirmed$POST>
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
                contentContainerStyle={StyleSheet.applyWidth(
                  { flex: 1 },
                  dimensions.width
                )}
                showsHorizontalScrollIndicator={true}
                showsVerticalScrollIndicator={true}
              >
                {/* Ongoing Booking List */}
                <CotruckApi.FetchBookingList$Confirmed$POST
                  booking_status={'ON GOING'}
                  booking_type={'Import'}
                  operator={Constants['AUTH_OWNER_ID']}
                >
                  {({
                    loading,
                    error,
                    data,
                    refetchBookingList$Confirmed$,
                  }) => {
                    const ongoingBookingListData = data?.json;
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
                        <>
                          {/* error */}
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
                                  { fontSize: 16, margin: 20, marginTop: 100 }
                                ),
                                dimensions.width
                              )}
                            >
                              {ongoingBookingListData?.message}
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
                        data={ongoingBookingListData?.data}
                        keyExtractor={(listData, index) =>
                          listData?.id ?? listData?.uuid ?? index.toString()
                        }
                        listKey={'UPIoiSOn'}
                        numColumns={1}
                        onEndReachedThreshold={0.5}
                        renderItem={({ item, index }) => {
                          const listData = item;
                          return (
                            <>
                              {/* Date */}
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
                                            marginBottom: 10,
                                            marginTop: 10,
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
                                            color={theme.colors['CoTruckGrey']}
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
                                            color={theme.colors['CoTruckGrey']}
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
                                      {/* Info Row */}
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
                                        {/* Shipper Name View */}
                                        <View
                                          style={StyleSheet.applyWidth(
                                            {
                                              alignItems: 'center',
                                              alignSelf: 'center',
                                              justifyContent: 'center',
                                              width: '25%',
                                            },
                                            dimensions.width
                                          )}
                                        >
                                          {/* Shipper Name */}
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
                                                  fontSize: 14,
                                                  margin: 5,
                                                  textAlign: 'center',
                                                }
                                              ),
                                              dimensions.width
                                            )}
                                          >
                                            {listData?.shipper_name}
                                          </Text>
                                        </View>
                                        {/* Vehicle Type View */}
                                        <View
                                          style={StyleSheet.applyWidth(
                                            {
                                              alignItems: 'center',
                                              alignSelf: 'center',
                                              justifyContent: 'center',
                                              width: '25%',
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
                                                  fontSize: 14,
                                                  margin: 5,
                                                  textAlign: 'center',
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
                                            {
                                              alignItems: 'center',
                                              justifyContent: 'center',
                                              width: '25%',
                                            },
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
                                                  fontSize: 14,
                                                  margin: 5,
                                                  textAlign: 'center',
                                                }
                                              ),
                                              dimensions.width
                                            )}
                                          >
                                            {listData?.load_weight}
                                          </Text>
                                        </View>
                                        {/* No Of Trucks */}
                                        <View
                                          style={StyleSheet.applyWidth(
                                            {
                                              alignItems: 'center',
                                              justifyContent: 'center',
                                              width: '25%',
                                            },
                                            dimensions.width
                                          )}
                                        >
                                          {/* Trucks */}
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
                                                  fontSize: 14,
                                                  margin: 5,
                                                  textAlign: 'center',
                                                }
                                              ),
                                              dimensions.width
                                            )}
                                          >
                                            {'Truck-'}
                                            {listData?.no_of_truck}
                                          </Text>
                                        </View>
                                      </View>
                                    </View>
                                    {/* Status */}
                                    <View>
                                      {/* Row */}
                                      <View
                                        style={StyleSheet.applyWidth(
                                          {
                                            alignItems: 'center',
                                            flexDirection: 'row',
                                            justifyContent: 'flex-end',
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
                                              { margin: 10, marginRight: 0 }
                                            ),
                                            dimensions.width
                                          )}
                                        >
                                          {'Status -'}
                                        </Text>
                                        {/* Status Value */}
                                        <Text
                                          accessible={true}
                                          allowFontScaling={true}
                                          style={StyleSheet.applyWidth(
                                            StyleSheet.compose(
                                              GlobalStyles.TextStyles(theme)[
                                                'Text 2'
                                              ],
                                              {
                                                color: theme.colors['Success'],
                                                margin: 10,
                                                marginLeft: 0,
                                              }
                                            ),
                                            dimensions.width
                                          )}
                                        >
                                          {' '}
                                          {listData?.status}
                                        </Text>
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
                </CotruckApi.FetchBookingList$Confirmed$POST>
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
                contentContainerStyle={StyleSheet.applyWidth(
                  { flex: 1 },
                  dimensions.width
                )}
                showsHorizontalScrollIndicator={true}
                showsVerticalScrollIndicator={true}
              >
                {/* Completed Booking List */}
                <CotruckApi.FetchBookingList$PAID$POST
                  booking_status={'COMPLETED'}
                  booking_type={'Import'}
                  operator={Constants['AUTH_OWNER_ID']}
                  paid_status={'PENDING'}
                >
                  {({ loading, error, data, refetchBookingList$PAID$ }) => {
                    const completedBookingListData = data?.json;
                    if (loading) {
                      return (
                        <>
                          {/* loading */}
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
                        <>
                          {/* error */}
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
                                  { fontSize: 16, marginTop: 100 }
                                ),
                                dimensions.width
                              )}
                            >
                              {completedBookingListData?.message}
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
                        data={completedBookingListData?.data}
                        keyExtractor={(listData, index) =>
                          listData?.id ?? listData?.uuid ?? index.toString()
                        }
                        listKey={'bPIPLeay'}
                        numColumns={1}
                        onEndReachedThreshold={0.5}
                        renderItem={({ item, index }) => {
                          const listData = item;
                          return (
                            <>
                              {/* Date */}
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
                                            marginBottom: 10,
                                            marginTop: 10,
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
                                            color={theme.colors['CoTruckGrey']}
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
                                            color={theme.colors['CoTruckGrey']}
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
                                      {/* Info Row */}
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
                                        {/* Shipper Name View */}
                                        <View
                                          style={StyleSheet.applyWidth(
                                            {
                                              alignItems: 'center',
                                              alignSelf: 'center',
                                              justifyContent: 'center',
                                              width: '25%',
                                            },
                                            dimensions.width
                                          )}
                                        >
                                          {/* Shipper Name */}
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
                                                  fontSize: 14,
                                                  margin: 5,
                                                  textAlign: 'center',
                                                }
                                              ),
                                              dimensions.width
                                            )}
                                          >
                                            {listData?.shipper_name}
                                          </Text>
                                        </View>
                                        {/* Vehicle Type View */}
                                        <View
                                          style={StyleSheet.applyWidth(
                                            {
                                              alignItems: 'center',
                                              alignSelf: 'center',
                                              justifyContent: 'center',
                                              width: '25%',
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
                                                  fontSize: 14,
                                                  margin: 5,
                                                  textAlign: 'center',
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
                                            {
                                              alignItems: 'center',
                                              justifyContent: 'center',
                                              width: '25%',
                                            },
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
                                                  fontSize: 14,
                                                  margin: 5,
                                                  textAlign: 'center',
                                                }
                                              ),
                                              dimensions.width
                                            )}
                                          >
                                            {listData?.load_weight}
                                          </Text>
                                        </View>
                                        {/* No Of Trucks */}
                                        <View
                                          style={StyleSheet.applyWidth(
                                            {
                                              alignItems: 'center',
                                              justifyContent: 'center',
                                              width: '25%',
                                            },
                                            dimensions.width
                                          )}
                                        >
                                          {/* Trucks */}
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
                                                  fontSize: 14,
                                                  margin: 5,
                                                  textAlign: 'center',
                                                }
                                              ),
                                              dimensions.width
                                            )}
                                          >
                                            {'Truck-'}
                                            {listData?.no_of_truck}
                                          </Text>
                                        </View>
                                      </View>
                                    </View>
                                    {/* Status */}
                                    <View>
                                      {/* Row */}
                                      <View
                                        style={StyleSheet.applyWidth(
                                          {
                                            alignItems: 'center',
                                            flexDirection: 'row',
                                            justifyContent: 'flex-end',
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
                                              { margin: 10, marginRight: 0 }
                                            ),
                                            dimensions.width
                                          )}
                                        >
                                          {'Status -'}
                                        </Text>
                                        {/* Status Value */}
                                        <Text
                                          accessible={true}
                                          allowFontScaling={true}
                                          style={StyleSheet.applyWidth(
                                            StyleSheet.compose(
                                              GlobalStyles.TextStyles(theme)[
                                                'Text 2'
                                              ],
                                              {
                                                color: theme.colors['Success'],
                                                margin: 10,
                                                marginLeft: 0,
                                              }
                                            ),
                                            dimensions.width
                                          )}
                                        >
                                          {' '}
                                          {listData?.status}
                                        </Text>
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
                </CotruckApi.FetchBookingList$PAID$POST>
              </ScrollView>
            </TabViewItem>
          )}
        </>
      </TabView>
    </ScreenContainer>
  );
};

export default withTheme(ImportActivityScreen);
