import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as CotruckApi from '../apis/CotruckApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import {
  Icon,
  IconButton,
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
            contentContainerStyle={StyleSheet.applyWidth(
              { flex: 1, paddingBottom: 20 },
              dimensions.width
            )}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
          >
            <CotruckApi.FetchNewLeadsPOST booking_type={'Import'} id={125}>
              {({ loading, error, data, refetchNewLeads }) => {
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
                    keyExtractor={listData => listData?.book_truck_id}
                    listKey={'Or2R6bzt'}
                    numColumns={1}
                    onEndReachedThreshold={0.5}
                    renderItem={({ item, index }) => {
                      const listData = item;
                      return (
                        <View>
                          <Touchable
                            onPress={() => {
                              try {
                                if (listData?.owner_status === 'ACCEPTED') {
                                  navigation.navigate(
                                    'ImportNewTripAcceptedScreen',
                                    { book_truck_id: listData?.book_truck_id }
                                  );
                                }
                                if (listData?.owner_status === 'PENDING') {
                                  navigation.navigate(
                                    'ImportNewTripPendingScreen',
                                    { book_truck_id: listData?.book_truck_id }
                                  );
                                }
                                if (listData?.owner_status === 'CANCELLED') {
                                  navigation.navigate(
                                    'NewTripCancelledScreen',
                                    { book_truck_id: listData?.book_truck_id }
                                  );
                                }
                              } catch (err) {
                                console.error(err);
                              }
                            }}
                          >
                            {/* Card */}
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
                                {/* Pick Up View */}
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
                                  {/* Pick Up */}
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
                                <View>
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
                                <View>
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
                                    margin: 5,
                                  },
                                  dimensions.width
                                )}
                              >
                                {/* Date View */}
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
                                  {/* Date */}
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
                                    {listData?.pickup_date?.split(' ')[0]}
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
                                {/* No Of Truck */}
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
                                  {/* No Of Truck */}
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
                                    {'Truck - '}
                                    {listData?.no_of_truck}
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
                                  {/* Weight */}
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
                                  {/* Owner Book Status */}
                                  <Text
                                    accessible={true}
                                    allowFontScaling={true}
                                    style={StyleSheet.applyWidth(
                                      GlobalStyles.TextStyles(theme)['Text 2'],
                                      dimensions.width
                                    )}
                                  >
                                    {'Owner Book Status - '}
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
                                                theme.colors['CoTruckPending'],
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
                        </View>
                      );
                    }}
                    showsHorizontalScrollIndicator={true}
                    showsVerticalScrollIndicator={true}
                  />
                );
              }}
            </CotruckApi.FetchNewLeadsPOST>
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
            contentContainerStyle={StyleSheet.applyWidth(
              { flex: 1, paddingBottom: 20 },
              dimensions.width
            )}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
          >
            <CotruckApi.FetchNewLeadsPOST
              booking_type={'Export'}
              handlers={{
                on404: fetchData => {
                  try {
                    setNotFound('There is not Found');
                  } catch (err) {
                    console.error(err);
                  }
                },
              }}
              id={Constants['AUTH_OWNER_ID']}
            >
              {({ loading, error, data, refetchNewLeads }) => {
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
                    keyExtractor={listData => listData?.book_truck_id}
                    listKey={'apFzU50P'}
                    numColumns={1}
                    onEndReachedThreshold={0.5}
                    renderItem={({ item, index }) => {
                      const listData = item;
                      return (
                        <View>
                          <Touchable
                            onPress={() => {
                              try {
                                if (listData?.owner_status === 'ACCEPTED') {
                                  navigation.navigate(
                                    'ExportNewTripAcceptedScreen',
                                    { book_truck_id: listData?.book_truck_id }
                                  );
                                }
                                if (listData?.owner_status === 'PENDING') {
                                  navigation.navigate(
                                    'ExportNewTripPendingScreen',
                                    { booking_id: listData?.book_truck_id }
                                  );
                                }
                                if (listData?.owner_status === 'CANCELLED') {
                                  navigation.navigate(
                                    'NewTripCancelledScreen',
                                    { book_truck_id: listData?.book_truck_id }
                                  );
                                }
                              } catch (err) {
                                console.error(err);
                              }
                            }}
                          >
                            {/* Card */}
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
                                {/* Icon View */}
                                <View>
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
                                <View>
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
                                {/* Date View */}
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
                                  {/* Date */}
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
                                    {listData?.pickup_date?.split(' ')[0]}
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
                                {/* No Of Truck */}
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
                                  {/* No Of Truck */}
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
                                    {'Truck - '}
                                    {listData?.no_of_truck}
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
                                  {/* Weight */}
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
                                  {/* Owner Book Status */}
                                  <Text
                                    accessible={true}
                                    allowFontScaling={true}
                                    style={StyleSheet.applyWidth(
                                      GlobalStyles.TextStyles(theme)['Text 2'],
                                      dimensions.width
                                    )}
                                  >
                                    {'Owner Book Status - '}
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
                                                theme.colors['CoTruckPending'],
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
                        </View>
                      );
                    }}
                    showsHorizontalScrollIndicator={true}
                    showsVerticalScrollIndicator={true}
                  />
                );
              }}
            </CotruckApi.FetchNewLeadsPOST>
          </ScrollView>
        </TabViewItem>
      </TabView>
    </ScreenContainer>
  );
};

export default withTheme(HomeScreen);
