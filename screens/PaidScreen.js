import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as CotruckApi from '../apis/CotruckApi.js';
import TabHeaderBlock from '../components/TabHeaderBlock';
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
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import { Fetch } from 'react-request';

const PaidScreen = props => {
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
      <TabHeaderBlock Title={'Paid Activity'} />
      <TabView
        activeColor={theme.colors.primary}
        indicatorColor={theme.colors.primary}
        keyboardDismissMode={'auto'}
        pressColor={theme.colors.primary}
        swipeEnabled={true}
        tabBarPosition={'top'}
        tabsBackgroundColor={theme.colors.background}
      >
        {/* Import Paid */}
        <TabViewItem
          style={StyleSheet.applyWidth(
            GlobalStyles.TabViewItemStyles(theme)['Tab View Item'],
            dimensions.width
          )}
          title={'Import Paid'}
        >
          {/* Import Paid Booking List */}
          <CotruckApi.FetchBookingList$PAID$POST
            booking_status={'COMPLETED'}
            booking_type={'Import'}
            operator={Constants['AUTH_OWNER_ID']}
            paid_status={'PAID'}
          >
            {({ loading, error, data, refetchBookingList$PAID$ }) => {
              const importPaidBookingListData = data?.json;
              if (loading) {
                return (
                  <>
                    {/* Loading View */}
                    <View
                      style={StyleSheet.applyWidth(
                        { alignItems: 'center', flex: 1 },
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
                    {/* Error */}
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
                      {/* error */}
                      <Text
                        accessible={true}
                        allowFontScaling={true}
                        style={StyleSheet.applyWidth(
                          GlobalStyles.TextStyles(theme)['Text 2'],
                          dimensions.width
                        )}
                      >
                        {importPaidBookingListData?.message}
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
                  data={importPaidBookingListData?.data}
                  keyExtractor={(listData, index) =>
                    listData?.id ?? listData?.uuid ?? index.toString()
                  }
                  listKey={'sXZoENzm'}
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
                                  { book_truck_id: listData?.book_truck_id }
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
                                  padding: 10,
                                },
                                dimensions.width
                              )}
                            >
                              {/* Booking Component */}
                              <View>
                                {/* Location Row */}
                                <View
                                  style={StyleSheet.applyWidth(
                                    {
                                      alignItems: 'center',
                                      flexDirection: 'row',
                                      margin: 5,
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
                                          { fontSize: 12, margin: 5 }
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
                                          { fontSize: 12, margin: 5 }
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
                                          { fontSize: 12, margin: 5 }
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
                                      margin: 5,
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
                                          { margin: 5 }
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
                                          { margin: 5 }
                                        ),
                                        dimensions.width
                                      )}
                                    >
                                      {listData?.vehicle_type?.split(' ')[0]}
                                    </Text>
                                  </View>
                                  {/* Load Weight View */}
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
                                    {/* Load Weight */}
                                    <Text
                                      accessible={true}
                                      allowFontScaling={true}
                                      style={StyleSheet.applyWidth(
                                        StyleSheet.compose(
                                          GlobalStyles.TextStyles(theme)[
                                            'Text 2'
                                          ],
                                          { margin: 5 }
                                        ),
                                        dimensions.width
                                      )}
                                    >
                                      {listData?.load_weight}
                                    </Text>
                                  </View>
                                  {/* No of Trucks View */}
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
                                    {/* No of Trucks */}
                                    <Text
                                      accessible={true}
                                      allowFontScaling={true}
                                      style={StyleSheet.applyWidth(
                                        StyleSheet.compose(
                                          GlobalStyles.TextStyles(theme)[
                                            'Text 2'
                                          ],
                                          { margin: 5 }
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

                              <View>
                                {/* Payment Status */}
                                <Text
                                  accessible={true}
                                  allowFontScaling={true}
                                  style={StyleSheet.applyWidth(
                                    StyleSheet.compose(
                                      GlobalStyles.TextStyles(theme)['Text 2'],
                                      {
                                        color: theme.colors['Primary'],
                                        margin: 20,
                                        textAlign: 'right',
                                      }
                                    ),
                                    dimensions.width
                                  )}
                                >
                                  {'Payment Status - '}
                                  {listData?.paid_status}
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
          </CotruckApi.FetchBookingList$PAID$POST>
        </TabViewItem>
        {/* Export Paid */}
        <TabViewItem
          style={StyleSheet.applyWidth(
            GlobalStyles.TabViewItemStyles(theme)['Tab View Item'],
            dimensions.width
          )}
          title={'Export Paid'}
        >
          {/* Export Paid Booking List */}
          <CotruckApi.FetchBookingList$PAID$POST
            booking_status={'COMPLETED'}
            booking_type={'Export'}
            operator={Constants['AUTH_OWNER_ID']}
            paid_status={'PAID'}
          >
            {({ loading, error, data, refetchBookingList$PAID$ }) => {
              const exportPaidBookingListData = data?.json;
              if (loading) {
                return (
                  <>
                    {/* Loading View */}
                    <View
                      style={StyleSheet.applyWidth(
                        { alignItems: 'center', flex: 1 },
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
                    {/* Error */}
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
                      {/* error */}
                      <Text
                        accessible={true}
                        allowFontScaling={true}
                        style={StyleSheet.applyWidth(
                          GlobalStyles.TextStyles(theme)['Text 2'],
                          dimensions.width
                        )}
                      >
                        {exportPaidBookingListData?.message}
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
                  data={exportPaidBookingListData?.data}
                  keyExtractor={(listData, index) =>
                    listData?.id ?? listData?.uuid ?? index.toString()
                  }
                  listKey={'R60dMa5T'}
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
                                  'ExportBookingDetailsOnCompletedScreen',
                                  {
                                    booking_type: listData?.booking_type,
                                    book_truck_id: listData?.book_truck_id,
                                    booking_status: listData?.status,
                                    paid_status: listData?.paid_status,
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
                                  padding: 10,
                                },
                                dimensions.width
                              )}
                            >
                              {/* Booking Component */}
                              <View>
                                {/* Location Row */}
                                <View
                                  style={StyleSheet.applyWidth(
                                    {
                                      alignItems: 'center',
                                      flexDirection: 'row',
                                      margin: 5,
                                      marginBottom: 10,
                                      marginTop: 10,
                                    },
                                    dimensions.width
                                  )}
                                >
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
                                          { fontSize: 12, margin: 5 }
                                        ),
                                        dimensions.width
                                      )}
                                    >
                                      {listData?.depot_location}
                                    </Text>
                                  </View>
                                  {/* Icon View */}
                                  <View
                                    style={StyleSheet.applyWidth(
                                      {
                                        alignItems: 'center',
                                        justifyContent: 'center',
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
                                          { fontSize: 12, margin: 5 }
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
                                          { fontSize: 12, margin: 5 }
                                        ),
                                        dimensions.width
                                      )}
                                    >
                                      {listData?.drop_location}
                                    </Text>
                                  </View>
                                </View>
                                {/* Info Row */}
                                <View
                                  style={StyleSheet.applyWidth(
                                    {
                                      alignItems: 'center',
                                      flexDirection: 'row',
                                      margin: 5,
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
                                          { margin: 5 }
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
                                          { margin: 5 }
                                        ),
                                        dimensions.width
                                      )}
                                    >
                                      {listData?.vehicle_type?.split(' ')[0]}
                                    </Text>
                                  </View>
                                  {/* Load Weight View */}
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
                                    {/* Load Weight */}
                                    <Text
                                      accessible={true}
                                      allowFontScaling={true}
                                      style={StyleSheet.applyWidth(
                                        StyleSheet.compose(
                                          GlobalStyles.TextStyles(theme)[
                                            'Text 2'
                                          ],
                                          { margin: 5 }
                                        ),
                                        dimensions.width
                                      )}
                                    >
                                      {listData?.load_weight}
                                    </Text>
                                  </View>
                                  {/* No of Trucks View */}
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
                                    {/* No of Trucks */}
                                    <Text
                                      accessible={true}
                                      allowFontScaling={true}
                                      style={StyleSheet.applyWidth(
                                        StyleSheet.compose(
                                          GlobalStyles.TextStyles(theme)[
                                            'Text 2'
                                          ],
                                          { margin: 5 }
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

                              <View>
                                {/* Payment Status */}
                                <Text
                                  accessible={true}
                                  allowFontScaling={true}
                                  style={StyleSheet.applyWidth(
                                    StyleSheet.compose(
                                      GlobalStyles.TextStyles(theme)['Text 2'],
                                      {
                                        color: theme.colors['Primary'],
                                        margin: 20,
                                        textAlign: 'right',
                                      }
                                    ),
                                    dimensions.width
                                  )}
                                >
                                  {'Payment Status - '}
                                  {listData?.paid_status}
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
          </CotruckApi.FetchBookingList$PAID$POST>
        </TabViewItem>
      </TabView>
    </ScreenContainer>
  );
};

export default withTheme(PaidScreen);
