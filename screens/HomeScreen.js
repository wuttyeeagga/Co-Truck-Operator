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

const HomeScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  return (
    <ScreenContainer
      hasBottomSafeArea={true}
      hasSafeArea={true}
      hasTopSafeArea={true}
      scrollable={false}
      style={StyleSheet.applyWidth(
        { backgroundColor: theme.colors['Surface'] },
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
            margin: 20,
            marginBottom: 0,
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
            {/* Title */}
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
        {/* Import */}
        <TabViewItem
          style={StyleSheet.applyWidth(
            GlobalStyles.TabViewItemStyles(theme)['Tab View Item'],
            dimensions.width
          )}
          title={'Import'}
        >
          <ScrollView
            bounces={true}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}
            contentContainerStyle={StyleSheet.applyWidth(
              { paddingBottom: 20 },
              dimensions.width
            )}
          >
            {/* Import New Leads */}
            <CotruckApi.FetchNewLeads$Pending$POST
              booking_type={'Import'}
              id={Constants['AUTH_OWNER_ID']}
              owner_status={'PENDING'}
            >
              {({ loading, error, data, refetchNewLeads$Pending$ }) => {
                const importNewLeadsData = data?.json;
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
                      {/* Error View */}
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            alignItems: 'center',
                            alignSelf: 'center',
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
                              { flex: 1, fontSize: 16 }
                            ),
                            dimensions.width
                          )}
                        >
                          {importNewLeadsData?.message}
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
                    data={importNewLeadsData?.data}
                    keyExtractor={(listData, index) => listData?.book_truck_id}
                    listKey={'Or2R6bzt'}
                    numColumns={1}
                    onEndReachedThreshold={0.5}
                    renderItem={({ item, index }) => {
                      const listData = item;
                      return (
                        <>
                          {/* Import Pickup Date */}
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
                                {
                                  marginBottom: 10,
                                  marginLeft: 20,
                                  marginRight: 20,
                                  marginTop: 10,
                                }
                              ),
                              dimensions.width
                            )}
                          >
                            {/* OnPress */}
                            <Touchable
                              onPress={() => {
                                try {
                                  navigation.navigate(
                                    'ImportNewTripPendingScreen',
                                    { book_truck_id: listData?.book_truck_id }
                                  );
                                } catch (err) {
                                  console.error(err);
                                }
                              }}
                            >
                              {/* Card */}
                              <View
                                style={StyleSheet.applyWidth(
                                  {
                                    backgroundColor: theme.colors['Surface'],
                                    borderColor: theme.colors['Light'],
                                    borderRadius: 12,
                                    borderWidth: 1,
                                    margin: 10,
                                  },
                                  dimensions.width
                                )}
                              >
                                {/* Locations Row */}
                                <View
                                  style={StyleSheet.applyWidth(
                                    {
                                      alignItems: 'center',
                                      flexDirection: 'row',
                                      margin: 5,
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
                                    {/* Pickup  */}
                                    <Text
                                      accessible={true}
                                      allowFontScaling={true}
                                      style={StyleSheet.applyWidth(
                                        StyleSheet.compose(
                                          GlobalStyles.TextStyles(theme)[
                                            'Text 2'
                                          ],
                                          {
                                            color: theme.colors['CoTruckBlack'],
                                            fontSize: 12,
                                            margin: 5,
                                            textAlign: 'center',
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
                                      { alignSelf: 'center' },
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
                                            color: theme.colors['CoTruckBlack'],
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
                                      { alignSelf: 'center' },
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
                                            color: theme.colors['CoTruckBlack'],
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
                                      margin: 5,
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
                                            fontSize: 12,
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
                                            fontSize: 12,
                                            margin: 5,
                                            textAlign: 'center',
                                          }
                                        ),
                                        dimensions.width
                                      )}
                                    >
                                      {listData?.vehicle_type?.split(' ')[0]}
                                    </Text>
                                  </View>
                                  {/* No Of Trucks View */}
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
                                    {/* No Of Trucks */}
                                    <Text
                                      accessible={true}
                                      allowFontScaling={true}
                                      style={StyleSheet.applyWidth(
                                        StyleSheet.compose(
                                          GlobalStyles.TextStyles(theme)[
                                            'Text 2'
                                          ],
                                          {
                                            fontSize: 12,
                                            margin: 5,
                                            textAlign: 'center',
                                          }
                                        ),
                                        dimensions.width
                                      )}
                                    >
                                      {'Truck - '}
                                      {listData?.no_of_truck}
                                    </Text>
                                  </View>
                                  {/* Load Weight View */}
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
                                    {/* Load Weight */}
                                    <Text
                                      accessible={true}
                                      allowFontScaling={true}
                                      style={StyleSheet.applyWidth(
                                        StyleSheet.compose(
                                          GlobalStyles.TextStyles(theme)[
                                            'Text 2'
                                          ],
                                          {
                                            fontSize: 12,
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
                                </View>
                                {/* Status View */}
                                <View
                                  style={StyleSheet.applyWidth(
                                    { margin: 5 },
                                    dimensions.width
                                  )}
                                >
                                  {/* Row Wrapper */}
                                  <View
                                    style={StyleSheet.applyWidth(
                                      {
                                        alignItems: 'center',
                                        borderRadius: 8,
                                        flexDirection: 'row',
                                        justifyContent: 'flex-end',
                                        margin: 10,
                                      },
                                      dimensions.width
                                    )}
                                  >
                                    {/* Booking Status */}
                                    <Text
                                      accessible={true}
                                      allowFontScaling={true}
                                      style={StyleSheet.applyWidth(
                                        GlobalStyles.TextStyles(theme)[
                                          'Text 2'
                                        ],
                                        dimensions.width
                                      )}
                                    >
                                      {'Booking Status - '}
                                    </Text>
                                    {/* Accepted */}
                                    <>
                                      {!(
                                        listData?.owner_status === 'ACCEPTED'
                                      ) ? null : (
                                        <Text
                                          accessible={true}
                                          allowFontScaling={true}
                                          style={StyleSheet.applyWidth(
                                            StyleSheet.compose(
                                              GlobalStyles.TextStyles(theme)[
                                                'Text 2'
                                              ],
                                              { color: theme.colors['Success'] }
                                            ),
                                            dimensions.width
                                          )}
                                        >
                                          {listData?.owner_status}
                                        </Text>
                                      )}
                                    </>
                                    {/* Pending */}
                                    <>
                                      {!(
                                        listData?.owner_status === 'PENDING'
                                      ) ? null : (
                                        <Text
                                          accessible={true}
                                          allowFontScaling={true}
                                          style={StyleSheet.applyWidth(
                                            StyleSheet.compose(
                                              GlobalStyles.TextStyles(theme)[
                                                'Text 2'
                                              ],
                                              {
                                                color:
                                                  theme.colors[
                                                    'CoTruckPending'
                                                  ],
                                              }
                                            ),
                                            dimensions.width
                                          )}
                                        >
                                          {listData?.owner_status}
                                        </Text>
                                      )}
                                    </>
                                    {/* Cancelled */}
                                    <>
                                      {!(
                                        listData?.owner_status === 'CANCELLED'
                                      ) ? null : (
                                        <Text
                                          accessible={true}
                                          allowFontScaling={true}
                                          style={StyleSheet.applyWidth(
                                            StyleSheet.compose(
                                              GlobalStyles.TextStyles(theme)[
                                                'Text 2'
                                              ],
                                              { color: theme.colors['Error'] }
                                            ),
                                            dimensions.width
                                          )}
                                        >
                                          {listData?.owner_status}
                                        </Text>
                                      )}
                                    </>
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
            </CotruckApi.FetchNewLeads$Pending$POST>
          </ScrollView>
        </TabViewItem>
        {/* Export */}
        <TabViewItem
          style={StyleSheet.applyWidth(
            GlobalStyles.TabViewItemStyles(theme)['Tab View Item'],
            dimensions.width
          )}
          title={'Export'}
        >
          <ScrollView
            bounces={true}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}
            contentContainerStyle={StyleSheet.applyWidth(
              { paddingBottom: 20 },
              dimensions.width
            )}
          >
            {/* Export New Leads */}
            <CotruckApi.FetchNewLeads$Pending$POST
              booking_type={'Export'}
              id={Constants['AUTH_OWNER_ID']}
              owner_status={'PENDING'}
            >
              {({ loading, error, data, refetchNewLeads$Pending$ }) => {
                const exportNewLeadsData = data?.json;
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
                      {/* Error View */}
                      <View
                        style={StyleSheet.applyWidth(
                          { alignSelf: 'center', flex: 1 },
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
                              { flex: 1, fontSize: 16 }
                            ),
                            dimensions.width
                          )}
                        >
                          {exportNewLeadsData?.message}
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
                    data={exportNewLeadsData?.data}
                    keyExtractor={(listData, index) => listData?.book_truck_id}
                    listKey={'apFzU50P'}
                    numColumns={1}
                    onEndReachedThreshold={0.5}
                    renderItem={({ item, index }) => {
                      const listData = item;
                      return (
                        <>
                          {/* Export Pickup Date */}
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
                                {
                                  marginBottom: 10,
                                  marginLeft: 20,
                                  marginRight: 20,
                                  marginTop: 10,
                                }
                              ),
                              dimensions.width
                            )}
                          >
                            {/* OnPress */}
                            <Touchable
                              onPress={() => {
                                try {
                                  navigation.navigate(
                                    'ExportNewTripPendingScreen',
                                    { book_truck_id: listData?.book_truck_id }
                                  );
                                } catch (err) {
                                  console.error(err);
                                }
                              }}
                            >
                              {/* Card */}
                              <View
                                style={StyleSheet.applyWidth(
                                  {
                                    backgroundColor: theme.colors['Surface'],
                                    borderColor: theme.colors['Light'],
                                    borderRadius: 12,
                                    borderWidth: 1,
                                    margin: 10,
                                  },
                                  dimensions.width
                                )}
                              >
                                {/* Locations Row */}
                                <View
                                  style={StyleSheet.applyWidth(
                                    {
                                      alignItems: 'center',
                                      flexDirection: 'row',
                                      margin: 5,
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
                                          {
                                            color: theme.colors['CoTruckBlack'],
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
                                  {/* Icon View */}
                                  <View
                                    style={StyleSheet.applyWidth(
                                      { alignSelf: 'center' },
                                      dimensions.width
                                    )}
                                  >
                                    <Icon
                                      color={theme.colors['CoTruckGrey']}
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
                                    {/* Pickup  */}
                                    <Text
                                      accessible={true}
                                      allowFontScaling={true}
                                      style={StyleSheet.applyWidth(
                                        StyleSheet.compose(
                                          GlobalStyles.TextStyles(theme)[
                                            'Text 2'
                                          ],
                                          {
                                            color: theme.colors['CoTruckBlack'],
                                            fontSize: 12,
                                            margin: 5,
                                            textAlign: 'center',
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
                                      { alignSelf: 'center' },
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
                                            color: theme.colors['CoTruckBlack'],
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
                                </View>
                                {/* Info Row */}
                                <View
                                  style={StyleSheet.applyWidth(
                                    {
                                      alignItems: 'center',
                                      flexDirection: 'row',
                                      margin: 5,
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
                                            fontSize: 12,
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
                                            fontSize: 12,
                                            margin: 5,
                                            textAlign: 'center',
                                          }
                                        ),
                                        dimensions.width
                                      )}
                                    >
                                      {listData?.vehicle_type?.split(' ')[0]}
                                    </Text>
                                  </View>
                                  {/* No Of Trucks View */}
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
                                    {/* No Of Trucks */}
                                    <Text
                                      accessible={true}
                                      allowFontScaling={true}
                                      style={StyleSheet.applyWidth(
                                        StyleSheet.compose(
                                          GlobalStyles.TextStyles(theme)[
                                            'Text 2'
                                          ],
                                          {
                                            fontSize: 12,
                                            margin: 5,
                                            textAlign: 'center',
                                          }
                                        ),
                                        dimensions.width
                                      )}
                                    >
                                      {'Truck - '}
                                      {listData?.no_of_truck}
                                    </Text>
                                  </View>
                                  {/* Load Weight View */}
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
                                    {/* Load Weight */}
                                    <Text
                                      accessible={true}
                                      allowFontScaling={true}
                                      style={StyleSheet.applyWidth(
                                        StyleSheet.compose(
                                          GlobalStyles.TextStyles(theme)[
                                            'Text 2'
                                          ],
                                          {
                                            fontSize: 12,
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
                                </View>

                                <View
                                  style={StyleSheet.applyWidth(
                                    { margin: 5 },
                                    dimensions.width
                                  )}
                                >
                                  <View
                                    style={StyleSheet.applyWidth(
                                      {
                                        alignItems: 'center',
                                        borderRadius: 8,
                                        flexDirection: 'row',
                                        justifyContent: 'flex-end',
                                        margin: 10,
                                      },
                                      dimensions.width
                                    )}
                                  >
                                    {/* Booking Status */}
                                    <Text
                                      accessible={true}
                                      allowFontScaling={true}
                                      style={StyleSheet.applyWidth(
                                        GlobalStyles.TextStyles(theme)[
                                          'Text 2'
                                        ],
                                        dimensions.width
                                      )}
                                    >
                                      {'Booking Status - '}
                                    </Text>
                                    {/* Accepted */}
                                    <>
                                      {!(
                                        listData?.owner_status === 'ACCEPTED'
                                      ) ? null : (
                                        <Text
                                          accessible={true}
                                          allowFontScaling={true}
                                          style={StyleSheet.applyWidth(
                                            StyleSheet.compose(
                                              GlobalStyles.TextStyles(theme)[
                                                'Text 2'
                                              ],
                                              { color: theme.colors['Success'] }
                                            ),
                                            dimensions.width
                                          )}
                                        >
                                          {listData?.owner_status}
                                        </Text>
                                      )}
                                    </>
                                    {/* Pending */}
                                    <>
                                      {!(
                                        listData?.owner_status === 'PENDING'
                                      ) ? null : (
                                        <Text
                                          accessible={true}
                                          allowFontScaling={true}
                                          style={StyleSheet.applyWidth(
                                            StyleSheet.compose(
                                              GlobalStyles.TextStyles(theme)[
                                                'Text 2'
                                              ],
                                              {
                                                color:
                                                  theme.colors[
                                                    'CoTruckPending'
                                                  ],
                                              }
                                            ),
                                            dimensions.width
                                          )}
                                        >
                                          {listData?.owner_status}
                                        </Text>
                                      )}
                                    </>
                                    {/* Cancelled */}
                                    <>
                                      {!(
                                        listData?.owner_status === 'CANCELLED'
                                      ) ? null : (
                                        <Text
                                          accessible={true}
                                          allowFontScaling={true}
                                          style={StyleSheet.applyWidth(
                                            StyleSheet.compose(
                                              GlobalStyles.TextStyles(theme)[
                                                'Text 2'
                                              ],
                                              { color: theme.colors['Error'] }
                                            ),
                                            dimensions.width
                                          )}
                                        >
                                          {listData?.owner_status}
                                        </Text>
                                      )}
                                    </>
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
            </CotruckApi.FetchNewLeads$Pending$POST>
          </ScrollView>
        </TabViewItem>
      </TabView>
    </ScreenContainer>
  );
};

export default withTheme(HomeScreen);
